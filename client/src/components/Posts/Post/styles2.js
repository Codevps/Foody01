import { makeStyles } from "@mui/styles";
export default makeStyles((theme) => ({
  media: {
    borderRadius: "20px",
    objectFit: "cover",
    width: "100%",
    maxHeight: "500px",
  },
  card: {
    display: "flex",
    width: "100%",
    flexDirection: "row-reverse",
    [theme.breakpoints.down("md")]: {
      flexWrap: "wrap",
      flexDirection: "column",
    },
  },
  section: {
    borderRadius: "20px",
    margin: "15px",
    flex: 1,
  },
  imageSection: {
    marginLeft: "25px",
    borderRadius: "6px",
    [theme.breakpoints.down("sm")]: {
      marginLeft: 0,
    },
  },
  recommendedPosts: {
    display: "flex",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
  loadingPaper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
    borderRadius: "15px",
    height: "39vh",
  },
  outContainer: {
    display: "flex",
    justifyContent: "space-between",
  },
  inContainer: {
    height: "200px",
    overflowY: "auto",
    marginRight: "30px",
  },
  heading: {
    marginTop: "3rem",
    paddingLeft: "1rem",
    paddingBottom: "0",
    color: "black",
    fontFamily: "Helvetica, Sans Serif ",
    fontSize: "30px",
  },
  mainContain: {
    display: "flex",
    flexDirection: "row",
    margin: "0.8rem",
  },
  dash: {
    padding: "0.3rem",
  },
}));
