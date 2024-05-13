import React from "react";
import { Helmet } from "react-helmet";
import { Button, Text } from "../../components";
import { Link } from "react-router-dom";

export default function Instructions() {
  return (
    <>
      <Helmet>
        <title>Game Instructions - Start Your Adventure</title>
        <meta
          name="description"
          content="Get ready to dive into the game with our comprehensive instructions. Understand the gameplay to enhance your experience and prepare for an unforgettable adventure."
        />
      </Helmet>

      {/* game kiosk screen section */}
      <div className="h-[1086px] w-full bg-white-A700 bg-[url(/public/images/img_gamekioskscreentwo.png)] bg-cover bg-no-repeat md:h-auto">
        {/* instructions section */}
        <div className="flex h-[1086px] items-center justify-center bg-[url(/public/images/img_group_9.png)] bg-cover bg-no-repeat px-14 py-[129px] md:h-auto md:p-5">
          <div className="mx-auto flex h-[826px] w-full max-w-[1442px] items-center justify-center bg-[url(/public/images/img_group_13.svg)] bg-cover bg-no-repeat px-14 pb-[139px] pt-[142px] md:h-auto md:p-5">
            <div className="flex w-[85%] flex-col items-center md:w-full">
              <Text size="md" as="p" className="self-start !font-passionone tracking-[8.40px]">
                INSTRUCTIONS
              </Text>
              <Text as="p" className="mt-[13px] w-full leading-[38px]">
                <>
                  Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem
                  ipsumLorem ipsumLorem ipsumLorem ipsum
                  <br />
                  Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem
                  ipsumLorem ipsumLorem ipsumLorem ipsum
                  <br />
                  Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem
                  ipsumLorem ipsumLorem ipsumLorem ipsum
                  <br />
                  Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem
                  ipsumLorem ipsumLorem ipsumLorem ipsum
                  <br />
                  Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem
                </>
              </Text>
              <div className="mt-[50px] flex w-[58%] justify-between gap-5 md:w-full">
                <Button shape="square" className="sm:px-5">
                  <Link to="/">Go back</Link>
                </Button>
                <Button shape="square" className="sm:px-5">
                  <Link to="/start">Start Game</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
