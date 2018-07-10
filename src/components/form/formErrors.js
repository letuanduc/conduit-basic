import React from "react";
export const FormErrors = ({ formErrors }) => (
  <ul className="error-messages">
    {Object.keys(formErrors).map((fieldName, i) => {
      if (formErrors[fieldName].length > 0) {
        return <li key={i}>{fieldName} {formErrors[fieldName]}</li>;
      }
    })}
  </ul>
);
export default FormErrors;