const ClientComponent = ({ imageUrl }) => {
  return (
    <div className="trust-company-box py-4 text-center">
      <img className="company-img" src={imageUrl} alt="Compaby Image" />
      <style jsx>{`
        .trust-company-box {
          transition: 0.5s;
          border-radius: 8px;
        }

        .trust-company-box:hover {
          background: #ffffff;
          box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.04),
            0px 4px 8px rgba(0, 0, 0, 0.04), 0px 16px 24px rgba(0, 0, 0, 0.04),
            0px 24px 32px rgba(0, 0, 0, 0.04);
        }

        .company-img {
          max-width: 112px;
          max-height: 51px;
        }
      `}</style>
    </div>
  );
};

export default ClientComponent;
