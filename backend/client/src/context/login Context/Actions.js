export const loginStart = () => ({
  type: "LOGIN_START",
});

export const LoginSuccess = (user) => ({
  type: "LOGIN_SUCCESS",
  payload: user,
  authtoken: authtoken,
});

export const LoginFailure = () => ({
  type: "LOGIN_FAILURE",
});

export const Logout = () => ({
  type: "LOGOUT",
});

//ON SETTINGS CHANGE HANDLING
export const UpdateStart = () => ({
  type: "UPDATE_START",
});

export const UpdateSuccess = (user) => ({
  type: "UPDATE_SUCCESS",
  payload: user,
  authtoken: authtoken,
});

export const UpdateFailure = () => ({
  type: "UPDATE_FAILURE",
});
