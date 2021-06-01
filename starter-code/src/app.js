import React from 'react';
import Header from './header';
// import IsLoadingAndError from './IsLoadingAndError';
import Footer from './footer';
// import { useAuth0 } from '@auth0/auth0-react';
import { withAuth0 } from '@auth0/auth0-react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
// import LoginButton from './loginButton';
// import LogoutButton from './logoutButton';
import Profile from './profile';
import Login from './login.js';
import MyFavoriteBooks from './myFavoriteBooks.js';

class App extends React.Component {


  render() {
    console.log('app', this.props)
    return (
      <>
        <Router>
          {/* <IsLoadingAndError> */}
            <Header />
            <Switch>
              <Route exact path="/">
                {/* <LoginButton /> */}
                {/* TODO: if the user is logged in, render the `MyFavoriteBooks` component, if they are not, render the `Login` component */}

                {this.props.auth0.isAuthenticated ? <MyFavoriteBooks/> : <Login/>}

              </Route>
              <Route exact path="/profile">
              {/* TODO: add a route with a path of '/profile' that renders a `Profile` component */}
              
                < Profile />
              
              {/* <Profile /> */}
              </Route>
            </Switch>
            {/* <LogoutButton /> */}
            <Footer />
          {/* </IsLoadingAndError> */}
        </Router>

      </>
    )
  }
}

// export default App;
export default withAuth0(App);
// const AuthButton = props => {
//   let { isLoggedIn } = props;

//   if (isLoggedIn) {
//     return <button>Logout</button>;
//   } else {
//     return <button>Login</button>;
//   }
// };
