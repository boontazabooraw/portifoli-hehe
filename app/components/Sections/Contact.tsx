"use client";

import ContactForm from "../ContactForm";

const Contact = () => {
  return (
    <div className="flex flex-col h-full w-full justify-center items-center gap-5 px-15 pb-10">
      <h1 className="text-2xl tracking-widest">Contact me</h1>
      <ContactForm />
    </div>
  );
};

export default Contact;
