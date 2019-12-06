import store from "./index";
import { fetchStudent } from "./action/student/searchResult";
import { createChangeAction } from "./action/student/searchCondition";

store.dispatch(createChangeAction({
    key: "10",
    sex: 0
}));

store.dispatch(fetchStudent());
