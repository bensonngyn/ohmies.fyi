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
    name: "Stake (3,3)",
    icon: "tim-icons icon-coins",
    component: Stake,
    layout: "/Calculators",
  },
  {
    path: "/bond",
    name: "Bond (4,4)",
    icon: "tim-icons icon-bank",
    component: Bond,
    layout: "/Calculators",
  },
  {
    path: "/fuse",
    name: "Fuse (9,9)",
    icon: "tim-icons icon-planet",
    component: Fuse,
    layout: "/Calculators",
  },
  {
    path: "/riskgrowth",
    name: "Risk Growth",
    icon: "tim-icons icon-sound-wave",
    component: RiskGrowth,
    layout: "/Calculators",
  }
];
export default routes;
