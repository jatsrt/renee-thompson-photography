import React from "react";
import axios from "axios";
import { NotificationContext } from "./Notification";

const ContactForm: React.FC = () => {
  const { setMsg, setShow } = React.useContext(NotificationContext);

  const [status, setStatus] = React.useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: "" },
  });
  const [inputs, setInputs] = React.useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleServerResponse = (ok: boolean, msg: string) => {
    if (ok) {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: msg },
      });
      setInputs({
        fullName: "",
        email: "",
        phone: "",
        message: "",
      });
    } else {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: true, msg: msg },
      });
    }
    setMsg({ title: ok ? "Success" : "Error", body: msg });
    setShow(true);
  };

  const handleOnSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    setStatus((prevStatus) => ({ ...prevStatus, submitting: true }));
    axios({
      method: "POST",
      url: "https://formspree.io/f/mnqyajgq",
      data: inputs,
    })
      .then((response) => {
        handleServerResponse(
          true,
          "Thank you, your message has been submitted."
        );
      })
      .catch((error) => {
        console.log(error);
        handleServerResponse(false, error.response.data.error);
      });
  };

  const handleOnChange: React.ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  > = (e) => {
    e.persist();
    setInputs((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
    setStatus({
      submitted: false,
      submitting: false,
      info: { error: false, msg: "" },
    });
  };

  return (
    <form
      onSubmit={handleOnSubmit}
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
          className="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          placeholder="Full name"
          onChange={handleOnChange}
          required
          value={inputs.fullName}
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
          className="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          placeholder="Email"
          onChange={handleOnChange}
          required
          value={inputs.email}
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
          className="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          placeholder="Phone"
          onChange={handleOnChange}
          required
          value={inputs.phone}
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
          className="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          placeholder="Message"
          onChange={handleOnChange}
          required
          value={inputs.message}
        />
      </div>
      <div>
        <button
          type="submit"
          className="inline-flex justify-center rounded-md border border-transparent bg-red-600 py-3 px-6 text-base font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
