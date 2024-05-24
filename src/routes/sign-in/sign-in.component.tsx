import {
  signinWithGooglePopup,
  signinWithGoogleRedirect,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signinWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  const logGoogleRedirectUser = async () => {
    const { user } = await signinWithGoogleRedirect();
    console.log({ user });
  };

  return (
    <div>
      <h2>Sign In Page 🐣</h2>
      <button onClick={logGoogleUser}>Sign In with Google Popup</button>
      <button onClick={logGoogleRedirectUser}>
        Sign In with Google Redirect
      </button>
    </div>
  );
};

export default SignIn;
