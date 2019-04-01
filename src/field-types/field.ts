
export abstract class Field<T> {
	public abstract type: string;
	public abstract validate(value: T) : string[];
}
