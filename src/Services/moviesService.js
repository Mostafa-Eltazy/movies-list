import http from './httpServices'
import {apiUrl} from '../config.json'

const apiEndPoint = apiUrl+"/movies"
export function getMovies(){
    return http.get(apiEndPoint)
}
export async function getMovie(movieID){
    return http.get(apiEndPoint +"/"+ movieID)
    }
export function deleteMovie(movieID){
    return http.delete(apiEndPoint +"/"+ movieID)
}
export function saveMovie(movie){
    const body = {
         _id : movie._id,
         title : movie.title,
         genreId : movie.genre,
         numberInStock : movie.numberInStock,
         dailyRentalRate : movie.dailyRentalRate
    }
    
    delete body._id
   if(movie._id){
       return http.put(apiEndPoint+"/"+movie._id,body)
   }
   return http.post(apiEndPoint,body)
}
