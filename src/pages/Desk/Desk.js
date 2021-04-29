import React, { useEffect, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import TodoList from '../../page-components/Desk/Todo/TodoList';
<<<<<<< HEAD
import NavbarComponenet from '../../Components/Navbar'
=======
import NavbarComponenet from '../../components/Navbar'
import Calender from '../../page-components/Desk/Calender/Calender'
import { Button } from 'react-bootstrap'
>>>>>>> f7390d8db9d1eca9824a0b2bbb49f356bf77ab2b
import "./styles.css";

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
    </>
  );
}

export default Desk