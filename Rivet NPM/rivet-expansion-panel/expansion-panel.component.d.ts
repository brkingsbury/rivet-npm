import { AfterViewInit, ChangeDetectorRef, ElementRef, EventEmitter, NgZone, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
export declare class RivetExpansionPanelComponent implements OnChanges, OnInit, OnDestroy, AfterViewInit {
    private element;
    private cd;
    private zone;
    preventCollapse: boolean;
    hideExpansionContent: boolean;
    panelExpanded: boolean;
    showCloseButton?: boolean;
    overlayDeleteBtnText?: string;
    overlayCancelBtnText?: string;
    addButtonCallback?: EventEmitter<any>;
    deleteButtonCallback?: EventEmitter<any>;
    defaultExpansionHeight: number;
    isDeleting: boolean;
    panelHeight: number;
    showAddButton: boolean;
    showDeleteButton: boolean;
    private onChanges;
    private unsubscribe;
    private bodyChanges;
    private headChanges;
    constructor(element: ElementRef, cd: ChangeDetectorRef, zone: NgZone);
    ngOnDestroy(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngOnInit(): void;
    ngAfterViewInit(): void;
    onResize(event: any): void;
    expandPanel(expanded: any): void;
    setExpandedState(expanded: any, event: any): void;
    delete(): void;
    cancelDelete(): void;
    confirmDelete(): void;
    addButtonClicked(): void;
    private expandOnChange;
    private resizePanel;
    private initializeHeight;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<RivetExpansionPanelComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<RivetExpansionPanelComponent, "advicent-rivet-expansion-panel", never, { "preventCollapse": "preventCollapse"; "hideExpansionContent": "hideExpansionContent"; "panelExpanded": "panelExpanded"; "overlayDeleteBtnText": "overlayDeleteBtnText"; "overlayCancelBtnText": "overlayCancelBtnText"; "showCloseButton": "showCloseButton"; }, { "addButtonCallback": "addButtonCallback"; "deleteButtonCallback": "deleteButtonCallback"; }, never, ["[rivet-delete-overlay-content]", "[header-content]", "[header-button-content]", "[expansion-content]"]>;
}

//# sourceMappingURL=expansion-panel.component.d.ts.map