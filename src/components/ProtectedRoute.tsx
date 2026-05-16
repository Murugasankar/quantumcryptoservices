import { Navigate } from "react-router-dom";
import { auth } from "../firebase";

function ProtectedRoute({ children }: any) {

  const user = auth.currentUser;

  if (!user) {

    return <Navigate to="/login" />;

  }

  return children;
}

export default ProtectedRoute;