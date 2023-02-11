import { Layout } from "antd";
import "./App.css";
import CreateListForm from "./components/list/index";
import TaskLists from "./components/tasks/index";
const { Header, Content } = Layout;

const App = () => {
  return (
    <Layout>
      <Header className="appHeader">Task-Management-App</Header>
      <Content>
        <CreateListForm />
        <TaskLists />
      </Content>
    </Layout>
  );
};

export default App;
