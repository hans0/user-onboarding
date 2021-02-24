import React, { useState, useEffect } from 'react'
import './App.css';
import Form from './Form';
import * as yup from 'yup';
import formSchema from '../validation/formSchema';


const initialFormValues = {
  name: '',
  email: '',
  password: '',
  tos: '',
}

const initialFormErrors = {
  name: '',
  email: '',
  password: '',
  tos: '',
}

function App() {

  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);


  const inputChange = (name, value) => {
    // 🔥 STEP 10- RUN VALIDATION WITH YUP
    yup.reach(formSchema, name)
      .validate(value)
      .then(() => {
        setFormErrors({...formErrors, [name]: ''})
      })
      .catch((err) => {
        setFormErrors({...formErrors, [name]: err.errors[0]})
      })
    
    
    setFormValues({
      ...formValues,
      [name]: value // NOT AN ARRAY
    })
  }

  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <Form 
        values={formValues}
        change={inputChange}
        errors={formErrors}
      />
    </div>
  );
}

export default App;
