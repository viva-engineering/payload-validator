
import { Field } from './field';

export interface BooleanFieldOptions {
	required?: boolean;
}

export const enum BooleanFieldErrors {
	BadType = 'BadType',
	MissingRequired = 'MissingRequired'
}

export class BooleanField extends Field<boolean> {
	public type = 'boolean';

	protected required: boolean;

	public static readonly BadTypeError: BooleanFieldErrors.BadType;
	public static readonly MissingRequiredError: BooleanFieldErrors.MissingRequired;

	constructor(options: BooleanFieldOptions) {
		super();

		this.required = options.required;
	}

	public validate(value: Boolean) : BooleanFieldErrors[] {
		if (value == null) {
			if (this.required) {
				return [ BooleanFieldErrors.MissingRequired ];
			}

			return [ ];
		}

		if (typeof value !== 'boolean') {
			return [ BooleanFieldErrors.BadType ];
		}

		return [ ];
	}
}
