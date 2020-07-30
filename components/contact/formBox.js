import Link from "next/link";

// components
import Input from "../form/input";
import Textarea from "../form/textArea";
import PrimaryButton from "../buttons/PrimaryButton";

const FormBox = ({ classList }) => {
  return (
    <div className={`form-box ${classList}`}>
      <Input placeholder="Name" />
      <Input placeholder="Email" classList="mt-3" />
      <Input placeholder="Phone" classList="mt-3" />
      <Textarea placeholder="Message" classList="mt-3" />
      <Link href="/">
        <a>
          <PrimaryButton classList="mt-4 w-100 py-3" title="Send Now" />
        </a>
      </Link>
      <style jsx>{`
        .form-box {
          max-width: 396px;
          max-height: 588px;
          padding: 50px 38px !important;
          background: #ffffff;
          box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.04),
            0px 0px 2px rgba(0, 0, 0, 0.06), 0px 0px 1px rgba(0, 0, 0, 0.04);
          border-radius: 8px;
        }
        @media screen and (max-width: 992px) {
          .form-box {
            padding: 40px 24px !important;
          }
        }
      `}</style>
    </div>
  );
};

export default FormBox;
