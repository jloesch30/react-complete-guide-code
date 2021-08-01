import myInput from "../hooks/my-use-input";

const BasicForm = (props) => {
  const {
    value: fNameValue,
    isValid: fNameIsValid,
    hasError: fNameHasError,
    valueChangeHandler: fNameChangeHandler,
    valueBlurHandler: fNameBlurHandler,
    reset: fNameReset,
  } = myInput((value) => value.trim() !== "");

  const {
    value: lNameValue,
    isValid: lNameIsValid,
    hasError: lNameHasError,
    valueChangeHandler: lNameChangeHandler,
    valueBlurHandler: lNameBlurHandler,
    reset: lNameReset,
  } = myInput((value) => value.trim() !== "");

  const formSubmit = () => {
    if ()
  }

  return (
    <form onSubmit={() => {fNameReset(); lNameReset();}}>
      <div className="control-group">
        <div className="form-control">
          <label htmlFor="name">First Name</label>
          <input type="text" id="name" onChange={fNameChangeHandler} onBlur={fNameBlurHandler} />
        </div>
        <div className="form-control">
          <label htmlFor="name">Last Name</label>
          <input type="text" id="name" />
        </div>
      </div>
      <div className="form-control">
        <label htmlFor="name">E-Mail Address</label>
        <input type="text" id="name" />
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
