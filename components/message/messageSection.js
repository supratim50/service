import Link from "next/link";

import HeadingPrimary from "../heading/primaryHeading";
import PrimaryBtn from "../buttons/PrimaryButton";

const MessageSection = () => {
  return (
    <section className=" position-relative">
      <img
        src="/assets/images/message.png"
        className="back-img position-absolute"
      />
      <div className="container text-center">
        <HeadingPrimary
          title="You can even send us your MESSAGE"
          classList="text-white"
        />
        <Link href="">
          <a>
            <PrimaryBtn
              classList="mt-5 py-3 px-4 d-inline-block"
              title="Send Now"
            />
          </a>
        </Link>
      </div>
      <style jsx>{`
        section {
          padding: 136px 0;
          background: linear-gradient(360deg, #020a2c 36.46%, #00067d 100%);
        }
        .back-img {
          width: 100% !important;
          max-width: 579px !important;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
        .text-box {
          /* background: red; */
          z-index: 2;
        }
      `}</style>
    </section>
  );
};

export default MessageSection;
