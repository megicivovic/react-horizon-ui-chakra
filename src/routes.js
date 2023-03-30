import React from "react";

import { Icon } from "@chakra-ui/react";
import { MdPerson, MdHome, MdLogout, MdPeople } from "react-icons/md";

// Admin Imports
import MainDashboard from "views/admin/default";
import Customers from "views/admin/customers";
import Profile from "views/admin/profile";

// Auth Imports
// import SignInCentered from "views/auth/signIn";
import SignIn from "views/auth/signIn/index.jsx";

const routes = [
  {
    name: "Main Dashboard",
    layout: "/admin",
    path: "/default",
    icon: <Icon as={MdHome} width="20px" height="20px" color="inherit" />,
    component: MainDashboard,
  },
  {
    name: "Customers",
    layout: "/admin",
    path: "/customers",
    icon: <Icon as={MdPeople} width="20px" height="20px" color="inherit" />,
    component: Customers,
  },
  {
    name: "Profile",
    layout: "/admin",
    path: "/profile",
    icon: <Icon as={MdPerson} width="20px" height="20px" color="inherit" />,
    component: Profile,
  },
];

export const Logout = [
  {
    name: "Log Out",
    layout: "/auth",
    path: "/sign-out",
    icon: <Icon as={MdLogout} width="16px" height="16px" color="inherit" />,
    component: SignIn,
  },
];
export default routes;
