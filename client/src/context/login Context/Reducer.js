const Reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_START":
      return {
        user: null,
        authtoken: null,
        isFetching: true,
        error: false,
      };
    case "LOGIN_SUCCESS":
      return {
        user: action.payload,
        authtoken: action.authtoken,
        isFetching: false,
        error: false,
      };
    case "LOGIN_FAILURE":
      return {
        user: null,
        authtoken: null,
        isFetching: false,
        error: true,
      };
    case "LOGOUT":
      return {
        user: null,
        authtoken: null,
        isFetching: false,
        error: false,
      };
    case "UPDATE_START":
      return {
        ...state,
        isFetching: true,
      };
    case "UPDATE_SUCCESS":
      return {
        user: action.payload,
        authtoken: state.authtoken,
        isFetching: false,
        error: false,
      };
    case "UPDATE_FAILURE":
      return {
        user: state.user,
        authtoken: state.authtoken,
        isFetching: false,
        error: true,
      };
    default:
      return state;
  }
};

export default Reducer;
