import React from 'react'
import {useState, useEffect, useContext} from 'react';
import data from './data'

const AppContext = React.createContext();

const AppProvider = ({children}) => {

    return (
        <AppContext.Provider value={{

        }}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext);
}

export { AppProvider, AppContext }