import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth/auth';
import lawyersIndexReducer from './lawyers/lawyersIndex';
import reservationsCreate from './reservations/reservationsCreate';
import usersEdit from './users/usersEdit';

const store = configureStore({
  reducer: {
    auth: authReducer,
    lawyers: lawyersIndexReducer,
    reservations_create: reservationsCreate,
    users_edit: usersEdit,
  },
});

export default store;
