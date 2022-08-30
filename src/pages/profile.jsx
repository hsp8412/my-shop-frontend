import React, { useEffect, useState } from "react";
import "../css/profile.css";
import { getUserInfo } from "../service/userService";
import ProfileCard from "../components/profile/profileCard";
import EditUserInfoForm from "../components/forms/editUserInfoForm";

const Profile = () => {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    membershipType: "",
    createdAt: "",
    streetAddress: "",
    aptOrSuite: "",
    city: "",
    province: "",
    postalCode: "",
  });

  const [showEditProfile, setShowEditProfile] = useState(false);

  const handleEditProfileClose = () => {
    setShowEditProfile(false);
  };

  useEffect(() => {
    const fetchUser = async () => {
      const data = await getUserInfo();
      setUser(data);
    };
    fetchUser();
  }, []);

  return (
    <div>
      <ProfileCard user={user} setShowEditProfile={setShowEditProfile} />
      <EditUserInfoForm
        show={showEditProfile}
        handleClose={handleEditProfileClose}
      ></EditUserInfoForm>
    </div>
  );
};

export default Profile;
