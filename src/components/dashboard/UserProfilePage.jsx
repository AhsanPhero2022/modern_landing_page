import { UserProfile } from "@clerk/clerk-react";

const UserProfilePage = () => {
  return (
    <>
      <div className="flex justify-center items-center mt-8">
        <UserProfile />
      </div>
    </>
  );
};

export default UserProfilePage;
