import { SignupFormProps } from "../types";
import emailIcon from "../assets/mail.svg";
import lockIcon from "../assets/lock.svg";
import visibilityIcon from "../assets/visibility.svg";
import visibilityOffIcon from "../assets/visibility-off.svg";
import profileIcon from "../assets/person.svg";
import { useState } from "react";
import { Link } from "react-router-dom";

const SignupForm = ({
  handleChange,
  signupUser,
  formData,
}: SignupFormProps) => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  function togglePasswordVisibility() {
    setPasswordVisible((prevPasswordVisible) => !prevPasswordVisible);
  }

  return (
    <form onSubmit={(e) => signupUser(e)} className="mt-12 flex flex-col gap-4">
      <div className="flex items-center gap-4 bg-gray-100 p-2 rounded">
        <img src={profileIcon} alt="person-icon" className="w-5" />
        <input
          className="text-[14px] focus:outline-none w-full"
          type="text"
          placeholder="Full Name"
          name="fullName"
          onChange={handleChange}
          value={formData.fullName}
        />
      </div>
      <div className="flex items-center gap-4 bg-gray-100 p-2 rounded">
        <img src={emailIcon} alt="mail-icon" className="w-5" />
        <input
          className="text-[14px] focus:outline-none w-full"
          type="email"
          placeholder="Email"
          name="email"
          onChange={handleChange}
          value={formData.email}
        />
      </div>
      <div className="flex justify-between items-center  bg-gray-100 p-2 rounded">
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
          src={passwordVisible ? visibilityIcon : visibilityOffIcon}
          alt="toggle password visibility"
          onClick={togglePasswordVisibility}
          className="w-4 cursor-pointer"
        />
      </div>
      <div className="flex items-center gap-4 bg-gray-100 p-2 rounded">
        <img className="w-5 " src={lockIcon} alt="lock icon" />
        <input
          className="text-[14px] focus:outline-none w-full"
          onChange={handleChange}
          name="confirmPassword"
          type={passwordVisible ? "text" : "password"}
          placeholder="Confirm Password"
          value={formData.confirmPassword}
        />
      </div>
      <input
        type="submit"
        value="Signup"
        className="bg-amber-300 rounded-xl py-[4px] text-[14px] mt-3 cursor-pointer active:bg-amber-400"
      />

      <div className="mt-5">
        <p className="flex justify-center items-center text-sm">
          Already have an account?
        </p>
        <Link
          className="border-amber-300 border-2 rounded-xl py-[4px] text-sm flex justify-center items-center mt-2 cursor-pointer active:bg-amber-300 "
          to="/login"
        >
          Login
        </Link>
      </div>
    </form>
  );
};

export default SignupForm;
