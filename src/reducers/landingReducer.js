const INITIAL_STATE = {
  userId: "",
  userName: "",
};

export default function landingReducer(state = INITIAL_STATE, action) {
  console.log(action.payload, "reduce page");
  switch (action.type) {
    case "signInType":
      return {
        userId: action.payload,
        // userName: action.payload.user.DisplayName,
      };
    case "sign out":
      return {
        userName: "",
        userId: "",
      };
    default:
      return state;
  }
}
