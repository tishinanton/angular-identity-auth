import { InjectionToken } from '@angular/core';

export const AIA_TOKEN_ENDPOINT = new InjectionToken('angular-identity-auth.token-endpoint-url');
export const AIA_SUCCESS_REDIRECT_URL = new InjectionToken('angular-identity-auth.success-redirect-url');
export const AIA_FAIL_REDIRECT_URL = new InjectionToken('angular-identity-auth.fail-redirect-url');
export const AIA_SAVE_TOKEN_URL = new InjectionToken('angular-identity-auth.store-token-url');
export const AIA_SIGN_IN_URL = new InjectionToken('angular-identity-auth.sign-in-url');
export const AIA_SIGN_OUT_REDIRECT_URL = new InjectionToken('angular-identity-auth.sing-out-redirect-url');
export const AIA_CONFIG = new InjectionToken('angular-identity-auth.config');
export const AIA_TOKEN_AS_FORM_DATA = new InjectionToken('angular-identity-auth.token-as-form-data');
export const AIA_TOKEN_CONSTRUCTOR = new InjectionToken('angular-identity-auth.token-constructor');
