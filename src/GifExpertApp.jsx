import { useState } from "react"
import { AddCategory , GifGrid} from "./components";

export const GifExpertApp = () => {

    const [ categories, setCategories ] = useState([ 'One Punch']);

    const onAddCategory = (event) =>{
        if(categories.includes(event)) return;
        setCategories( categories => [event, ...categories]);
    }

    return (
        <>
            <h1>GifExpertApp</h1>

            <AddCategory 
                onNewValue={ onAddCategory }
            />
                {categories.map( category => 
                    (
                        <GifGrid key={category} category={ category }></GifGrid>
                ))
            }
        </>
    )
}