import { useContext } from 'react';
import ProContext from './proContext';

const usePro = () => {
  const context = useContext(ProContext);
  if (!context) {
    throw new Error('usePro must be used within a ProProvider');
  }
  return context;
};

export default usePro;