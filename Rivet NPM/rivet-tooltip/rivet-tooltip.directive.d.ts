import { AfterViewInit, ElementRef, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
export declare class RvtTooltipDirective implements OnChanges, OnInit, OnDestroy, AfterViewInit {
    rvtTooltip: string;
    rvtTooltipClass: string;
    rvtManualTooltipShow?: boolean;
    rvtTooltipAbsolutePos?: boolean;
    rvtTooltipDelay?: number;
    private tooltipEl;
    private anchorEl;
    private hiddenOffset;
    private tooltipTimeout;
    constructor(el: ElementRef);
    getTooltipPosition: () => any;
    showTooltip: () => void;
    refreshTooltipPosition: () => void;
    hideTooltip: () => void;
    onMouseOver(): void;
    onMouseOut(): void;
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<RvtTooltipDirective, never>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<RvtTooltipDirective, "[rvtTooltip]", never, { "rvtTooltip": "rvtTooltip"; "rvtTooltipClass": "rvtTooltipClass"; "rvtManualTooltipShow": "rvtManualTooltipShow"; "rvtTooltipAbsolutePos": "rvtTooltipAbsolutePos"; "rvtTooltipDelay": "rvtTooltipDelay"; }, {}, never>;
}

//# sourceMappingURL=rivet-tooltip.directive.d.ts.map