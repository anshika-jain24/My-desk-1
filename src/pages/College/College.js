import React from 'react'
import { Link } from 'react-router-dom'
import './styles.scss'

function College() {
    return (
        <div>
            <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
            <h1 className="college_title">College Space</h1>
            <div className="content">
                <Link className="card_link">
                    <div className="card_college">
                        <div className="icon"><i className="material-icons md-36">face</i></div>
                        <p className="title">Assignments</p>
                        <p className="text">Click to see or edit your profile page.</p>  
                    </div>
                </Link>

                <Link className="card_link">
                    <div className="card_college">
                        <div className="icon"><i className="material-icons md-36">face</i></div>
                        <p className="title">Projects</p>
                        <p className="text">Click to see or edit your profile page.</p>  
                    </div>
                </Link>

                <Link className="card_link">
                    <div className="card_college">
                        <div className="icon"><i className="material-icons md-36">face</i></div>
                        <p className="title">E-Books</p>
                        <p className="text">Click to see or edit your profile page.</p>  
                    </div>
                </Link>

                <Link className="card_link">
                    <div className="card_college">
                        <div className="icon"><i className="material-icons md-36">face</i></div>
                        <p className="title">Tests</p>
                        <p className="text">Click to see or edit your profile page.</p>  
                    </div>
                </Link>
            </div>
        </div>


    )
}

export default College
