import { Form, Input, Button } from "antd";
import { useDispatch } from "react-redux";

const AddTask = ({ listData }) => {
  const dispatch = useDispatch();
  const [formRef] = Form.useForm();

  const onFormSubmit = (values) => {
    const { taskName } = values;
    dispatch({
      type: "ADD_TASK",
      payload: {
        taskName: taskName,
        taskId: `task_${Math.random()}`,
        listId: listData?.listId,
        listName: listData?.listName,
      },
    });
    formRef.resetFields();
  };
  return (
    <Form onFinish={onFormSubmit} className="addTaskForm" form={formRef}>
      <Form.Item
        name="taskName"
        rules={[
          {
            required: true,
            message: "Please enter task name!",
          },
        ]}
      >
        <Input type="text" size="medium" placeholder="Enter task name" />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" size="medium">
          Add Task
        </Button>
      </Form.Item>
    </Form>
  );
};

export default AddTask;
