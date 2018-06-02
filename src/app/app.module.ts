import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UiKitModule } from './ui-kit/ui-kit.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AuthModule, AuthConfig } from 'angular-identity-auth';
import { CustomSignInResponseModel } from './models';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule,
        AuthModule.forRoot(new AuthConfig({
            tokenEndpoint: 'http://isesf.azurewebsites.net/Token',
            tokenConstructor: CustomSignInResponseModel
        })),
        UiKitModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }

