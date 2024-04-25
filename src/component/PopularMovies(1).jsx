import './popularMovie.css'
import Popular from './Popular'
import Anik from '../assets/AnikP.jpg'
import Jesusp from '../assets/jesusP.jpg'
import Love from '../assets/loveAndlashes.jpg'
import Hard from '../assets/noHard.jpg'
import Where from '../assets/noWhereP.jpg'
import Orisa from '../assets/orisaP.webp'
import Sabrina from '../assets/sabrina.jpg'
import Chase from '../assets/theChaseP.jpg'
import Rev from '../assets/theRevenantP.jpg'
import Women from '../assets/womenKingP.jpg'





const PopularMovies =()=>{
        
    const totalPMovies =[
        {
            image :Anik,
            name : "Damsel",
            genre : "Fantasy/Adventure",
            year :  2024
        },
        {
            image :Jesusp,
            name : "Along with the gods",
            genre : "Action/Fantasy",
            year :  2017
        },
        {
            image :Love,
            name : "Ballerina",
            genre : " Action/Thriller",
            year :  2023
        },
        {
            image :Hard,
            name : "Action/Fantasy",
            genre : "Comedy",
            year :  2020
        },
        {
            image :Where,
            name : "High Society",
            genre : "Romance/Drama",
            year :  2018
        },
        {
            image :Orisa,
            name : "Jennifer-Lopez",
            genre : "Action",
            year :  2024
        },
        {
            image :Sabrina,
            name : "Kingdom: Ashin of the North",
            genre : "Horror/Action",
            year :  2021
        },
        {
            image :Chase,
            name : "My Name Is Loh Kiwan",
            genre : "Romance",
            year :  2024
        },
        {
            image :Rev,
            name : "Pandora",
            genre : "Thriller/Action",
            year :  2016
        },
        {
            image :Women,
            name : "Psychokinesis",
            genre : "Action",
            year :   2018
        }
    ]


return(
    <>
        <div id="render">
                {
                    totalPMovies.map((val)=>(
                        <Popular image ={val.image} name ={val.name} genre={val.genre} year={val.year}/>
                    ))
                }
        </div>
    </>
)
}
export default PopularMovies;