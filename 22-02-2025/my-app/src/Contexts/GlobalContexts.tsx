import React, { createContext, ReactNode, useReducer } from 'react'
import { initialState, reducer } from '../Reducers/reducers';

type GlobalContextProps = {
    state: typeof initialState;
    dispatch : React.Dispatch<any>;
}

const GlobalContexts = createContext<GlobalContextProps | undefined>(undefined);

const GlobalProvider = ({ children }: { children: ReactNode }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
  
    return (
      <GlobalContexts.Provider value={{ state, dispatch }}>
        {children}
      </GlobalContexts.Provider>
    );
  };

export  {GlobalContexts,GlobalProvider}