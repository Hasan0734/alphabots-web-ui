import './assets/styles/styles.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PublicRoute from './AuthRoutes/PublicRoute';
import LoginPage from './Pages/LoginPage';
import RobotsPage from './Pages/RobotsPage';
import TeamPage from './Pages/TeamPage';
import PrivateRoute from './AuthRoutes/PrivateRoute';
import useAuthCheck from './hooks/useAuthCheck'
import Navbar from './components/Navbar/Navbar';

function App() {
  const authCheck = useAuthCheck()

  return !authCheck ? (<div>Loading</div>) :  (<Router>
  

      <div id="app-wrapper" className="App">
        <div id="canvas-wrapper">
          <Navbar 
          />

          <div id="canvas">
            <Routes>
              <Route
                path='/'
                element={
                  <PrivateRoute>
                    <RobotsPage 
                    // isTeamMode={isTeamMode}
                    //  setIsTeamMode={setIsTeamMode}
                      />
                 </PrivateRoute>
                }
              />
              <Route
                path='/team'
                element={
                  <PrivateRoute>
                    <TeamPage />
                  </PrivateRoute>
                }
              />

              <Route
                path='/login'
                element={
                  <PublicRoute>
                    <LoginPage />

                  </PublicRoute>

                }
              />
            </Routes>

            {/* <Robots ref={el => robotsCmp = el} /> */}
            {/* <Switch>
            <Route exact path="/">
              <Robots ref={el => robotsCmp = el} />
            </Route>
            <Route path="/team">
              <Team />
            </Route>
            <Route path="/login">
              <Login onLogin = {onLogin} />
            </Route>
          </Switch> */}

          </div>
        </div>
      </div>


    </Router>)

  ;
}

export default App;
