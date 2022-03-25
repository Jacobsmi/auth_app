import { useAuth0 } from "@auth0/auth0-react";
import processLogin from "./processLogin";

const Homepage = () => {
    const { user, loginWithPopup, logout } = useAuth0();
    return (
        <> {
            user ?
                <button onClick={()=>logout()}>Logout</button> :
                <button onClick={async () => {
                    await loginWithPopup();
                    processLogin();
                }}>Login</button>
        }
        {!user&& <button onClick={()=>loginWithPopup({screen_hint: "signup"})}>Sign Up</button>}
        </>
    )
}
export default Homepage;