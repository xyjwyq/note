import store from "./index";
import { fetchStudent } from "./action/user";

store.dispatch(fetchStudent());
    