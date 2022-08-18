/**
  * To improve these type definitions,
  * read the docs: https://github.com/poteto/ember-changeset-validations
  */
declare module 'ember-changeset-validations' {
  import type { ValidationResult } from 'validated-changeset/dist/types/index';
  import type { changeset, lookupValidator as _lookupValidator } from 'validated-changeset';

  export type ValidationFunction = Parameters<typeof changeset>[1];

  /**
    * Factory-function, much like validatePresence, etc
    */
  export type CustomValidation = (...args: unknown[]) => ValidationFunction;

  export interface ClassValidator {
     validate<T = unknown>(
       key: string,
       newValue: T,
       oldValue: T,
       changes: unknown,
       content: unknown
     ): ValidationResult;
  }

  const lookupValidator: typeof _lookupValidator;

  export default lookupValidator;
}

declare module 'ember-changeset-validations/validators' {
  import type { ValidationResult, ValidatorMapFunc } from 'validated-changeset/dist/types/index';
  import type { lookupValidator as _lookupValidator } from 'validated-changeset';

  type ValidationFunction = ValidatorMapFunc;

  type Message = string | ((key: string, type: string, value: unknown, context: unknown) => string)

  /**
    * See code for full API and examples:
    *   - https://github.com/poteto/ember-changeset-validations
    *   - https://github.com/offirgolan/ember-validators
    */
  export function validatePresence(enabled: boolean): ValidationFunction;

  /**
    * See code for full API and examples:
    *   - https://github.com/poteto/ember-changeset-validations
    *   - https://github.com/offirgolan/ember-validators
    */
  export function validatePresence(options: {
    presence: boolean,
    ignoreBlank?: boolean,
    on?: string | string[],
    message?: Message;
  }): ValidationFunction

  /**
    * See code for full API and examples:
    *   - https://github.com/poteto/ember-changeset-validations
    *   - https://github.com/offirgolan/ember-validators
    */
  export function validateLength(options: {
    min?: number;
    max?: number;
    is?: number;
    allowBlank?: boolean;
    message?: Message;
  }): ValidationFunction;

  type DateOption = Date | (() => Date);
  /**
    * See code for full API and examples:
    *   - https://github.com/poteto/ember-changeset-validations
    *   - https://github.com/offirgolan/ember-validators
    */
  export function validateDate(options: {
    before?: DateOption;
    onOrBefore?: DateOption;
    after?: DateOption;
    onOrAfter?: DateOption;
    message?: Message;
  }): ValidationFunction;

  /**
    * See code for full API and examples:
    *   - https://github.com/poteto/ember-changeset-validations
    *   - https://github.com/offirgolan/ember-validators
    */
  export function validateNumber(options: {
    is?: number;
    allowBlank?: boolean;
    integer?: boolean;
    lt?: number;
    gt?: number;
    lte?: number;
    gte?: number;
    positive?: boolean;
    odd?: boolean;
    even?: boolean;
    multipleOf?: number;
    message?: Message;
  }): ValidationFunction;

  /**
    * See code for full API and examples:
    *   - https://github.com/poteto/ember-changeset-validations
    *   - https://github.com/offirgolan/ember-validators
    */
  export function validateInclusion(options: {
    list?: unknown[];
    range?: [number, number];
    allowBlank?: boolean;
    message?: Message;
  }): ValidationResult;

  /**
    * See code for full API and examples:
    *   - https://github.com/poteto/ember-changeset-validations
    *   - https://github.com/offirgolan/ember-validators
    */
  export function validateExclusion(options: {
    list?: unknown[];
    range?: [number, number];
    allowBlank?: boolean;
    message?: Message;
  }): ValidationFunction;

  /**
    * See code for full API and examples:
    *   - https://github.com/poteto/ember-changeset-validations
    *   - https://github.com/offirgolan/ember-validators
    */
  export function validateFormat(options: {
    allowBlank?: boolean;
    type?: 'email' | 'phone' | 'url',
    regex?: RegExp | null;
    inverse?: boolean;
    message?: Message;
  }): ValidationFunction;

  /**
    * See code for full API and examples:
    *   - https://github.com/poteto/ember-changeset-validations
    *   - https://github.com/offirgolan/ember-validators
    */
  export function validateConfirmation(options: {
    on?: string,
    allowBlank?: boolean;
    message?: Message;
  }): ValidationFunction;
}
