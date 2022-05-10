import React, {useState, createContext} from 'react';

export const NavigationContext = createContext();

const NavigationProvider = ({children}) => {
  const [navigation, setNavigation] = useState(null);

  const value = {
    navigation,
    setNavigation,
  };

  return (
    <NavigationContext.Provider value={value}>
      {children}
    </NavigationContext.Provider>
  );
};

export default NavigationProvider;
