import { takeLatest, all, call, put } from "redux-saga/effects";
import { getAllCourses, getAllCategories } from "../actionAPI/actionAPI";

function* invokeAPIHandler(action) {
  try {
    const [categoryList, apiResponse] = yield all([
      call(getAllCategories),
      call(getAllCourses),
    ]);
    if (categoryList.data.payload) {
      const resultList = JSON.parse(categoryList.data.payload);
      yield put({ type: "CATEGORY_RESPONSE_RECEIVED", payload: resultList });
    }
    if (apiResponse.data.payload) {
      const resultList = JSON.parse(apiResponse.data.payload);
      yield put({ type: "RESPONSE_RECEIVED", payload: resultList });
      yield put({ type: "SELECTED_CATEGORY", payload: "all" });
    }
  } catch (error) {
    console.log(error);
  }
}

function* watcherSaga() {
  yield takeLatest("INVOKE_CATEGORY_API", invokeAPIHandler);
}

export default function* root() {
  yield all([watcherSaga()]);
}
