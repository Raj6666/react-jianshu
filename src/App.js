import React, { Component } from 'react';
import Header from './common/header';
import Error404 from './common/404';
import Error500 from './common/500';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import store from './store';
import Home from './pages/home';
import Detail from './pages/detail/loadable';
import Login from './pages/login';
import WriteArticle from './pages/writeArticle';
import { Provider } from 'react-redux';
import 'antd/dist/antd.css';
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <Header/>
            <Switch>
              <Route path='/' exact component={Home}></Route>
              <Route path='/login' exact component={Login}></Route>
              <Route path='/writeArticle' exact component={WriteArticle}></Route>
              <Route path='/detail/:id' exact component={Detail}></Route>
              <Route path='/errorPage' exact component={Error500}></Route>
              <Route component={Error404}></Route>
            </Switch>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
