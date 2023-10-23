import React, { useCallback } from 'react';
import './App.scss';
import { AddUserForm } from './components/AddUserForm';
import { AppContainer } from './components/AppContainer';
import { UserList } from './components/UserList';
import { useUsers } from './useUsers';
import { postUser } from './api/users.service';

const colorosFromServer = [
  { id: 1, name: 'Black' },
  { id: 2, name: 'DeepPink' },
  { id: 3, name: 'Red' },
  { id: 4, name: 'Aquamarine' },
  { id: 5, name: 'Gold' },
  { id: 6, name: 'YellowGreen' },
  { id: 7, name: 'Yellow' },
];

export const App: React.FC = () => {
  const { isLoading, users } = useUsers();

  const addUser = useCallback((name: string, carColorId: number) => {
    // eslint-disable-next-line no-console
    console.log('Here we need to add method implementation', name, carColorId);
    postUser({
      name,
      carColorId,
    // eslint-disable-next-line no-alert
    }).then(() => alert('User added, please refresh page'));
  }, []);

  if (isLoading) {
    return <div>Is Loading...</div>;
  }

  return (
    <AppContainer>
      <UserList users={users} />

      <AddUserForm colors={colorosFromServer} addUser={addUser} />
    </AppContainer>
  );
};
