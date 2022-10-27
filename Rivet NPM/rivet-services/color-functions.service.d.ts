import * as ɵngcc0 from '@angular/core';
export declare class RivetColorFunctionsService {
    constructor();
    getLuma(color: string): number;
    generatePrimaryVariants(hexColor: string): {
        light: string;
        dark: string;
    };
    private hexToHSLObj;
    private hexToRGBObj;
    private HSLObjToHex;
    private changeLightness;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<RivetColorFunctionsService, never>;
}

//# sourceMappingURL=color-functions.service.d.ts.map