import { SSTConfig } from "sst";
import MyWebApp  from "./stacks/index";

export default {
  config(_input) {
    return {
      name: "MyWebApp",
      region: "eu-west-3",
    };
  },
  stacks(app) {
    app.stack(MyWebApp);
  }
} satisfies SSTConfig;
