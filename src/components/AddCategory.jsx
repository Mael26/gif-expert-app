import { useState } from "react"

export const AddCategory = ({ onNewValue }) => {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = ({ target }) => {
        setInputValue(target.value)
    }



    const onSubmit = (e) => {
        e.preventDefault();
        if(inputValue.trim().length <= 0) return;

        // setCategories(c => [...c, inputValue]);
        onNewValue(inputValue.trim());
        setInputValue('');
    }   

    return (
        <form onSubmit={ onSubmit}>
            <input 
                type="text" 
                placeholder="Etiquetas"
                value={ inputValue }
                onChange={ onInputChange }
                />
        </form>
    )
} 