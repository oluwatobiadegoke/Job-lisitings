import React from 'react'
import {useState, useEffect, useContext} from 'react';
import {data} from './data'

const AppContext = React.createContext();

const AppProvider = ({children}) => {

    const [people, setPeople] = useState(data);
    const [filterOpen, setFilterOpen] = useState(false);
    const [tags, setTags] = useState([]);

    const handleRoleFilter = (role) => {
        if(people.length === data.length) {
            const newPeople = data.filter((person) => person.role === role)
            setPeople(newPeople);
            setFilterOpen(true);
            if(!tags.includes(role)) {
                setTags([...tags, role])
            } else {
                setTags([...tags])
            }
        }
        if(data.length > people.length) {
            const newPeople = people.filter((person) => person.role === role)
            setPeople(newPeople);
            setFilterOpen(true);
            if(!tags.includes(role)) {
                setTags([...tags, role])
            } else {
                setTags([...tags])
            }
        }
    }

    const handleLevelFilter = (level) => {
        if(people.length === data.length) {
            const newPeople = data.filter((person) => person.level === level)
            setPeople(newPeople);
            setFilterOpen(true);
            if(!tags.includes(level)) {
                setTags([...tags, level])
            } else {
                setTags([...tags])
            }
        }
        if(data.length > people.length) {
            const newPeople = people.filter((person) => person.level === level)
            setPeople(newPeople);
            setFilterOpen(true);
            if(!tags.includes(level)) {
                setTags([...tags, level])
            } else {
                setTags([...tags])
            }
        }
    }

    // useEffect(() => console.log(tags), [tags])
    const handleLangFilter = (language) => {
        if(people.length === data.length) {
            const newPeople = data.filter((item) => item.languages.includes(language))
            setPeople(newPeople);
            setFilterOpen(true);
            if(!tags.includes(language)) {
                setTags([...tags, language])
            } else {
                setTags([...tags])
            }
        }
        if(data.length > people.length) {
            const newPeople = people.filter((item) => item.languages.includes(language))
            setPeople(newPeople);
            setFilterOpen(true);
            if(!tags.includes(language)) {
                setTags([...tags, language])
            } else {
                setTags([...tags])
            }
        }
    }

    const handleToolsFilter = (tool) => {
        if(people.length === data.length) {
            const newPeople = data.filter((item) => item.tools.includes(tool))
            setPeople(newPeople);
            setFilterOpen(true);
            if(!tags.includes(tool)) {
                setTags([...tags, tool])
            } else {
                setTags([...tags])
            }
        }
        if(data.length > people.length) {
            const newPeople = people.filter((item) => item.tools.includes(tool))
            setPeople(newPeople);
            setFilterOpen(true);
            if(!tags.includes(tool)) {
                setTags([...tags, tool])
            } else {
                setTags([...tags])
            }
        }
    }

    const removeTag = (tag) => {
        const newTag = tags.filter((item) => item !== tag);
        setTags(newTag);
        
    }

    return (
        <AppContext.Provider value={{
            people,
            filterOpen,
            handleRoleFilter,
            handleLevelFilter,
            handleLangFilter,
            handleToolsFilter,
            tags,
            removeTag
        }}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext);
}

export { AppProvider, AppContext }