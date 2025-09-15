import React from 'react'

import { BrowserRouter , Routes, Route } from 'react-router-dom'
import Layout from './Layout/Layout'
import { RouteIndex, RouteSignIn, RouteSignUp } from './helpers/RouteName'
import Index from './Pages/Index'

import Landingpage from './Pages/Landingpage'
import LoginSignup from "./Pages/LoginSignup"
import LearnMore from "./Pages/LearnMore"
import Dashboard from "./Pages/Dashboard"
import Profile from "./Pages/Profile"
import Help from "./Pages/Help"
import Chatbot from "./Pages/Chatbot"
import Insights from "./Pages/Insights";
import Schedule from "./Pages/Schedule";
import EditProfile from './Pages/EditProfile'
import Settings from './Pages/Settings'

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path={RouteIndex} > 
      <Route index element ={ <Landingpage/>}/>
      </Route>

       <Route path="/login" element={<LoginSignup />} />
       <Route path="/learn-more" element={<LearnMore />} />
       <Route path="/dashboard" element={<Dashboard />} />
       <Route path="/profile" element={<Profile />} />
      <Route path="/help" element={<Help />} />
    <Route path="/chatbot" element={<Chatbot />} />
    <Route path="/insights" element={<Insights />} />
    <Route path="/schedule" element={<Schedule />} />
    <Route path="/edit-profile" element={<EditProfile />} />
    <Route path="/settings" element={<Settings />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App