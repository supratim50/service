const TextArea = ({ classList, placeholder }) => {
  return (
    <>
      <textarea
        className={`textarea py-2 py-lg-3 px-4 w-100 border-0 ${classList}`}
        placeholder={placeholder}
      ></textarea>
      <style jsx>{`
        .textarea {
          min-height: 150px !important;
          background: #ffffff;
          box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.04),
            0px 0px 2px rgba(0, 0, 0, 0.06), 0px 0px 1px rgba(0, 0, 0, 0.04);
          border-radius: 8px;
          resize: none !important;
        }
        .textarea:focus {
          outline: none !important;
        }
      `}</style>
    </>
  );
};

export default TextArea;
