import { useAuth0 } from "@auth0/auth0-react"
import { Navigate } from "react-router-dom";

interface ProtectedRouteProps {
 children: JSX.Element;
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
    const { user, isLoading } = useAuth0();

    if (isLoading) {
        return <>Loading</>
    }

    return user? <>{children}</>: <Navigate to="/" />
}

export default ProtectedRoute;