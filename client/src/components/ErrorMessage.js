import React from 'react';
import { getIn, Field } from 'formik';

const ErrorMessage = ({ name }) => (
  <Field
    name={name}
    render={({ form }) => {
      const error = getIn(form.errors, name);
      const touch = getIn(form.touched, name);
      return touch && error ? <div className="chip red">{error}</div> : null;
    }}
  />
);

export default ErrorMessage;
