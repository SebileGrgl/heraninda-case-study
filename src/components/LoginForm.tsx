import { useState } from "react";
import { LoginFormProps } from "../types";
import emailIcon from "../assets/mail.svg";
import lockIcon from "../assets/lock.svg";
import visibilitylIcon from "../assets/visibility.svg";
import visibilityOffIcon from "../assets/visibility-off.svg";
import { Link } from "react-router-dom";

const LoginForm = ({
  handleUserLogin,
  handleChange,
  handleRememberMeChange,
  rememberMe,
  formData,
}: LoginFormProps) => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  function togglePasswordVisibility() {
    setPasswordVisible((prevPasswordVisible) => !prevPasswordVisible);
  }

  return (
    <form onSubmit={handleUserLogin} className="mt-12 flex flex-col gap-4">
      <div className="flex items-center gap-4 bg-gray-100 p-2 rounded">
        <img className="w-5" src={emailIcon} alt="mail icon" />
        <input
          className="text-[14px] focus:outline-none w-full"
          onChange={handleChange}
          name="email"
          type="email"
          placeholder="Email"
          value={formData.email}
        />
      </div>
      <div className="flex justify-between items-center bg-gray-100 p-2 rounded">
        <div className="flex items-center gap-4 w-full">
          <img className="w-5 " src={lockIcon} alt="lock icon" />
          <input
            className="text-[14px] focus:outline-none w-full"
            onChange={handleChange}
            name="password"
            type={passwordVisible ? "text" : "password"}
            placeholder="Password"
            value={formData.password}
          />
        </div>
        <img
          src={passwordVisible ? visibilitylIcon : visibilityOffIcon}
          alt="toggle password visibility"
          onClick={togglePasswordVisibility}
          className="w-4 cursor-pointer"
        />
      </div>
      <div>
        <label className="text-[14px] flex items-center">
          <input
            type="checkbox"
            checked={rememberMe}
            onChange={handleRememberMeChange}
            className="mr-2 cursor-pointer "
          />
          Remember Me
        </label>
      </div>
      <input
        className="bg-amber-300 rounded-xl py-[4px] text-[14px] mt-3 cursor-pointer active:bg-amber-400"
        type="submit"
        value="Login"
      />
      <div className="mt-5">
        <p className="flex justify-center items-center text-sm">
          Don't have an account?
        </p>
        <Link
          className="border-amber-300 border-2 rounded-xl py-[4px] text-sm flex justify-center items-center mt-2 cursor-pointer active:bg-amber-300 "
          to="/signup"
        >
          Sign Up
        </Link>
      </div>
    </form>
  );
};

export default LoginForm;
