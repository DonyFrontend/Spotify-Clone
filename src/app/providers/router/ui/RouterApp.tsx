import { Route, Routes } from "react-router"
import { RouterConfig } from "../config/router-config"
import { FC, Suspense } from "react";

const RouterApp: FC = () => {


  return (
    <Suspense fallback={'loading'}>
      <Routes>
        {Object.values(RouterConfig).map((item, index) => <Route key={index} path={item.path} element={item.element} />)}
      </Routes>
    </Suspense>
  )
}

export default RouterApp;