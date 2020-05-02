import React, { useEffect } from 'react';
import styled from 'styled-components';
import ControlsLayout from './components/ControlsLayout';
import UsersList from './components/UsersList';
import Loader from './components/Loader';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsersData } from './redux/actions';

const Wrapper = styled.div`
  width: 70%;
  margin: 0 auto;
  padding: 30px;
  padding-bottom: 0;
`;

export default () => {
  const { usersData } = useSelector ((state) => {
    return { usersData: state.usersData };
  });
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(fetchUsersData(usersData));
  }, [dispatch, usersData]);

  const usersList = usersData ? <UsersList /> : <Loader/>;

  return (
    <Wrapper>
      <ControlsLayout />
      { usersList }
    </Wrapper>
  );
}
