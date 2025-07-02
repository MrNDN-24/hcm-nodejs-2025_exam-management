import { Layout, Menu } from "antd";
import { Outlet, useNavigate } from "react-router-dom";
import { useAuthForm } from "../hooks/useAuthForm";
import Footer from "../components/Footer";

const { Sider, Header, Content } = Layout;

const SupervisorLayout = () => {
  const navigate = useNavigate();
  const { handleLogout } = useAuthForm();

  const menuItems = [
    {
      key: "subjects",
      label: "QL Môn học",
      onClick: () => navigate("/suppervisor/subjects"),
    },
    {
      key: "questions",
      label: "QL Câu hỏi",
      onClick: () => navigate("/suppervisor/questions"),
    },
    {
      key: "tests",
      label: "Bài làm của học viên",
      onClick: () => navigate("/suppervisor/tests"),
    },
    { key: "logout", label: "Đăng xuất", onClick: handleLogout },
  ];

  return (
    <>
      <Layout style={{ minHeight: "100vh" }}>
        <Sider>
          <div style={{ color: "white", padding: 16, fontWeight: "bold" }}>
            SUPERVISOR
          </div>
          <Menu
            theme="dark"
            mode="inline"
            items={menuItems}
            selectable={false}
          />
        </Sider>
        <Layout>
          <Header style={{ background: "#fff", padding: 0 }} />
          <Content
            style={{
              margin: "24px 16px 0",
              padding: 24,
              background: "#fff",
              minHeight: "85vh",
            }}
          >
            <Outlet />
          </Content>
        </Layout>
      </Layout>
      <Footer />
    </>
  );
};

export default SupervisorLayout;
