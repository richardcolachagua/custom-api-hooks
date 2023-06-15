// When building a full stack project with Express and React, it's generallly better
//to make API calls within a custom hook rather than within the component that needs
//the daa. Here are a few reasons why:

// 1. Seperation of Concerns: By seperating the API calls into a custom hook, you
//can keep your components focused on rendering UI and handling user interactions
//while keepning the data fetching logic in a separate module. This makes your code
//easier to read, understand and maintain.

// 2. Resubability: Custom hooks can be resused across multiple components, allowing
//you to share data fetching logic and avoid duplicating code. This can help
//reduce the amount of code you need to write and make your application more efficient

// 3. Testing: Seperating the API calls into a custom hook makes it easier to
//test your code. You can write unit tests for the custom hook to ensure that it
//returns the expected data, and you can write integration tests for your
//compontents to ensure that they render correctly based on the data returned
//by the hook.

import { useState, useEffect } from "react";

function useApi(url) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      try {
        const response = await fetch(url);
        const json = await response.json();
        setData(json);
      } catch (error) {
        setError(error);
      }
      setIsLoading(false);
    }
    fetchData();
  }, [url]);
  return { data, isLoading, error };
}

export default useApi;

//In this example, we are defining a custome hook called 'useApi' that takes a
//URL as an argument and returns an object with three properties:`data`,
//`isLoading`, and `error`. The `useEffect` hook is used to make the API call
// and update the state variables based on the response
