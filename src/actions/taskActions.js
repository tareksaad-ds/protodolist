import { ADD_TASK, FINISH_TASK, GET_TASKS, REMOVE_TASK } from "./types";
import Axios from "axios";

export const addTask = (task) => async (dispatch) => {
  const headers = {
    Authorization: "Basic YWRtaW46YWRtaW4=",
  };
  const res = await Axios.post(
    "http://localhost:5984/todo_tasks/",
    {
      userID: localStorage.getItem("userId"),
      list: task.todo,
      category: task.category,
      progress: task.progress,
    },
    { headers }
  );
  dispatch({
    type: ADD_TASK,
    payload: res.data,
  });
  const idy = localStorage.getItem("userId");
  dispatch(getTasks(idy));
};
export const getTasks = (id) => async (dispatch) => {
  const headers = {
    Authorization: "Basic YWRtaW46YWRtaW4=",
  };

  const res = await Axios.post(
    "http://localhost:5984/todo_tasks/_find/",
    {
      selector: { userID: id },
    },
    { headers }
  );
  dispatch({
    type: GET_TASKS,
    payload: res.data.docs,
  });
};

export const removeTask = (id, rev) => async (dispatch) => {
  const headers = {
    Authorization: "Basic YWRtaW46YWRtaW4=",
  };
  const res = await Axios.delete(
    `http://localhost:5984/todo_tasks/${id}?rev=${rev}`,
    {
      headers,
    }
  );
  dispatch({
    type: REMOVE_TASK,
    payload: res.data.docs,
  });
  const idy = localStorage.getItem("userId");
  dispatch(getTasks(idy));
};
export const finishTask = (tasky) => async (dispatch) => {
  const headers = {
    Authorization: "Basic YWRtaW46YWRtaW4=",
  };
  const doc = {
    ...tasky,
    progress: !tasky.progress,
  };
  await Axios.put(`http://localhost:5984/todo_tasks/${tasky._id}`, doc, {
    headers,
  });

  dispatch({
    type: FINISH_TASK,
    payload: doc,
  });
  const idy = localStorage.getItem("userId");
  dispatch(getTasks(idy));
};
