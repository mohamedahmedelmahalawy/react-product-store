import React, { Fragment } from "react";

function Error() {
  return (
    <Fragment className="h-screen">
      <div className="flex justify-center h-12 text-[20rem] text-yellow-200 align-items">
        404
      </div>
      <p className="flex justify-center text-yellow-200 align-items">
        This page doesn't exist
      </p>
    </Fragment>
  );
}

export default Error;
