import { User } from '../types';
import { client } from './fetchClient';

export const getUsers = () => {
  return client.get<User[]>('/users');
};

export const getUser = (id: number) => {
  return client.get<User>(`/users/${id}`);
};
