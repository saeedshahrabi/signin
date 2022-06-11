import React from "react";
import { Field } from "formik";
import { FormElementBase,IFormElementBaseProps } from "../FormElementBase/FormElementBase";
import { APP_FORM_CONTROL } from "../FormControl/FormControl";

//our input props
export interface IProps<T> extends IFormElementBaseProps<T> {
  control: APP_FORM_CONTROL.INPUT;
  placeholder?: string;
  type?: string;
  disabled?: boolean;
  onKeyUp?: (e: React.KeyboardEvent<HTMLInputElement>) => any;
  defaultValue?: string;
  autoComplete?: string;
}

export class Input<T> extends FormElementBase<T, IProps<T>> {
  protected fieldRender() {
    const { name, ...rest } = this.props;
    //our input field
    return (
      <Field className="form_control input_control" id={this.id} name={name} {...rest} />
    );
  }
  render() {
    return (
      <>
        <div className="input_label">{this.labelRender()}</div>
        {this.fieldRender()}
        {this.ErrorRender()}
      </>
    );
  }
}
