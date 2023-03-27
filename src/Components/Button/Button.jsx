import React from "react";

const Button = ({children}) => {
   return (
    <div className="text-center">
      <button className="btn mt-3 btn-success text-sky">{children}</button>
    </div>
  );
};

export default Button;
