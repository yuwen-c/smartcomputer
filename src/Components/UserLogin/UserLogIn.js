import React from "react";

const UserLogIn = ({ user }) => {
  return (
    <article className="mw8 pt4 ph1 center">
      <div className="f3 fw5">{user.name}, your current entries is...</div>
      <div className="f3 fw8 pt1 pb2">#{user.entries}</div>
    </article>
  );
};

export default UserLogIn;
