import React from "react";
import RegistrationForm from "./components/RegistrationForm";
import FormikForm from "./components/FormikForm";

export default function App() {
  return (
    <div>
      <RegistrationForm />
      <hr style={{ margin: "50px 0" }} />
      <FormikForm />
    </div>
  );
}
