import React, { Component } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Typography, Card, Box, CardContent, CardMedia } from "@mui/material";
export default class AutoPlay extends Component {
  render() {
    const settings = {
      // dots: true,
      arrows: false,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 3000,
      autoplaySpeed: 3000,
      cssEase: "linear",
      // rtl: true,
      pauseOnHover: false,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            // centerMode: true
          },
        },
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            // centerMode: true,
            centerPadding: "40px",
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            arrows: false,
            // centerMode: true,
            // centerPadding: "40px",
            slidesToShow: 1,
          },
        },
      ],
    };
    return (
      <div>
        <Typography
          gutterBottom="true"
          variant="h4"
          align="center"
          className={`fs-2 mt-4 mb-4 text-light fw-bold`}
          style={{ fontFamily: "Poppins" }}
        >
          Create For NSUT 2021
        </Typography>
        <Slider {...settings}>
          <div>
            <Box
              sx={{
                marginLeft: "100px",
                width: { xs: 260, sm: 250, md: 350, lg: 380 },
              }}
            >
              <Card
                sx={{
                  borderRadius: "8px",
                  height: { xs: 190, sm: 190, md: 250, lg: 270 },
                }}
              >
                <CardMedia
                  component="img"
                  image="https://i.ibb.co/v3H2zF0/xcess.png"
                ></CardMedia>
                <CardContent>
                  <Typography className={`fs-5 fw-bold`}>NSUT XCESS</Typography>
                </CardContent>
              </Card>
            </Box>
          </div>
          <div>
            <Box
              sx={{
                marginLeft: "100px",
                width: { xs: 260, sm: 250, md: 350, lg: 380 },
              }}
            >
              <Card
                sx={{
                  borderRadius: "8px",
                  height: { xs: 190, sm: 190, md: 250, lg: 270 },
                }}
              >
                <CardMedia
                  component="img"
                  image="https://i.ibb.co/8N11wtc/xplore.jpg"
                ></CardMedia>
                <CardContent>
                  <Typography className={`fs-5 fw-bold`}>
                    NSUT XPLORE
                  </Typography>
                </CardContent>
              </Card>
            </Box>
          </div>
          <div>
            <Box
              sx={{
                marginLeft: "100px",
                width: { xs: 260, sm: 250, md: 350, lg: 380 },
              }}
            >
              <Card
                sx={{
                  borderRadius: "8px",
                  height: { xs: 190, sm: 190, md: 250, lg: 270 },
                }}
              >
                <CardMedia
                  component="img"
                  image="https://i.ibb.co/7yWFD5W/notices2.png"
                ></CardMedia>
                <CardContent>
                  <Typography className={`fs-5 fw-bold`}>
                    IMS Notices Sanity Preserver
                  </Typography>
                </CardContent>
              </Card>
            </Box>
          </div>
          <div>
            <Box
              sx={{
                marginLeft: "100px",
                width: { xs: 260, sm: 250, md: 350, lg: 380 },
              }}
            >
              <Card
                sx={{
                  borderRadius: "8px",
                  height: { xs: 190, sm: 190, md: 250, lg: 270 },
                }}
              >
                <CardMedia
                  component="img"
                  image="https://i.ibb.co/SnFmVz4/thirdeye.png"
                ></CardMedia>
                <CardContent>
                  <Typography className={`fs-5 fw-bold`}>ThirdEye</Typography>
                </CardContent>
              </Card>
            </Box>
          </div>
          {/* <div>
            <Box width="350px" sx={{ marginLeft: "100px" }}>
              <Card sx={{ borderRadius: "8px" }}>
                <CardMedia
                  component="img"
                  height="200px"
                  image="https://picsum.photos/200"
                ></CardMedia>
                <CardContent>
                  <Typography>Hey There</Typography>
                </CardContent>
              </Card>
            </Box>
          </div> */}
          {/* <div>
            <Box width="300px" sx={{ marginLeft: "100px" }}>
              <Card sx={{ borderRadius: "8px" }}>
                <CardMedia
                  component="img"
                  height="200px"
                  image="https://picsum.photos/200"
                ></CardMedia>
                <CardContent>
                  <Typography>Hey There</Typography>
                </CardContent>
              </Card>
            </Box>
          </div> */}
        </Slider>
      </div>
    );
  }
}
