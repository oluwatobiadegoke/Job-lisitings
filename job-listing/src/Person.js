import React from 'react'
import { useGlobalContext } from './context'

const Person = () => {

    const { 
        people, 
        handleRoleFilter, 
        handleLevelFilter, 
        handleLangFilter,
        handleToolsFilter,
    } 
    = useGlobalContext();
    return (
        <div>
            {people.map((person) => {
                    const {
                    id, 
                    company,
                    logo,
                    isnew,
                    featured,
                    position,
                    role,
                    level,
                    postedAt,
                    contract,
                    location,
                    languages,
                    tools,
                } = person

                return (
                    <section key={id}>
                        <img src={logo} alt={company} />
                        <div>
                            <div>
                                <p>{company}</p>
                                {isnew ? <p>new</p> : null}
                                {featured ? <p>featured</p> : null}
                            </div>
                            <h1>{position}</h1>
                            <div>
                                <p>{postedAt}</p>
                                <div className="dot"></div>
                                <p>{contract}</p>
                                <div className="dot"></div>
                                <p>{location}</p>
                            </div>
                        </div>
                        <div>
                            <button onClick={() => handleRoleFilter(role)}>{role}</button>
                            <button onClick={() => handleLevelFilter(level)}>{level}</button>
                            {languages.map((language, index) => {
                                return(
                                <button onClick={() => handleLangFilter(language)} key={index}>{language}</button>
                                )
                            })}
                            {tools.length > 0 ? 
                                tools.map((tool, index) => {
                                return(
                                    <button onClick={() => handleToolsFilter(tool)} key={index}>{tool}</button>
                                )
                                }): null
                            }
                            </div>
                    </section>
                );
            })} 
        </div>
    )
}

export default Person
