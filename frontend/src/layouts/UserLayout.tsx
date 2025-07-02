import { Layout, Menu } from "antd";
import { Outlet, useNavigate } from "react-router-dom";
import { useAuthForm } from "../hooks/useAuthForm";
import Footer from "../components/Footer";

const { Header, Content } = Layout;

const UserLayout = () => {
  const navigate = useNavigate();
  const { handleLogout } = useAuthForm();

  const menuItems = [
  { key: "subjects", label: "Danh sách môn học", onClick: () => navigate("/subjects") },
  { key: "tests", label: "Làm bài", onClick: () => navigate("/tests") },
  { key: "history", label: "Lịch sử làm bài", onClick: () => navigate("/history") },
  { key: "logout", label: "Đăng xuất", onClick: handleLogout },
];


  return (
    <>
      <Layout style={{ minHeight: "100vh" }}>
        <Header>
          <Menu theme="dark" mode="horizontal" items={menuItems} selectable={false} />
        </Header>
        <Content style={{ padding: 24, background: "#fff", minHeight: "85vh" }}>
          <Outlet />
        </Content>
      </Layout>
      <Footer />
    </>
  );
};

export default UserLayout;
