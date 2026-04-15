import React, { createContext, useContext, ReactNode } from 'react';

interface TailReactBaseColorContextType {
  color: string;
}

// Create context with default color as indigo
const TailReactBaseColorContext = createContext<TailReactBaseColorContextType>({
  color: 'indigo',
});

interface TailReactBaseColorProviderProps {
  children: ReactNode;
  color?: string;
}

export const TailReactBaseColorProvider: React.FC<TailReactBaseColorProviderProps> = ({
  children,
  color = 'indigo',
}) => {
  return (
    <TailReactBaseColorContext.Provider value={{ color }}>
      {children}
    </TailReactBaseColorContext.Provider>
  );
};

// Hook for consuming the color context
export const useTailReactBaseColor = (): TailReactBaseColorContextType => {
  return useContext(TailReactBaseColorContext);
};
