import React from "react";
import { Form } from "react-bootstrap";
import { BsFillTrashFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { finishTask, removeTask } from "../../actions/taskActions";

function Task(props) {
  const { tasky } = props;
  const dispatch = useDispatch();
  const deleteTask = () => {
    const id = tasky._id;
    const rev = tasky._rev;
    dispatch(removeTask(id, rev));
  };
  const completedTask = () => {
    dispatch(finishTask(tasky));
  };
  return (
    <tbody>
      <tr>
        <td>{tasky.list}</td>
        <td>{tasky.category}</td>
        <td>
          <BsFillTrashFill onClick={deleteTask} />
        </td>
        <td>
          <Form.Group id="formGridCheckbox">
            <Form.Check
              checked={tasky.progress}
              type="checkbox"
              label="Completed"
              onChange={completedTask}
            />
          </Form.Group>
        </td>
      </tr>
    </tbody>
  );
}

export default Task;
