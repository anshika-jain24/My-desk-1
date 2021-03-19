import React from 'react';
import '../Styles/College.css';
import gif from '../assets/images/Study.gif';
import { Link } from 'react-router-dom';

function College() {
    return (
        <div style={{backgroundColor: '#100e17',
            fontFamily: 'Open Sans, sans-serif', height:'100vh'}}>
                <div style={{display: 'inline-block !important'}}>
                <h1 style={{fontSize: '3rem', padding: '4rem'}}>Place for all your college related stuff</h1>
                <img style={{height: '30rem', width: '25rem', margin: '10px 30px'}} src={gif} />
                <img style={{height: '30rem', width: '25rem', margin: '10px 30px'}} src={gif} />
                <img style={{height: '30rem', width: '25rem', margin: '10px 30px'}} src={gif} />
                </div>
            <div class="container" style={{marginLeft:'0'}}>
            <div class="card">
                <Link to="/pdfviewer" >
                    <h3 class="title">PROJECTS</h3>
                    <div class="bar">
                    <div class="emptybar"></div>
                    <div class="filledbar"></div>
                    </div>
                    <div class="circle">
                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
                    <circle class="stroke" cx="60" cy="60" r="50"/>
                    </svg>
                    </div>
                </Link>
            </div>
            <div class="card">
                <Link to="/pdfviewer" >
                    <h3 class="title">TESTS</h3>
                    <div class="bar">
                    <div class="emptybar"></div>
                    <div class="filledbar"></div>
                    </div>
                    <div class="circle">
                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
                    <circle class="stroke" cx="60" cy="60" r="50"/>
                    </svg>
                    </div>
                </Link>
            </div>
            <div class="card" onClick="/pdfviewer">
                <Link to="/pdfviewer" >
                    <h3 class="title">E-BOOKS</h3>
                    <div class="bar">
                    <div class="emptybar"></div>
                    <div class="filledbar"></div>
                    </div>
                    <div class="circle">
                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
                    <circle class="stroke" cx="60" cy="60" r="50"/>
                    </svg>
                    </div>
                </Link>
            </div>
            <div class="card">
                <Link to="/pdfviewer" >
                    <h3 class="title">ASSIGNMENTS</h3>
                    <div class="bar">
                    <div class="emptybar"></div>
                    <div class="filledbar"></div>
                    </div>
                    <div class="circle">
                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
                    <circle class="stroke" cx="60" cy="60" r="50"/>
                    </svg>
                    </div>
                </Link>
            </div>
            </div>
        </div>
    )
}

export default College
