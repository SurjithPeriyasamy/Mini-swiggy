import React from "react";
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div className="md:mt-52">
      <h2>{error.status}</h2>
      <h4>{error.statusText}</h4>
    </div>
  );
};

export default ErrorPage;
