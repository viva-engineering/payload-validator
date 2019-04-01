
// import { Field } from './field';

// export interface ObjectFieldOptions {
// 	required?: boolean;
// }

// export const enum ObjectFieldErrors {
// 	BadType = 'BadType',
// 	MissingRequired = 'MissingRequired',
// 	InvalidEmail = 'InvalidEmail'
// }

// export class ObjectField extends Field<string> {
// 	public type = 'email';

// 	protected required: boolean;

// 	public static readonly BadTypeError: ObjectFieldErrors.BadType;
// 	public static readonly MissingRequiredError: ObjectFieldErrors.MissingRequired;
// 	public static readonly InvalidEmailError: ObjectFieldErrors.InvalidEmail;

// 	constructor(options: ObjectFieldOptions) {
// 		super();

// 		this.required = options.required;
// 	}

// 	public validate(value: string) : ObjectFieldErrors[] {
// 		if (value == null) {
// 			if (this.required) {
// 				return [ ObjectFieldErrors.MissingRequired ];
// 			}

// 			return [ ];
// 		}

// 		if (typeof value !== 'string') {
// 			return [ ObjectFieldErrors.BadType ];
// 		}

// 		if (! emailRegex.test(value)) {
// 			return [ ObjectFieldErrors.InvalidEmail ];
// 		}

// 		return [ ];
// 	}
// }
