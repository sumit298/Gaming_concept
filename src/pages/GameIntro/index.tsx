import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Button, Heading, Text, Img } from "../../components";
import axios from "axios";
import { Link } from "react-router-dom";

export default function GameIntro() {
  const [gameContent, setGameContent] = useState({});

  useEffect(() => {
    const getGameData = async () => {
      const result = await axios.get(
        "https://378027ioph.execute-api.ap-south-1.amazonaws.com/test/Users?id=ec14dcc2-304d-4052-a177-01d68dd6a952"
      );
      const gameData = await result.data;
      console.log(gameData);
    };
    getGameData();
  }, []);
  return (
    <>
      <Helmet>
        <title>Laser Tag Adventure - Exciting Gaming Experience</title>
        <meta
          name="description"
          content="Join the Laser Tag adventure for an exhilarating and action-packed gaming experience. Perfect for groups of up to 12, enjoy a strategic, reflex-challenging treasure quest in 9-15 mins."
        />
      </Helmet>

      {/* main screen section */}
      <div className="h-[1080px] w-full bg-white-A700 bg-[url(/public/images/img_gamekioskscreenone.png)] bg-cover bg-no-repeat md:h-auto">
        {/* content section */}
        <div className="flex h-[1080px] items-center justify-center bg-[url(/public/images/img_group_9.png)] bg-cover bg-no-repeat px-14 py-[129px] md:h-auto md:p-5">
          {/* game info section */}
          <div className="mx-auto flex w-full max-w-[1425px] justify-center">
            {/* header section */}
            <div className="flex w-full items-center md:flex-col">
              {/* logo and image section */}
              <div className="relative z-[1] h-[600px] w-[26%] md:h-auto md:w-full">
                <Img
                  src="images/img_mask_group.png"
                  alt="masked image"
                  className="h-[600px] w-full object-cover"
                />

                {/* logo column section */}
                <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-[590px] w-[98%] flex-col items-center justify-center bg-[url(/public/images/img_group_11.svg)] bg-cover bg-no-repeat pb-[21px] pl-[26px] pr-14 pt-[520px] md:h-auto md:pr-5 md:pt-5 sm:p-5">
                  <Img
                    src="images/img_final_logo_white.png"
                    alt="final logo"
                    className="h-[49px] w-[46%] object-cover"
                  />
                </div>
              </div>

              {/* game description section */}
              <div className="relative ml-[-138px] flex h-[822px] flex-1 items-center justify-end bg-[url(/public/images/img_group_10.svg)] bg-cover bg-no-repeat pb-[194px] pl-14 pr-[127px] pt-[143px] md:ml-0 md:h-auto md:self-stretch md:p-5">
                {/* text and controls section */}
                <div className="flex w-[78%] flex-col items-start md:w-full">
                  <Text
                    size="md"
                    as="p"
                    className="!font-passionone tracking-[8.40px]"
                  >
                    LASERTAG
                  </Text>
                  <Text as="p" className="mt-1.5 w-full leading-[38px]">
                    Exhilarating and action-packed gaming experience that
                    combines strategic thinking, quick reflexes, and a quest for
                    treasure. Players find themselves in a dynamic and
                    challenging environment where they must navigate through a
                    series of laser-filled obstacles, complete various tasks,
                    and strive to uncover the ultimate treasure.
                  </Text>

                  {/* game details section */}
                  <div className="mt-[23px] flex w-[58%] gap-[23px] md:w-full sm:flex-col">
                    <Text
                      size="s"
                      as="p"
                      className="w-[54%] leading-[52px] sm:w-full"
                    >
                      <>
                        Duration
                        <br />
                        Maximum players
                      </>
                    </Text>
                    <Heading
                      size="xs"
                      as="h1"
                      className="w-[46%] leading-[52px] sm:w-full"
                    >
                      <>
                        9 to 15 mins
                        <br />
                        12 players
                      </>
                    </Heading>
                  </div>

                  {/* action buttons section */}
                  <div className="mt-[17px] flex w-[87%] justify-between gap-5 md:w-full">
                    <Button shape="square">
                      <Link to="/instructions">How to Play</Link></Button>
                    <Button shape="square"><Link to="/start">Start Game</Link></Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
