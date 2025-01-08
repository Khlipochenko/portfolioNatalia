import bild from "/Panova.jpg"
import './Home.scss'
export const Home=()=>{
    return(
    
        <div className="home">
          <div  className="containerMitNameUndFoto">
          
          <div className="myName"><span>Hi, I'm</span>
          <br/>
<h3>Natalia Panova</h3>

<p>a Javascript Full-Stack Developer. </p>
<p>Lover of creating products which make people's life easier.</p>
</div>

            <img src={bild} alt="foto" className="foto"/>
            </div></div>
    )
}