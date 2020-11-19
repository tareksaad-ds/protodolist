import React, { useEffect, useState } from "react";
import {
  Button,
  Card,
  Form,
  FormControl,
  FormGroup,
  Row,
  Col,
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
      {/* If User is true push to Dashboard */}
      {user ? (
        <div className=" success">
          <Form onSubmit={sendTask} className="task container">
            <FormGroup controlId="formGroupTask">
              <div className="container">
                <Row>
                  <Col sm={8}>
                    <FormControl
                      name="name"
                      placeholder="Enter your task"
                      type="text"
                      value={todo}
                      onChange={(e) => setTodo(e.target.value)}
                    />
                  </Col>
                  <Col sm={4}>
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
                    <Button
                      style={{ marginLeft: "20px" }}
                      type="submit"
                      variant="warning"
                    >
                      +{" "}
                    </Button>
                  </Col>
                </Row>
              </div>
            </FormGroup>
          </Form>
          {/* Loop for get tasks list */}
          <Card>
            <Card.Header>Your Dashoard</Card.Header>

            {allTasks &&
              allTasks.map((tasky) => {
                return <Task key={tasky._id} tasky={tasky} />;
              })}
          </Card>
        </div>
      ) : (
        // Failed Auth
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
