/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from "react";

const myInput = (validation) => {
  const [enteredVal, setEnteredVal] = useState("");
  const [hasTouched, setHasTouched] = useState(false);

  // evaluates to true of false
  const valueIsValid = validation(enteredVal);
  const hasError = !valueIsValid && hasTouched;

  const valueChangeHandler = (event) => {
    setEnteredVal(event.target.value);
  };

  const valueBlurHandler = () => {
    setHasTouched(true);
  };

  const reset = () => {
    setHasTouched(false);
    setEnteredVal("");
  };

  return {
    value: enteredVal,
    isValid: valueIsValid,
    hasError,
    valueChangeHandler,
    valueBlurHandler,
    reset
  };
};

export default myInput;
