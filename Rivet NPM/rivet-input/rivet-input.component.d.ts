import { OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { RulesetService } from '../rivet-services/ruleset.service';
import * as ɵngcc0 from '@angular/core';
export declare class RivetInputComponent implements OnInit {
    private rulesetService;
    constructor(rulesetService: RulesetService);
    get valid(): boolean;
    get invalid(): boolean;
    get untouched(): boolean;
    get touched(): boolean;
    get pristine(): boolean;
    get dirty(): boolean;
    get vacant(): boolean;
    get nonvacant(): boolean;
    get pending(): boolean;
    control: FormControl;
    get errors(): false | import("@angular/forms").ValidationErrors;
    validators: any[];
    asyncValidators: any[];
    ruleset: any;
    name: any;
    autocomplete: any;
    autofocus: any;
    disabled: any;
    form: any;
    list: any;
    readonly: any;
    required: any;
    tabindex: any;
    type: any;
    value: any;
    icon: any;
    field: any;
    onclick(self: any): void;
    ngOnInit(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<RivetInputComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<RivetInputComponent, "advicent-rivet-input", never, { "validators": "validators"; "asyncValidators": "asyncValidators"; "ruleset": "ruleset"; "name": "name"; "autocomplete": "autocomplete"; "autofocus": "autofocus"; "disabled": "disabled"; "form": "form"; "list": "list"; "readonly": "readonly"; "required": "required"; "tabindex": "tabindex"; "type": "type"; "value": "value"; "icon": "icon"; }, {}, never, ["*"]>;
}

//# sourceMappingURL=rivet-input.component.d.ts.map