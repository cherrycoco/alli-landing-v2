import React, { useState } from 'react';
import UserContext from './quizContext';
import { initialUserState } from './initialState';

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(initialUserState);

  const value = {
    user,
    setUser,
  };

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;