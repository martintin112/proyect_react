import React from "react"

export default function Footer () {
    return (
        <div className="container-fluid footerContactos">
            <div className="row">
                <div className="col-xl-4 col-md-4 col-xs-12 division">
                    <div className="datos">
                        <img className="imgLogo" src="https://i.postimg.cc/N0fTHydN/logo-btc3.png" alt="logo"/>
                        <p className="ParrafosPie">Direccion: Thompson 421</p>
                        <p className="ParrafosPie">Localidad: CABA</p>
                        <p className="ParrafosPie">Tel:1234567</p>
                    </div>
                </div>
                <div className="col-xl-4 col-md-4 col-xs-12 division">   
                    <div class="redesSociales">
                        <img class="logoFace" src="https://i.postimg.cc/Z5LpnPxB/logo-face3.png" alt="facebook"/>
                        <img class="logoInsta" src="https://i.postimg.cc/qRN31PVy/logo-insta3.png" alt="instagram"/>
                    </div>
                </div> 
                <div className="col-xl-4 col-md-4 col-xs-12 division">    
                    <div className="subscribite">
                        <p>©2022 | Ecommerce</p>
                    </div>
                </div>    
            </div>    
        </div>
    )
}