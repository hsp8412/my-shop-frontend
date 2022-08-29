import React from "react";
import dayjs from "dayjs";

const ProfileCard = ({ user, setShowEditProfile }) => {
  return (
    <div className="container mt-4">
      <div className="card mb-4">
        <div className="card-body d-flex flex-column">
          <h2 className="card-title mb-3 profile-title">My Account</h2>
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-6">
                <p>First Name: {user.firstName}</p>
                <p>Last Name: {user.lastName}</p>
                <p>Email: {user.email}</p>
                {user.phone ? <p>Phone: {user.phone}</p> : null}
                <p>Membership: {user.membershipType}</p>
                <p>
                  Created Date:{" "}
                  {dayjs(user.createdAt).format("YYYY-MM-DD HH:mm:ss")}
                </p>
                <div
                  className="btn btn-primary"
                  onClick={() => {
                    setShowEditProfile(true);
                  }}
                >
                  Edit
                </div>
                <a href="#" className="btn btn-primary mx-2">
                  Change Password
                </a>
              </div>
              <div className="divide-line"></div>
              <div className="col-12 col-md-6 mt-3 mt-md-0">
                {user.aptOrSuite ? <p>Apt/Suite: {user.aptOrSuite}</p> : null}
                <p>Street Address: {user.streetAddress}</p>
                <p>City: {user.city}</p>
                <p>Province: {user.province}</p>
                <p>Postal Code: {user.postalCode}</p>
                <a href="#" className="btn btn-primary">
                  Edit Address
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
