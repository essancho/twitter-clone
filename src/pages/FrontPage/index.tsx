import React from 'react';
import SidebarLeft from '../../modules/SidebarLeft';
import { createUser } from '../../store/Auth/authSlice';
import { useAppDispatch, useAppSelector } from '../../store/hooks';

const FrontPage = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.users.user);
  const handleSubmit = () => {
    dispatch(createUser());
  };
  return (
    <>
      <SidebarLeft />
      <div>{user}</div>
      <button onClick={handleSubmit}>User</button>
    </>
  );
};

export default FrontPage;
