import * as React from "react"
import {useState} from "react";

const Accordion = ({children, title}) => {
    const [expanded, setExpanded] = useState(false);
    return (
        <>
            <h2 className={expanded ? 'title is-expanded' : 'title'}>
                <button
                    onClick={(e) => {setExpanded(!expanded); e.preventDefault()}}
                    className="border-l-2 border-red-500 text-left pl-10 bg-gray-100 hover:bg-gray-200 text-black py-5 w-full uppercase tracking-wider">
                    {title}
                </button>
            </h2>
            <div className={expanded ? 'content is-expanded' : 'content hidden'}>
                {children}
            </div>
        </>)
}

export default Accordion