import React from 'react';
import Grid from '@material-ui/core/Grid';
import TodoList from '../../page-components/Desk/Todo/TodoList';
import NavbarComponenet from '../../components/Navbar'
import "./styles.css";

export default function Desk() {
  return (
    <>
      <NavbarComponenet />

      <Grid style={{width:'100%'}} container spacing={3} style={{fontSize:'191%',width:'100%'}}>
        <Grid item xs={12} sm={6} style={{padding:'3rem'}} >
            <TodoList/>
        </Grid>
        {/* <Grid item xs={12} sm={6} style={{padding:'5rem'}}>
          <p className="quote_title">The more you think and talk about your goals, the more positive and enthusiastic you become.</p>
        </Grid> */}

      </Grid>

      <div>
        <p className="quote_title">"The more you think and talk about your goals, the more positive and enthusiastic you become."</p>
      </div>
    </>
  );
}