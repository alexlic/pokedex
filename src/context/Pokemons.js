import React, {useState, createContext} from 'react';

export const PaginationContext = createContext();

const PaginationProvider = ({children}) => {
  const [offset, setOffset] = useState([]);

  const value = {
    offset,
    setOffset,
  };

  return (
    <PaginationContext.Provider value={value}>
      {children}
    </PaginationContext.Provider>
  );
};

export default PaginationProvider;
