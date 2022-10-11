import React from "react";
import { createRequest } from "../http/userApi";
import s from "./FeedbackForm.module.css";
import { Formik, Form, Field } from "formik";
import { RequestSchema } from "../validation/RequestSchema";

const FeedbackFrom = () => {
  return (
    <div className={s.container}>
      <Formik
        initialValues={{
          name: "",
          email: "",
          message: "",
        }}
        validationSchema={RequestSchema}
        onSubmit={(values, { setSubmitting, resetForm}) => {
          setSubmitting(true);
          resetForm({});
          createRequest(values).then((data) => {
            console.log(data);
          });
        }}
      >
        {({ isSubmitting, errors, touched }) => (
          <Form className={s.feedback_form}>
            <h1>Reach out to us!</h1>
            {errors.name && touched.name ? <div>{errors.name}</div> : null}
            <Field type="text" name="name" placeholder="Your name*" />
            {errors.email && touched.email ? <div>{errors.email}</div> : null}
            <Field type="email" name="email" placeholder="Your email*" />
            {errors.message && touched.message ? (
              <div>{errors.message}</div>
            ) : null}
            <Field
              as="textarea"
              type="text"
              name="message"
              placeholder="Your message*"
            />
            <button type="submit" disabled={isSubmitting}>
              Send message
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FeedbackFrom;
