import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import authSelectors from 'redux/authorization/auth-selectors';

export default function PublicRoute({
  children,
  restricted = false,
  redirectTo = '/contacts',
}) {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const shouldRedirect = isLoggedIn && restricted;
  return <>{shouldRedirect ? <Navigate to={redirectTo} /> : children}</>;
}

PublicRoute.propTypes = {
  restricted: PropTypes.bool,
  redirectTo: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};
