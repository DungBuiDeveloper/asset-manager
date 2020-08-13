/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import styled from 'styled-components';
import { Route } from 'react-router-dom';
import Switch from 'react-router-transition-switch';
import Fader from 'react-fader';
import HomePage from 'containers/HomePage/Loadable';

import FeaturePage from 'containers/FeaturePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Header from 'components/Header';
import Footer from 'components/Footer';

import 'bootstrap/dist/css/bootstrap.min.css';
import GlobalStyle from '../../global-styles';
import '../../scss/index.scss';

import PrivateRoute from './PrivateRoute';
import ScrollToTop from './ScrollToTop';

// Blog
import Blog from 'containers/Blog/Loadable';
import AddBlog from 'containers/Blog/AddBlog';
import EditBlog from 'containers/Blog/EditBlog';
// Blog

//Example
import ExampleIndex from 'containers/Example/Loadable';

//Example

const AppWrapper = styled.div`
  margin: 0 auto;
  padding: 0 16px;
`;

export default function App() {
  return (
    <AppWrapper>
      <ScrollToTop />
      <Header />
      <Switch component={Fader}>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/login" component={HomePage} />
        <Route path="/features" component={FeaturePage} />

        {/* Route Blog*/}
        <PrivateRoute exact path="/blogs" component={Blog} />
        <PrivateRoute path="/blogs/add-blog" component={AddBlog} />
        <PrivateRoute path="/blogs/edit-blog/:id" component={EditBlog} />
        {/* Route Blog*/}

        {/** Example Code For Copy */}
        <PrivateRoute exact path="/example" component={ExampleIndex} />

        {/** Example Code For Copy */}

        <Route path="" component={NotFoundPage} />
      </Switch>
      <Footer />
      <GlobalStyle />
    </AppWrapper>
  );
}
