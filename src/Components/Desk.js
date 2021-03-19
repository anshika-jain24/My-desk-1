import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TodoList from './TodoList';
import Drawer from './Drawer';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Clock from 'react-clock';
import 'react-clock/dist/Clock.css';
import LogoutHooks from './LogoutHooks';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import '../Styles/Button.css';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: 'black'
  },
  drawer: {
    padding: theme.spacing(15),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }
}));

export default function Desk() {
  const classes = useStyles();
  const [value, onChange] = useState(new Date());
  const [tvalue, setValue] = useState(new Date());
 
  useEffect(() => {
    const interval = setInterval(
      () => setValue(new Date()),
      1000
    );
 
    return () => {
      clearInterval(interval);
    }
  }, []);
  return (
    <div className={classes.root}>
      <Grid style={{width:'100%'}} container spacing={3} style={{fontSize:'191%',width:'100%'}}>
        <Grid item xs={12} sm={6} style={{padding:'3rem'}} >
            <TodoList/>
        </Grid>
        <Grid item xs={12} sm={3} style={{padding:'3rem'}}>
          <Calendar
          onChange={onChange}
          value={value} />
        </Grid>
        <Grid item xs={12} sm={3} style={{padding:'3rem'}}>
        <div style={{backgroundColor: 'white'}}>
          <p>Current time:</p>
          <div style={{padding: '7rem'}}>
          <Clock value={tvalue} />
          </div>
        </div>
        </Grid>
        <div style={{margin: '0 auto'}}>
        <Drawer />
        </div>
      </Grid>
      <div className="Logout-card">
        <Link to='/groupstudying'>
        <Button variant="contained" color="black" size="medium" style={{margin: '3rem', fontSize: '2rem', borderRadius: '5%', backgroundColor: 'white'}}>
              <span>Group Study</span>
            </Button>
        </Link>
      </div>
      <div className="Logout-card">
        <LogoutHooks />
      </div>
    </div>
  );
}
