import { Layout, Menu, Avatar, Dropdown } from "antd";
import type { MenuProps } from "antd";
import { useNavigate, Outlet } from "react-router-dom";
import { useAuthForm } from "../hooks/useAuthForm";
import { useAuth } from "../hooks/useAuth";
import Footer from "../components/Footer";
import { UserOutlined } from "@ant-design/icons";
const { Header, Content } = Layout;

const GuestLayout = () => {
  const navigate = useNavigate();
  const { isLoggedIn } = useAuth();
  const { handleLogout } = useAuthForm();

  const menuItems: MenuProps["items"] = [
    { key: "home", label: "Trang chủ", onClick: () => navigate("/") },
    {
      key: "subjects",
      label: "Danh sách môn",
      onClick: () => navigate("/subjects"),
    },
  ];

  const dropdownItems: MenuProps["items"] = isLoggedIn
    ? [
        {
          key: "profile",
          label: "Trang cá nhân",
          onClick: () => navigate("/"),
        },
        {
          key: "history",
          label: "Lịch sử làm bài",
          onClick: () => navigate("/history"),
        },
        {
          key: "logout",
          label: "Đăng xuất",
          onClick: handleLogout,
        },
      ]
    : [
        {
          key: "login",
          label: "Đăng nhập",
          onClick: () => navigate("/login"),
        },
        {
          key: "register",
          label: "Đăng ký",
          onClick: () => navigate("/register"),
        },
      ];

  return (
    <>
      <Layout style={{ minHeight: "100vh" }}>
        <Header
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Menu
            theme="dark"
            mode="horizontal"
            items={menuItems}
            style={{ flex: 1 }}
          />

          <Dropdown
            key={isLoggedIn ? "logged-in" : "not-logged-in"}
            menu={{ items: dropdownItems }}
            trigger={["click"]}
          >
            <a onClick={(e) => e.preventDefault()}>
              <Avatar
                style={{
                  backgroundColor: isLoggedIn ? "#87d068" : "#f56a00",
                  cursor: "pointer",
                }}
                icon={<UserOutlined />}
              />
            </a>
          </Dropdown>
        </Header>

        <Content style={{ padding: 24, background: "#fff", minHeight: "85vh" }}>
          <Outlet />
        </Content>
      </Layout>
      <Footer />
    </>
  );
};

export default GuestLayout;
