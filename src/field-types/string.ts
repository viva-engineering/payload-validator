
import { Field } from './field';

export interface StringFieldOptions {
	required?: boolean;
	minLength?: number;
	maxLength?: number;
	regex?: RegExp;
	enum?: Set<string>;
}

export const enum StringFieldErrors {
	BadType = 'BadType',
	MissingRequired = 'MissingRequired',
	MinLength = 'MinLength',
	MaxLength = 'MaxLength',
	RegexFailed = 'RegexFailed',
	EnumFailed = 'EnumFailed'
}

export class StringField extends Field<string> {
	public type = 'string';

	protected required: boolean;
	protected minLength: number;
	protected maxLength: number;
	protected regex: RegExp;
	protected enum: Set<string>;

	public static readonly BadTypeError: StringFieldErrors.BadType;
	public static readonly MissingRequiredError: StringFieldErrors.MissingRequired;
	public static readonly MinLengthError: StringFieldErrors.MinLength;
	public static readonly MaxLengthError: StringFieldErrors.MaxLength;
	public static readonly RegexFailedError: StringFieldErrors.RegexFailed;
	public static readonly EnumFailedError: StringFieldErrors.EnumFailed;

	constructor(options: StringFieldOptions) {
		super();

		this.required = options.required;
		this.minLength = options.minLength;
		this.maxLength = options.maxLength;
		this.regex = options.regex;
		this.enum = options.enum;
	}

	public validate(value: string) : StringFieldErrors[] {
		if (value == null) {
			if (this.required) {
				return [ StringFieldErrors.MissingRequired ];
			}

			return [ ];
		}

		if (typeof value !== 'string') {
			return [ StringFieldErrors.BadType ];
		}

		const errors: StringFieldErrors[] = [ ];

		if (this.minLength && value.length < this.minLength) {
			errors.push(StringFieldErrors.MinLength);
		}

		if (this.maxLength && value.length > this.maxLength) {
			errors.push(StringFieldErrors.MaxLength);
		}

		if (this.regex && ! this.regex.test(value)) {
			errors.push(StringFieldErrors.RegexFailed);
		}

		if (this.enum && ! this.enum.has(value)) {
			errors.push(StringFieldErrors.EnumFailed);
		}

		return errors;
	}
}
