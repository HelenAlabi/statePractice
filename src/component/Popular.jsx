
import './popular.css'
const Popular = ({image, name , genre, year })=>{
    return(
        <>
           <div className= 'card'>
               <div className= "backgroundImg">
                <img src={image} id="imge" />
                <h2 id="nam">{name}</h2>
                <p id="gen">{genre} <span id="yr">({year})</span></p>

                </div>

           </div>
        </>
    )
}

export default Popular;