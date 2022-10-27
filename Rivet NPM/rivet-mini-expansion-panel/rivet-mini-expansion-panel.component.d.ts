import { EventEmitter } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
declare type ExpansionArrowDirection = 'up' | 'down' | 'left' | 'right';
export declare class RivetMiniExpansionPanelComponent {
    arrowRight: boolean;
    openedArrowDirection: ExpansionArrowDirection;
    closedArrowDirection: ExpansionArrowDirection;
    set panelOpen(panelOpen: boolean);
    panelOpenEvent: EventEmitter<void>;
    private _panelOpen;
    get panelOpen(): boolean;
    toggleMiniExpansion: () => void;
    closeExpansion: () => void;
    openExpansion: () => void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<RivetMiniExpansionPanelComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<RivetMiniExpansionPanelComponent, "advicent-rivet-mini-expansion-panel", never, { "openedArrowDirection": "openedArrowDirection"; "closedArrowDirection": "closedArrowDirection"; "panelOpen": "panelOpen"; "arrowRight": "arrowRight"; }, { "panelOpenEvent": "panelOpenEvent"; }, never, ["[rivet-mini-expansion-head]", "[rivet-mini-expansion-body]"]>;
}
export {};

//# sourceMappingURL=rivet-mini-expansion-panel.component.d.ts.map