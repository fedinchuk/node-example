import { useEffect, useState } from "react";

const withLoadingIndicator = (WrappedComponent) => {
  return function WithLoadingIndicator(props) {
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
      setTimeout(() => setIsLoading(false), 300);
    });
    return isLoading ? <h2>Loading...</h2> : <WrappedComponent {...props} />;
  };
};

export default withLoadingIndicator;
