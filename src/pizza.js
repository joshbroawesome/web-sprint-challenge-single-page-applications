import React, {useState} from "react"



export default function PizzaForm () {

    const [data, setData] = useState({
        name: "",
        size: "",
        toppings: "",
        special: ""
    });
    const onInputChange = event => {
        setData({
            ...data,
            [event.target.name]: event.target.value
        })
    };
    const onFormSubmit = () => {
        console.log('Login Submitted and Displayed on Next Line');
        console.log(data);

    }
    return (
        <div id="pizza-form" >
            <form onSubmit={(event) => { event.preventDefault(); onFormSubmit(); }}>
                
                    <div>
                        <label htmlFor="name"> Name </label>
                    </div>
                    <input
                        id="name"
                        type="text"
                        name="name"
                        placeholder="Name"
                        onChange={onInputChange}
                    />


                    <div>
                        <label htmlFor="size"> Size </label>
                    </div>
                    <select id="size" onChange = {onInputChange}>
                        <option> ---Choose size--- </option>
                        <option value = "small"> Small </option>
                        <option value = "medium"> Medium </option>
                        <option value = "large"> Large </option>
                        <option value = "BEEG"> Mega Large </option>
                    </select>
                        
                        
                
                <div>
                    <p>Toppings</p>
                    <div>
                        <label htmlFor="pepperoni"> Pepperoni 
                    <input
                        id="pepperoni"
                        type="checkbox"
                        name="Pepperoni"
                        
                        onChange={onInputChange}
                    />
                    </label>
                    <label htmlFor="cheese"> Cheese 
                    <input
                        id="cheese"
                        type="checkbox"
                        name="Cheese"
                        
                        onChange={onInputChange}
                    />
                    </label>
                    <label htmlFor="pineapple"> Pineapple 
                    <input
                        id="pineapple"
                        type="checkbox"
                        name="Pineapple"
                        
                        onChange={onInputChange}
                    />
                    </label>
                    <label htmlFor="ham"> Ham 
                    <input
                        id="ham"
                        type="checkbox"
                        name="ham"
                        
                        onChange={onInputChange}
                    />
                    </label>
                    
                    </div>
                </div>

                
                    <div>
                        <label htmlFor="special"> Special Instructions </label>
                    </div>
                    <input
                        id="special"
                        name="special"
                        type="special"
                        placeholder="Special Instructions"
                        onChange={onInputChange}
                    />
                    <div>
                        <button id="order-button" type='submit'>order</button>
                    </div>
                
            </form>
        </div>
    )
    // text input name
    // Size dropdown
    // checklist toppings
    // text input special order
}