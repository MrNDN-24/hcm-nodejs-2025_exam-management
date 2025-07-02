import { Button, Card, Typography, Row, Col } from "antd";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import "../../styles/HomePage.css";

const { Title, Paragraph } = Typography;

const HomePage = () => {
  const navigate = useNavigate();
  const { isLoggedIn, user } = useAuth();

  const handleStart = () => {
    if (user?.role_name === "user") {
      navigate("/tests");
    } else if (user?.role_name === "suppervisor") {
      navigate("/suppervisor/subjects");
    }
  };

  return (
    <div className="home-container">
      <Card className="home-card" bordered={false}>
        <Row gutter={[32, 16]} align="middle">
          <Col xs={24} md={14}>
            <Title>Hệ thống thi trực tuyến</Title>
            <Paragraph>
              Một nền tảng hiện đại hỗ trợ luyện thi hiệu quả cho học viên và
              quản lý chặt chẽ bởi giáo viên. Bạn có thể làm bài kiểm tra, theo
              dõi kết quả, và quản lý môn học, câu hỏi dễ dàng.
            </Paragraph>
            <Paragraph>
              Trải nghiệm hệ thống ngay hôm nay và nâng cao chất lượng giảng dạy
              và học tập.
            </Paragraph>

            {isLoggedIn && (
              <Button type="primary" size="large" onClick={handleStart}>
                Vào hệ thống
              </Button>
            )}
          </Col>
          <Col xs={24} md={10}>
            <div className="image-wrapper">
              <img
                src="https://gnums.co.in/Default/assets/img-gnweb/Exam_Module_28-07-2023.png"
                alt="Minh họa thi"
                className="home-image"
              />
            </div>
          </Col>
        </Row>
      </Card>
    </div>
  );
};

export default HomePage;
