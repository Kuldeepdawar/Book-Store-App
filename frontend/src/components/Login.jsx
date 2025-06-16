import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

const Login = () => {
  // Initialize react-hook-form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Handle form submission
  const onSubmit = async (data) => {
    // Add your login API call logic here
    const userInfo = {
      email: data.email,
      password: data.password,
    };
    await axios
      .post("http://localhost:4001/user/login", userInfo)
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          toast.success("Login successfully");
        }
        localStorage.setItem("Users", JSON.stringify(res.data.user));
      })
      .catch((err) => {
        if (Error.res) {
          toast.error("Error:" + err.response.data.message);
        }
      });
  };

  return (
    <div>
      {/* Modal dialog container */}
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box dark:bg-slate-400">
          {/* Form with react-hook-form handling */}
          <form onSubmit={handleSubmit(onSubmit)} method="dialog">
            {/* Close button */}
            <Link
              to="/"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >
              ✕
            </Link>

            <h3 className="font-bold text-2xl mb-4">Login</h3>

            {/* Email Field */}
            <div>
              <label className="font-semibold">Email</label>
              <input
                type="email"
                placeholder="Enter email here"
                className="p-3 w-full mb-1 mt-1 border rounded-md outline-none"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <span className="text-sm text-red-600">Email is required</span>
              )}
            </div>

            {/* Password Field */}
            <div className="mt-4">
              <label className="font-semibold">Password</label>
              <input
                type="password"
                placeholder="Enter password here"
                className="p-3 w-full mb-1 mt-1 border rounded-md outline-none text-black"
                {...register("password", { required: true })}
              />
              {errors.password && (
                <span className="text-sm text-red-600">
                  Password is required
                </span>
              )}
            </div>

            {/* Submit and Signup Link */}
            <div className="flex justify-between items-center mt-6">
              <button
                type="submit"
                className="text-white bg-pink-500 px-4 py-2 rounded-md hover:bg-pink-600"
              >
                Login
              </button>
              <p className="text-sm">
                Not registered?{" "}
                <Link to="/signup" className="text-blue-600 underline">
                  SignUp
                </Link>
              </p>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default Login;
