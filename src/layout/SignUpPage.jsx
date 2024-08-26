import { SignUp } from "@clerk/clerk-react";
import { heroBackground } from "../assets";
import { dark } from "@clerk/themes";
const SignUpPage = () => {
  const handleSignIn = async () => {
    try {
      toast.success("Successfully Sign Up!");
    } catch (error) {
      toast.error("Sign-in failed, please try again.");
    }
  };

  return (
    <main className="relative h-screen w-full">
      <div className="absolute size-full">
        <img src={heroBackground} alt="background" className="size-full" />
      </div>

      <div className="flex justify-center  items-center glassmorphism-auth h-screen w-full">
        <SignUp
          afterSignIn={handleSignIn}
          appearance={{
            baseTheme: dark,
          }}
        />
      </div>
    </main>
  );
};

export default SignUpPage;
