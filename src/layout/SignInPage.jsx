import { SignIn } from "@clerk/clerk-react";
import { toast } from "react-toastify";

const SignInPage = () => {
  const handleSignIn = async () => {
    try {
      toast.success("Successfully signed in!");
    } catch (error) {
      toast.error("Sign-in failed, please try again.");
    }
  };

  return (
    <div className="flex justify-center items-center mt-16 md:mt-24 lg:mt-32 xl:mt-44">
      <SignIn afterSignIn={handleSignIn} />
    </div>
  );
};

export default SignInPage;
