// eslint-disable-next-line no-unused-vars
import React from 'react';
import MySchedul from './MySchedul';
import UserDash1 from '../components/UserDash1';
export default function Home() {
  return (
    <div className="flex ">
      <UserDash1 />
      <MySchedul />
    </div>
  );
}
