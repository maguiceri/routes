import React from 'react';
import "./styles.scss";
import {Link} from "react-router-dom";

function Home(){
    return(
        
        <div className="img">
            <Link className="link" to="/market"><i className="icon" class="fas fa-flag"></i><p className="text">Argentina</p></Link>
            <Link className="link" to="/market"><i className="icon" class="fas fa-flag"></i><p className="text">Portugal</p></Link>
            <Link className="link" to="/market"><i className="icon" class="fas fa-flag"></i><p className="text">Brazil</p></Link>
            <Link className="link" to="/market"><i className="icon" class="fas fa-flag"></i><p className="text">Bolivia</p></Link>
            <Link className="link" to="/market"><i className="icon" class="fas fa-flag"></i><p className="text">Peru</p></Link>
            <Link className="link" to="/market"><i className="icon" class="fas fa-flag"></i><p className="text">Mexico</p></Link>
            <Link className="link" to="/market"><i className="icon" class="fas fa-flag"></i><p className="text">Chile</p></Link>    
        </div>
       
    )
}

export default Home;