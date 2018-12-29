import React, { Component } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { Container } from 'reactstrap';

import {
  AppAside,
  AppBreadcrumb,
  AppFooter,
  AppHeader,
  AppSidebar,
  AppSidebarFooter,
  AppSidebarForm,
  AppSidebarHeader,
  AppSidebarMinimizer,
  AppSidebarNav,
} from '@coreui/react';
// sidebar nav config
import navigation from '../../_nav';
// routes config
import routes from '../../routes';
import DefaultAside from './DefaultAside';
import DefaultFooter from './DefaultFooter';
import DefaultHeader from './DefaultHeader';

class DefaultLayout extends Component {
  render() {
    return (
      <div className="app">
        <AppHeader fixed>
          <DefaultHeader />
        </AppHeader>
        <div className="app-body">
        <AppSidebar  fixed display="lg">
            <AppSidebarHeader style={{backgroundColor:'rgba(0, 0, 0, 0.04)',borderColor:'rgba(0, 0, 0, 0.04)',color:'rgba(0, 0, 0, 0.04)'}}  />
            <AppSidebarForm style={{backgroundColor:'rgba(0, 0, 0, 0.04)',borderColor:'rgba(0, 0, 0, 0.04)',color:'rgba(0, 0, 0, 0.04)'}}/>
            <AppSidebarNav style={{backgroundColor:'#ffffff',borderColor:'#ffffff'}} navConfig={navigation} {...this.props} />
            <AppSidebarFooter style={{backgroundColor:'#ffffff',borderColor:'#ffffff'}} />
            <AppSidebarMinimizer style={{backgroundColor:'#beaf87',borderColor:'#beaf87'}} />
          </AppSidebar>
          <main className="main">
            <AppBreadcrumb appRoutes={routes}/>
            <Container fluid>
              <Switch>
                {routes.map((route, idx) => {
                    return route.component ? (<Route key={idx} path={route.path} exact={route.exact} name={route.name} render={props => (
                        <route.component {...props} />
                      )} />)
                      : (null);
                  },
                )}
                <Redirect from="/" to="/dashboard" />
              </Switch>
            </Container>
          </main>
          <AppAside fixed hidden>
            <DefaultAside />
          </AppAside>
        </div>
        <AppFooter>
          <DefaultFooter />
        </AppFooter>
      </div>
    );
  }
}

export default DefaultLayout;
