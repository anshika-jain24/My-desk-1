import React from 'react'
import { Link } from 'react-router-dom'
import './styles.scss'
import { COLLEGE_DATA } from '../../data/staticData'

function College() {
    const email = localStorage.getItem('googleEmail')

    if(email){
    return (
        <div>
            <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
            <h1 className="college_title">{COLLEGE_DATA.mainTitle}</h1>
            <div className="content">
                {COLLEGE_DATA.sections.map(cardData => {
                    return(
                        <Link to={cardData.link} className="card_link">
                            <div className="card_college">
                                <div className="icon"><i className="material-icons md-36">{cardData.icon}</i></div>
                                <p className="title">{cardData.title}</p>
                                <p className="text">{cardData.text}</p>  
                            </div>
                        </Link>
                    )
                })}
            </div>
        </div>


    )
}else{
    window.location.href = "/login";
}
}

export default College
