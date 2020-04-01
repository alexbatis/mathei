import { createAction } from '@reduxjs/toolkit';
import { User } from '../../models/User';


export const loginAction = createAction<User>('auth/login')
export const logoutAction = createAction('auth/logout')

