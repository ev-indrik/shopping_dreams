import { signinWithGooglePopup } from "../../utils/firebase/firebase.utils";

const SignIn = () => {
  const logGoogleUser = async () => {
    const response = await signinWithGooglePopup();
    console.log(response);
  };

  return (
    <div>
      <h2>Sign In Page 🐣</h2>
      <button onClick={logGoogleUser}>Sign In with Google Popup</button>
    </div>
  );
};

export default SignIn;
