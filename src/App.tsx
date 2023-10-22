import React, { useCallback } from 'react';
import './App.scss';
import { AddUserForm } from './components/AddUserForm';
import { AppContainer } from './components/AppContainer';
import { UserList } from './components/UserList';
import { prepareUsers } from './helpers';
import { UserWithColor } from './types';
import { useUsers } from './useUsers';

const usersFromServer = [
  { id: 1, name: 'Joe Biden', carColorId: 5 },
  { id: 2, name: 'Elon Musk', carColorId: 4 },
  { id: 3, name: 'Pan Roman', carColorId: 2 },
];

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
    const color = colorosFromServer.find((c) => c.id === carColorId);
    const newUser: UserWithColor = {
      id: Math.random(),
      carColorId,
      name,
      carColor: color,
    };

    // setUsers((prev) => [...prev, newUser]);
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
