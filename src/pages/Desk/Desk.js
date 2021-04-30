import React, { useEffect, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import TodoList from '../../page-components/Desk/Todo/TodoList';
import NavbarComponenet from '../../components/Navbar'
import Calender from '../../page-components/Desk/Calender/Calender'
import { Button } from 'react-bootstrap'
import "./styles.css";
import Drawer from '../../page-components/Desk/Drawer/Drawer';

function Desk() {
  const [quoteData, setQuoteData] = useState({});

  useEffect(() => {
    fetch("https://freequote.herokuapp.com/")
      .then(res => res.json())
      .then(res => setQuoteData(res));
  },[])
  
  return (
    <>
      <NavbarComponenet />

      <Grid container spacing={5} style={{maxHeight: '70vh', paddingRight: '50px'}}>
        <Grid item xs={12} sm={6} style={{padding:'3rem'}} >
            <TodoList/>
        </Grid>

        <Grid item xs={12} sm={1}>
        </Grid>
        
        <Grid item xs={12} sm={5} className="calender_grid">
          <Button style={{position: 'absolute', right: '14.7%'}}>Open Full Calender</Button>
          <Calender />
        </Grid>
      </Grid>
      <div className="quote_container">
        <p className="quote_title">{`"${quoteData.quote}"`}</p>
        <p className="quote_author">{`-${quoteData.author}`}</p>
      </div>

      <Drawer />
    </>
  );
}

export default Desk