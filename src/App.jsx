import React from "react";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Navbar from "./component/Navbar";
import ReactDOM from 'react-dom';
import About from "./component/About";
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

   // componentDidMount() {
   //    this.context.router.getLocation().addChangeListener(listener);
   // }
   // componentWillUnmount() {
   //    this.context.router.getLocation().removeChangeListener(listener);
   // }
   render() {
      return (
         // <Home />
         <div>
            <React.StrictMode>

               <Router>


                  <Routes>
                     <Route path="/">

                        <Route path="/home" exact element={<Home />} >  </Route>
                        <Route path="/signup" exact element={<SignUp />} >  </Route>


                     </Route>
                     {/* <Route path="/" element={<Layout />}> */}
                     {/* <Route index element={<Home />} /> */}

                     {/* <Route path="*" element={<NoPage />} /> */}
                     {/* </Route> */}
                  </Routes>

               </Router>
            </React.StrictMode>

         </div>
      );
   }
}
// App.contextTypes = {
//    router: React.PropTypes.object,
//    location: React.PropTypes.object
// }
export default App;
