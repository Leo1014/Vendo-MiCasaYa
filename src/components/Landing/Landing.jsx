import "./Landing.css"
import image_0 from "../../images/Fachada.jpeg"
import image_1 from "../../images/cocina-comedor.jpeg"
import image_2 from "../../images/escalera.jpeg"
import image_3 from "../../images/Habitacion.jpeg"


export default function Landing(){
    return(
        <main>
                                        
            <section>                
                <div className="man-img">
                    <div className="man">
                        <img src="https://i.ibb.co/dbWZTgD/hombre-se-alando1-removebg-preview.png" alt="hombre" />
                    </div>
                    <div className="main-image">
                        <img className = "imageFachada" src={image_0} alt="imagen-principal" />
                    </div>
                </div>
                <div className="titulo">
                    <h2>Casa Vía Mesitas a la Mesa 1Km encintado 65 metros cuadrados $125.000.000</h2>
                    <div className="anuncio">
                        <p className="landing">Casa de dos Pisos:</p>
                        <ul>
                            <li>Cocina comedor   </li>
                            <li>Dos alcobas una sencilla otra doble</li>
                            <li>Sótano: Dos habitaciones baño y patio</li>
                            <li></li>
                            <li></li>
                        </ul>
                    </div>
                </div>
                <div className="gallery">
                    <div className="secondary-images">
                        <img src={image_2} alt="imagen-principal" />
                        <img src={image_1} alt="imagen-principal" />
                        <img src={image_3} alt="imagen-principal" />
                    </div>
                </div>
            </section>
            
            <div className="videos">
                <iframe width="701" height="403" src="https://www.youtube.com/embed/v2Ebw21qfNM" title="Casa Soacha Cien Familias" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                <iframe width="716" height="403" src="https://www.youtube.com/embed/x2kJ6VKtnhs" title="Casa en la Mesa" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>

        </main>
    )
}