
const movies = [
    {
        id:1,
        title:"Terminator",
        genre:{id:1, name:"Action"},
        numberInStock: 6,
        dailyRentalRate: 2.5,
        publishDate:"2018-01-03T19:04:28.809Z",
        liked:true
    },
    {
        id:2,
        title:"Die hard",
        genre:{id:1, name:"Action"},
        numberInStock: 4,
        dailyRentalRate: 3,
        publishDate:"2014-01-09T19:04:28.809Z",
        liked:false
    },
    {
        id:3,
        title:"Justice League",
        genre:{id:1, name:"Action"},
        numberInStock: 2,
        dailyRentalRate: 3,
        publishDate:"2020-18-03T19:04:28.809Z",
        liked:false
    },
    {
        id:4,
        title:"Dave Chabell's special",
        genre:{id:2, name:"Comedy"},
        numberInStock: 6,
        dailyRentalRate: 1,
        publishDate:"2017-14-03T23:32:28.809Z",
        liked:true
    },
    {
        id:5,
        title:"Love Actually",
        genre:{id:4, name:"Romantic"},
        numberInStock: 4,
        dailyRentalRate: 2,
        publishDate:"2020-11-04T19:45:28.809Z",
        liked:true
    },
    {
        id:6,
        title:"The break up",
        genre:{id:2, name:"Comedy"},
        numberInStock: 8,
        dailyRentalRate: 2,
        publishDate:"2018-01-03T19:04:28.809Z",
        liked:false
    },
    {
        id:7,
        title:"The B Type",
        genre:{id:2, name:"Comedy"},
        numberInStock: 8,
        dailyRentalRate: 2,
        publishDate:"2018-01-03T19:04:28.809Z",
        liked:false
    },
    {
        id:8,
        title:"Identity Thift",
        genre:{id:2, name:"Comedy"},
        numberInStock: 8,
        dailyRentalRate: 2,
        publishDate:"2018-01-03T19:04:28.809Z",
        liked:false
    },
    {
        id:9,
        title:"Accidentaly On Purpos",
        genre:{id:2, name:"Comedy"},
        numberInStock: 8,
        dailyRentalRate: 2,
        publishDate:"2018-01-03T19:04:28.809Z",
        liked:false
    },
   
];
export function getMovies(){
    return movies;
}