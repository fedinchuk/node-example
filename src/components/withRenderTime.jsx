import { useEffect, useRef } from "react";

const withRenderTime = (WrappedComponent) => {
  return function WithRenderTime(props) {
    const renderTimeStart = useRef(performance.now());

    useEffect(() => {
      const renderTimeEnd = performance.now();
      const renderTime = renderTimeEnd - renderTimeStart.current;
      console.log(`${WrappedComponent.name} rendered in ${renderTime}`);
    });

    return <WrappedComponent {... props} />;
  };
};

export default withRenderTime;
