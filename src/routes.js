import React from "react"
import { Switch, Route} from "react-router-dom"
import Dashboard from "./Components/Dashboard/Dashboard";
import Wizzard from "./Components/Wizzard/Wizzard";
import StepOne from "./Components/StepOne/StepOne";
import StepTwo from "./Components/StepTwo/StepTwo";
import StepThree from "./Components/StepThree/StepThree";

export default
    (<Switch>
        <Route component ={Wizzard} path = "/wizzard" />
        <Route component ={Dashboard} exact path = "/" />
    </Switch>)