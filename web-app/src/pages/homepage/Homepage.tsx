import { useAuth0 } from "@auth0/auth0-react";
import { useState } from "react";
import getUser from "../../api/getUser";
import OnboardModal from "./OnBoardModal";

const Homepage = () => {
  const [onboardModalOpen, setOnboardModalOpen] = useState<boolean>(false);

  const { user, loginWithPopup, logout, getAccessTokenSilently } = useAuth0();

  const handleLoginClick = async () => {
    await loginWithPopup();
    const token = await getAccessTokenSilently();
    const userResult = await getUser(token);
    if (!userResult) {
      setOnboardModalOpen(true);
    }
  }

  const handleClose = () =>{
    logout();
    setOnboardModalOpen(false);
  }
  return (
    <>
      <OnboardModal isOpen={onboardModalOpen} handleClose={handleClose} />
      {user ? (
        <button onClick={() => logout()}>Logout</button>
      ) : (
        <button
          onClick={handleLoginClick}
        >
          Login
        </button>
      )}
      {!user && (
        <button onClick={() => loginWithPopup({ screen_hint: "signup" })}>
          Sign Up
        </button>
      )}
    </>
  );
};
export default Homepage;
