import * as React from "react"

function InputField({className, name, value, onChange, type, placeholder, id,
                        onBlur, onFocus, onKeyDown, autocomplete,
                    }) {
    return (<>
            { type && type === "textarea"
                ? <textarea
                    name={name}
                    id={id}
                    value={value}
                    onBlur={onBlur}
                    onFocus={onFocus}
                    onKeyDown={onKeyDown}
                    autoComplete={autocomplete}
                    onChange={onChange}
                    placeholder={placeholder}
                    className={ (value && value!==''?'':'bg-empty') + (' ' + (className||''))}
                />
                : <input type={type||"text"}
                         name={name}
                         id={id}
                         value={value}
                         onBlur={onBlur}
                         onFocus={onFocus}
                         onKeyDown={onKeyDown}
                         autoComplete={autocomplete}
                         onChange={onChange}
                         placeholder={placeholder}
                         className={ (value && value!==''?'':'bg-empty') + (' ' + (className||''))}
                /> }
        </>
    )
}

export default InputField