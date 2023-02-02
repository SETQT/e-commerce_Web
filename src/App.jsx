import React from "react";
import { Navigate } from "react-router-dom";

import SignUp from "./component/SignUp/SignUp";
import Home from "./page/Home";

import {
   BrowserRouter as Router,
   Routes,
   Route,
   Link,
   useRouteMatch
} from "react-router-dom"
class App extends React.Component {

   render() {
      return (
         // <Home />
         <div>
            <React.StrictMode>

               <Router>


                  <Routes>
                     <Route path="/">
                        <Route index element={<Navigate to="/home" replace />} />

                        <Route path="/home" exact element={<Home />} >  </Route>
                        <Route path="/signup" exact element={<SignUp />} >  </Route>


                     </Route>

                  </Routes>

               </Router>
            </React.StrictMode>



         </div>
      );
   }
}

export default App;
