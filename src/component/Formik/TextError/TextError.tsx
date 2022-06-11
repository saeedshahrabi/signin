interface IProps {
  children?: React.ReactNode;
}
// error message of our form 
export function TextError(props: IProps): React.ReactElement {
  return <span className="text_error">{props.children}</span>;
}
