import { ADD_ENTITY } from "./action";

const initState = {
    entities: [],
}


export const reducer = (store = initState, { type, payload }) => {
  switch (type) {
    case ADD_ENTITY:
      return { ...store, entity: payload };
    default:
      return store;
  }
};
