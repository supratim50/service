const Input = ({ classList, placeholder }) => {
  return (
    <>
      <input
        className={`input py-2 py-lg-3 px-4 w-100 border-0 paragraph-text ${
          classList ? classList : ""
        }`}
        placeholder={placeholder ? placeholder : ""}
      />
      <style jsx>{`
        .input {
          background: #ffffff;
          box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.04),
            0px 0px 2px rgba(0, 0, 0, 0.06), 0px 0px 1px rgba(0, 0, 0, 0.04);
          border-radius: 8px;
        }
        .input:focus {
          outline: none !important;
        }
        .input::placeholder {
          color: rgba(33, 48, 77, 0.79) !important;
        }
      `}</style>
    </>
  );
};

export default Input;
