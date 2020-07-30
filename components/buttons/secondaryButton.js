const SecondaryButton = ({ classList, title }) => {
  return (
    <div
      className={`button text-center text-white heading-secondary text-uppercase ${
        classList ? classList : ""
      }`}
    >
      {title}
      <style jsx>{`
        .button {
          background: transparent;
          border: 2px solid #ffffff;
          border-radius: 5px;
          transition: 0.5s;
        }

        .button:hover {
          background-color: #fff !important;
          color: #2855cb !important;
        }
      `}</style>
    </div>
  );
};

export default SecondaryButton;
