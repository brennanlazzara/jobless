import React from 'react';
// import mainpic from '../Main';
import "./style.css";
import { Button } from 'reactstrap'
import {Link} from 'react-router-dom'
// import FadeIn from "react-image-fade-in";


const Main = (props) => {

    return (

        <div className="main-img">
           
                <img src="./assets/job2.jpg" className="img-height shadow mb-5 rounded" alt="Main" />
                 <div className="centered"> 
                 
                 <h1 className="display-4">Find Your New Job Today</h1>
                
                    <>
                        <Button variant="primary" size="lg" active>
                            <Link className="bold" to="/register">
                                  Register Now  
                            </Link>
                       
                        </Button>{' '}
                    </>
                   
                </div>
        

        </div>
                
    );

}

export default Main;