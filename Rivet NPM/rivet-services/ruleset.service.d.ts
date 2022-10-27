import { AuthService } from './unique-name-validator';
import * as ɵngcc0 from '@angular/core';
export declare class RulesetService {
    private auth;
    constructor(auth: AuthService);
    getSynchronousValidators(ruleset: any): import("@angular/forms").ValidatorFn[];
    getAsynchronousValidators(ruleset: any): (input: import("@angular/forms").FormControl) => import("rxjs").Observable<{
        loginExist: boolean;
    }>;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<RulesetService, never>;
}

//# sourceMappingURL=ruleset.service.d.ts.map