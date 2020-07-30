const PrimaryHeading = ({ classList, title }) => {
  return (
    <h2 className={`heading-primary font-weight-bold ${classList}`}>{title}</h2>
  );
};

export default PrimaryHeading;
