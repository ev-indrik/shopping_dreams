const FormInput = ({ label, ...otherProps }) => {
  return (
    <div className="group">
      {label && (
        <label
          className={`${
            otherProps.value.lenght ? "shrink" : ""
          } "form-input-label"`}
        >
          {label}
        </label>
      )}
      <input className="form-input" {...otherProps} />
    </div>
  );
};

export default FormInput;
