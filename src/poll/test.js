// // import { Table } from 'antd';
// // import { useState } from 'react';


// // const CreatePoll = () => {
// //   const [selectedRowKeys, setSelectedRowKeys] = useState([])
// //   const [columns, setColumns] = useState([])

// //   setColumns([
// //     {
// //       title: 'Name',
// //       dataIndex: 'name',
// //     },
// //     {
// //       title: 'Age',
// //       dataIndex: 'age',
// //     },
// //     {
// //       title: 'Address',
// //       dataIndex: 'address',
// //     },
// //   ])

// //   const onSelectChange = (selectedRowKeys) => {
// //     console.log('selectedRowKeys changed: ', selectedRowKeys);
// //     setSelectedRowKeys(selectedRowKeys);
// //   };


// //   const [data, setData] = useState([])
// //   setData([
// //     {key: 1,
// //     name: `Edward King 1`,
// //     age: 32,
// //     address: `London, Park Lane no. 1`,}
// //   ])

// //   const rowSelection = {
// //     selectedRowKeys,
// //     onChange: onSelectChange,
// //     selections: [
// //       Table.SELECTION_ALL,
// //       Table.SELECTION_INVERT,
// //     ],
// //   };

// //   return( <Table rowSelection={rowSelection} columns={columns} dataSource={data} />)
// // }
// // export default CreatePoll 

// import { Table } from 'antd';
// import React, { useEffect, useState } from 'react'
// import axios from 'axios'
// import { Checkbox } from 'antd';

// const CreatePoll = (props) =>{
//   const topicId = props.location.state
//   let [dataSource, setDataSource] = useState([])
//   let [columns, setColumns] = useState([])
//   useEffect(async () => {
//     const polldata = await axios.get('http://localhost:3020/poll/' + topicId);
//     const countUser = polldata.data.poll.length;
//     const poll = polldata.data.poll
//     const resultTitle = await axios.get(
//       // 'http://localhost:3020/option/'+ topicId
//       'http://localhost:3020/poll/'+ topicId
//     );
    
//     const option =resultTitle.data.option
//     if(countUser !== 0){  
//       const dataSourceMap = poll?.map((item)=>{
//         return { 
//           key: item.id,
//           username: item.username,
//           sdfsf: <Checkbox/>,
//           sdff: <Checkbox/>,
          
//         }
        
//       })
//       setDataSource(dataSourceMap);
//     }
//     else{
//       setDataSource([{key: '1', userame: 'admin'}]);
//     }
  
//     const dataMap = option?.map((item) =>{
//         return {
//           title: item.content,
//           dataIndex: item.content,
//           width: '30%', 
//         }
//       })
//       dataMap.unshift({ 
//         title: 'username',
//         dataIndex: 'username',
//         width: '30%',
//         editable: true,
//       },)
//       setColumns(dataMap);
//   }, []);


//   const onSelectChange = (selectedRowKeys) => {

//     console.log('selectedRowKeys changed: ', selectedRowKeys);
//     setSelectedRowKeys(selectedRowKeys);
//   };

//   // const { selectedRowKeys } = columns;
//   const [selectedRowKeys, setSelectedRowKeys] = useState([])
//   const rowSelection = {
//     columnTitle: 'asd',
//     selectedRowKeys,
//     onChange: onSelectChange,
//   };
//   return (
//     <Table columns={columns} dataSource={dataSource}  rowSelection={rowSelection} />
//   )
// }
// export default  CreatePoll 



import React, { useContext, useState, useEffect, useRef } from 'react';
import { Table, Input, Button, Form, Checkbox, Row, Col } from 'antd';
import axios from 'axios'

const EditableContext = React.createContext(null);

const EditableRow = ({ index, ...props }) => {
  const [form] = Form.useForm();
  return (
    <Form form={form} component={false}>
      <EditableContext.Provider value={form}>
        <tr {...props} />
      </EditableContext.Provider>
    </Form>
  );
};

const EditableCell = ({
  title,
  editable,
  children,
  dataIndex,
  record,
  handleSave,
  ...restProps
}) => {
  const [editing, setEditing] = useState(false);
  const inputRef = useRef(null);
  const form = useContext(EditableContext);
  useEffect(() => {
    if (editing) {
      inputRef.current.focus();
    }
  }, [editing]);

  const toggleEdit = () => {
    setEditing(!editing);
    form.setFieldsValue({
      [dataIndex]: record[dataIndex],
    });
  };

  const save = async () => {
    try {
      const values = await form.validateFields();
      toggleEdit();
      handleSave({ ...record, ...values });
    } catch (errInfo) {
      console.log('Save failed:', errInfo);
    }
  };

  let childNode = children;

  if (editable) {
    childNode = editing ? (
      <Form.Item
        style={{
          margin: 0,
        }}
        name={dataIndex}
        rules={[
          {
            required: true,
            message: `${title} is required.`,
          },
        ]}
      >
        <Input ref={inputRef} onPressEnter={save} onBlur={save} />
      </Form.Item>
    ) : (
      <div
        className="editable-cell-value-wrap"
        style={{
          paddingRight: 24,
        }}
        onClick={toggleEdit}
      >
        {children}
      </div>
    );
  }

  return <td {...restProps}>{childNode}</td>;
};
const CreatePoll = (props) => {
    let [count, setCount] = useState(1)
    let [dataSource, setDataSource] = useState([])
    let [columns, setColumns] = useState([])

    const topicId = props.location.state
     
    useEffect(async () => {
      const polldata = await axios.get('http://localhost:3020/poll/' + topicId);
      const countUser = polldata.data.poll.length;
      const poll = polldata.data.poll
      const resultTitle = await axios.get(
        // 'http://localhost:3020/option/'+ topicId
        'http://localhost:3020/poll/'+ topicId
      );
      
      const option =resultTitle.data.option
      if(countUser !== 0){  
        const dataSourceMap = poll?.map((item, index)=>{
        console.log('INDEX', index);

          return { 
            id: item.id,
            key: index+1,
            username: item.username,
          }
        })
        setDataSource(dataSourceMap);
      }
      else{
        setDataSource([{key: '1', userame: 'admin'}]);
      }

      const dataMap = option?.map((item, index) =>{
        console.log('index option ', index);

          return {
            title: item.content,
            dataIndex: item.content,
            width: '30%', 
            id: item.id,
            key: index+1,
            render: checkbox => {
              const  onChange = (async(e) =>{
                console.log(e);
              })
              return  <Checkbox.Group style={{ width: '100%' }} onChange={onChange}>
                <Row> 
                  <Col span={8}>
                    <Checkbox value={item.id}></Checkbox>
                  </Col>
                </Row>
              </Checkbox.Group>
            },
          }
        })
        dataMap.unshift({ 
          title: 'username',
          dataIndex: 'username',
          width: '30%',
          editable: true,
        },)
        setColumns(dataMap);
        
    }, []);

    const handleAdd = (e) => {
        setDataSource([
            ...dataSource,
            { key: `${count}`, username: `let ${count}`}
            
        ])
        setCount(count+1)
    };
    const handleSave = (row) => {
      
        const newData = [...dataSource];
        const index = newData.findIndex((item) => row.key === item.key);
        
        const item = newData[index];
        newData.splice(index, 1, { ...item, ...row });
        setDataSource(newData)
    };
    const components = {
        body: {
        row: EditableRow,
        cell: EditableCell,
        },
    };

    const columnsData = columns.map((col)=>{        
        if (!col.editable) {
            return col;
        }
    
        return {
        ...col,
        onCell: (record) => ({
            record,
            editable: col.editable,
            dataIndex: col.dataIndex,
            title: col.title,
            handleSave: handleSave,
        }),
        };
    })

    const handSubmit = async () =>{
      const topicId = props.location.state
      const data = dataSource
      const dataOption = columns
      console.log(data.length);
      //  const x = data.map((item)=>{
      // const propOwn = Object.getOwnPropertyNames(item);
      // console.log('item',item, propOwn.length);
      //   // return item
      // });
      // console.log(data.length);

      for (let i = 1; i < dataOption.length; i++) {
        console.log('okkk');
        const poll = {
          optionId: dataOption[i],
          userame: data,
        };
        console.log(poll);
        // try {
        //   const response = await axios.post("http://localhost:3020/poll", poll);
        //   if(response){
        //     this.setState({redirect: true})
        //   }
        // } catch (err) {
        //   console.log(err);
        // }
      }
  
    }
    return (
        <div>
          <p></p>
            {/* <button onClick={handleAdd} value= {count}>sfdf</button> */}
            <Button
                onClick={handleAdd}
                type="primary"
                style={{
                    marginBottom: 16,
                }}
            >
                Add a row
            </Button>
            <Table
                components={components}
                rowClassName={() => 'editable-row'}
                bordered
                dataSource={dataSource}
                columns={columnsData}
            />
            <button onClick={handSubmit}>Submit</button>
        </div>
    );
}
export default  CreatePoll