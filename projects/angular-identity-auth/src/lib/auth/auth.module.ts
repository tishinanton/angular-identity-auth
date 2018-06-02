import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AIA_FAIL_REDIRECT_URL, AIA_SIGN_IN_URL, AIA_SIGN_OUT_REDIRECT_URL, AIA_SAVE_TOKEN_URL, AIA_SUCCESS_REDIRECT_URL, AIA_TOKEN_ENDPOINT, AIA_CONFIG, AIA_TOKEN_AS_FORM_DATA, AIA_TOKEN_CONSTRUCTOR } from './tokens';
import { AuthConfig } from './models';


@NgModule({
    imports: [
        CommonModule
    ],
    declarations: []
})
export class AuthModule {
    public static forRoot(config: AuthConfig): ModuleWithProviders {
        return {
            ngModule: AuthRootModule,
            providers: [
                { provide: AIA_FAIL_REDIRECT_URL, useValue: config.failRedirectUrl },
                { provide: AIA_SIGN_IN_URL, useValue: config.signInUrl },
                { provide: AIA_SIGN_OUT_REDIRECT_URL, useValue: config.signOutRedirectUrl },
                { provide: AIA_SAVE_TOKEN_URL, useValue: config.saveTokenUrl },
                { provide: AIA_SUCCESS_REDIRECT_URL, useValue: config.successRedirectUrl },
                { provide: AIA_TOKEN_ENDPOINT, useValue: config.tokenEndpoint },
                { provide: AIA_TOKEN_AS_FORM_DATA, useValue: config.tokenAsUrlEncoded },
                { provide: AIA_TOKEN_CONSTRUCTOR, useValue: config.tokenConstructor },
                { provide: AIA_CONFIG, useValue: config },
            ]
        };
    }
}


@NgModule({
    imports: [
        CommonModule
    ],
    declarations: []
})
export class AuthRootModule {

}
