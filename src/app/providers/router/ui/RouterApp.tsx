import { Route, Routes } from "react-router"
import { RouterConfig } from "../config/router-config"
import { FC } from "react";

const RouterApp: FC = () => {
  

  return (
    <Routes>
        {Object.values(RouterConfig).map((item, index) => <Route key={index} path={item.path} element={item.element}/>)}
    </Routes>
  )
}

export default RouterApp;