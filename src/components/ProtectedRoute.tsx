import { JSX } from "react";
import { useAuth } from "../context/AuthContext";
import { Navigate } from "react-router-dom";
import Loading from "./Loading";

const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const { user, isAuthLoading } = useAuth();

  if (isAuthLoading) return <Loading />;

  return user ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
