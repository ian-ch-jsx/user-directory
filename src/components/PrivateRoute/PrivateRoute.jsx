import { Redirect, Route } from 'react-router-dom';
import { useUser } from '../../context/UserContext';

export default function PrivateRoute({ children, ...rest }) {
  const { user } = useUser();
  console.log('privateroute', user);
  return (
    <Route
      {...rest}
      render={({ location }) =>
        user.email ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}
