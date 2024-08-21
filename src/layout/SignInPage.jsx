import { SignIn } from "@clerk/clerk-react";

const SignInPage = () => {
  return (
    <div className="flex justify-center items-center mt-16 md:mt-24 lg:mt-32 xl:mt-44">
      <SignIn />
    </div>
  );
};

export default SignInPage;
