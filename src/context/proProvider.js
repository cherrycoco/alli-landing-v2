import React, { useState } from 'react';
import ProContext from './proContext';
import { initialProState } from './initialState';

const ProProvider = ({ children }) => {
  const [pro, setPro] = useState(initialProState);

  const value = {
    pro,
    setPro,
  };

  return (
    <ProContext.Provider value={value}>
      {children}
    </ProContext.Provider>
  );
};

export default ProProvider;