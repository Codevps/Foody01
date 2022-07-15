import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import Instagram from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Twitter from "@mui/icons-material/Twitter";
import { Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import useStyles from "./styles";

export default function Footer() {
  const authenticated = null;
  const classes = useStyles();

  return (
    <Grid container direction="row" className={classes.container} spacing={2}>
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
            <Typography variant="h4" className={classes.heading}>
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
      <Grid
        item
        xs={12}
        md={3}
        // style={{ md ? paddingLeft: "5rem" : '0'}}
      >
        <Container className={classes.shift}>
          <Typography variant="h5" component="p" className={classes.heading}>
            Follow Us
          </Typography>
          <Typography className={classes.logo}>
            <FacebookIcon />
            <a className={classes.a} href="https://facebook.com" target="blank">
              FaceBook
            </a>
          </Typography>
          <Typography className={classes.logo}>
            <Instagram />{" "}
            <a
              className={classes.a}
              href="https://instagram.com"
              target="blank"
            >
              Instagram
            </a>
          </Typography>
          <Typography className={classes.logo}>
            <Twitter />{" "}
            <a className={classes.a} href="https://twitter.com" target="blank">
              Twitter
            </a>
          </Typography>
        </Container>
      </Grid>
      <Grid item xs={12} md={5}>
        <Typography variant="h5" component="p" className={classes.heading}>
          Contact Me(creator):
        </Typography>
        <Typography className={classes.logo}>
          <GitHubIcon />{" "}
          <a
            className={classes.a}
            href="https://github.com/Codevps"
            target="blank"
          >
            Github
          </a>
        </Typography>
        <Typography className={classes.logo}>
          <LinkedInIcon />{" "}
          <a
            className={classes.a}
            href="https://github.com/Codevps"
            target="blank"
          >
            LinkedIn
          </a>
        </Typography>
        <Typography className={classes.logo}>
          <Instagram />{" "}
          <a
            className={classes.a}
            href="https://github.com/Codevps"
            target="blank"
          >
            Instagram
          </a>
        </Typography>
      </Grid>

      <Container className={classes.copy}>
        <Typography className={classes.footEnd}>
          <i> Creator: Pratham Sawant</i>
          <br />
          <i> Email: codevps07@gmail.com</i>
          <br />
          <i> Copyright &copy; www.foody.com. All rights reserved!</i>
        </Typography>
      </Container>
    </Grid>
  );
}
