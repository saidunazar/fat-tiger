import { useRouteError } from "react-router-dom";

export const Error = () => {
  const { status, statusText } = useRouteError();
  return (
    <>
      <h3>Opps! Something went wrong⚠️</h3>
      <h4>
        {status}: {statusText}
      </h4>
    </>
  );
};
