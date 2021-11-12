import React from "react";

const PizzaForm = (props) => {
    const {
        formValues,
        inputChange,
        formSubmit,
        disabled,
        formErrors,
      } = props

    const onSubmit = event => {
        event.preventDefault();
        formSubmit();
    }

    const onChange = event => {
        const { name, value, checked, type } = event.target;
        const realValue = type === 'checkbox' ? checked : value;
        inputChange(name, realValue);
    }
    
    return(
        <div className="formContainer">
            <div className="formHeader">
                <h2>Build Your Own Pizza</h2>
            </div>
            <form id="pizza-form" onSubmit={onSubmit}>
                <h3>Build Your Own Pizza</h3>
                <label>Name for the Order&nbsp;
                    <input 
                        id='name-input'
                        value={formValues.name}
                        onChange={onChange}
                        name='name'
                        type='text'
                    />
                </label>
                <label>Size&nbsp;
                    <select 
                        id='size-dropdown'
                        onChange={onChange}
                        value={formValues.size}
                        name='size'
                    >
                        <option value=''>- Select a Size -</option>
                        <option value='small'>Small - 12in</option>
                        <option value='medium'>Medium - 16in</option>
                        <option value='large'>Large - 20in</option>
                    </select>
                </label>
                <div className="toppings">
                    <h4>Toppings</h4>
                    <label>Pepperoni&nbsp;
                        <input 
                            type='checkbox'
                            name='pepperoni'
                            onChange={onChange}
                            checked={formValues.pepperoni}
                        />
                    </label>
                    <label>Sausage&nbsp;
                        <input 
                            type='checkbox'
                            name='sausage'
                            onChange={onChange}
                            checked={formValues.sausage}
                        />
                    </label>
                    <label>Mushrooms&nbsp;
                        <input 
                            type='checkbox'
                            name='mushrooms'
                            onChange={onChange}
                            checked={formValues.mushrooms}
                        />
                    </label>
                    <label>Peppers&nbsp;
                        <input 
                            type='checkbox'
                            name='peppers'
                            onChange={onChange}
                            checked={formValues.peppers}
                        />
                    </label>
                    <label>Olives&nbsp;
                        <input 
                            type='checkbox'
                            name='olives'
                            onChange={onChange}
                            checked={formValues.olives}
                        />
                    </label>
                </div>
                <label>Special Instructions&nbsp;
                    <textarea 
                        id='special-text'
                        value={formValues.special}
                        onChange={onChange}
                        name='special'
                        type='text'
                    />
                </label>
                <div className='errors'>
                    <div>{formErrors.name}</div>
                    <div>{formErrors.size}</div>
                </div>
                <button disabled={disabled} id='order-button'>SUBMIT</button>
            </form>
        </div>
    );
};

export default PizzaForm;