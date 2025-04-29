import { Navigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";

function PrivateRoute({ children }) {
  const [user, loading] = useAuthState(auth);

  const authRequired = process.env.REACT_APP_AUTH_REQUIRED;

  if (authRequired === "true") {
    if (loading) return null; // or a spinner
    if (!user || !user.emailVerified) return <Navigate to="/authentication" />;
  }

  return children;
}

export default PrivateRoute;
