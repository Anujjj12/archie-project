import {
  LogoutOutlined,
  OrderedListOutlined,
  ProductOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme, Tooltip, Typography } from 'antd';
import Router, { useRouter } from 'next/router';
const { Text } = Typography;
const { Header, Content, Sider } = Layout;

const items = [
  {
    label: 'Product Management',
    key: 'product-management',
    icon: <ProductOutlined />,
  },
  {
    label: 'User Management',
    key: 'user-management',
    icon: <UserOutlined />,
  },
  {
    label: 'Order Management',
    key: 'order-management',
    icon: <OrderedListOutlined />,
  },
];

const AdminLayout = ({ children }) => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const { asPath } = useRouter();

  return (
    <Layout>
      <Header
        style={{
          // display: 'flex',
          alignItems: 'center',
          position: 'fixed',
          top: 0,
          width: '100%',
          zIndex: 1,
          padding: '0 25px',
        }}
      >
        <div className="flex align-center justify-between">
          <div className="flex">
            <img
              src="/images/logo1.jpeg"
              height={50}
              style={{ margin: '10px ' }}
            />

            <h3
              className="text-white margin-left-10px header-title"
              style={{ margin: '0px 15px' }}
            >
              Admin Panel
            </h3>
          </div>
          <Tooltip title="Logout" placement="top">
            <LogoutOutlined className="text-white" style={{ height: 30 }} />
          </Tooltip>
        </div>
      </Header>
      <Layout style={{ marginTop: 65 }}>
        <Sider
          width={200}
          style={{
            background: colorBgContainer,
          }}
        >
          <Menu
            mode="inline"
            style={{
              height: '100%',
              borderRight: 0,
            }}
            items={items}
            selectedKeys={asPath.split('/')}
            onClick={({ key }) => {
              // console.log('key', key);
              Router.push(`/admin/${key}`);
            }}
          />
        </Sider>
        <Layout
          style={{
            padding: '0 24px 24px',
          }}
        >
          <Breadcrumb
            style={{
              margin: '16px 0',
            }}
          >
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>AdminLayout</Breadcrumb.Item>
          </Breadcrumb>
          <Content>{children}</Content>
        </Layout>
      </Layout>
    </Layout>
  );
};
export default AdminLayout;
