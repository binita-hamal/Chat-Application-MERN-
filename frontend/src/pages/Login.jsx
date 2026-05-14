import AuthCard from "../components/AuthCard";

function Login() {
       const signupFields = [
  {
    label: "Name",
    type: "text",
    placeholder: "Enter your username",
  },
  {
    label: "Password",
    type: "password",
    placeholder: "Enter your password",
  },
]
  return (
    <div>
       <AuthCard
            title="Login"
            fields={signupFields}
            buttonText="Login"
            footerText="Don't have an account?"
            footerLink="/signUp"
            footerLinkText="Sign Up"
          />
    </div>
  )
}

export default Login
