import React, { useState, useEffect } from "react";
import { Link, Route, Switch } from 'react-router-dom';
import axios from "axios";
import * as yup from 'yup';
import formSchema from './validation/formSchema';
import './App.css';

import HomeContent from './components/HomeContent';
import PizzaForm from './components/PizzaForm';

const initialFormValues = {
  name: '',
  size: '',
  pepperoni: false,
  sausage: false,
  mushrooms: false,
  peppers: false,
  olives: false,
  special: ''
};

const initialFormErrors = {
  name: '',
  size: ''
}

const initialOrders = [];
const initialDisabled = true;

const App = () => {
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);
  const [orders, setOrders] = useState(initialOrders);

  const postNewOrder = newOrder => {
    axios.post('https://reqres.in/api/orders', newOrder)
      .then(res => {
        setOrders([ ...orders, res.data]);
      })
      .catch(err => console.error(err))
      .finally(() => {
        setFormValues(initialFormValues);
      })
  }

  const validate = (name, value) => {
    yup.reach(formSchema, name)
      .validate(value)
      .then(() => setFormErrors({ ...formErrors, [name]: ''}))
      .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0]}))
  }

  const inputChange = (name, value) => {
    validate(name, value);
    setFormValues({ ...formValues, [name]: value });
  }

  const formSubmit = () => {
    const newOrder = {
      name: formValues.name.trim(),
      size: formValues.size,
      toppings: ['pepperoni', 'sausage', 'mushrooms', 'peppers', 'olives'].filter(topping => !!formValues[topping]),
      special: formValues.special.trim()
    }
    postNewOrder(newOrder);
  }

  useEffect(() => {
    formSchema.isValid(formValues)
      .then(valid => setDisabled(!valid));
  }, [formValues])

  return (
    <div className="App">
      <div className="navbar">
        <h1>Lambda Eats</h1>
        <nav>
          <Link to="/" id="homeButton">Home</Link>
          <Link to="/pizza" id="pizzaButton">Order Pizza</Link>
        </nav>
      </div>

      <Switch>
        <Route path="/pizza">
          <PizzaForm
            formValues={formValues} 
            inputChange={inputChange}
            formSubmit={formSubmit}
            disabled={disabled}
            formErrors={formErrors}
          />
        </Route>
        <Route path="/">
          <HomeContent />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
