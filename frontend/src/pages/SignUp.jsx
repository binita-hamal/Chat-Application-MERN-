import AuthCard from "../components/AuthCard";

function SignUp() {
  const signupFields = [
    {
      label: "Full Name",
      type: "text",
      placeholder: "Enter your name",
    },

    {
      label: "Email Address",
      type: "email",
      placeholder: "Enter your email",
    },
    {
      label: "Password",
      type: "password",
      placeholder: "Enter your password",
    },
  ];

  return (
    <div>
      <AuthCard
        title="Create Account"
        fields={signupFields}
        buttonText="Sign Up"
        footerText="Already have an account?"
        footerLink="/login"
        footerLinkText="Login"
      />
    </div>
  );
}

export default SignUp;
