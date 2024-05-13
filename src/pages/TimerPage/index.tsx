import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { Heading } from "../../components";

export default function TimerPage() {
  const [countdown, setCountdown] = useState(3);

  useEffect(() => {
    const countdownInterval = setInterval(() => {
      if (countdown > 0) {
        setCountdown(countdown - 1);
      } else {
        clearInterval(countdownInterval);
      }
    }, 1000);

    return () => clearInterval(countdownInterval);
  }, [countdown]);

  return (
    <>
      <Helmet>
        <title>Game Countdown - Get Ready to Play</title>
        <meta
          name="description"
          content="The excitement builds as the game countdown begins. Prepare for an intense gaming session and get ready to immerse yourself in the action in just moments."
        />
      </Helmet>

      {/* countdown section */}
      <div className="h-[1080px] w-full bg-white-A700 bg-[url(/public/images/img_gamekioskscreenone.png)] bg-cover bg-no-repeat md:h-auto">
        {/* countdown timer row section */}
        <div className="flex h-[1080px] items-center justify-center bg-[url(/public/images/img_group_9.png)] bg-cover bg-no-repeat px-14 pb-[306px] pt-[265px] md:h-auto md:p-5">
          {/* countdown timer column section */}
          <div className="flex w-[22%] flex-col gap-[37px] md:w-full">
            {countdown > 0 ? <>

              <Heading size="s" as="h1">
                Game starting in...
              </Heading>

              <div className="rounded-full border-white  bg-gray-900_59">
                <div className="flex flex-col  items-center border-white bg-cover bg-no-repeat  md:h-auto md:p-5">
                  <Heading as="h2">{countdown}</Heading>
                </div>
              </div></> : <Heading size="s" as="h4">Game started.</Heading>}

          </div>
        </div>
      </div>
    </>
  );
}
