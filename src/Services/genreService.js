import http from './httpServices';
import {apiUrl} from '../config.json';

export function getGenres(){
    return http.get(apiUrl+"/genres")
}
export async function getGenre(genreID){
    const {data} = await getGenres()
    
    console.log( data.find(g=>g.id===parseInt(genreID)))

    return data.find(g=>g.id===parseInt(genreID))
}