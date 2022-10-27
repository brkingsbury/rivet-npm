import { EventEmitter, OnInit, OnChanges } from '@angular/core';
import { RivetColorFunctionsService } from '../rivet-services/color-functions.service';
import * as ɵngcc0 from '@angular/core';
export declare class RivetColorPickerComponent implements OnInit, OnChanges {
    rvtColorService: RivetColorFunctionsService;
    colorValue: any;
    colorValueChange: EventEmitter<any>;
    pickerContrast: boolean;
    constructor(rvtColorService: RivetColorFunctionsService);
    emitEvent(): void;
    setPickerContrast(): void;
    ngOnInit(): void;
    ngOnChanges(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<RivetColorPickerComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<RivetColorPickerComponent, "advicent-rivet-color-picker", never, { "colorValue": "colorValue"; }, { "colorValueChange": "colorValueChange"; }, never, never>;
}

//# sourceMappingURL=rivet-color-picker.component.d.ts.map