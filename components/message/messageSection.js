import Link from "next/link";

import HeadingPrimary from "../heading/primaryHeading";
import PrimaryBtn from "../buttons/PrimaryButton";

const MessageSection = () => {
  return (
    <section className=" position-relative">
      <div className="container text-center" style={{ zIndex: 2 }}>
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
      {/* 
      <img
        src="/assets/images/message.png"
        className="back-img position-absolute"
        style={{ zIndex: 1 }}   
      /> */}
      <style jsx>{`
        section {
          padding: 136px 0;
          background: url(/assets/images/message.png),
            linear-gradient(360deg, #020a2c 36.46%, #00067d 100%);
          background-position: center;
          background-repeat: no-repeat;
        }
        @media screen and (max-width: 600px) {
          section {
            background-size: contain;
          }
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
