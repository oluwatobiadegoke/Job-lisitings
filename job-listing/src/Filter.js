import React from 'react'
import { useGlobalContext } from './context'
import { FaTimes } from "react-icons/fa";

const Filter = () => {

    const { filters, removeFilter, clearFilters } = useGlobalContext();
    return (
        <section>
            <ul>
                {
                    filters.map((tag, index) => {
                        return(
                            <li key={index}>
                                {tag}
                                <button onClick={() => removeFilter(tag)}>
                                    <FaTimes/>
                                </button>
                            </li>
                        )
                    })
                }
            </ul>
            <button onClick={clearFilters}>
                Clear
            </button>
        </section>
    )
}

export default Filter
