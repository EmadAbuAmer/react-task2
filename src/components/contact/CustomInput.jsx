function CustomInput(props) {
  return (
    <div className="custom-input">
      <label>
        {props.label}
        <input
        className={`${props.className}`}
        type={props.type}
        value={props.value}
        status={props.status}
        onChange={(e) => {props.onChange(e.target.value); console.log(e.target.value);}}
        placeholder={props.placeholder}
        />
      </label>
    </div>
  );
}
export default CustomInput;