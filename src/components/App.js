import React, { useState, useEffect } from 'react'
import './App.css';
import Form from './Form';
import User from './User';
import * as yup from 'yup';
import axios from 'axios';
import formSchema from '../validation/formSchema';


const initialUsers = [];

const initialFormValues = {
  name: '',
  email: '',
  password: '',
  tos: false,
}

const initialFormErrors = {
  name: '',
  email: '',
  password: '',
  tos: '',
}

const initialDisabled = true;

function App() {
  const [users, setUsers] = useState(initialUsers);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);

  const getUsers = () => {
    return users;
  }

  const postNewUser = newUser => {
    axios.post(`https://reqres.in/api/users`, newUser)
      .then((res) => {
        // console.log(res.data);
        setUsers([...users, res.data]);
        setFormValues(initialFormValues);
      })
      .catch((err) => {
        console.log(err);
      })
  }

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

  const formSubmit = () => {
    const newUser = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      password: formValues.password.trim(),
      tos: formValues.tos
    }
    postNewUser(newUser);
  }

  useEffect(() => {
    getUsers()
  }, []);

  useEffect(() => {
    // 🔥 STEP 9- ADJUST THE STATUS OF `disabled` EVERY TIME `formValues` CHANGES
    formSchema.isValid(formValues).then(valid => setDisabled(!valid))
  }, [formValues]);


  return (
    <div className="App">
      <Form 
        values={formValues}
        change={inputChange}
        submit={formSubmit}
        disabled={disabled}
        errors={formErrors}
      />
      {
        users.map(user => {
          return (
            <User key={user.id} details={user} />
          )
        })
      }
    </div>
  );
}

export default App;
