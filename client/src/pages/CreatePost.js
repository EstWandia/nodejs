import React from 'react'
import {Formik,Form,Field,ErrorMessage} from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

function CreatePost() {

    const initialValues ={
        email:"",
        password:"",
        name:"",
        
    };
    const validationSchema =Yup.object().shape({
        email:Yup.string().min(6).required(),
        password:Yup.string().required(),
        name:Yup.string().min(3).max(15).required(),
    })

    const onSubmit =(data) =>{
        axios.post("http://localhost:3001/users",data).then((response)=>{
            console.log("it worked");
          });
    };

  return (
    <div className='createPostPage'>
      <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
        <Form className='formContainer'>
            <label>Your Email: </label>
            <ErrorMessage name="email" component="span" />
            <Field
             id="inputCreatePost"
             name="email" 
             placeholder="write email"
             />
             <label>Your Password: </label>
             <ErrorMessage name="password" component="span" />
            <Field
             id="inputCreatePost"
             name="password" 
             placeholder="write something"
             />
             <label>Your name: </label>
             <ErrorMessage name="name" component="span" />
            <Field
             id="inputCreatePost"
             name="name" 
             placeholder="write yourname"
             />
             <button type="submit">Submit Data</button>
        </Form>
      </Formik>
    </div>
  )
}

export default CreatePost
