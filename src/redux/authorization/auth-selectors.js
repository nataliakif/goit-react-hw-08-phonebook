const getIsLoggedIn = state => state.auth.isLoggedIn;

const getUserName = state => state.auth.user?.name;

const isRefreshUserData = state => state.auth.isRefreshCurrentUser;

const authSelectors = {
  getIsLoggedIn,
  getUserName,
  isRefreshUserData,
};
export default authSelectors;
