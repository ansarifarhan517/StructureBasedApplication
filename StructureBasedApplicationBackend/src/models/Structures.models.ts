import mongoose, { Document, Schema, Model } from 'mongoose';

// Define the IDynamicStructure interface
interface IDynamicStructure {
    clientName: string;
    subClientName: string;
    subClientId: string;
    pageName: string;
    sectionName: string;
    structure: {
        defaultValue: { label: number | string; value: number | string; id: number };
        customValidationErrorMessage: string;
        customValidationError: boolean;
        value?: string;
        dateFormat?: string;
        showTime?: boolean;
        id: string;
        label: string;
        fieldName: string;
        tooltipLabelKey?: string;
        isError: boolean;
        align: "center" | "left" | "right" | undefined;
        fieldType: 'text' | string;
        permission: boolean;
        required: boolean;
        childLength?: number;
        rowSpan?: number;
        colSpan?: number;
        childNodes?: Record<string, IDynamicStructure['structure']>;
        validation?: Record<string, any>;
        errorType: string;
        labelKey?: string;
        mapViewFieldProperties?: Record<string, any>;
        excelDropDownHidden?: boolean;
        searchable?: boolean;
        editable?: boolean;
        sortable?: boolean;
        infoFlag?: boolean;
        customField?: boolean;
        allowed?: boolean;
        dropdownValues?: unknown;
        customFieldReferenceId?: string;
        options: string[];
        searchParamValue?: string;
        lookupType?: string;
        countryFieldName?: string;
        clientBranchName?: string;
        serviceAreaProfileName?: string;
        rateChartName?: string;
        BASECOUNTRY?: string;
        rankFieldName?: Record<string, any>;
        multipleFiles?: boolean;
        decimalPlaces?: number;
        tooltipLabel?: string;
        handleBlurEvent?: any;
        icon?: string;
        message?: string;
        iconVariant?: string;
        iconSize?: string;
        dropdownOptions?: object[];
        operationsTimingId?: number;
        branchManagerId?: number;
        shiftTimingId?: number;
        disabled?: boolean;
        descLabel?: string;
        minDate?: string;
        readOnly?: boolean;
        allowDecimal?: boolean;
        removeDecimal?: boolean;
        maxLength?: number;
        infoTool?: Array<any>;
        messagePlacement?: 'center' | 'start' | 'end';
        placeholder?: string;
        ShiftStartEndTimeVisiblity?: boolean;
        lookUpOptionParam?: any;
        matchParamLookup?: boolean;
        clientBranchId?: string;
        onLoad?: boolean;
        httpMethod?: 'GET' | 'POST';
        httpPostPayload?: any;
        shouldRemoveOnBlur?: boolean;
    };
}

// Define the IDynamicStructureDocument interface extending Mongoose Document
interface IDynamicStructureDocument extends IDynamicStructure, Document {}

// Mongoose Schema for the 'structure' field (nested schema)
const structureFieldSchema = new Schema({
    defaultValue: {
        label: { type: Schema.Types.Mixed, required: true },
        value: { type: Schema.Types.Mixed, required: true },
        id: { type: Number, required: true },
    },
    customValidationErrorMessage: { type: String, required: true },
    customValidationError: { type: Boolean, required: true },
    value: { type: String },
    dateFormat: { type: String },
    showTime: { type: Boolean },
    id: { type: String, required: true },
    label: { type: String, required: true },
    fieldName: { type: String, required: true },
    tooltipLabelKey: { type: String },
    isError: { type: Boolean, required: true },
    align: { type: String, enum: ["center", "left", "right"], required: true },
    fieldType: { type: String, required: true },
    permission: { type: Boolean, required: true },
    required: { type: Boolean, required: true },
    childLength: { type: Number },
    rowSpan: { type: Number },
    colSpan: { type: Number },
    childNodes: { type: Map, of: Schema.Types.Mixed },
    validation: { type: Map, of: Schema.Types.Mixed },
    errorType: { type: String, required: true },
    labelKey: { type: String },
    mapViewFieldProperties: { type: Map, of: Schema.Types.Mixed },
    excelDropDownHidden: { type: Boolean },
    searchable: { type: Boolean },
    editable: { type: Boolean },
    sortable: { type: Boolean },
    infoFlag: { type: Boolean },
    customField: { type: Boolean },
    allowed: { type: Boolean },
    dropdownValues: { type: Schema.Types.Mixed },
    customFieldReferenceId: { type: String },
    options: { type: [String], required: true },
    searchParamValue: { type: String },
    lookupType: { type: String },
    countryFieldName: { type: String },
    clientBranchName: { type: String },
    serviceAreaProfileName: { type: String },
    rateChartName: { type: String },
    BASECOUNTRY: { type: String },
    rankFieldName: { type: Map, of: Schema.Types.Mixed },
    multipleFiles: { type: Boolean },
    decimalPlaces: { type: Number },
    tooltipLabel: { type: String },
    handleBlurEvent: { type: Schema.Types.Mixed },
    icon: { type: String },
    message: { type: String },
    iconVariant: { type: String },
    iconSize: { type: String },
    dropdownOptions: { type: [Object] },
    operationsTimingId: { type: Number },
    branchManagerId: { type: Number },
    shiftTimingId: { type: Number },
    disabled: { type: Boolean },
    descLabel: { type: String },
    minDate: { type: String },
    readOnly: { type: Boolean },
    allowDecimal: { type: Boolean },
    removeDecimal: { type: Boolean },
    maxLength: { type: Number },
    infoTool: { type: [Schema.Types.Mixed] },
    messagePlacement: { type: String, enum: ['center', 'start', 'end'] },
    placeholder: { type: String },
    ShiftStartEndTimeVisiblity: { type: Boolean },
    lookUpOptionParam: { type: Schema.Types.Mixed },
    matchParamLookup: { type: Boolean },
    clientBranchId: { type: String },
    onLoad: { type: Boolean },
    httpMethod: { type: String, enum: ['GET', 'POST'] },
    httpPostPayload: { type: Schema.Types.Mixed },
    shouldRemoveOnBlur: { type: Boolean },
});

// Mongoose Schema for IDynamicStructure
const dynamicStructureSchema = new Schema<IDynamicStructureDocument>({
    clientName: { type: String, required: true },
    subClientName: { type: String, required: true },
    subClientId: { type: String, required: true },
    pageName: { type: String, required: true },
    sectionName: { type: String, required: true },
    structure: structureFieldSchema,
});

// Create the model
const Structure: Model<IDynamicStructureDocument> = mongoose.model<IDynamicStructureDocument>('Structure', dynamicStructureSchema);

export default Structure;
