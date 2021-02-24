import React from 'react'

export default function Form(props) {
  const {
    values,
    submit,
    change,
    disabled,
    errors,
  } = props

  const onSubmit = evt => {
    evt.preventDefault();
    // submit();
  }

  const onChange = evt => {
    const {name, value, type, checked} = evt.target;
    const valueToUse = type === 'checkbox' ? checked : value;
    change(name, valueToUse);
  }


  return (
    <form className='form container'>
      <div className='form-group submit'>
        <h2>Register</h2>
        <button>submit</button>
        <div className='errors'>
          <div>{errors.name}</div>
          <div>{errors.email}</div>
          <div>{errors.password}</div>
          <div>{errors.tos}</div>
        </div>
      </div>
      <div className='form-group inputs'>
        <h4>General information</h4>
        <label>Name&nbsp;
          <input 
            value={values.name}
            onChange={onChange}
            name='name'
            type='text'
          />
        </label>
        <label>Email&nbsp;
          <input 
            value={values.email}
            onChange={onChange}
            name='email'
            type='text'
          />
        </label>
        <label>Password&nbsp;
          <input
            value={values.password}
            onChange={onChange}
            name='password'
            type='password'
          />
        </label>
        <label>Terms of Service&nbsp;
          <input
            value={values.tos}
            onChange={onChange}
            type='checkbox'
            name='tos'
          />
        </label>
      </div>
    </form>      
  )
}