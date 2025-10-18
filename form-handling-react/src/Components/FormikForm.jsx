import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

export default function FormikForm() {
  // Step 1: Define initial values
  const initialValues = {
    username: "",
    email: "",
    password: "",
  };

  // Step 2: Validation with Yup
  const validationSchema = Yup.object({
    username: Yup.string().required("Username is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  // Step 3: Handle form submission
  const handleSubmit = (values, { resetForm }) => {
    console.log("User Registered (Formik):", values);
    alert("✅ Registration Successful (Formik)!");
    resetForm();
  };

  return (
    <div style={styles.container}>
      <h2>User Registration (Formik + Yup)</h2>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form style={styles.form}>
          <Field
            type="text"
            name="username"
            placeholder="Username"
            style={styles.input}
          />
          <ErrorMessage name="username" component="p" style={styles.error} />

          <Field
            type="email"
            name="email"
            placeholder="Email"
            style={styles.input}
          />
          <ErrorMessage name="email" component="p" style={styles.error} />

          <Field
            type="password"
            name="password"
            placeholder="Password"
            style={styles.input}
          />
          <ErrorMessage name="password" component="p" style={styles.error} />

          <button type="submit" style={styles.button}>
            Register
          </button>
        </Form>
      </Formik>
    </div>
  );
}

// Inline CSS styles
const styles = {
  container: {
    textAlign: "center",
    marginTop: "40px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "10px",
    width: "300px",
    margin: "0 auto",
  },
  input: {
    padding: "10px",
    width: "100%",
    borderRadius: "5px",
    border: "1px solid #ccc",
  },
  button: {
    padding: "10px 20px",
    backgroundColor: "#16a34a",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  error: {
    color: "red",
    fontSize: "0.8rem",
  },
};
