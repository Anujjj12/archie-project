import { Button, Space, Tag } from 'antd';
import EditUser from './EditUser';

export const userColumns = [
  {
    title: 'User Name',
    dataIndex: 'userName',
    key: 'userName',
  },
  {
    title: 'E-mail',
    dataIndex: 'email',
    key: 'email',
  },
  {
    title: 'Phone Number',
    dataIndex: 'phoneNo',
    key: 'phoneNo',
  },
  {
    title: 'Gender',
    dataIndex: 'gender',
    key: 'gender',
  },
  {
    title: 'Building No.',
    dataIndex: 'buildingNo',
    key: 'buildingNo',
  },
  {
    title: 'Building Name',
    dataIndex: 'buildingName',
    key: 'buildingName',
  },
  {
    title: 'Street',
    dataIndex: 'street',
    key: 'street',
  },
  {
    title: 'State',
    dataIndex: 'state',
    key: 'state',
  },
  {
    title: 'Action',
    key: 'action',
    render: (_, record) => (
      <Space size="middle">
        <EditUser />
        <Button danger ghost>
          Delete
        </Button>
      </Space>
    ),
  },
];
