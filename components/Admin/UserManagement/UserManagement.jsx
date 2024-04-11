import React from 'react';
import { Card, Space, Table, Tag } from 'antd';
import { productColumns, userColumns } from './utils';
import AdminLayout from '../AdminLayout';

const data = [
  {
    key: '1',
    userName: 'John Brown',
    email: 'johnbrown@gmail.com',
    phoneNo: 234455522,
    gender: 'female',
    buildingNo: '104 S',
    buildingName: 'HEre 123',
    street: 'street 133',
    state: 'abc',
  },
  {
    key: '2',
    userName: 'Jim Green',
    email: 'johnbrown@gmail.com',
    phoneNo: 234455522,
    gender: 'male',
    buildingNo: '104 S',
    buildingName: 'HEre 123',
    street: 'street 133',
    state: 'abc',
  },
  {
    key: '3',
    userName: 'Joe Black',
    email: 'johnbrown@gmail.com',
    phoneNo: 234455522,
    gender: 'male',
    buildingNo: '104 S',
    buildingName: 'HEre 123',
    address: 'Sydney No. 1 Lake Park',
    street: 'street 133',
    state: 'abc',
  },
];

const UserManagement = () => (
  <AdminLayout>
    <Card title="User Management">
      <Table columns={userColumns} dataSource={data} />
    </Card>
  </AdminLayout>
);
export default UserManagement;
