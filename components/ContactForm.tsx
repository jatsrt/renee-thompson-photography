import React, { useEffect } from "react";
import axios from "axios";
import { NotificationContext } from "./Notification";
import { useForm, ValidationError } from "@formspree/react";
import { stat } from "fs";

const ContactForm: React.FC = () => {
  const { setMsg, setShow } = React.useContext(NotificationContext);
  const [state, handleSubmit] = useForm("mnqyajgq");

  useEffect(() => {
    if (!state.submitting && state.succeeded) {
      setMsg({
        title: "Success",
        body: "Thank you, your message has been submitted.",
      });
      setShow(true);
    }
  }, [setMsg, setShow, state.submitting, state.succeeded]);

  return (
    <form
      onSubmit={handleSubmit}
      method="POST"
      className="grid grid-cols-1 gap-y-6"
    >
      <div>
        <label htmlFor="fullName" className="sr-only">
          Full name
        </label>
        <input
          id="fullName"
          name="full-name"
          type="text"
          autoComplete="name"
          className="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-slate-500 focus:ring-slate-500"
          placeholder="Full name"
          required
        />
        <ValidationError
          field="fullName"
          prefix="Full name"
          errors={state.errors}
          className="mt-2 text-sm text-red-600"
        />
      </div>
      <div>
        <label htmlFor="email" className="sr-only">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          className="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-slate-500 focus:ring-slate-500"
          placeholder="Email"
          required
        />
        <ValidationError
          field="email"
          prefix="Email"
          errors={state.errors}
          className="mt-2 text-sm text-red-600"
        />
      </div>
      <div>
        <label htmlFor="phone" className="sr-only">
          Phone
        </label>
        <input
          type="text"
          name="phone"
          id="phone"
          autoComplete="tel"
          className="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-slate-500 focus:ring-slate-500"
          placeholder="Phone"
          required
        />
        <ValidationError
          field="phone"
          prefix="Phone"
          errors={state.errors}
          className="mt-2 text-sm text-red-600"
        />
      </div>
      <div>
        <label htmlFor="message" className="sr-only">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-slate-500 focus:ring-slate-500"
          placeholder="Message"
          required
        />
        <ValidationError
          field="message"
          prefix="Message"
          errors={state.errors}
          className="mt-2 text-sm text-red-600"
        />
      </div>
      <div>
        <button
          type="submit"
          className="inline-flex justify-center rounded-md border border-transparent bg-slate-600 py-3 px-6 text-base font-medium text-white shadow-sm hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2"
          disabled={state.submitting}
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
