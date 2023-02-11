import { Form, Input, Button, Col, Row } from "antd";
import { useDispatch } from "react-redux";
import "./listForm.css";

const CreateListForm = () => {
  const dispatch = useDispatch();
  const [formRef] = Form.useForm();

  const onFormSubmit = (values) => {
    const { listName } = values;
    dispatch({
      type: "ADD_LIST",
      payload: {
        listName: listName,
        listId: `list_${Math.random()}`,
      },
    });
    formRef.resetFields();
  };

  return (
    <Row justify="center" align="middle">
      <Col span={22}>
        <Form onFinish={onFormSubmit} className="listForm" form={formRef}>
          <Col span={10}>
            <Form.Item
              name="listName"
              rules={[
                {
                  required: true,
                  message: "Please enter listname!",
                },
              ]}
            >
              <Input type="text" size="medium" placeholder="Enter list name" />
            </Form.Item>
          </Col>
          <Col>
            <Form.Item>
              <Button type="primary" htmlType="submit" size="medium">
                Create
              </Button>
            </Form.Item>
          </Col>
        </Form>
      </Col>
    </Row>
  );
};

export default CreateListForm;
