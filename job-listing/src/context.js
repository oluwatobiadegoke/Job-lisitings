import React from 'react'
import {useState, useEffect, useContext} from 'react';
import {data} from './data'

const AppContext = React.createContext();

const AppProvider = ({children}) => {

    const [people, setPeople] = useState(data);
    const [filterOpen, setFilterOpen] = useState(false);

    return (
        <AppContext.Provider value={{
            people,
            filterOpen,
        }}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext);
}

export { AppProvider, AppContext }