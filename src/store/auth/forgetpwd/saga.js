import { takeEvery, fork, put, all, call } from "redux-saga/effects"

// Login Redux States
import { 
  userForgetPassword,
  userForgetPasswordSuccess,
  userForgetPasswordError 
 } from "./forgetpwdSlice"

//Include Both Helper File with needed methods
import { getFirebaseBackend } from "../../../helpers/firebase_helper"
import {
  postFakeForgetPwd,
  postJwtForgetPwd,
} from "../../../helpers/fakebackend_helper"

const fireBaseBackend = getFirebaseBackend()

//If user is send successfully send mail link then dispatch redux action's are directly from here.
function* forgetUser({ payload: { user, history } }) {
  try {
    if ('jwt' === "firebase") {
      const response = yield call(fireBaseBackend.forgetPassword, user.email)
      if (response) {
        yield put(
          userForgetPasswordSuccess(
            "Reset link are sended to your mailbox, check there first"
          )
        )
      }
    } else if ('jwt' === "jwt") {
      const response = yield call(postJwtForgetPwd, "/jwt-forget-pwd", {
        email: user.email,
      })
      if (response) {
        yield put(
          userForgetPasswordSuccess(
            "Reset link are sended to your mailbox, check there first"
          )
        )
      }
    } else {
      const response = yield call(postFakeForgetPwd, "/fake-forget-pwd", {
        email: user.email,
      })
      if (response) {
        yield put(
          userForgetPasswordSuccess(
            "Reset link are sended to your mailbox, check there first"
          )
        )
      }
    }
  } catch (error) {
    yield put(userForgetPasswordError(error))
  }
}

export function* watchUserPasswordForget() {
  yield takeEvery(userForgetPassword, forgetUser)
}

function* forgetPasswordSaga() {
  yield all([fork(watchUserPasswordForget)])
}

export default forgetPasswordSaga
