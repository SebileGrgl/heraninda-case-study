import { useNavigate } from "react-router-dom";
import LoginForm from "../components/LoginForm";
import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { LoginData, User } from "../types";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const mockUser: User = {
  fullName: "Max Verstappen",
  email: "max@gmail.com",
  password: "max1234",
};

const LoginPage = () => {
  const { user, login } = useAuth();
  const navigate = useNavigate();
  const [formData, setFormData] = useState<LoginData>({
    email: "",
    password: "",
  });
  const [rememberMe, setRememberMe] = useState(false);

  useEffect(() => {
    if (!user) {
      const rememberedEmail = localStorage.getItem("rememberedEmail");

      if (rememberedEmail) {
        setFormData((prevFormData) => ({
          ...prevFormData,
          email: rememberedEmail,
        }));
        setRememberMe(true);
      }
    } else {
      navigate("/");
    }
  }, [user]);

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  }

  function handleRememberMeChange(event: React.ChangeEvent<HTMLInputElement>) {
    setRememberMe(event.target.checked);
  }

  async function handleUserLogin(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const { email, password } = formData;
    if (email && password) {
      const userList = localStorage.getItem("userList");
      const userListData = userList ? JSON.parse(userList) : [];
      const matchedUser = userListData.find(
        (user: User) => user.email === email
      );

      if (matchedUser) {
        login(mockUser);
        navigate("/");
        toast.success("Successfully logged in!");
        if (rememberMe) {
          localStorage.setItem("rememberedEmail", email);
        } else {
          localStorage.removeItem("rememberedEmail");
        }
      } else {
        toast.error("Incorrect email or password");
      }
    } else {
      toast.warn("Please fill in all fields!");
    }
  }

  return (
    <div className="bg-sky-100 p-10 w-screen h-screen  flex justify-center items-center ">
      <div className="  bg-white p-10 w-full  sm:w-[450px]  rounded-xl shadow-2xl">
        <h1 className="flex justify-center items-center text-xl font-light">
          Log into your account
        </h1>

        <LoginForm
          handleUserLogin={handleUserLogin}
          handleChange={handleChange}
          handleRememberMeChange={handleRememberMeChange}
          rememberMe={rememberMe}
          formData={formData}
        />
      </div>
      <ToastContainer />
    </div>
  );
};

export default LoginPage;
