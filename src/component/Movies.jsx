import './Movies.css'
import NewlyAdded from "./NewlyAdded";
import DamselM from '../assets/Damsel_2024_poster2.jpg'
import Along from '../assets/1ad1ds-3.webp'
import Ball from '../assets/Ballerina_(2023_film).jpg'
import Cup from '../assets/Cupid.jpg'
import High from '../assets/highSoc.jpg'
import Jenni from '../assets/jennifer-lopez.jpg'
import King from '../assets/kingdom.jpg'
import MyName from '../assets/myNameisLoh.jpg'
import Pand from '../assets/pandora.jpg'
import Psy from '../assets/Psychokinesis_(염력).jpg'

const Movies =()=>{
        
        const totalMovies =[
            {
                image :DamselM,
                name : "Damsel",
                genre : "Fantasy/Adventure",
                year :  2024
            },
            {
                image :Along,
                name : "Along with the gods",
                genre : "Action/Fantasy",
                year :  2017
            },
            {
                image :Ball,
                name : "Ballerina",
                genre : " Action/Thriller",
                year :  2023
            },
            {
                image :Cup,
                name : "Action/Fantasy",
                genre : "Comedy",
                year :  2020
            },
            {
                image :High,
                name : "High Society",
                genre : "Romance/Drama",
                year :  2018
            },
            {
                image :Jenni,
                name : "Jennifer-Lopez",
                genre : "Comedy",
                year :  2024
            },
            {
                image :King,
                name : "Kingdom: Ashin of the North",
                genre : "Horror/Action",

                year :  2021
            },
            {
                image :MyName,
                name : "My Name Is Loh Kiwan",
                genre : "Comedy",
                year :  2024
            },
            {
                image :Pand,
                name : "Pandora",
                genre : "Comedy",
                year :  2016
            },
            {
                image :Psy,
                name : "Psychokinesis",
                genre : "Action",
                year :   2018
            }
        ]


    return(
        <>
            <div id="render">
                    {
                        totalMovies.map((all)=>(
                            <NewlyAdded image ={all.image} name ={all.name} genre={all.genre} year={all.year}/>
                        ))
                    }
            </div>
        </>
    )
}
export default Movies;