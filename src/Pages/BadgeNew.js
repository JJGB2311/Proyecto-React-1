import React from 'react';
import Navbar from '../Components/Navbar'
import IMG from '../Image/badge-header.svg'
import  '../Pages/styles/BadgeNew.css'
import Badge from '../Components/Badge'
class BadgeNew extends React.Component{
    render(){
return(

    <div>
<Navbar/>
<div className="BadgeNew__hero">
<img className="img_fluid" src={IMG}/>
</div>
<div className="Container">
    .
</div>    
<div className="row">
    <div className="col">
        <Badge  primern='Juan Jose'
segudon ='Gamez Blanco'
puesto = 'Frontend Engineer'
 correo = 'Jgamezb'/>
    </div>
</div>
    </div>
)
    


    }
}
export  default BadgeNew;