import { BaseSyntheticEvent, useState } from "react";
import { createAuthUserWithEmailAndPassword } from "../../utils/firebase/firebase.utils";

const defaultFormFileds: Record<string, string> = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFileds);
  const { displayName, email, password, confirmPassword } = formFields;

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("Password does not match");
      return;
    }
    try {
      const response = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      console.log(response);
    } catch (error) {
      console.log("Unable to create user", error);
    }
  };

  const handleChange = (event: BaseSyntheticEvent) => {
    const { name, value } = event.target;
    console.log(name);
    console.log(value);
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div>
      <h2>{"Sigh Up with Your Email & Password"}</h2>
      <form
        onSubmit={() => {
          handleSubmit;
        }}
      >
        <label>{"Display Name"}</label>
        <input
          type={"text"}
          required
          onChange={handleChange}
          name={"displayName"}
          value={displayName}
        />

        <label>{"Email"}</label>
        <input
          type={"email"}
          required
          onChange={handleChange}
          name={"email"}
          value={email}
        />

        <label>{"Password"}</label>
        <input
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />

        <label>{"Confirm Password"}</label>
        <input
          type="password"
          required
          onChange={handleChange}
          name="confirmPassword"
          value={confirmPassword}
        />
        <button type={"submit"}>{"Sign Up"}</button>
      </form>
    </div>
  );
};

export default SignUpForm;
