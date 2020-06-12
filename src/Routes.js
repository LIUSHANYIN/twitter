import React from "react";
import RegisterPage from "./pages/Register";
import LoginPage from "./pages/Login";
import { Route } from "react-router-dom";
import HomePage from "./pages/Home";
const routes = [
  {
    path: "/",
    component: HomePage,
    isExact: true,
  },
  {
    path: "/login",
    component: LoginPage,
  },
  {
    path: "/register",
    component: RegisterPage,
  },
];
export default function Routes() {
  return (
    <div>
      {routes &&
        routes.map((routes, i) => (
          <Route
            component={routes.component}
            path={routes.path}
            exact={routes.isExact}
            key={i}
          />
        ))}
    </div>
  );
}
