import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import AuthenticatedPage from '../../pages/AuthenticatedPage';
import FavouritePage from '../../pages/Favourite';
import FavouriteDetailsPage from '../../pages/FavouriteDetails/FavouriteDetails';
import HomePage from '../../pages/Home';
import LoginPage from '../../pages/Login';
import VideoDetailsPage from '../../pages/VideoDetails';
import Layout from '../Layout';

function App() {
  return (
    <HashRouter>
      <Layout>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/video/:videoId">
            <VideoDetailsPage />
          </Route>
          <Route exact path="/login">
            <LoginPage />
          </Route>
          <Route exact path="/favourite">
            <AuthenticatedPage>
              <FavouritePage />
            </AuthenticatedPage>
          </Route>
          <Route exact path="/favourite/:videoId">
            <AuthenticatedPage>
              <FavouriteDetailsPage />
            </AuthenticatedPage>
          </Route>
        </Switch>
      </Layout>
    </HashRouter>
  );
}

export default App;
