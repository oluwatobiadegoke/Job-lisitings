import React from 'react'
import { useGlobalContext } from './context'
import { FaTimes } from "react-icons/fa";

const Filter = () => {

    const { tags, removeTag } = useGlobalContext();
    return (
        <section>
            <ul>
                {
                    tags.map((tag, index) => {
                        return(
                            <li key={index}>
                                {tag}
                                <button onClick={() =>removeTag(tag)}>
                                    <FaTimes/>
                                </button>
                            </li>
                        )
                    })
                }
            </ul>
        </section>
    )
}

export default Filter
