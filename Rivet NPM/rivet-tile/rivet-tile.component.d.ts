import { EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import * as ɵngcc0 from '@angular/core';
export declare type TileState = 'Disabled' | 'Pending' | 'Selected' | 'Unselected' | 'ReadOnly';
export declare class RivetTileComponent {
    config: {
        editText: any;
        cancelBtnText: string;
        deleteBtnText: string;
        deleteText: string;
    };
    control: FormControl;
    state: TileState;
    tileSelect: EventEmitter<any>;
    tileEdit: EventEmitter<any>;
    tileDelete: EventEmitter<any>;
    deleting: boolean;
    editTile(): void;
    selectTile(): void;
    deleteTile(): void;
    confirmDelete(): void;
    cancelDelete(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<RivetTileComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<RivetTileComponent, "rvt-tile", never, { "config": "config"; "state": "state"; "control": "control"; }, { "tileSelect": "tileSelect"; "tileEdit": "tileEdit"; "tileDelete": "tileDelete"; }, never, ["*"]>;
}

//# sourceMappingURL=rivet-tile.component.d.ts.map