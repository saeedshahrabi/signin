import { Field } from "formik";
import { FormElementBase, IFormElementBaseProps, TFieldProps } from "../FormElementBase/FormElementBase";
import { APP_FORM_CONTROL } from "../FormControl/FormControl";


export interface IProps<T> extends Omit<TFieldProps<boolean>, "name">, IFormElementBaseProps<T> {
  control: APP_FORM_CONTROL.CHECKBOX;
}

export class CheckBox<T> extends FormElementBase<T, IProps<T>> {
  protected fieldRender() {
    const { name, ...rest } = this.props;
    // return checkbox field with general and ideal props 
    return (
        <Field
          className="form-control"
          {...rest}
          id={this.id}
          name={name}
          type="checkbox"
        />
    );
  }

  render() {
    return (
      <>
      {/* bind class to div */}
        <div
          className={`app-${this.props.control} ${
            this.props.controlClassName || ""
          }`}
        >
          {/* Fields can be moved according to the desired order */}
          {this.fieldRender()}
          {this.labelRender()}
          {this.ErrorRender()}
        </div>
      </>
    );
  }
}
