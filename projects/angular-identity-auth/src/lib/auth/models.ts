export class SignInRequestModel {
    userName: string;
    password: string;
    grant_type: string;

    constructor(...models: Partial<SignInRequestModel>[]) {
        Object.assign(this, { grant_type: 'password' }, ...models);
    }
}

export class SignInResponseModel {
    constructor(...models: Partial<SignInResponseModel>[]) {
        Object.assign(this, ...models);
    }
}

export class AuthConfig {
    static readonly DEFAULT: Partial<AuthConfig> = {
        failRedirectUrl: null,
        saveTokenUrl: true,
        signInUrl: '/user/signin',
        signOutRedirectUrl: '/user/signin',
        successRedirectUrl: '/',
        tokenEndpoint: '/Token',
        tokenAsUrlEncoded: true,
        tokenConstructor: SignInResponseModel
    };

    failRedirectUrl: string;
    signInUrl: string;
    signOutRedirectUrl: string;
    saveTokenUrl: boolean;
    successRedirectUrl: string;
    tokenEndpoint: string;
    tokenAsUrlEncoded: boolean;
    tokenConstructor: IModelConstructor<any>;


    constructor(...models: Partial<AuthConfig>[]) {
        Object.assign(this, AuthConfig.DEFAULT, ...models);
    }
}

export interface IModelConstructor<TModel> {
    new(...parts: Partial<IModelConstructor<TModel>>[]): TModel;
}
