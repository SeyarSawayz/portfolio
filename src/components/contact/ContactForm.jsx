import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";

const contactSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  project: Yup.string().min(10).required("Project details is required"),
});

const ContactForm = (e) => {
  const form = useRef();
  const sendEmail = () => {
    emailjs.sendForm("service_03ybwbe", "template_r0i9ur8", form.current, {
      publicKey: "WPFc5LLprJScZjWkm",
    });
    toast.success("Email sent successfully");
  };

  return (
    <div className="w-full">
      <Formik
        validationSchema={contactSchema}
        onSubmit={(values, actions) => {
          sendEmail();
          actions.resetForm();
        }}
        initialValues={{
          name: "",
          email: "",
          project: "",
        }}
      >
        <Form ref={form}>
          <Field
            type="text"
            placeholder="Name"
            name="name"
            className="p-2 my-2 rounded-md w-full border-2 border-gray-300 dark:border-slate-600 dark:bg-gray-100 "
          />
          <div className="text-red-500 text-xs">
            <ErrorMessage name="name" />
          </div>
          <Field
            type="text"
            placeholder="Email"
            name="email"
            className="p-2 my-2 rounded-md w-full border-2 border-gray-300 dark:border-slate-600 dark:bg-gray-100 "
          />
          <div className="text-red-500 text-xs">
            <ErrorMessage name="email" />
          </div>
          <Field
            name="project"
            as="textarea"
            id=""
            cols="30"
            rows="10"
            className="p-2 my-2 rounded-md w-full border-2 border-gray-300 resize-none dark:border-slate-600 dark:bg-gray-100"
            placeholder="Project details"
          />
          <div className="text-red-500 text-xs">
            <ErrorMessage name="project" />
          </div>
          <button
            type="submit"
            className="bg-zinc-900 dark:bg-[#535AC8] hover:dark:bg-[#3F72AF] dark:text-[#e0e0e0] hover:bg-zinc-800 text-lg self-start text-white px-4 py-2 mt-3 rounded-md font-bold "
          >
            Send Message{" "}
            <img src="/icons/send.png" className="inline-block ml-3" alt="" />
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;
