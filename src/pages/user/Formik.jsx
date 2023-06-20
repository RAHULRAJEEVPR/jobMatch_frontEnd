import React from 'react';
import { useFormik } from 'formik';

export default function Formik() {
    const initialValues={
        email: '',
        password: '',
    }
    const validate= values =>{
        let errors={}

        if(!values.email){
            errors.email="Required"
        }  else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)){
            errors.email = "Not a valid email"
          }
          
        if(!values.password){
            errors.password="Required"
        }
        return errors
    }
    const onSubmit=(values)=>{
        console.log("form data",values);

    }
  const formik = useFormik({
    initialValues,
    onSubmit,
    validate
  });

 // console.log('form values', formik.values);

  return (
    <div className='flex items-center justify-center'>
      <form onSubmit={formik.handleSubmit}>
        <div className="mb-">
          <label htmlFor="email" className="block text-gray-700 text-md font-bold mb-2">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            className="w-full border border-gray-300 shadow-md px-3 py-2 rounded-md mb-3 "
            placeholder="Enter your email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-md font-bold mb-2 ">
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            className="w-full border border-gray-300 px-3 py-2 rounded-md shadow-md mb-3 "
            placeholder="Enter your password"
            onChange={formik.handleChange}
            value={formik.values.password}
          />
        </div>
        <div className="w-full mb-3">
          <div className="w-full">
            <button
              type="submit"
              className="w-full bg-blue-950 hover:bg-blue-800 text-white font-bold py-2 px-4 text-xl mb-1"
            >
              LOGIN
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
