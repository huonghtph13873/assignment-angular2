// import React from 'react'

// type Props = {}

// const ProductDetail = (props: Props) => {
//   return (
//     <div>ProductDetail</div>
//   )
// }

// export default ProductDetail
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Avatar, Card, Skeleton, Switch } from 'antd';
import Title from 'antd/lib/skeleton/Title';
import React, { useState } from 'react';

// const { Meta } = Card;


const ProductDetail: React.FC = () => {
  const [loading, setLoading] = useState(true);

  const onChange = (checked: boolean) => {
    setLoading(!checked);
  };

  return (
    <>
      <Switch checked={!loading} onChange={onChange} />

      <Card style={{ width: 300, marginTop: 16 }} loading={loading}>
       <h1>ádasdasd</h1>
      </Card>

    
    </>
  );
};
export default ProductDetail