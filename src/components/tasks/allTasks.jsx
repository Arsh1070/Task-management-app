import { useSelector } from "react-redux";
import { Card, Col, Row } from "antd";
import EditTask from "./editTask";
import { useState } from "react";
import SaveTask from "./saveTask";
//import EditTask from "./editTask";

const AllTasks = ({ listId }) => {
  const tasksArr = useSelector((state) => state.taskData);
  const [input, setInput] = useState(false);
  const [saveTaskData, setSaveTaskData] = useState("");

  const onEditTask = (editStatus) => {
    setInput(!editStatus);
  };

  const onSaveTaskData = (taskData) => {
    setSaveTaskData(taskData);
  };

  const renderTasks = () => {
    if (tasksArr?.length > 0) {
      return tasksArr
        .filter((item) => item?.listId === listId)
        .map((item) => {
          return (
            <Col key={item?.taskId}>
              <Card
                title={
                  <EditTask
                    currentListId={item?.listId}
                    taskId={item?.taskId}
                    onEditTask={onEditTask}
                    receivedTaskData={saveTaskData}
                  />
                }
                style={{ width: 266 }}
              >
                {input ? (
                  <SaveTask
                    inputVal={item.taskName}
                    onSaveTaskData={onSaveTaskData}
                  />
                ) : (
                  item.taskName
                )}
              </Card>
            </Col>
          );
        });
    } else {
      return "";
    }
  };

  return <Row gutter={[8, 8]}>{renderTasks()}</Row>;
};

export default AllTasks;
