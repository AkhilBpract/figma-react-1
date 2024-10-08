import { Suspense } from "react";
import { useLocation } from "react-router-dom";
import LoadingScreen from "./LoadingScreen";

const Loadable = (Component) => (props) => {
  return (
    <Suspense
      fallback={<LoadingScreen  />}
    >
      <Component {...props} />
    </Suspense>
  );
};

export default Loadable;
