import React, { createContext, useState } from 'react';

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [selectedColor, setSelectedColor] = useState('#DB7093');

  return (
    <DataContext.Provider
      value={{
        selectedColor,
        setSelectedColor,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
