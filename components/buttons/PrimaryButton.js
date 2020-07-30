const PrimaryButton = ({ classList, title }) => {
  return (
    <div
      className={`button text-center text-white heading-secondary text-uppercase ${
        classList ? classList : ""
      }`}
    >
      {title}
      <style jsx>{`
        .button {
          background: #2855cb;
          box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.04),
            0px 2px 6px rgba(54, 96, 205, 0.12),
            0px 16px 24px rgba(54, 96, 205, 0.2);
          border-radius: 5px;
        }
      `}</style>
    </div>
  );
};

export default PrimaryButton;
