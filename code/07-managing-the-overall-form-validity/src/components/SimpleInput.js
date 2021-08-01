import { useEffect, useReducer, useState } from "react";

const emailReducer = (state, action) => {
  if (action.type === "USER_INPUT") {
    return {
      ...state,
      value: action.val,
      isValid: action.val.trim() !== "" && action.val.includes("@") && state.isTouched,
    };
  }
  if (action.type === "INPUT_BLUR") {
    return {
      ...state,
      value: state.value,
      isValid: state.value.trim() !== "" && state.value.includes("@") && state.isTouched,
    };
  }
  if (action.type === "TOUCHED") {
    return {
      ...state,
      isTouched: true
    }
  }
  if (action.type === "RESET") {
    return {
      value: "",
      isValid: null,
      isTouched: false,
    };
  }
  return { value: "", isValid: null, isTouched: false };
};

const nameReducer = (state, action) => {
  if (action.type === "USER_INPUT") {
    return {
      ...state,
      value: action.val,
      isValid: action.val.trim() !== "" && state.isTouched,
    };
  }
  if (action.type === "INPUT_BLUR") {
    return {
      ...state,
      value: state.value,
      isValid: state.value.trim() !== "" && state.isTouched,
    };
  }
  if (action.type === "TOUCHED") {
    return {
      ...state,
      isTouched: true
    }
  }
  if (action.type === "RESET") {
    return {
      value: "",
      isValid: null,
      isTouched: false,
    };
  }
  return { value: "", isValid: null, isTouched: false};
};

const SimpleInput = (props) => {
  const [formIsValid, setFormIsValid] = useState(false);
  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: "",
    isValid: null,
    isTouched: false,
  });

  const [nameState, dispatchName] = useReducer(nameReducer, {
    value: "",
    isValid: null,
    isTouched: false,
  });

  const { isValid: emailIsValid } = emailState;
  const { isValid: nameIsValid } = nameState;
  const { isTouched: emailTouched } = emailState;
  const { isTouched: nameTouched } = nameState;

  useEffect(() => {
    if (emailIsValid && nameIsValid) {
      setFormIsValid(true);
    } else {
      setFormIsValid(false);
    }
  }, [emailIsValid, nameIsValid]);

  const nameInputChangeHandler = (event) => {
    dispatchName({ type: "USER_INPUT", val: event.target.value });
  };

  const nameInputBlurHandler = (event) => {
    dispatchName({ type: "INPUT_BLUR" });
  };

  const nameTouchedHandler = () => {
    dispatchName({type: "TOUCHED"})
  }

  const emailInputChangeHandler = (event) => {
    dispatchEmail({ type: "USER_INPUT", val: event.target.value });
  };

  const emailInputBlurHandler = (event) => {
    dispatchEmail({ type: "INPUT_BLUR" });
  };
  
  const emailTouchHandler = () => {
    dispatchEmail({type: "TOUCHED"})
  }

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    if (!emailIsValid || !nameIsValid) {
      return;
    }
    dispatchEmail({ type: "RESET" });
    dispatchName({ type: "RESET" });
  };

  const nameInputClasses = nameIsValid || !nameTouched
    ? "form-control"
    : "form-control invalid";

  const emailInputClasses = emailIsValid || !emailTouched
    ? "form-control"
    : "form-control invalid";

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameInputChangeHandler}
          onBlur={nameInputBlurHandler}
          onFocus={nameTouchedHandler}
          value={nameState.value}
        />
        {!nameState.isValid && nameTouched && (
          <p className="error-text">Name must not be empty.</p>
        )}
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="email">Email</label>
        <input
          type="text"
          id="name"
          onChange={emailInputChangeHandler}
          onBlur={emailInputBlurHandler}
          onFocus={emailTouchHandler}
          value={emailState.value}
        />
        {!emailState.isValid && emailTouched && (
          <p className="error-text">Email is not valid</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
