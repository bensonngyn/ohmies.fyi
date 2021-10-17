import Stake from "views/stake.js";
import Bond from "views/bond.js";
import Fuse from "views/fuse.js";
import RiskGrowth from "views/riskgrowth.js";
import TableList from "views/TableList.js";
import Typography from "views/Typography.js";
import UserProfile from "views/UserProfile.js";

var routes = [
  {
    path: "/stake",
    name: "Staking (3,3)",
    icon: "tim-icons icon-chart-pie-36",
    component: Stake,
    layout: "/Calculators",
  },
  {
    path: "/bond",
    name: "Bond (4,4)",
    icon: "tim-icons icon-atom",
    component: Bond,
    layout: "/Calculators",
  },
  {
    path: "/fuse",
    name: "Fuse (9,9)",
    icon: "tim-icons icon-pin",
    component: Fuse,
    layout: "/Calculators",
  },
  {
    path: "/riskgrowth",
    name: "Risk Growth",
    icon: "tim-icons icon-bell-55",
    component: RiskGrowth,
    layout: "/Calculators",
  }
];
export default routes;
