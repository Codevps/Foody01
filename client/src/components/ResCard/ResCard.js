import {
  ButtonBase,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const ResCard = ({ item }) => {
  const navigate = useNavigate();
  // SHOW THEM THE DASHBOARD OF HOTEL BY ADDING CERTAIN CONDITIONS.
  return (
    <div>
      <div>
        <Card
          style={{ margin: "1rem", paddingRight: "1rem" }}
          elevation={6}
          onClick={() => navigate(`/restaurant/${item.name}`)}
        >
          {/* <ButtonBase
            component="span"
            name="test"
            1className={classes.cardAction}
          >
            <CardMedia
            1  className={classes.media}
            1  image={item.selectedFile || bg}
            />
          </ButtonBase> */}
          <CardContent>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <Typography variant="h5">{item.name}</Typography>
              <Typography variant="h5">{item.email}</Typography>
              <Typography variant="h5">
                {item.town}, {item.city}
              </Typography>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ResCard;
