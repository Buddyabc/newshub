import React, { useState } from 'react';
import NewshubContainer from './components/NewshubContainer';
import Navbar from './components/Navbar';
import LoadingBar from "react-top-loading-bar"
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

const  App=()=>{
  // const apiKey=process.env.REACT_APP_MYAPIKEY;
  const apiKey="4e51d6d1e5f44d9ca3e42ec222997b47";
  const[progress,alterProgress]=useState(0);
  const [modeText,setModetext]=useState("light");
const changeModefxn = () => {
  if (modeText === 'light') {
      setModetext('dark');
      document.body.style.backgroundColor = 'grey';
  }
  else {
      setModetext('light');
      document.body.style.backgroundColor = 'white';
  }
};
 

    return (
      <Router>
        <div>
        <LoadingBar
        color='#f11946'
        height={3}
        progress={progress}>
        </LoadingBar>
        <Navbar modeText={modeText} changeModefxn={changeModefxn}/>
        <Routes>
    
          <Route exact path="/business" element={<NewshubContainer modeText={modeText} alterProgress={alterProgress} apiKey={apiKey} key="business" category="business"/>}></Route>
          <Route exact path="/entertainment" element={<NewshubContainer modeText={modeText} alterProgress={alterProgress} apiKey={apiKey}  key="entertainment"  category="entertainment"/>}></Route>
          <Route exact path="/health" element={<NewshubContainer modeText={modeText} alterProgress={alterProgress}  apiKey={apiKey} key="health"category="health"/>}></Route>
          <Route exact path="/science" element={<NewshubContainer modeText={modeText} alterProgress={alterProgress}apiKey={apiKey}  key="science" category="science"/>}></Route>
          <Route exact path="/technology" element={<NewshubContainer modeText={modeText} alterProgress={alterProgress}   apiKey={apiKey} key="technology" category="technology"/>}></Route>
          <Route exact path="/sports" element={<NewshubContainer modeText={modeText} alterProgress={alterProgress} apiKey={apiKey} key="sports"  category="sports"/>}></Route>
          <Route exact path="/" element={<NewshubContainer modeText={modeText} alterProgress={alterProgress}  apiKey={apiKey} key="general"  category="general"/>}></Route>
        </Routes>
        
      </div>
      </Router>
    )

    
  }

export default App;