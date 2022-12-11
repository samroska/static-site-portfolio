import { Grid, Avatar } from '@mui/material';
import Contact from './Contact';

function About() {
    return (
      <div className="About"> 
            <Grid container spacing={2}>
                <Grid item lg={4}>
                    <Contact/>
                </Grid>
                <Grid item lg={8}>
                    <p>YO</p>
                </Grid>
            </Grid>
      </div>
    );
  }

export default About;