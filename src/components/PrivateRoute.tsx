// src/components/PrivateRoute.tsx
import { Navigate } from "react-router-dom";

interface PrivateRouteProps {
  children: JSX.Element;
}

const PrivateRoute = ({ children }: PrivateRouteProps) => {
  const token = localStorage.getItem("token");
  const loginTime = localStorage.getItem("loginTime");

  if (!token || !loginTime) {
    return <Navigate to="/auth" replace />;
  }

  const currentTime = Date.now();
  const oneMinute = 600 * 1000; // 1 min in ms

  if (currentTime - parseInt(loginTime) > oneMinute) {
    // Session expired
    localStorage.removeItem("token");
    localStorage.removeItem("loginTime");
    return <Navigate to="/auth" replace />;
  }

  return children;
};

export default PrivateRoute;
