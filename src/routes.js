/*!

=========================================================
* Light Bootstrap Dashboard React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Dashboard from "views/Dashboard.jsx";
import UserProfile from "views/UserProfile.jsx";
import TableList from "views/TableList.jsx";
import Typography from "views/Typography.jsx";
import Icons from "views/Icons.jsx";
import Maps from "views/Maps.jsx";
import Notifications from "views/Notifications.jsx";
import Projects from "views/Projects.jsx";
import Milestones from "views/Milestones.jsx";
import Contractors from "views/Contrators.jsx";
import Donors from "views/Donors.jsx"

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "pe-7s-graph",
    component: Dashboard,
    layout: "/admin"
  },
  {
    path: "/user",
    name: "User Profile",
    icon: "pe-7s-user",
    component: UserProfile,
    layout: "/admin"
  },
  {
    path: "/projects",
    name: "Projects",
    icon: "pe-7s-note2",
    component: Projects,
    layout: "/admin"
  },
  {
    path: "/milestones",
    name: "Project Milestones",
    icon: "pe-7s-graph1",
    component: Milestones,
    layout: "/admin"
  },
  {
    path: "/contractors",
    name: "Contractors",
    icon: "pe-7s-cart",
    component: Contractors,
    layout: "/admin"
  },
  {
    path: "/maps",
    name: "Project Locations",
    icon: "pe-7s-map-marker",
    component: Maps,
    layout: "/admin"
  },
  {
    path: "/donors",
    name: "Donors",
    icon: "pe-7s-cash",
    component: Donors,
    layout: "/admin"
  }
];

export default dashboardRoutes;
