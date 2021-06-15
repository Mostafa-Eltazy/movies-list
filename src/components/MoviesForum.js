import React from 'react'
import Joi, { schema } from 'joi-browser'
import Input from './Input'
import {useState, useEffect} from 'react'
import { genres, getGenres } from '../Services/genreService';
import { saveMovie, getMovie, getMovies } from '../Services/moviesService';
import Select from './Select';
import { updateWith } from 'lodash';


const MoviesForum = ({match,history}) => {
   
    const [data, setdata] = useState({title:"",genre:{_id:"",name:""}, numberInStock:"",dailyRentalRate:""})
    const [errors, setErrors] = useState({})
    const [gen, setGenres] = useState([])
    const schema = {
        _id: Joi.string(),
        title: Joi.string().required().label("Title"),
        genre: Joi.required().label("Genre"),
        numberInStock: Joi.number().required().min(0).max(100).label("Number in Stock"),
        dailyRentalRate: Joi.number().required().min(0).max(10).label("Rate")
    };
    useEffect (()=>{
        async function fetchGenres(){
            const {data} = await getGenres()
            const genres = [...data]
            setGenres(genres)
            }
        async function fetchMovie(movieID){
            try{
                const {data} = await getMovie(movieID)
                const movie = data
                const movieData = mapToViewModel(movie)
                setdata(movieData)
                
            }catch(ex){
                if (ex.response && ex.response.status) 
                    history.replace("/not-found");
            }
            }
        fetchGenres()
        const movieID = match.params.id
        if (!movieID) return;
        fetchMovie(movieID)
    },[])
        
    
    const mapToViewModel = (movie)=> {
        return {
            _id : movie._id,
            title : movie.title,
            genre : {_id:movie.genre._id,name:movie.genre.name },
            numberInStock : movie.numberInStock,
            dailyRentalRate : movie.dailyRentalRate
        };
    }
    const doSubmit = async () =>{
         await saveMovie(data)
    }
    const handleSubmit = async e => {
        e.preventDefault();
        const errors = validate()
        setErrors({errors : errors||{}})
        if (errors) return;
        try{
            await doSubmit()
        }catch(ex){
            console.log("the error",ex.response)
        }
        history.push("/movies")
        
    }
    const handleChange = ({currentTarget: input}) => {
        
        const Updateddata = {...data}
        // console.log("INput.NAME",input.name)
        // console.log("INput.VALUE",input.value)
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
                    value={data.genre._id}
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
