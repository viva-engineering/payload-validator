
import { Field } from './field';

export interface NumberFieldOptions {
	required?: boolean;
	minValue?: number;
	maxValue?: number;
	allowString?: boolean;
}

export const enum NumberFieldErrors {
	BadType = 'BadType',
	MissingRequired = 'MissingRequired',
	MinValue = 'MinValue',
	MaxValue = 'MaxValue'
}

export class NumberField extends Field<number> {
	public type = 'number';

	protected readonly required: boolean;
	protected readonly minValue: number;
	protected readonly maxValue: number;
	protected readonly allowString: boolean = false;

	public static readonly BadTypeError: NumberFieldErrors.BadType;
	public static readonly MissingRequiredError: NumberFieldErrors.MissingRequired;
	public static readonly MinLengthError: NumberFieldErrors.MinValue;
	public static readonly MaxLengthError: NumberFieldErrors.MaxValue;

	constructor(options: NumberFieldOptions) {
		super();

		this.required = options.required;
		this.minValue = options.minValue;
		this.maxValue = options.maxValue;
		this.allowString = options.allowString;
	}

	public validate(value: string | number) : NumberFieldErrors[] {
		if (value == null) {
			if (this.required) {
				return [ NumberFieldErrors.MissingRequired ];
			}

			return [ ];
		}

		if (this.allowString) {
			if (typeof value === 'string') {
				value = parseFloat(value);
			}
		}

		if (typeof value !== 'number') {
			return [ NumberFieldErrors.BadType ];
		}

		const errors: NumberFieldErrors[] = [ ];

		if (this.minValue != null && value < this.minValue) {
			errors.push(NumberFieldErrors.MinValue);
		}

		if (this.maxValue != null && value > this.maxValue) {
			errors.push(NumberFieldErrors.MaxValue);
		}

		return errors;
	}
}
