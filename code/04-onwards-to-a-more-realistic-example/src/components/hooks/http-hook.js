// this hook is good bc we can use the other hooks within our custom hook
import React, { useState } from "react";
const useHttpHook = (method) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  setIsLoading(true);

  try {
    const response = await fetch(
      "https://react-http-6b4a6.firebaseio.com/tasks.json",
      {
        method: "POST",
        body: JSON.stringify({ text: taskText }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      throw new Error("Request failed!");
    }
  } catch (err) {}
};

export default useHttpHook;