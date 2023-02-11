import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./Components/Layout/Layout";
import { createContext, useState } from "react";

export const GlobalInfo = createContext();

function App() {
  const [appgoal, setappGoal] = useState({
    goal: "",
    state: "",
    description: "",
    growth: "",
    giveitName: "",
    whythisAction: "",
    hobby: "",
    whythishobby: "",
    howoften: ""
  });
  const getGoal = (item) => {
    appgoal.goal = item;
    console.log(appgoal);
  };

  const getstate = (item) => {
    appgoal.state = item;
    console.log(appgoal);
  };

  const getdescription = (item) => {
    appgoal.description = item;
    console.log(appgoal);
  };

  const getgrowth = (item) => {
    appgoal.growth = item;
    console.log(appgoal);
  };

  const getname = (item) => {
    appgoal.giveitName = item;
    console.log(appgoal);
  };

  const getreason = (item) => {
    appgoal.whythisAction = item;
    console.log(appgoal);
  };

  const gethobby = (item) => {
    appgoal.hobby = item;
    console.log(appgoal);
  };

  const getwhythishobby = (item) => {
    appgoal.whythishobby = item;
    console.log(appgoal);
  };

  const gethowoften = (item) => {
    appgoal.howoften = item;
    console.log(appgoal);
  };

  return (
    <GlobalInfo.Provider value={{ appgoal: appgoal,
     getGoal: getGoal,
     getstate:getstate,
     getdescription:getdescription,
     getgrowth:getgrowth,
     getname:getname,
     getreason:getreason,
     gethobby:gethobby,
     getwhythishobby:getwhythishobby,
     gethowoften:gethowoften
      }}>
      <div className="App">
        <Routes>
          <Route path="/" element={<Layout />} />
        </Routes>
      </div>
    </GlobalInfo.Provider>
  );
}

export default App;
