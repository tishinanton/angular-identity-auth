export class CustomSignInResponseModel {
    '.expires': string;
    '.issued': string;
    access_token: string;
    applicationUsersAction: string;
    expires_in: number;
    exportActionInvoicseAction: string;
    id: string;
    importActionInvoicseAction: string;
    reportsAction: string;
    roles: string;
    token_type: string;
    userName: string;

    constructor(...parts: Partial<CustomSignInResponseModel>[]) {
        Object.assign(this, ...parts);
    }
}
