import React, { useEffect, useState } from "react";
import "../css/profile.css";
import { getUserInfo } from "../service/userService";
import ProfileCard from "../components/profile/profileCard";
import EditUserInfoForm from "../components/forms/editUserInfoForm";
import ChangePasswordForm from "../components/forms/changePasswordForm";

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
  const [showChangePassword, setShowChangePassword] = useState(false);

  const handleEditProfileClose = () => {
    setShowEditProfile(false);
  };

  const handleChangePasswordClose = () => {
    setShowChangePassword(false);
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
      <ProfileCard
        user={user}
        setShowEditProfile={setShowEditProfile}
        setShowChangePassword={setShowChangePassword}
      />
      <EditUserInfoForm
        show={showEditProfile}
        handleClose={handleEditProfileClose}
      />
      <ChangePasswordForm
        show={showChangePassword}
        handleClose={handleChangePasswordClose}
      />
    </div>
  );
};

export default Profile;
