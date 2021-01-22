import React from 'react'
import { useGlobalContext } from './context'

const Person = () => {

    const { newPeople, handleFilter} = useGlobalContext();
    return (
        <div>
            {newPeople.map((person) => {
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
                const thetags = [role, level]; 
                if(languages) {
                    thetags.push(...languages)
                }
                if(tools) {
                    thetags.push(...tools)
                }

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
                            {
                                thetags.map((thetag, index) => {
                                    return(
                                        <button key={index} onClick={() => handleFilter(thetag)}>
                                            {thetag}
                                        </button>
                                    )
                                })
                            }
                        </div>
                    </section>
                );
            })} 
        </div>
    )
}

export default Person
