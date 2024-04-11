import React from 'react';
import { Card, Space, Table, Tag } from 'antd';
import { productColumns } from './utils';
import AdminLayout from '../AdminLayout';

const data = [
  {
    key: '1',
    productName: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    productName: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    productName: 'Joe Black',
    age: 32,
    address: 'Sydney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
];

const ProductManagement = () => (
  <AdminLayout>
    <Card title="Product Management">
      <Table columns={productColumns} dataSource={data} />
    </Card>
  </AdminLayout>
);
export default ProductManagement;
