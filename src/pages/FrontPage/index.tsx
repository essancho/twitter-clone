import React from 'react';
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
      <div>{user}</div>
      <button onClick={handleSubmit}>User</button>
    </>
  );
};

export default FrontPage;
