import React from "react";
import { Input, IProps as IProps_Input } from "../Input/Input";
import { CheckBox, IProps as IProps_CheckBox } from "../CheckBox/CheckBox";

//enum of our elements
export enum APP_FORM_CONTROL {
  INPUT = "INPUT",
  CHECKBOX = "CHECKBOX",
}
//type of our elements
type TProps<T> =
  | IProps_Input<T>
  | IProps_CheckBox<T>

export class FormControl<T> extends React.Component<TProps<T>> {
  controlRender() {
    const { control } = this.props;
    //in this switch we can chooese the element that we need
    switch (control) {
      case APP_FORM_CONTROL.INPUT:
        return <Input {...(this.props as IProps_Input<T>)} />;
      case APP_FORM_CONTROL.CHECKBOX:
        return <CheckBox {...(this.props as IProps_CheckBox<T>)} />;
      default:
        return null;
    }
  }

  render() {
    return this.controlRender();
  }
}
