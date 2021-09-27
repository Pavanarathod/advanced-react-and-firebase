import { auth } from "../../database/firebase";
import { onAuthStateChanged } from "@firebase/auth";

import { authAction } from "../../features/authSlice";

export const registerUser = () => async (dispatch) => {
  try {
    dispatch(authAction.setLoading(true));

    await onAuthStateChanged(auth, (user) => {
      if (user) {
        return dispatch(authAction.setUserData(user));
      }

      dispatch(authAction.setLoading(false));
    });
  } catch (error) {
    dispatch(authAction.setError(error));
  }
};
