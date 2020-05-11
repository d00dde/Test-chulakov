import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import ControlsLayout from './components/ControlsLayout';
import UsersList from './components/UsersList';
import Loader from './components/Loader';
import Error from './components/Error';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsersData } from './redux/actions';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

export default () => {
  const { isUsersData, error } = useSelector ((state) => ({
    isUsersData: !!state.usersData,
    error: state.error
  }));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsersData());
  }, [dispatch]);

  const content = error ? <Error error={error} /> : isUsersData ? <UsersList /> : <Loader/>;
  return (
    <Container>
      <ControlsLayout />
      { content }
    </Container>
  );
}
