import { FaFacebookF, FaWhatsapp, FaEnvelope } from "react-icons/fa";

const TeamCard = ({ classList, imageUrl, title }) => {
  return (
    <div className={`card border-0 text-center ${classList}`}>
      <div className="image-box position-relative overflow-hidden">
        <img className="card-img-top" src={imageUrl} alt="Card image cap" />
        <div className="hover-div d-flex justify-content-center align-items-center w-100 h-100">
          <i className="social-icon">
            <FaFacebookF />
          </i>
          <i className="social-icon ml-4">
            <FaWhatsapp />
          </i>
          <i className="social-icon ml-4">
            <FaEnvelope />
          </i>
        </div>
      </div>
      <div className="card-body py-4 p-0">
        <p className="paragraph-text text-dark-grey mb-0 text-center">
          {title}
        </p>
      </div>
      <style jsx>{`
        .card {
          background-color: transparent !important;
          max-width: 231px !important;
        }
        .image-box {
          border-radius: 8px !important;
        }
        .card-img-top {
          max-height: 263px !important;
          object-fit: cover;
        }
        .hover-div {
          position: absolute !important;
          top: 0;
          left: 0;
          background-color: rgba(255, 255, 255, 0.8);
          transform: translateY(100%);
          transition: 0.5s;
          visibility: hidden;
          opacity: 0;
        }
        .social-icon {
          font-size: 25px;
          color: rgba(33, 48, 77, 0.79);
          cursor: pointer;
          transition: 0.5s;
        }
        .social-icon:hover {
          color: #03215d !important;
        }
        .image-box:hover .hover-div {
          transform: translateY(0);
          visibility: visible;
          opacity: 1;
        }
      `}</style>
    </div>
  );
};

export default TeamCard;
