import React, { useEffect } from 'react';
import styled from 'styled-components';
import ControlsLayout from './components/ControlsLayout';
import UsersList from './components/UsersList';
import Loader from './components/Loader';
import { connect } from 'react-redux';
import { fetchUsersData } from './redux/actions';

const Wrapper = styled.div`
  width: 70%;
  margin: 0 auto;
  padding: 30px;
  padding-bottom: 0;
`;

const App = ({ getUsersData, usersData }) => {
  useEffect(() => {
    getUsersData();
  }, [getUsersData]);

  const usersList = usersData ? <UsersList /> : <Loader/>;

  return (
    <Wrapper>
      <ControlsLayout />
      { usersList }
    </Wrapper>
  );
}
const MSTP = (state) => {
  return {
    usersData: state.usersData
  }
}
const MATP = (dispatch) => {
  return {
    getUsersData: (usersData) => dispatch(fetchUsersData(usersData))
  }
}

export default connect(MSTP, MATP)(App);
