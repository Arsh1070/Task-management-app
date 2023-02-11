import { useSelector, useDispatch } from "react-redux";
import { Button, Card, Col, Collapse, Empty, Row } from "antd";
import AddTask from "./addTask";
import AllTasks from "./allTasks";
import "./tasks.css";
import { DeleteOutlined, DownloadOutlined } from "@ant-design/icons";
import { exportToExcel } from "../../util/handler/downloadFile";
const { Panel } = Collapse;

const TaskLists = () => {
  const dispatch = useDispatch();
  const listsData = useSelector((state) => state.listData);
  const taskData = useSelector((state) => state.taskData);

  const onDownloadExelFile = () => {
    const finalTaskArr = taskData.filter((item) => item.listId !== null);
    exportToExcel(finalTaskArr);
  };

  const onDeleteLists = () => {
    dispatch({ type: "DELETE_LISTS" });
  };

  const renderListItem = () => {
    const finalListArr = listsData.filter((item) => item.listId !== null);
    if (finalListArr.length > 0) {
      return (
        <>
          <div className="list-btns">
            <Button
              type="primary"
              size="medium"
              icon={<DownloadOutlined />}
              onClick={onDownloadExelFile}
            >
              Download .excel
            </Button>
            <Button
              type="primary"
              size="medium"
              danger
              icon={<DeleteOutlined />}
              onClick={onDeleteLists}
            >
              Delete All
            </Button>
          </div>

          <Card
            title={<div style={{ textAlign: "center" }}>All Task Lists</div>}
          >
            {finalListArr.map((item, index) => {
              return (
                <Collapse className="list" key={item?.listId}>
                  <Panel
                    header={
                      <div className="listHeading">
                        <span>
                          {index + 1}
                          {". "} {item?.listName}
                        </span>
                        <AddTask listData={item} />
                      </div>
                    }
                  >
                    <AllTasks listId={item?.listId} />
                  </Panel>
                </Collapse>
              );
            })}
          </Card>
        </>
      );
    } else {
      return (
        <Card
          title={<p style={{ textAlign: "center" }}>All Task Lists</p>}
          key="Empty_list"
        >
          <Empty />
        </Card>
      );
    }
  };

  return (
    <Row justify="center">
      <Col span={22}>{renderListItem()}</Col>
    </Row>
  );
};

export default TaskLists;
