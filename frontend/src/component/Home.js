import { Routes, Route } from "react-router-dom"
// import AdminLogin from "./AdminLogin"
import App from "../App"
import AdminLogin from "./AdminLogin"
import StudentLogin from "./StudentLogin"
import AdminDashboard from "./AdminDashboard"
import ViewTask from "./ViewTask"
import StudentDashboard from "./StudentDashboard"
import StudentRegister from "./StudentRegister"
import About from "./About"
import Admindash from "./Admindash"
import Completedtask from "./Completedtask"
import Pendingtask from "./Pendingtask"
import Taskstatus from "./Taskstatus"
import InProgressTask from "./InProgressTask"
import Deployed from "./Deployed"
import Deferred from "./Deferred"
import LoginPage from "./LoginPage"
import Loader from "./Loader"
import Contact from "./Contact"
import Feedback from "./Feedback"

function Home() {
  return (
    <Routes>
    <Route index path="/" element={ <App/> } />
    <Route path="/adminlogin" element={ <AdminLogin/> } />
    <Route path="/studentlogin" element={ <StudentLogin/> } />
    <Route path="/admindash" element={ <AdminDashboard/> } />
    <Route path="/viewtask" element={ <ViewTask/> } />
    <Route path="/studentdash" element={ <StudentDashboard/> } />
    <Route path="/studentresgister" element={ <StudentRegister/> } />
    <Route path="/about" element={ <About/> } />
    <Route path="/contact" element={ <Contact/> } />
    <Route path="/feedback" element={ <Feedback/> } />
    <Route path="/admindashboard" element={ <Admindash/> } />
    <Route path="/completedtasks" element={ <Completedtask/> } />
    <Route path="/pendingTask" element={<Pendingtask/>}></Route>
    <Route path="/inProgressTask" element={<InProgressTask/>}></Route>
    <Route path="/deployedTask" element={<Deployed/>}></Route>
    <Route path="/deferredTask" element={<Deferred/>}></Route>
    <Route path="/statsTask" element={<Taskstatus/>}></Route>
    <Route path="/loginpage" element={<LoginPage/>}></Route>
    <Route path="/loader" element={<Loader/>}></Route>
    {/* <Route path="contact" element={ <Contact/> } /> */}
  </Routes>
  )
}

export default Home