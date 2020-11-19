import React from "react";
import { Badge, Card, Col, Form, Row } from "react-bootstrap";
import { BsFillTrashFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { finishTask, removeTask } from "../../actions/taskActions";
import "./Task.scss";

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
    <Row>
      <Col>
        <Card.Body className="taskbody">
          <Row>
            <Col>
              {tasky.progress ? (
                <Badge variant="success">Completed</Badge>
              ) : (
                <Badge variant="danger">Not Completed</Badge>
              )}
            </Col>
            <Col style={{ display: "-webkit-inline-box" }}>
              <Form.Group className="taskcheck">
                <Form.Check
                  type="checkbox"
                  checked={tasky.progress}
                  onChange={completedTask}
                  aria-label="option 1"
                />
              </Form.Group>

              <h5>{tasky.list}</h5>
            </Col>
            <Col>
              <span>{tasky.category}</span>
            </Col>
            <Col>
              <button className="btn" onClick={deleteTask}>
                <BsFillTrashFill />
              </button>
            </Col>
          </Row>
        </Card.Body>
      </Col>
    </Row>
  );
}

export default Task;
