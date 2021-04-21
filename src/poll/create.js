// import { Checkbox } from 'antd';
// import React from 'react';
// import axios from 'axios'

// const signIn = async (props) => {
//     const topicId = this.props.location.state

//     try {
//         const urlOption = `http://localhost:3020/option/`+this.topicId

//         const urlTopic = `http://localhost:3020/topic/`+this.topicId
//         const responseOption = await axios.get(urlOption)
//         return <h1>{responseOption.data[0].content}</h1>;
//         // const responseTopic = await axios.get(urlTopic)
//         // console.log(responseTopic.data.content);
        
//     } catch (err) {
//     console.log(err);
//     }
// };
// export default class CreatePoll extends React.Component{

//     onChange = (checkedValues) => {
//         console.log('checked = ', checkedValues);
//     }
   


//     render(){
//         const a= <this.signIn></this.signIn>
//         console.log(a);
//         const options = [
//             // { label: a, value: a },
//             { label: 'Pear', value: 'Pear' },
//             { label: 'Orange', value: 'Orange' },
//         ];
//         return (
//             <>
//                 <br />
//                 <br />
//                 <Checkbox.Group options={options} className='option' onChange={this.onChange} />
//                 <br />
//                 <br />
//             </>
//         )
//     }
// }

import React, { useState } from 'react';
import { Table, Radio, Divider } from 'antd';
const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Option 1',
    dataIndex: 'age',
  },
  {
    title: 'Option 2',
    dataIndex: 'address',
  },
];
const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
  },
  {
    key: '4',
    name: 'Disabled User',
    age: 99,
    address: 'Sidney No. 1 Lake Park',
  },
]; // rowSelection object indicates the need for row selection

const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
  },
  getCheckboxProps: (record) => ({
    disabled: record.name === 'Disabled User',
    // Column configuration not to be checked
    name: record.name,
  }),
};
export default class CreatePoll extends React.Component{

render(){
  
  return (
    <div>
    
      <Divider />

      <Table
        rowSelection={{
          
          ...rowSelection,
        }}
        columns={columns}
        dataSource={data}
      />
    </div>
  );
};
}