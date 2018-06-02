import { Component } from '@angular/core';
import { CustomSignInResponseModel } from './models';
import { SignInRequestModel, Auth } from 'angular-identity-auth';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    signInModel = new SignInRequestModel({
        password: 'Qwerty123_',
        userName: 'admin@airastana.com'
    });

    constructor(private auth: Auth<CustomSignInResponseModel>) {
        console.log(this.auth.getToken());
    }

    async signIn() {
        console.log(await this.auth.signIn(this.signInModel, CustomSignInResponseModel));
    }
}
