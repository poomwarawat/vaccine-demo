import "./App.css";
import { Switch, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import Menu from "./pages/Menu/Menu";
import VaccineRecord from "./pages/VaccineRecord/VaccineRecord";
import VaccineRecordTimeline from "./pages/VaccineRecordTimeline/VaccineRecordTimeline";

function App() {
  return (
    <div>
      <Switch>
        <Route path="/" component={Login} exact />
        <Route path="/menu" component={Menu} />
        <Route path="/vaccine-record" component={VaccineRecord} exact />
        <Route path="/vaccine-record/:name" component={VaccineRecordTimeline} />
      </Switch>
    </div>
  );
}

export default App;
