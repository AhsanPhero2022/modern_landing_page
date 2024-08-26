import { SignIn } from "@clerk/clerk-react";
import { toast } from "react-toastify";
import { heroBackground } from "../assets";
import { dark } from "@clerk/themes";

const SignInPage = () => {
  const handleSignIn = async () => {
    try {
      toast.success("Successfully signed in!");
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
        <SignIn
          af
          afterSignIn={handleSignIn}
          appearance={{
            baseTheme: dark,
          }}
        />
      </div>
    </main>
  );
};

export default SignInPage;
