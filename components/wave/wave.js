import React from "react";

const Wave = ({ imageUrl }) => {
  return (
    <div className="wave position-absolute w-100">
      <img className="w-100" src={imageUrl} alt="Wave" />
      <style jsx>{`
        .wave {
          bottom: -123px;
          left: 0;
        }
        @media screen and (max-width: 1250px) {
          .wave {
            bottom: -100px;
          }
        }
        @media screen and (max-width: 992px) {
          .wave {
            bottom: -80px;
          }
        }
        @media screen and (max-width: 820px) {
          .wave {
            bottom: -60px;
          }
        }
        @media screen and (max-width: 600px) {
          .wave {
            bottom: -40px;
          }
        }
        @media screen and (max-width: 410px) {
          .wave {
            bottom: -20px;
          }
        }
      `}</style>
    </div>
  );
};

export default Wave;
