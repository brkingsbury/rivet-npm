import { FormControl } from '@angular/forms';
import * as ɵngcc0 from '@angular/core';
export declare class AuthService {
    constructor();
    checkLogin(login: string): import("rxjs").Observable<{
        isLoginAvailable: boolean;
    }>;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<AuthService, never>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<AuthService>;
}
export declare const LoginAsyncValidator: (authService: AuthService, time?: number) => (input: FormControl) => import("rxjs").Observable<{
    loginExist: boolean;
}>;

//# sourceMappingURL=unique-name-validator.d.ts.map