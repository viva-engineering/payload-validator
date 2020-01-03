
import { Field } from './field';

const e164Regex = /^\+[1-9][0-9]{1,14}$/;

export interface PhoneFieldOptions {
	required?: boolean;
}

export const enum PhoneFieldErrors {
	BadType = 'BadType',
	MissingRequired = 'MissingRequired',
	InvalidPhone = 'InvalidPhone'
}

export class PhoneField extends Field<string> {
	public type = 'phone';

	protected required: boolean;

	public static readonly BadTypeError: PhoneFieldErrors.BadType;
	public static readonly MissingRequiredError: PhoneFieldErrors.MissingRequired;
	public static readonly InvalidEmailError: PhoneFieldErrors.InvalidPhone;

	constructor(options: PhoneFieldOptions) {
		super();

		this.required = options.required;
	}

	public validate(value: string) : PhoneFieldErrors[] {
		if (value == null) {
			if (this.required) {
				return [ PhoneFieldErrors.MissingRequired ];
			}

			return [ ];
		}

		if (typeof value !== 'string') {
			return [ PhoneFieldErrors.BadType ];
		}

		if (! e164Regex.test(value)) {
			return [ PhoneFieldErrors.InvalidPhone ];
		}

		return [ ];
	}
}
