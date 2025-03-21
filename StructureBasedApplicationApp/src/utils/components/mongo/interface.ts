import { SizeProp } from '@fortawesome/fontawesome-svg-core'

export type tMongoFieldValidation = 'required' | 'pattern' | 'maxlength' | 'minlength' | 'phoneNumber' | 'phonenumber' | 'min' | 'max' | 'email'

export interface IMongoFieldValidation {
  message?: string
  args?: number | string
}

export interface IMapViewFieldProperties {
  permission?: boolean
  required?: boolean
  childLength?: number
  rowSpan?: number
  colSpan?: number
  excelDropDownHidden?: boolean
  searchable?: boolean
  editable?: boolean
  sortable?: boolean
  infoFlag?: boolean
  customField?: boolean
  allowed?: boolean
}

export interface IMongoColumnOnlyStructure {
  columns: {
    [key: string]: IMongoField
  }
}


export interface IRankFieldOptions {
  id: string
  name: string
}
export interface IInfoTool {
  message?: string
  key?: string
}
export interface IMongoField {
  defaultValue: { label: number | string; value: number | string; id: number }
  customValidationErrorMessage: string;
  customValidationError: boolean;
  value?: string
  dateFormat?: string
  showTime?: boolean
  id: string
  label: string
  fieldName: string
  tooltipLabelKey?: string
  isError: boolean
  align: 'center' | 'left' | 'right' | undefined;
  /** text | ... | ... */
  fieldType: 'text' | string
  permission: boolean
  required: boolean
  childLength?: number
  rowSpan?: number
  colSpan?: number
  childNodes?: Record<string, IMongoField>
  validation?: Record<tMongoFieldValidation, IMongoFieldValidation>
  errorType: tMongoFieldValidation;
  labelKey?: string
  mapViewFieldProperties?: IMapViewFieldProperties
  excelDropDownHidden?: boolean
  searchable?: boolean
  editable?: boolean
  sortable?: boolean
  infoFlag?: boolean
  customField?: boolean
  allowed?: boolean
  dropdownValues?: unknown
  customFieldReferenceId?: string,
  options: string[]
  searchParamValue?: string
  lookupType?: string
  /** Custom */
  countryFieldName?: string
  clientBranchName?: string
  serviceAreaProfileName?: string
  rateChartName?: string
  BASECOUNTRY?: string
  rankFieldName?: IRankFieldOptions
  multipleFiles?: boolean
  decimalPlaces?: number
  tooltipLabel?: string
  handleBlurEvent?: any
  icon?: string
  message?: string
  iconVariant?: string
  iconSize?: SizeProp
  dropdownOptions?: object[]
  operationsTimingId?: number
  branchManagerId?: number
  shiftTimingId?: number
  disabled?: boolean
  descLabel?: string
  minDate?: string
  readOnly?: boolean
  allowDecimal?: boolean
  removeDecimal?: boolean
  maxLength?: number
  infoTool?: Array<IInfoTool>
  messagePlacement?: 'center' | 'start' | 'end'
  placeholder?: string
  ShiftStartEndTimeVisiblity?: boolean
  lookUpOptionParam?: any
  matchParamLookup?: boolean
  clientBranchId?: string
  onLoad?: boolean
  httpMethod?: 'GET' | 'POST'
  httpPostPayload?: any
  shouldRemoveOnBlur?: boolean
}

export interface IMongoFormStructure {
  [key: string]: {
    [key: string]: IMongoField
  }
}
export interface IMongoListViewStructure {
  columns: {
    [key: string]: IMongoField
  }
  buttons: {
    [key: string]: IMongoField
  }
}

export interface IEditDetails<T = any> {
  [key: string]: {
    [key: string]: T
  }
}

export type tMongoFieldType = 'datetime' | 'date' | 'time' | 'radio' | 'checkbox' | 'file' | 'text' | 'select' | 'dropdown' | 'multiselect' | 'number'
export interface ICustomFieldsEntity {
  field: string
  type: tMongoFieldType
  value: any
}

export interface IMultiselectEntity {
  guid: string
  id: string | number
  isActiveFl: boolean
  name: string
  [key: string]: any
}

export interface IFileEntity {
  mediaId: number
  finalUrl: string
  fileName: string
  [key: string]: any
}

export interface IAddressEntity {
  apartment?: string
  areaName?: string
  city?: string
  country?: string
  countryName?: string
  countryShortCode?: string
  geocodeLevel?: 'ALL' | string
  guid?: string
  id?: number
  isActiveFl?: boolean
  isCurrentAddress?: boolean
  landmark?: string
  pincode?: string
  state?: string
  stateName?: string
  stateShortCode?: string
  streetName?: string
  [key: string]: any
}

export interface IAPIModuleData {
  url: string
  moduleKey: string
  uniqueIdentifier: string
}
export interface IBlurFilter {
  value: object
  setBlurFilters: () => any
  newKeyVal: () => any
}