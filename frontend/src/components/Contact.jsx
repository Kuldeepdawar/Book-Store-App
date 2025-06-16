import React from "react";
import { useForm } from "react-hook-form";

const Contact = () => {
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);
  return (
    <div className="flex h-screen items-center justify-center">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>Contact Form</h1>
        <div>
          {/* Name field */}
          <span>Name</span>
          <br />
          <input
            type="text"
            placeholder="Enter your name"
            className="border px-2 py-1 rounded-md"
            {...register("name", { required: true })}
          />
          {errors.name && <span>This field is required</span>}
        </div>
        <div>
          {/* Name field */}
          <span>Email</span>
          <br />
          <input
            type="email"
            placeholder="Enter your email"
            className="border px-2 py-1 rounded-md"
            {...register("email", { required: true })}
          />
          {errors.email && <span>This field is required</span>}
        </div>
        <div>
          {/* Name field */}
          <span>Message</span>
          <br />
          <textarea
            type="message"
            placeholder="Type your message"
            className="border rounded-md px-2 py-1"
            {...register("message", { required: true })}
          />
          {errors.message && <span>This field is required</span>}
        </div>

        <button className="px-2 py-1 rounded-md border-none bg-blue-600 hover:bg-blue-400">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
