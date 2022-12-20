import React, { useReducer, useMemo } from 'react';
import { resultReducer } from '../reducers/reducer';

export const MyContext = React.createContext();

export const ACTIONS = {
  result: 'RESULT',
};

const initialState = {
  result: {
    score: 0,
  },
};

const mainReducer = ({ result }, action) => ({
  result: resultReducer(result, action),
});

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(mainReducer, initialState);

  const contextValue = useMemo(() => {
    return {
      state,
      dispatch,
    };
  }, [state, dispatch]);

  return (
    <MyContext.Provider value={contextValue}>{children}</MyContext.Provider>
  );
};
