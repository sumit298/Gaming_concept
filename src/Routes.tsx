import React from "react";
import { useRoutes } from "react-router-dom";
import NotFound from "pages/NotFound";
import Instructions from "pages/Instructions";
import TimerPage from "pages/TimerPage";
import GameIntro from "pages/GameIntro";


const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "/", element: <GameIntro /> },
    { path: "*", element: <NotFound /> },
   
    {
      path: "/instructions",
      element: <Instructions />,
    },
    {
      path: "/start",
      element: <TimerPage/>,
    },
    
  ]);

  return element;
};

export default ProjectRoutes;
