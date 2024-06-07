import { BaseSyntheticEvent, useState } from "react";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
  createUserDocumentFromAuth2,
} from "../../utils/firebase/firebase.utils";
import { UserCredential } from "firebase/auth";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm: React.FC = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event: BaseSyntheticEvent) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const response = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      console.log(response);

      const userData = response as UserCredential;
      const { user } = userData;
      console.log("USER", user);

      const res2 = await createUserDocumentFromAuth2(user, { displayName });
      console.log("RES2===>", res2);

      // resetFormFields();
    } catch (error: unknown) {
      if (
        error instanceof Error &&
        "code" in error &&
        (error as any).code === "auth/email-already-in-use"
      ) {
        alert("This email is already in use");
      } else {
        console.error("Unable to create user:", error);
      }
    }
  };

  const handleChange = (event: BaseSyntheticEvent) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div>
      <h2>Sign Up with Your Email & Password</h2>
      <form onSubmit={handleSubmit}>
        <label>Display Name</label>
        <input
          type="text"
          required
          onChange={handleChange}
          name="displayName"
          value={displayName}
        />

        <label>Email</label>
        <input
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />

        <label>Password</label>
        <input
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />

        <label>Confirm Password</label>
        <input
          type="password"
          required
          onChange={handleChange}
          name="confirmPassword"
          value={confirmPassword}
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUpForm;
