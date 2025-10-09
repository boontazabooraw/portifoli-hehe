"use client";

import useForm from "react-hook-form";

const ContactForm = () => {
  return (
    <form className="flex flex-col gap-2 justify-center items-center">
      <div>
        <input className="border-1 p-2 w-full" placeholder="Email" />
      </div>
      <div className="w-full">
        <textarea
          rows={4}
          className="border-1 p-2 w-full "
          placeholder="Type your message here"
        />
      </div>
      <button
        type="submit"
        disabled={true}
        className="border-1 rounded-lg w-20 p-2"
      >
        <span className="">Submit</span>
      </button>
    </form>
  );
};

export default ContactForm;
