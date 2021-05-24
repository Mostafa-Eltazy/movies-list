export const genres = [
    {id:1, name:"Action"},
    {id:2, name:"Comedy"},
    {id:3, name:"Thriller"},
    {id:4, name:"Romantic"},
]
export function getGenres(){
    return genres.filter(g=>g)
}