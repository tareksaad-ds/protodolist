import React, { useEffect, useState } from "react";
import {
  Button,
  Form,
  FormControl,
  FormGroup,
  FormLabel,
  Table,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addTask, getTasks } from "../../actions/taskActions";
import "./Dash.scss";
import Task from "./Task";

function Dash() {
  const user = localStorage.getItem("userId");
  const [todo, setTodo] = useState("");
  const [category, setCategory] = useState("");
  const [progress, _] = useState(false);
  const task = { todo, category, user, progress };
  const dispatch = useDispatch();
  const sendTask = (e) => {
    e.preventDefault();
    dispatch(addTask(task));
  };
  useEffect(() => {
    const id = localStorage.getItem("userId");
    dispatch(getTasks(id));
  }, [dispatch]);
  const allTasks = useSelector((store) => store.task.tasks);

  return (
    <div>
      {user ? (
        <div className="success">
          <Form onSubmit={sendTask} className="task container">
            <FormGroup controlId="formGroupTask">
              <FormLabel>Add Task</FormLabel>
              <FormControl
                name="name"
                placeholer="Enter your task"
                type="text"
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
              />
              <Form.Group controlId="formGridCategory">
                <Form.Label>Category</Form.Label>
                <Form.Control
                  name="category"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  as="select"
                >
                  <option value="">Add Category..</option>
                  <option value="Work">Work</option>
                  <option value="Fitness">Fitness</option>
                  <option value="Shopping">Shopping</option>
                  <option value="Other">Other</option>
                </Form.Control>
              </Form.Group>
              {/* <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Very Important" />
              </Form.Group> */}

              <Button type="submit" variant="warning">
                Add Task
              </Button>
            </FormGroup>
          </Form>
          <Table striped bordered hover size="sm">
            <thead>
              <tr>
                <th>Task Name</th>
                <th>Category</th>
                <th>Delete</th>
                <th>Progress</th>
              </tr>
            </thead>

            {allTasks &&
              allTasks.map((tasky) => {
                return <Task key={tasky._id} tasky={tasky} />;
              })}
          </Table>
        </div>
      ) : (
        <div className="failed">
          <h4>
            Failed Authentication please <Link to="/login">login</Link>
          </h4>
        </div>
      )}
    </div>
  );
}

export default Dash;
