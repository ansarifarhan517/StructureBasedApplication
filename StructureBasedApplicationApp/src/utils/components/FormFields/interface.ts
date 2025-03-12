import { ChangeEvent, FocusEvent } from 'react'
import { IMongoField } from '../mongo/interface'
import {  RegisterOptions, UseFormReturn } from 'react-hook-form'

export interface IFormFieldProps {
    name: string ;
    meta: IMongoField;
    formInstance: UseFormReturn;
    handler?: (e: any) => any;
    key?: string;
    toolTipText?: string;
    onChange?: ((event: ChangeEvent<HTMLInputElement>) => void) | undefined;
    onBlur?:((event:FocusEvent<HTMLInputElement>) => void) | undefined
    timeInterval?: number;
    iconVariant?: string | undefined;
    defaultValue?: any;
    options?: any;
    isSetSearchValue?: boolean;
    requiredError?: boolean;
    scrollToRef?: boolean;
    messagePlacement?: 'start' | 'end' | 'center';
    isSortable?: boolean;
    boundLeft?: number;
    validate?: any
}

export interface ISpecificFormFieldProps extends IFormFieldProps {
    validationRules: RegisterOptions;
}

export interface IFetchedDropdownOptions {
    options: Array<{
      label: string;
      value: string;
    }>;
    mapping: Record<string, any>;
  }
