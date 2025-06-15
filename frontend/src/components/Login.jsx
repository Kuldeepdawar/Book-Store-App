import React from "react";

// take modal
const Login = () => {
  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box dark:bg-gray-500 dark:text-white">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-2xl ">Login</h3>
          <div>
            <span className="font-semibold">Email</span>
            <br />
            <input
              type="text"
              placeholder="Enter email here"
              required
              className="p-3 px-3 mb-3 border-none rounded-md"
            />
          </div>
          <div>
            <span>Password</span>
            <br />
            <input
              type="password"
              placeholder="Enter Password here"
              required
              className="p-3 px-3 mb-4 border-none rounded-md"
            />
          </div>
          <div className=" flex justify-between">
            <button className="text-white bg-pink-500 px-2 py-2 rounded-md">
              Login
            </button>
            <p>
              Not registered?{" "}
              <span className="text-white-500 underline">Signup</span>
            </p>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Login;
