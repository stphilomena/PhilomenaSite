import React, {useEffect, useState} from 'react'
import InputField from './inputField'

function Combobox({className, name, value, onChange, type, placeholder, id, freeText, optionList}) {
    const [dropdown, setDropdown] = useState(false);
    const [selected, setSelected] = useState(-1);
    const [options, setOptions] = useState(-1);
    const [focusedValue, setFocusedValue] = useState(value);
    const [focused, setIsFocused] = useState(false);
    const [changed, setIsChanged] = useState(false);
    freeText = freeText || false;

    const [inputText, setInputText] = useState("");

    useEffect(() => {
        const selected = optionList.find(option => option.id === value);
        if(selected) {
            setInputText(selected.description);
        } else setInputText("");
    }, [value])

    const onBlur = (event) => {
        setIsFocused(false);
        setDropdown(false);
        if(!changed && selected === -1) return;
        if(freeText === false) {
            if(onChange) {
                let blurValue = {id:0, description: focusedValue};
                if((options||[]).length>0) {
                    if(selected === -1) {
                        blurValue = options[0];
                    } else {
                        blurValue = options[selected];
                    }
                }
                if(blurValue === undefined) {
                    blurValue = {id:0, description: focusedValue};
                }
                setInputText(blurValue.description);
                onChange({'target': {
                        'name': name,
                        'value': blurValue.description,
                        'valueId': blurValue.id
                    }})
            }
        }
    }
    const onFocus = (event) => {
        setIsChanged(false);
        setIsFocused(true);
        setFocusedValue(value);
        setSelected(-1);
    }
    const fetchItems = async (prompt) =>
    {
        if(optionList||false) {
            if(prompt === '%') {
                prompt = "";
            }
            const filteredList = optionList.filter(option => option.description.toLowerCase().startsWith((prompt||"").toLowerCase()));
            setOptions(filteredList);
        }
    }
    const onKeyDown = async (e) => {
        let str = '';
        switch (e.keyCode) {
            case 38:// Arrow Up
                if(e.altKey) {
                    setDropdown(false)
                } else {
                    setSelected((selected - 1) % options.length)
                }
                break;
            case 40: // Arrow Down
                if(e.altKey && !dropdown) {
                    setDropdown(true)
                    await fetchItems(value);
                } else {
                    setSelected((selected + 1 ) % options.length)
                }
                break;
            case 13: // ENTER
                if(dropdown && selected >= 0) {
                    onChange({'target': {
                            'name': name,
                            'value': options[selected].description,
                            'valueId': options[selected].id
                        }})
                }
                setDropdown(false)
                break;
            default:
                return;
        }
        e.preventDefault();
        console.log(str);
    }
    const onChangeHandler = async (event) => {
        setInputText(event.target.value);
        // console.log("Change", event.target.name, event.target.value)
        // if(onChange) {
        //     onChange(event);
        // }
        if(event.target.value) {
            if(event.target.value != value) {
                setIsChanged(true);
            }
            if(focused) {
                setDropdown(true)
            }
            await fetchItems(event.target.value);
        } else {
            setDropdown(false)
        }
    }
    const onDropdownIcon = async () => {
        if(optionList||false) {
            await fetchItems('%');
        }
        setDropdown(!dropdown);
    }
    const onOptionClicked = (i, e) => {
        setSelected(e);
        if (onChange) {
            setInputText(options[e].description)
            onChange({
                'target': {
                    'name': name,
                    'value': options[e].description,
                    'valueId': options[e].id
                }
            })
        }
        setDropdown(false);
    }
    return (
        <div onBlur={onBlur}><div className="flex"><InputField value={inputText}
                                                               onKeyDown={onKeyDown}
                                                               onFocus={onFocus}
                                                               autocomplete={"off"}
                                                               placeholder={placeholder}
                                                               className={className}
                                                               id={id} name={name} type={type} onChange={onChangeHandler} />
            {/*<label htmlFor={id} className={"combobox"} onClick={onDropdownIcon}>&what;</label>*/}
        </div>
            { dropdown && (options||[]).length > 0 ?
                <div>
                    <div className="absolute bg-gray-100 border-gray-400 border z-10 shadow-md mt-1">
                        {options.map( (i, e) => {
                            return (
                                <div key={i.id}
                                     onMouseDown={() => onOptionClicked(i, e)}
                                     className={"dropdown-item py-2 px-2 " + (selected === e
                                         ? 'bg-red-800 text-white'
                                         : 'text-black')}>{i.description}</div>
                            )
                        })}
                    </div>
                </div> : <></> }
        </div>
    )
}

export default Combobox