import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { AIA_TOKEN_ENDPOINT, AIA_SUCCESS_REDIRECT_URL, AIA_SIGN_OUT_REDIRECT_URL, AIA_SIGN_IN_URL, AIA_CONFIG } from './tokens';
import { AuthConfig, SignInRequestModel, SignInResponseModel, IModelConstructor } from './models';
import { STORAGE_KEY } from './constants';



@Injectable({
    providedIn: 'root'
})
export class Auth<TResponseModel = SignInResponseModel> {

    private token: TResponseModel;

    constructor(
        private http: HttpClient,
        @Inject(AIA_CONFIG) private config: AuthConfig
    ) {
        if (config.saveTokenUrl) {
            const token = localStorage.getItem(STORAGE_KEY);
            if (token) {
                try {
                    this.token = new this.config.tokenConstructor(JSON.parse(token));
                } catch (ex) {
                    this.token = null;
                }
            } else {
                this.token = null;
            }
        }
    }

    public async signIn(model: SignInRequestModel): Promise<SignInResponseModel>;
    public async signIn<TRequestModel>(model: TRequestModel): Promise<SignInResponseModel>;
    public async signIn<TRequestModel>(model: TRequestModel, constructor: IModelConstructor<TResponseModel>): Promise<TResponseModel>;
    public async signIn<TRequestModel = SignInRequestModel>(model: TRequestModel, constructor: IModelConstructor<TResponseModel> = null) {
        let res: TResponseModel = null;
        if (this.config.tokenAsUrlEncoded) {
            const params = new HttpParams({ fromObject: model as {} });
            res = await this.http.post<TResponseModel>(`${this.config.tokenEndpoint}`, params).toPromise();
        } else {
            res = await this.http.post<TResponseModel>(`${this.config.tokenEndpoint}`, model).toPromise();
        }
        let responseModel: any = null;
        if (constructor != null) {
            responseModel = new constructor(res);
        } else {
            responseModel = new SignInResponseModel(res);
        }
        if (this.config.saveTokenUrl) {
            this.token = responseModel as any;
            localStorage.setItem(STORAGE_KEY, JSON.stringify(this.token));
        }
        return responseModel;
    }

    public signOut() {
        this.token = null;
        localStorage.removeItem(STORAGE_KEY);
    }

    get isAuthenticated() {
        return this.token != null;
    }

    public getToken() {
        return this.token;
    }
}
