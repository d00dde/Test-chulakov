import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import ControlsLayout from './components/ControlsLayout';
import UsersList from './components/UsersList';
import Loader from './components/Loader';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsersData } from './redux/actions';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

export default () => {
  const { isUsersData } = useSelector ((state) => ({ isUsersData: !!state.usersData }));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsersData());
  }, [dispatch]);

  const usersList = isUsersData ? <UsersList /> : <Loader/>;
  return (
    <Container>
      <ControlsLayout />
      { usersList }
    </Container>
  );
}
