import {
  ADD_TASK,
  FINISH_TASK,
  GET_TASKS,
  REMOVE_TASK,
} from "../actions/types";

const initialState = {
  task: {
    userID: "",
    list: "",
    category: "",
    progress: false,
  },
  tasks: [],
};
export default function taskReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        task: action.payload,
      };
    case GET_TASKS:
      return {
        ...state,
        tasks: action.payload,
      };
    case REMOVE_TASK:
      return {
        ...state,
      };
    case FINISH_TASK:
      return {
        ...state,
        progress: true,
      };
    default:
      return {
        ...state,
      };
  }
}
