import { slice } from "./slice";
import actions from "./actions";
import selectors from './selectors';

const usersStore = {
    reducer: slice.reducer,
    ...slice.actions,
    ...actions,
    ...selectors,
};

export default usersStore;