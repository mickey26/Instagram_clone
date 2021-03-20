export const signInAction = (user) => {
  console.log(user.uid, "uid in action");
  return (dispatch) => {
    dispatch({ type: "signInType", payload: user.uid });
  };
};

export const signOutAction = () => {
  return (dispatch) => {
    dispatch({ type: "sign out" });
  };
};
