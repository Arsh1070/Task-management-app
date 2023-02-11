import { Button, Form, Select } from "antd";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

const EditTask = ({ currentListId, taskId, onEditTask, receivedTaskData }) => {
  const dispatch = useDispatch();
  const listOptions = useSelector((state) => state.listData);
  const [edit, setEdit] = useState(false);

  const renderOptions = () => {
    return listOptions
      .filter((item) => item.listId !== null && item.listId !== currentListId)
      .map((item) => {
        return (
          <Select.Option value={item.listId}>{item.listName}</Select.Option>
        );
      });
  };

  const onListChange = (listVal) => {
    dispatch({
      type: "LIST_CHANGE",
      payload: { taskId: taskId, listId: listVal },
    });
  };

  const onEditTaskData = () => {
    setEdit(!edit);
    onEditTask(edit);
  };

  const onSaveTaskData = () => {
    dispatch({
      type: "SAVE_TASK",
      payload: {
        taskId: taskId,
        taskName: receivedTaskData,
      },
    });

    setEdit(!edit);
    onEditTask(edit);
  };

  const onDeleteTaskData = () => {
    dispatch({
      type: "DELETE_TASK",
      payload: {
        taskId: taskId,
      },
    });
  };

  return (
    <>
      {!edit ? (
        <Form className="editTaskForm">
          <Form.Item>
            <Select
              placeholder="Select list"
              onChange={onListChange}
              size="small"
            >
              {renderOptions()}
            </Select>
          </Form.Item>
          <Form.Item>
            <Button size="small" className="edit-btn" onClick={onEditTaskData}>
              Edit
            </Button>
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              size="small"
              danger
              onClick={onDeleteTaskData}
            >
              Delete
            </Button>
          </Form.Item>
        </Form>
      ) : (
        <Form className="editTaskForm">
          <Form.Item>
            <Button size="small" className="save-btn" onClick={onSaveTaskData}>
              Save Task
            </Button>
          </Form.Item>
        </Form>
      )}
    </>
  );
};

export default EditTask;
