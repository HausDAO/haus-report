/*!

=========================================================
* Black Dashboard React v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import OverviewTotals from "views/OverviewTotals.js";
import DaosInsights from "views/DaoInsights";
import ProposalInsights from "views/ProposalInsights";
import MemberInsights from "views/MemberInsights";
import BoostInsights from "views/BoostInsights";

var routes = [
  {
    path: "/overview-totals",
    name: "Overview",
    icon: "tim-icons icon-chart-pie-36",
    component: OverviewTotals,
    layout: "/stats",
  },
  {
    path: "/daos",
    name: "Daos",
    icon: "tim-icons icon-chart-pie-36",
    component: DaosInsights,
    layout: "/stats",
  },
  {
    path: "/proposals",
    name: "Proposals",
    icon: "tim-icons icon-chart-pie-36",
    component: ProposalInsights,
    layout: "/stats",
  },
  {
    path: "/members",
    name: "Members",
    icon: "tim-icons icon-chart-pie-36",
    component: MemberInsights,
    layout: "/stats",
  },
  {
    path: "/boosts",
    name: "Boosts",
    icon: "tim-icons icon-chart-pie-36",
    component: BoostInsights,
    layout: "/stats",
  },

  // {
  //   path: "/icons",
  //   name: "Icons",
  //   rtlName: "الرموز",
  //   icon: "tim-icons icon-atom",
  //   component: Icons,
  //   layout: "/admin",
  // },
  // {
  //   path: "/map",
  //   name: "Map",
  //   rtlName: "خرائط",
  //   icon: "tim-icons icon-pin",
  //   component: Map,
  //   layout: "/admin",
  // },
  // {
  //   path: "/notifications",
  //   name: "Notifications",
  //   rtlName: "إخطارات",
  //   icon: "tim-icons icon-bell-55",
  //   component: Notifications,
  //   layout: "/admin",
  // },
  // {
  //   path: "/user-profile",
  //   name: "User Profile",
  //   rtlName: "ملف تعريفي للمستخدم",
  //   icon: "tim-icons icon-single-02",
  //   component: UserProfile,
  //   layout: "/admin",
  // },
  // {
  //   path: "/tables",
  //   name: "Table List",
  //   rtlName: "قائمة الجدول",
  //   icon: "tim-icons icon-puzzle-10",
  //   component: TableList,
  //   layout: "/admin",
  // },
  // {
  //   path: "/typography",
  //   name: "Typography",
  //   rtlName: "طباعة",
  //   icon: "tim-icons icon-align-center",
  //   component: Typography,
  //   layout: "/admin",
  // },
  // {
  //   path: "/rtl-support",
  //   name: "RTL Support",
  //   rtlName: "ار تي ال",
  //   icon: "tim-icons icon-world",
  //   component: Rtl,
  //   layout: "/rtl",
  // },
];
export default routes;
