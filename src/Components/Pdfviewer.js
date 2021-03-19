import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import Paper from '@material-ui/core/Paper';
import Singlepage from './Singlepage';
import samplePDF from '../assets/pdf/2K19-SE-012.pdf';
import FileUpload from './FileUpload';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: 'white'
  },
  paper: {
    height: 160,
    width: 180,
  },
  control: {
    padding: theme.spacing(2),
  },
}));

export default function PdfViewer() {
  const [spacing, setSpacing] = React.useState(2);
  const classes = useStyles();

  return (
    < div className={classes.root} style={{height: '100vh'}}>
    <h1 style={{color: 'black'}}>ASSIGNMENTS</h1>
    <Grid container spacing={2} style={{marginTop: '5rem'}}>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={3}>
          {[0, 1, 2, 3].map((value) => (
            <Grid key={value} item>
              <Singlepage pdf={samplePDF} />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
    <FileUpload />
    </ div>
  );
}

