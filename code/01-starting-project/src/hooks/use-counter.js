import { useState, useEffect } from "react";
// must have use in the name!!!
const useCounter = (forwards = true) => {
  // every component the custom hook will execute again and the state WILL NOT BE SHARED
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (forwards) {
        setCounter((prevCounter) => prevCounter + 1);
      } else {
        setCounter((prevCounter) => prevCounter - 1);
      }
    }, 1000);

    return () => clearInterval(interval);
    // we will add this as a dependency due to being an external variable 
    // this is best practice
  }, [forwards]);
  return counter;
};

export default useCounter;
