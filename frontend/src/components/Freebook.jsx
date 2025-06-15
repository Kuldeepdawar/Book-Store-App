import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import list from "../../public/list.json";

const Freebook = () => {
  const filterData = list.filter((data) => data.category === "free");
  console.log(filterData);

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div>
          {" "}
          <h1 className="font-bold text-xl pb-5">Free offered courses</h1>
          <p>
            These books are very helpfull to improving in knowledge and using
            these book you can get to know latest trends
          </p>
        </div>

        <div>
          <Slider {...settings}>{filterData.map(item)}</Slider>
        </div>
      </div>
    </>
  );
};

export default Freebook;
