"use client";

import useForm from "react-hook-form";

const ContactForm = () => {
  return (
    <form className="flex flex-col w-full">
      <div className="flex w-full ">
        <input
          className="border-1 border-white/50 p-2 focus:outline-none w-full"
          placeholder="Email"
        />
      </div>
      <div className="w-full mt-2">
        <textarea
          rows={4}
          className="border-1 border-white/50 p-2 focus:outline-none w-full resize-none"
          placeholder="Type your message here"
        />
      </div>

      <button
        type="submit"
        className="border-1 border-white/50 rounded-b-xl w-full p-2 hover:bg-black/50 duration-500 transition-colors"
      >
        <span className="text-sm">Submit</span>
      </button>
    </form>
  );
};

export default ContactForm;
