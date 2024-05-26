const SignInForm = () => {
  return (
    <div>
      <h2>Sigh Up with Your Email & Password</h2>
      <form>
        <label>Display Name</label>
        <input type="text" required />

        <label>Email</label>
        <input type="email" required />

        <label>Password</label>
        <input type="password" required />

        <label>Confirm Password</label>
        <input type="password" required />
      </form>
    </div>
  );
};
