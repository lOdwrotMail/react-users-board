import { useEffect, useState } from 'react';
import { UserWithColor } from './types';
import { getColors } from './api/color.service';
import { getUsers } from './api/users.service';

export const useUsers = () => {
  const [users, setUsers] = useState<UserWithColor[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    Promise.all([getUsers(), getColors()])
      .then(([serverUsers, colors]) => {
        setUsers(
          serverUsers.map((user) => ({
            ...user,
            carColor: colors.find((color) => color.id === user.carColorId),
          })),
        );
      })
      .finally(() => setIsLoading(false));
  }, []);

  return { users, isLoading };
};
