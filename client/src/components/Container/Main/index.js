import React from 'react';

import "./style.css";
import { Button } from 'reactstrap'




const Main = (props) => {

    return (

        <div className="main-img">
           
                <img src="./assets/job2.jpg" className="img-height shadow mb-5 rounded" alt="Main" />
                 <div className="centered"> 
                 
                 <h1 style={{textAlign: 'center', fontWeight: '400'}} className="display-4">Find Your <br /> New Job Today</h1>
                
                    <>
                        <Button href={'/register'} variant="primary" size="lg" active>
                           Register Now
                        </Button>{' '}
                    </>
                   
                </div>
        

        </div>
                
    );

}

export default Main;