import { Route, Switch } from "react-router-dom";
import { Layout } from "antd";
import { MapChart } from "./components/MapChart";

function App() {
  <Layout className="height-100">
    <Switch>
      <MapChart />
    </Switch>
  </Layout>;
}

export default App;
