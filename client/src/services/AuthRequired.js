import { Navigate, useLocation } from "react-router-dom";
import AuthHelpers from "./AuthHelpers";

const AuthRequired = ({ setShow, children }) => {
    const auth = AuthHelpers.getCurrentUser();
    const location = useLocation();

    if (auth) {
        setShow(false);
        return children;
    } else {
        setShow(true);
        return (
            <Navigate to="/login" replace state={{ path: location.pathname }} />
        );
    }
};

export default AuthRequired;