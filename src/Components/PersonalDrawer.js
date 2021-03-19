import React from 'react';
import '../Styles/PersonalDrawer.css';
import gif from '../assets/images/docBg.gif';
import gif1 from '../assets/images/Medical.gif';

function PersonalDrawer() {
    return (
    <div className="personal">
    <div className="section-plans" id="section-plans" style={{height:'100vh'}}>
      <div className="u-center-text u-margin-bottom-big">
        <h2 className="heading-secondary">
          PERSONAL DRAWER
        </h2>
      </div>

      <div className="row" style={{marginTop:'12rem',marginLeft:'15rem',marginRight:'0'}}>
        <div className="col-1-of-3" style={{marginLeft:'25rem'}}>
          <div className="card" style={{width:'50rem'}}>
            <div className="card__side card__side--front-1">
              <div className="card__title card__title--1">
                <h4 className="card__heading">Important Documents</h4>
              </div>

              <div className="card__details">
                <img  src={gif} style={{height: '30rem'}} alt="This is a gif" />
              </div>
            </div>
            <div className="card__side card__side--back card__side--back-1">
              <div className="card__cta">
                <a href="/pdfviewer" className="btn btn--white">Select</a>
              </div>
            </div>
          </div>
        </div>

        <div className="col-1-of-3">
          <div className="card" style={{width:'50rem'}}>
            <div className="card__side card__side--front-2">
              <div className="card__title card__title--2">
                <h4 className="card__heading">Medical Records</h4>
              </div>

              <div className="card__details">
              <img  src={gif1} style={{height: '30rem'}} alt="This is a gif" />
              </div>
            </div>
            <div className="card__side card__side--back card__side--back-2">
              <div className="card__cta">
                <a href="/pdfviewer" className="btn btn--white">Select</a>
              </div>
            </div>
          </div>
        </div>

      </div>
     </div>
     </div>
    )
}

export default PersonalDrawer
