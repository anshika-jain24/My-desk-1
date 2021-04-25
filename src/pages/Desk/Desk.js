import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TodoList from '../../page-components/Desk/Todo/TodoList';
import Drawer from '../../page-components/Desk/Drawer';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Clock from 'react-clock';
import 'react-clock/dist/Clock.css';
import LogoutHooks from '../../page-components/Auth/LogoutHooks';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import '../../Styles/Button.css';
import {Navbar, Nav, NavDropdown, NavItem, Form, FormControl} from 'react-bootstrap'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: 'whitesmoke',

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
  const d = new Date();

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
      <Navbar collapseOnSelect expand="lg" bg="transparant" variant="dark">
        {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
          </Nav>
          <Nav>
            <Nav.Item style={{fontSize: '20px', color: 'black', marginRight: '20px', marginTop: '4px'}}>{`${d.getDate()}/${d.getMonth()}/${d.getFullYear()} ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`}</Nav.Item>
            <Nav.Link href="/groupstudying" style={{marginTop: '6px', color: 'black', fontSize: '18px', marginTop: '1px', marginRight: '10px'}}>
              Group Study
            </Nav.Link>
            <Nav.Item style={{marginTop: '6px'}}>
              <LogoutHooks />
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Grid style={{width:'100%'}} container spacing={3} style={{fontSize:'191%',width:'100%'}}>
        <Grid item xs={12} sm={6} style={{padding:'3rem'}} >
            <TodoList/>
        </Grid>
        <Grid item xs={12} sm={6} style={{padding:'5rem'}}>
          <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil rem numquam perspiciatis culpa. Neque aperiam temporibus fugit placeat rerum sed quae incidunt id officiis facilis necessitatibus optio et veniam maxime nemo ipsa vitae, nihil, sapiente tenetur deleniti! Itaque praesentium reprehenderit necessitatibus iste deserunt! Laboriosam consequuntur voluptate nemo, officia unde blanditiis!</span>
        </Grid>
        <div style={{margin: '0 auto'}}>
        <Drawer />
        </div>
      </Grid>
      {/* <div className="Logout-card">
        <Link to='/groupstudying'>
        <Button variant="contained" color="black" size="medium" style={{margin: '3rem', fontSize: '2rem', borderRadius: '5%', backgroundColor: 'white'}}>
              <span>Group Study</span>
            </Button>
        </Link>
      </div> */}
    </div>
  );
}
