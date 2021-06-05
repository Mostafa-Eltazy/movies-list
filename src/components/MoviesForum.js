import React from 'react'
import Joi, { schema } from 'joi-browser'
import Input from './Input'
import {useState, useEffect} from 'react'
import { genres, getGenres } from './fakeGereService';
import { saveMovie, getMovie, getMovies } from './fakeMovieService';
import Select from './Select';


const MoviesForum = ({match,history}) => {
   
    const [data, setdata] = useState({title:"",genre:"", numberInStock:"",dailyRentalRate:""})
    const [errors, setErrors] = useState({})
    const [gen, setGenres] = useState([])
    const schema = {
        id: Joi.number(),
        title: Joi.string().required().label("Title"),
        genre: Joi.required().label("Genre"),
        numberInStock: Joi.number().required().min(0).max(100).label("Number in Stock"),
        dailyRentalRate: Joi.number().required().min(0).max(10).label("Rate")
    };
    useEffect (()=>{
        const gen = getGenres();
        setGenres(gen)
        //---------------------
        const movieID = match.params.id
        if (!movieID) return;
        //----------------------
        const movie = getMovie(movieID)
        if (!movie) return history.replace("/not-found");
        //----------------------
        const movieData = mapToViewModel(movie)
        setdata(movieData)
    },[])
        
    
    const mapToViewModel = (movie)=> {
        return {
            id : movie.id,
            title : movie.title,
            genre : movie.genre.id,
            numberInStock : movie.numberInStock,
            dailyRentalRate : movie.dailyRentalRate
        };
    }
    const handleSubmit = e => {
        e.preventDefault();
        const errors = validate()
        setErrors({errors : errors||{}})
        if (errors) return;
        saveMovie(data)
        history.push("/movies")
        
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
    return (
        <div>
            <h1>Movies Form : {match.params.id  ? match.params.id:"Add Movie"}</h1>
            <form onSubmit={handleSubmit}>
                               
                <Input
                    name="title"
                    value={data.title}
                    label="Title"
                    error = {errors.title}
                    onChange={handleChange}
                />
                <Select
                    name="genre"
                    value={data.genre}
                    label="Genre"
                    options={gen}
                    onChange={handleChange}
                    error={errors.genre}
                />
                <Input
                    name="numberInStock"
                    value={data.numberInStock}
                    label="Number in Stock"
                    error = {errors.numberInStock}
                    onChange={handleChange}
                />
                <Input
                    name="dailyRentalRate"
                    value={data.dailyRentalRate}
                    label="Rate"
                    error = {errors.dailyRentalRate}
                    onChange={handleChange}
                />
                <button disabled={validate()} className="btn btn-primary" onClick={()=> handleSubmit}> Save </button>
            </form>

        </div>
    )
}

export default MoviesForum
