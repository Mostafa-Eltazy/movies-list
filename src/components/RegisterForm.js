import React from 'react'
import Joi, { schema } from 'joi-browser'
import Input from './Input'
import {useState, useEffect} from 'react'

const RegisterForm = () => {

    const [data, setdata] = useState({userName:'',password:'', name:''})
    const [errors, setErrors] = useState({})
    const schema = {
        userName: Joi.string().required().email().label("User Name"),
        password: Joi.string().required().min(5).label("Password"),
        name: Joi.string().required().label("Name")
    }
    const handleSubmit = e => {
        e.preventDefault();
        const errors = validate()
        setErrors({errors : errors||{}})
        if (errors) return;
        
    }
    const handleChange = ({currentTarget: input}) => {
        const Updateddata = {...data}
        Updateddata[input.name] = input.value
        setdata(Updateddata)
    }
    const validate = ()=>{
        const result = Joi.validate(data,schema,{abortEarly:false})
        console.log(result)
        if (!result.error) return null
        const errors={}
        for(let item of result.error.details)
            errors[item.path[0]] = item.message
        return errors
    }
    // const validateProperty = ({name, value}) => {
    //     const obj = {[name]:value}
    //     const subschema = {[name]: schema[name]}
    //     const {error} = Joi.validate(obj,subschema);
    //     return error ? error.details[0].message : null
    // }

    return (
        <div>
            <h1> Login </h1>
            <form onSubmit={handleSubmit}>
                <Input
                    name="userName"
                    value={data.userName}
                    label="User Name"
                    error = {errors.userName}
                    onChange={handleChange}
                />
                {console.log(errors.userName)}
                <Input
                    name="password"
                    value={data.password}
                    label="Password"
                    error = {errors.password}
                    onChange={handleChange}
                />
                <Input
                    name="name"
                    value={data.name}
                    label="Name"
                    error = {errors.name}
                    onChange={handleChange}
                />
                <div className="TOP-space" >
                    <button disabled={validate()} className="btn btn-primary">Register</button>
                </div>
            </form>
            
        </div>
    )
}

export default RegisterForm
