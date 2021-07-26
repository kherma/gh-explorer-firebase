import React from 'react';

type InnerProps = {
  avatarUrl: string;
  userName: string;
};

const UserData = ({ avatarUrl, userName }: InnerProps) => (
  <>
    <p className="mb-2 font-black text-gray-600 uppercase dark:text-gray-400 transition-colors">Sing in as:</p>
    <span className="flex items-center justify-evenly">
      <img src={avatarUrl} alt="user" className="border border-black rounded dark:border-white w-7 transition-colors" />
      <small className="overflow-hidden uppercase overflow-ellipsis transition-colors">{userName}</small>
    </span>
  </>
);

export default UserData;
