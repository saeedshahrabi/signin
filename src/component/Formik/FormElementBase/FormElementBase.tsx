import React from "react";
import { ErrorMessage, FieldInputProps } from "formik";
import { TextError } from "../TextError/TextError";
import { APP_FORM_CONTROL } from "../FormControl/FormControl";

export interface IFormElementBaseProps<T> {
  //we can add ideal props that we need
  name: keyof T;
  label?: string;
  id?: string;
  control: APP_FORM_CONTROL;
  controlClassName?: string;
  labelClassName?: string;
  tooltip?: string;
  required?: boolean;
}

export type TFieldProps<V> = {
  [P in keyof FieldInputProps<V>]?: FieldInputProps<V>[P];
};

export abstract class FormElementBase<T, p extends IFormElementBaseProps<T>> extends React.Component<p> {
  
  protected id = this.props.id || (this.props.name as string);

  protected labelRender() {
    //we render label here
    if (!this.props.label) return <></>;
    return (
      <label className={`${this.props.labelClassName || ""}`} htmlFor={this.id}>
        {this.props.label as any}
        {this.props.required ? (
          <span className="text-danger" style={{ color: "red" }}>
            {" "}
            *
          </span>
        ) : (
          <></>
        )}
      </label>
    );
  }
//rendering error
  protected ErrorRender() {
    return (
      <div style={{ display: "flex", justifyContent: "flex-start" }}>
        <ErrorMessage component={TextError} name={this.props.name as string} />
      </div>
    );
  }

  protected abstract fieldRender(): JSX.Element;

  render() {
    // this is a default rendering element 
    return (
      <>
        <div
          className={`form-group app-${this.props.control} ${
            this.props.controlClassName || ""
          }`}
        >
          {this.labelRender()}
          {this.fieldRender()}
          {this.ErrorRender()}
        </div>
      </>
    );
  }
}
