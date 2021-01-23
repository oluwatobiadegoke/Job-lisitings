import React from 'react'
import { useGlobalContext } from './context'
import { FaTimes } from "react-icons/fa";

const Filter = () => {

    const { filters, removeFilter, clearFilters } = useGlobalContext();
    return (
        <section className="all-filter">
            <ul className="filter-section">
                {
                    filters.map((tag, index) => {
                        return(
                            <li key={index} className="filter">
                                <p>{tag}</p>
                                <button 
                                className="filter-btn"
                                onClick={() => removeFilter(tag)}
                                >
                                    <FaTimes className="filter-icon"/>
                                </button>
                            </li>
                        )
                    })
                }
            </ul>
            <div className="clear-all" onClick={clearFilters}>
                <p>
                   Clear 
                </p>
            </div>
        </section>
    )
}

export default Filter
