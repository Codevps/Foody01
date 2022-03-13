import { Button, Container, Grid, TextField, Typography } from "@mui/material";
import React from "react";
import useStyles from "./styles";
import FacebookIcon from "@mui/icons-material/Facebook";
import Instagram from "@mui/icons-material/Instagram";
import Twitter from "@mui/icons-material/Twitter";
import { Link } from "react-router-dom";

export default function Footer() {
  const authenticated = null;
  const classes = useStyles();
  return (
    <Grid container direction="row" className={classes.container}>
      <Grid item xs={12} sm={4} className={classes.innerCont}>
        {authenticated ? (
          <Grid container direction="row">
            <Grid item xs={12} sm={6}>
              <Typography variant="h5" component="p">
                Company
              </Typography>
              <Typography variant="body1" component="p">
                <br />
                - About <br />
                - Blog <br />
                - Careers <br />
                - Contact <br />
                - Report Fraud <br />
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="h5" component="p">
                For You
              </Typography>
              <Typography variant="body1" component="p">
                <br />
                - Privacy <br />
                - Terms <br />
                - Security <br />
                - Sitemap <br />
                - Code of conduct <br />
              </Typography>
            </Grid>
          </Grid>
        ) : (
          <Grid item>
            <Typography variant="h4" component="p" className={classes.heading}>
              Foody for Business
            </Typography>
            <Typography
              variant="body1"
              component="p"
              style={{ fontSize: "1rem" }}
            >
              Get more out of your business, without losing focus on what is
              most important — delighting your customers
            </Typography>
            <br />
            <Button
              className={classes.buttonStyleOne}
              component={Link}
              to="/restaurantAuth"
            >
              Get Started
            </Button>
          </Grid>
        )}
      </Grid>
      <Grid item xs={12} md={5}>
        <Typography variant="h5" component="p" className={classes.heading}>
          Foody NewsLetter
        </Typography>
        <Typography variant="body1" component="p" style={{ marginBottom: 20 }}>
          Stay updated with new offers
        </Typography>
        <TextField label="Your Email address" variant="outlined" />
        <Button className={classes.buttonStyleTwo}>SEND</Button>
      </Grid>
      <Grid item xs={12} md={3} className={classes.resources}>
        <Typography variant="h5" component="p" className={classes.heading}>
          Follow Us
        </Typography>
        <Typography className={classes.logo}>
          <FacebookIcon /> FaceBook
        </Typography>
        <Typography className={classes.logo}>
          <Instagram /> Instagram
        </Typography>
        <Typography className={classes.logo}>
          <Twitter /> Twitter
        </Typography>
      </Grid>
      <Container className={classes.copy}>
        <Typography className={classes.footEnd}>
          <i> Copyright &copy; www.Foody.com. All rights reserved!</i>
        </Typography>
      </Container>
    </Grid>
  );
}
