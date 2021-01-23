import React from 'react'
import { useGlobalContext } from './context'

const Person = () => {

    const { newPeople, handleFilter } = useGlobalContext();
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
                    <section className="jobs" key={id}>
                        <img src={logo} alt={company} />
                        <div className="info">
                            <div className="top">
                                <p>{company}</p>
                                {isnew ? <button className="isnew">NEW!</button> : null}
                                {featured ? <button className="feat">FEATURED</button> : null}
                            </div>
                            <h3>{position}</h3>
                            <div className="below">
                                <p>{postedAt}</p>
                                <div className="dot"></div>
                                <p>{contract}</p>
                                <div className="dot"></div>
                                <p>{location}</p>
                            </div>
                        </div>
                        <div className="line"></div>
                        <div className="tags">
                            {
                                thetags.map((thetag, index) => {
                                    return(
                                        <button className="tag-btn" key={index} onClick={() => handleFilter(thetag)}>
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