import React, { useEffect, useState } from "react";
import "../css/profile.css";
import { getUserInfo } from "../service/userService";
import dayjs from "dayjs";
import EditProfile from "../components/modal/editProfile";
import ProfileCard from "../components/profile/profileCard";

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
      <EditProfile
        show={showEditProfile}
        handleClose={handleEditProfileClose}
        user={user}
      ></EditProfile>
    </div>
  );
};

export default Profile;
