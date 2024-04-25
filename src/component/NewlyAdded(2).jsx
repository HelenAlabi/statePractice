
import '../component/NewlyAdded.css'
const NewlyAdded = ({image, name , genre, year} )=>{
    return(
        <>
           <div className= 'cards'>
               <div className= "backgroundImg">
                <img src={image} id="img" />
                <h2 id="nam">{name}</h2>
                <p id="gen">{genre} <span id="yr">({year})</span></p>

                </div>

           </div>
        </>
    )
}

export default NewlyAdded;