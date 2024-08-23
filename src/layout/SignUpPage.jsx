import { SignUp } from "@clerk/clerk-react";

const SignUpPage = () => {
  const handleSignIn = async () => {
    try {
      toast.success("Successfully Sign Up!");
    } catch (error) {
      toast.error("Sign-in failed, please try again.");
    }
  };

  return (
    <div className="flex justify-center items-center mt-16 md:mt-24 lg:mt-32 xl:mt-44">
      <SignUp afterSignIn={handleSignIn} />
    </div>
  );
};

export default SignUpPage;
