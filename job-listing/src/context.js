import React from 'react'
import {useState, useEffect, useContext} from 'react';
import {data} from './data'

const AppContext = React.createContext();

const AppProvider = ({children}) => {

    const [people, setPeople] = useState([]);
    const [filters, setFilters] = useState([])


    useEffect(() => {
        setPeople(data)
    }, [])

    const theFilter = ({role, level, languages, tools}) => {
        if(filters.length === 0) {
            return true
        }
        const tags = [role, level]
        if(languages) {
            tags.push(...languages)
        }
        if(tools) {
            tags.push(...tools)
        }
        return filters.every((filter) => tags.includes(filter))
    }

    const handleFilter = (tag) => {
        if(filters.includes(tag)) {
            return true;
        }
        setFilters([...filters, tag]);
    }
    
    const newPeople = people.filter(theFilter)

    const removeFilter = (filt) => {
        const newfilter = filters.filter(filter => filter !== filt)
        setFilters(newfilter);
    }

    const clearFilters = () => {
        setFilters([]);
    }

    return (
        <AppContext.Provider value={{
            newPeople,
            filters,
            handleFilter,
            removeFilter,
            clearFilters
        }}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext);
}

export { AppProvider, AppContext }