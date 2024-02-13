import { BrowserRouter, Route, Routes } from "react-router-dom";
import WorkerReg from "./admin/WorkerReg";
import Workerdetails from "./admin/Workerdetails";
import ClientReg from "./worker-client/ClientReg";
import Clientdetails from "./worker-client/Clientdetails";
import Landing from "./landing/Landing";
import React from "react";
import Adminlog from "./admin/Adminlog";
import UserTypeSelection from "./admin/UserTypeSelection";
import Home from "./admin/Home";
// import { Home } from "@mui/icons-material";



function App() {
  return (
    <div>
      
         <BrowserRouter>
           <Routes>
           <Route path={'/'} element={<Home method='post' />}></Route>
          <Route path={'/login'} element={<Adminlog method='post' />}></Route>
          <Route path="/land" element={<Landing method="post"/>}></Route>
             <Route path="/type" element={<UserTypeSelection method="post"/>}></Route>
            <Route path="/WorkerReg" element={<WorkerReg method="post"/>}></Route>
            <Route path="/Workerdetails" element={<Workerdetails method="get"/>}></Route>

            <Route path="/ClientReg" element={<ClientReg method="post"/>}></Route>
          <Route path="/Clientdetails" element={<Clientdetails method="get" />}></Route>
          
           </Routes>
           </BrowserRouter>
           
    </div>
  );
}

export default App;
