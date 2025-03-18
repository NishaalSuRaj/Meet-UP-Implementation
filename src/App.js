import { Route, Routes } from "react-router-dom";

import AllMeetUps from './Pages/AllMeetUps'
import NewMeepUps from './Pages/NewMeepUps'
import Favourites from "./Pages/Favourites";
import Layout from './Components/layout/Layout';

function App() {
  return (

      <Layout>
        
        <Routes>
          <Route path="/favourites" element={<Favourites />} />
          
          <Route path="/" element={<AllMeetUps />} exact/>
          <Route path="/newmeetups" element={<NewMeepUps />} exact/>
          
        </Routes>
      </Layout>
  );
}

export default App;
