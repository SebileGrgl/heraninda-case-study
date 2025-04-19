import { ChangeEvent, FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { SignupData } from "../types";
import { toast } from "react-toastify";
import SignupForm from "../components/SignupForm";

const SignupPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<SignupData>({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const signupUser = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { fullName, email, password, confirmPassword } = formData;

    const isFormValid = fullName && email && password && confirmPassword;

    if (!isFormValid) {
      toast.warn("Please fill in all the fields");
      return;
    }

    const isPasswordMatch = password === confirmPassword;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d\S]{6,}$/;
    const isPasswordAvailable = passwordRegex.test(password);

    if (!isPasswordAvailable) {
      toast.warn(
        "Password must be minimum 6 characters, at least one uppercase letter, one lowercase letter and one number"
      );
      return;
    }

    if (!isPasswordMatch) {
      toast.warn("Passwords do not match");
      return;
    }

    if (isFormValid && isPasswordAvailable && isPasswordMatch) {
      const userList = localStorage.getItem("userList");
      const userListData = userList ? JSON.parse(userList) : [];

      const isAlreadyRegistered = userListData.find(
        (user: SignupData) => user.email === email
      );

      if (isAlreadyRegistered) {
        toast.error(
          "This email is already registered. Please use a different email."
        );
        return;
      }

      const newUser = { fullName, email, password };
      const updatedUserListData = [...userListData, newUser];
      localStorage.setItem("userList", JSON.stringify(updatedUserListData));

      toast.success("Signup successful!");
      navigate("/");
    } else {
      toast.error("Signup failed. Please try again.");
    }
  };

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  }
  return (
    <div className="bg-sky-100 p-10 w-screen h-screen flex justify-center items-center ">
      <div className="  bg-white p-10 w-full sm:w-[450px] rounded-xl shadow-2xl">
        <h1 className="flex justify-center items-center text-xl font-light">
          Create your account
        </h1>

        <SignupForm
          handleChange={handleChange}
          signupUser={signupUser}
          formData={formData}
        />
      </div>
    </div>
  );
};

export default SignupPage;
