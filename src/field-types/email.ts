
import { Field } from './field';

const emailRegex = /^[^@]+@[^@]+$/;

export interface EmailFieldOptions {
	required?: boolean;
}

export const enum EmailFieldErrors {
	BadType = 'BadType',
	MissingRequired = 'MissingRequired',
	InvalidEmail = 'InvalidEmail'
}

export class EmailField extends Field<string> {
	public type = 'email';

	protected required: boolean;

	public static readonly BadTypeError: EmailFieldErrors.BadType;
	public static readonly MissingRequiredError: EmailFieldErrors.MissingRequired;
	public static readonly InvalidEmailError: EmailFieldErrors.InvalidEmail;

	constructor(options: EmailFieldOptions) {
		super();

		this.required = options.required;
	}

	public validate(value: string) : EmailFieldErrors[] {
		if (value == null) {
			if (this.required) {
				return [ EmailFieldErrors.MissingRequired ];
			}

			return [ ];
		}

		if (typeof value !== 'string') {
			return [ EmailFieldErrors.BadType ];
		}

		if (! emailRegex.test(value)) {
			return [ EmailFieldErrors.InvalidEmail ];
		}

		return [ ];
	}
}
