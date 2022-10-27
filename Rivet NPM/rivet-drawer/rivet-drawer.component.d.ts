import { EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
export declare class RivetDrawerComponent implements OnChanges {
    drawerOpen: boolean;
    drawerCloseEvent: EventEmitter<null>;
    apronClickEvent: EventEmitter<null>;
    get panelOpen(): boolean;
    toggleDrawer: () => void;
    closeDrawer: () => void;
    openDrawer: () => void;
    apronClick: () => void;
    ngOnChanges(changes: SimpleChanges): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<RivetDrawerComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<RivetDrawerComponent, "rvt-drawer", never, { "drawerOpen": "drawerOpen"; }, { "drawerCloseEvent": "drawerCloseEvent"; "apronClickEvent": "apronClickEvent"; }, never, ["[rivet-drawer-content]"]>;
}

//# sourceMappingURL=rivet-drawer.component.d.ts.map