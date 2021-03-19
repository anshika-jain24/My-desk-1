import React, { Component,useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import '../App.css';
import '../Styles/Drawer.css';
import FileUpload from './FileUpload';

function Midway() {

    //const [value, onChange] = useState("false");
    const [refresh, onChange] = useState("false");

    const sleep = (milliseconds) => {
        return new Promise(resolve => setTimeout(resolve, milliseconds))
      }
      
      /*Use like so*/
      
      async function timeSensativeAction(){ //must be async func
        //do something here
        await sleep(1500) //wait 5 seconds
        //continue on...
      }

    function hello(){

        onChange("false");
        // timeSensativeAction();
        window.location.reload();
        console.log("Hello");
        

        // timeSensativeAction();
    }

    function func(){
        onChange("true");
    }

    useEffect(() => {}, [refresh]);

    return (
      <Router>
        <Switch>
          <div className="App">
            <div class="face face2">
                    <div class="content">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum cumque minus iste veritatis provident at.</p>
                        <Link to="/upload" onClick={func}>Upload New File</Link>
                        {refresh==="true" ? <div>{<>{hello()}</>}</div> : null}
                    </div>
                </div>
          </div>
        </Switch>
      </Router>
    );
  }
  

export default Midway
