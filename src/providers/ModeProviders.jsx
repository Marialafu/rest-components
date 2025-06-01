import { useState } from 'react';
import { ModeContext } from '../contexts/ModesContext';

const ModeProviders = ({ children }) => {
  const [lightMode, setLightMode] = useState(true);
  return (
    <ModeContext value={{ lightMode, setLightMode }}>{children}</ModeContext>
  );
};

export default ModeProviders;
