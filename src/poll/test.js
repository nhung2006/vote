// // // // // // // // // import { Table } from 'antd';
// // // // // // // // // import { useState } from 'react';


// // // // // // // // // const CreatePoll = () => {
// // // // // // // // //   const [selectedRowKeys, setSelectedRowKeys] = useState([])
// // // // // // // // //   const [columns, setColumns] = useState([])

// // // // // // // // //   setColumns([
// // // // // // // // //     {
// // // // // // // // //       title: 'Name',
// // // // // // // // //       dataIndex: 'name',
// // // // // // // // //     },
// // // // // // // // //     {
// // // // // // // // //       title: 'Age',
// // // // // // // // //       dataIndex: 'age',
// // // // // // // // //     },
// // // // // // // // //     {
// // // // // // // // //       title: 'Address',
// // // // // // // // //       dataIndex: 'address',
// // // // // // // // //     },
// // // // // // // // //   ])

// // // // // // // // //   const onSelectChange = (selectedRowKeys) => {
// // // // // // // // //     console.log('selectedRowKeys changed: ', selectedRowKeys);
// // // // // // // // //     setSelectedRowKeys(selectedRowKeys);
// // // // // // // // //   };


// // // // // // // // //   const [data, setData] = useState([])
// // // // // // // // //   setData([
// // // // // // // // //     {key: 1,
// // // // // // // // //     name: `Edward King 1`,
// // // // // // // // //     age: 32,
// // // // // // // // //     address: `London, Park Lane no. 1`,}
// // // // // // // // //   ])

// // // // // // // // //   const rowSelection = {
// // // // // // // // //     selectedRowKeys,
// // // // // // // // //     onChange: onSelectChange,
// // // // // // // // //     selections: [
// // // // // // // // //       Table.SELECTION_ALL,
// // // // // // // // //       Table.SELECTION_INVERT,
// // // // // // // // //     ],
// // // // // // // // //   };

// // // // // // // // //   return( <Table rowSelection={rowSelection} columns={columns} dataSource={data} />)
// // // // // // // // // }
// // // // // // // // // export default CreatePoll 

// // // // // // // // import { Table } from 'antd';
// // // // // // // // import React, { useEffect, useState } from 'react'
// // // // // // // // import axios from 'axios'
// // // // // // // // import { Checkbox } from 'antd';

// // // // // // // // const CreatePoll = (props) =>{
// // // // // // // //   const topicId = props.location.state
// // // // // // // //   let [dataSource, setDataSource] = useState([])
// // // // // // // //   let [columns, setColumns] = useState([])
// // // // // // // //   useEffect(async () => {
// // // // // // // //     const polldata = await axios.get('http://localhost:3020/poll/' + topicId);
// // // // // // // //     const countUser = polldata.data.poll.length;
// // // // // // // //     const poll = polldata.data.poll
// // // // // // // //     const resultTitle = await axios.get(
// // // // // // // //       // 'http://localhost:3020/option/'+ topicId
// // // // // // // //       'http://localhost:3020/poll/'+ topicId
// // // // // // // //     );
    
// // // // // // // //     const option =resultTitle.data.option
// // // // // // // //     if(countUser !== 0){  
// // // // // // // //       const dataSourceMap = poll?.map((item)=>{
// // // // // // // //         return { 
// // // // // // // //           key: item.id,
// // // // // // // //           username: item.username,
// // // // // // // //           sdfsf: <Checkbox/>,
// // // // // // // //           sdff: <Checkbox/>,
          
// // // // // // // //         }
        
// // // // // // // //       })
// // // // // // // //       setDataSource(dataSourceMap);
// // // // // // // //     }
// // // // // // // //     else{
// // // // // // // //       setDataSource([{key: '1', userame: 'admin'}]);
// // // // // // // //     }
  
// // // // // // // //     const dataMap = option?.map((item) =>{
// // // // // // // //         return {
// // // // // // // //           title: item.content,
// // // // // // // //           dataIndex: item.content,
// // // // // // // //           width: '30%', 
// // // // // // // //         }
// // // // // // // //       })
// // // // // // // //       dataMap.unshift({ 
// // // // // // // //         title: 'username',
// // // // // // // //         dataIndex: 'username',
// // // // // // // //         width: '30%',
// // // // // // // //         editable: true,
// // // // // // // //       },)
// // // // // // // //       setColumns(dataMap);
// // // // // // // //   }, []);


// // // // // // // //   const onSelectChange = (selectedRowKeys) => {

// // // // // // // //     console.log('selectedRowKeys changed: ', selectedRowKeys);
// // // // // // // //     setSelectedRowKeys(selectedRowKeys);
// // // // // // // //   };

// // // // // // // //   // const { selectedRowKeys } = columns;
// // // // // // // //   const [selectedRowKeys, setSelectedRowKeys] = useState([])
// // // // // // // //   const rowSelection = {
// // // // // // // //     columnTitle: 'asd',
// // // // // // // //     selectedRowKeys,
// // // // // // // //     onChange: onSelectChange,
// // // // // // // //   };
// // // // // // // //   return (
// // // // // // // //     <Table columns={columns} dataSource={dataSource}  rowSelection={rowSelection} />
// // // // // // // //   )
// // // // // // // // }
// // // // // // // // export default  CreatePoll 



// // // // // // // import React, { useContext, useState, useEffect, useRef } from 'react';
// // // // // // // import { Table, Input, Button, Form, Checkbox, Row, Col } from 'antd';
// // // // // // // import axios from 'axios'

// // // // // // // const EditableContext = React.createContext(null);

// // // // // // // const EditableRow = ({ index, ...props }) => {
// // // // // // //   const [form] = Form.useForm();
// // // // // // //   return (
// // // // // // //     <Form form={form} component={false}>
// // // // // // //       <EditableContext.Provider value={form}>
// // // // // // //         <tr {...props} />
// // // // // // //       </EditableContext.Provider>
// // // // // // //     </Form>
// // // // // // //   );
// // // // // // // };

// // // // // // // const EditableCell = ({
// // // // // // //   title,
// // // // // // //   editable,
// // // // // // //   children,
// // // // // // //   dataIndex,
// // // // // // //   record,
// // // // // // //   handleSave,
// // // // // // //   ...restProps
// // // // // // // }) => {
// // // // // // //   const [editing, setEditing] = useState(false);
// // // // // // //   const inputRef = useRef(null);
// // // // // // //   const form = useContext(EditableContext);
// // // // // // //   useEffect(() => {
// // // // // // //     if (editing) {
// // // // // // //       inputRef.current.focus();
// // // // // // //     }
// // // // // // //   }, [editing]);

// // // // // // //   const toggleEdit = () => {
// // // // // // //     setEditing(!editing);
// // // // // // //     form.setFieldsValue({
// // // // // // //       [dataIndex]: record[dataIndex],
// // // // // // //     });
// // // // // // //   };

// // // // // // //   const save = async () => {
// // // // // // //     try {
// // // // // // //       const values = await form.validateFields();
// // // // // // //       toggleEdit();
// // // // // // //       handleSave({ ...record, ...values });
// // // // // // //     } catch (errInfo) {
// // // // // // //       console.log('Save failed:', errInfo);
// // // // // // //     }
// // // // // // //   };

// // // // // // //   let childNode = children;

// // // // // // //   if (editable) {
// // // // // // //     childNode = editing ? (
// // // // // // //       <Form.Item
// // // // // // //         style={{
// // // // // // //           margin: 0,
// // // // // // //         }}
// // // // // // //         name={dataIndex}
// // // // // // //         rules={[
// // // // // // //           {
// // // // // // //             required: true,
// // // // // // //             message: `${title} is required.`,
// // // // // // //           },
// // // // // // //         ]}
// // // // // // //       >
// // // // // // //         <Input ref={inputRef} onPressEnter={save} onBlur={save} />
// // // // // // //       </Form.Item>
// // // // // // //     ) : (
// // // // // // //       <div
// // // // // // //         className="editable-cell-value-wrap"
// // // // // // //         style={{
// // // // // // //           paddingRight: 24,
// // // // // // //         }}
// // // // // // //         onClick={toggleEdit}
// // // // // // //       >
// // // // // // //         {children}
// // // // // // //       </div>
// // // // // // //     );
// // // // // // //   }

// // // // // // //   return <td {...restProps}>{childNode}</td>;
// // // // // // // };
// // // // // // // const CreatePoll = (props) => {
// // // // // // //     let [count, setCount] = useState(1)
// // // // // // //     let [dataSource, setDataSource] = useState([])
// // // // // // //     let [columns, setColumns] = useState([])

// // // // // // //     const topicId = props.location.state
     
// // // // // // //     useEffect(async () => {
// // // // // // //       const polldata = await axios.get('http://localhost:3020/poll/' + topicId);
// // // // // // //       const countUser = polldata.data.poll.length;
// // // // // // //       const poll = polldata.data.poll
// // // // // // //       const resultTitle = await axios.get(
// // // // // // //         // 'http://localhost:3020/option/'+ topicId
// // // // // // //         'http://localhost:3020/poll/'+ topicId
// // // // // // //       );
      
// // // // // // //       const option =resultTitle.data.option
// // // // // // //       if(countUser !== 0){  
// // // // // // //         const dataSourceMap = poll?.map((item, index)=>{
// // // // // // //         console.log('INDEX', index);

// // // // // // //           return { 
// // // // // // //             id: item.id,
// // // // // // //             key: index+1,
// // // // // // //             username: item.username,
// // // // // // //           }
// // // // // // //         })
// // // // // // //         setDataSource(dataSourceMap);
// // // // // // //       }
// // // // // // //       else{
// // // // // // //         setDataSource([{key: '1', userame: 'admin'}]);
// // // // // // //       }

// // // // // // //       const dataMap = option?.map((item, index) =>{
// // // // // // //         console.log('index option ', index);

// // // // // // //           return {
// // // // // // //             title: item.content,
// // // // // // //             dataIndex: item.content,
// // // // // // //             width: '30%', 
// // // // // // //             id: item.id,
// // // // // // //             key: index+1,
// // // // // // //             render: checkbox => {
// // // // // // //               const  onChange = (async(e) =>{
// // // // // // //                 console.log(e);
// // // // // // //               })
// // // // // // //               return  <Checkbox.Group style={{ width: '100%' }} onChange={onChange}>
// // // // // // //                 <Row> 
// // // // // // //                   <Col span={8}>
// // // // // // //                     <Checkbox value={item.id}></Checkbox>
// // // // // // //                   </Col>
// // // // // // //                 </Row>
// // // // // // //               </Checkbox.Group>
// // // // // // //             },
// // // // // // //           }
// // // // // // //         })
// // // // // // //         dataMap.unshift({ 
// // // // // // //           title: 'username',
// // // // // // //           dataIndex: 'username',
// // // // // // //           width: '30%',
// // // // // // //           editable: true,
// // // // // // //         },)
// // // // // // //         setColumns(dataMap);
        
// // // // // // //     }, []);

// // // // // // //     const handleAdd = (e) => {
// // // // // // //         setDataSource([
// // // // // // //             ...dataSource,
// // // // // // //             { key: `${count}`, username: `let ${count}`}
            
// // // // // // //         ])
// // // // // // //         setCount(count+1)
// // // // // // //     };
// // // // // // //     const handleSave = (row) => {
      
// // // // // // //         const newData = [...dataSource];
// // // // // // //         const index = newData.findIndex((item) => row.key === item.key);
        
// // // // // // //         const item = newData[index];
// // // // // // //         newData.splice(index, 1, { ...item, ...row });
// // // // // // //         setDataSource(newData)
// // // // // // //     };
// // // // // // //     const components = {
// // // // // // //         body: {
// // // // // // //         row: EditableRow,
// // // // // // //         cell: EditableCell,
// // // // // // //         },
// // // // // // //     };

// // // // // // //     const columnsData = columns.map((col)=>{        
// // // // // // //         if (!col.editable) {
// // // // // // //             return col;
// // // // // // //         }
    
// // // // // // //         return {
// // // // // // //         ...col,
// // // // // // //         onCell: (record) => ({
// // // // // // //             record,
// // // // // // //             editable: col.editable,
// // // // // // //             dataIndex: col.dataIndex,
// // // // // // //             title: col.title,
// // // // // // //             handleSave: handleSave,
// // // // // // //         }),
// // // // // // //         };
// // // // // // //     })

// // // // // // //     const handSubmit = async () =>{
// // // // // // //       const topicId = props.location.state
// // // // // // //       const data = dataSource
// // // // // // //       const dataOption = columns
// // // // // // //       console.log(data.length);
// // // // // // //       //  const x = data.map((item)=>{
// // // // // // //       // const propOwn = Object.getOwnPropertyNames(item);
// // // // // // //       // console.log('item',item, propOwn.length);
// // // // // // //       //   // return item
// // // // // // //       // });
// // // // // // //       // console.log(data.length);

// // // // // // //       for (let i = 1; i < dataOption.length; i++) {
// // // // // // //         console.log('okkk');
// // // // // // //         const poll = {
// // // // // // //           optionId: dataOption[i],
// // // // // // //           userame: data,
// // // // // // //         };
// // // // // // //         console.log(poll);
// // // // // // //         // try {
// // // // // // //         //   const response = await axios.post("http://localhost:3020/poll", poll);
// // // // // // //         //   if(response){
// // // // // // //         //     this.setState({redirect: true})
// // // // // // //         //   }
// // // // // // //         // } catch (err) {
// // // // // // //         //   console.log(err);
// // // // // // //         // }
// // // // // // //       }
  
// // // // // // //     }
// // // // // // //     return (
// // // // // // //         <div>
// // // // // // //           <p></p>
// // // // // // //             {/* <button onClick={handleAdd} value= {count}>sfdf</button> */}
// // // // // // //             <Button
// // // // // // //                 onClick={handleAdd}
// // // // // // //                 type="primary"
// // // // // // //                 style={{
// // // // // // //                     marginBottom: 16,
// // // // // // //                 }}
// // // // // // //             >
// // // // // // //                 Add a row
// // // // // // //             </Button>
// // // // // // //             <Table
// // // // // // //                 components={components}
// // // // // // //                 rowClassName={() => 'editable-row'}
// // // // // // //                 bordered
// // // // // // //                 dataSource={dataSource}
// // // // // // //                 columns={columnsData}
// // // // // // //             />
// // // // // // //             <button onClick={handSubmit}>Submit</button>
// // // // // // //         </div>
// // // // // // //     );
// // // // // // // }
// // // // // // // export default  CreatePoll
// // // // // // import React, { useContext, useState, useEffect, useRef } from 'react';
// // // // // // import { Table, Input, Button, Form, Checkbox, Row, Col } from 'antd';
// // // // // // import axios from 'axios'

// // // // // // const EditableContext = React.createContext(null);

// // // // // // const EditableRow = ({ index, ...props }) => {
// // // // // //   const [form] = Form.useForm();
// // // // // //   return (
// // // // // //     <Form form={form} component={false}>
// // // // // //       <EditableContext.Provider value={form}>
// // // // // //         <tr {...props} />
// // // // // //       </EditableContext.Provider>
// // // // // //     </Form>
// // // // // //   );
// // // // // // };

// // // // // // const EditableCell = ({
// // // // // //   title,
// // // // // //   editable,
// // // // // //   children,
// // // // // //   dataIndex,
// // // // // //   record,
// // // // // //   handleSave,
// // // // // //   ...restProps
// // // // // // }) => {
// // // // // //   const [editing, setEditing] = useState(false);
// // // // // //   const inputRef = useRef(null);
// // // // // //   const form = useContext(EditableContext);
// // // // // //   useEffect(() => {
// // // // // //     if (editing) {
// // // // // //       inputRef.current.focus();
// // // // // //     }
// // // // // //   }, [editing]);

// // // // // //   const toggleEdit = () => {
// // // // // //     setEditing(!editing);
// // // // // //     form.setFieldsValue({
// // // // // //       [dataIndex]: record[dataIndex],
// // // // // //     });
// // // // // //   };

// // // // // //   const save = async () => {
// // // // // //     try {
// // // // // //       const values = await form.validateFields();
// // // // // //       toggleEdit();
// // // // // //       handleSave({ ...record, ...values });
// // // // // //     } catch (errInfo) {
// // // // // //       console.log('Save failed:', errInfo);
// // // // // //     }
// // // // // //   };

// // // // // //   let childNode = children;

// // // // // //   if (editable) {
// // // // // //     childNode = editing ? (
// // // // // //       <Form.Item
// // // // // //         style={{
// // // // // //           margin: 0,
// // // // // //         }}
// // // // // //         name={dataIndex}
// // // // // //         rules={[
// // // // // //           {
// // // // // //             required: true,
// // // // // //             message: `${title} is required.`,
// // // // // //           },
// // // // // //         ]}
// // // // // //       >
// // // // // //         <Input ref={inputRef} onPressEnter={save} onBlur={save} />
// // // // // //       </Form.Item>
// // // // // //     ) : (
// // // // // //       <div
// // // // // //         className="editable-cell-value-wrap"
// // // // // //         style={{
// // // // // //           paddingRight: 24,
// // // // // //         }}
// // // // // //         onClick={toggleEdit}
// // // // // //       >
// // // // // //         {children}
// // // // // //       </div>
// // // // // //     );
// // // // // //   }

// // // // // //   return <td {...restProps}>{childNode}</td>;
// // // // // // };
// // // // // // const CreatePoll = (props) => {
// // // // // //     let [count, setCount] = useState(1)
// // // // // //     let [dataSource, setDataSource] = useState([])
// // // // // //     let [columns, setColumns] = useState([])

// // // // // //     const topicId = props.location.state
     
// // // // // //     useEffect(async () => {
// // // // // //       const polldata = await axios.get('http://localhost:3020/poll/' + topicId);
// // // // // //       const countUser = polldata.data.poll.length;
// // // // // //       const poll = polldata.data.poll
// // // // // //       const resultTitle = await axios.get(
// // // // // //         // 'http://localhost:3020/option/'+ topicId
// // // // // //         'http://localhost:3020/poll/'+ topicId
// // // // // //       );
      
// // // // // //       const option =resultTitle.data.option
// // // // // //       if(countUser !== 0){  
// // // // // //         const dataSourceMap = poll?.map((item, index)=>{
// // // // // //           const get= (async (e) =>{

// // // // // //             const pollId = e[0]
// // // // // //             console.log(pollId);
// // // // // //             const username = item.username;
// // // // // //             const pollDto = {
// // // // // //               // topicId: topicId,
// // // // // //               // optionId: optionId,
// // // // // //               username: username
// // // // // //             }
            
// // // // // //             if(pollDto){
              
// // // // // //               // const poll = await axios.patch('http://localhost:3020/poll/' + username, pollDto);
// // // // // //             }
// // // // // //           })
// // // // // //           function onChange(checkedValues) {
// // // // // //             console.log('checked = ', checkedValues);
// // // // // //           }
// // // // // //           let optionsWithDisabled = [];
// // // // // //           const x = option?.map((item)=>{
// // // // // //             optionsWithDisabled = 
// // // // // //             [
// // // // // //               {label: '', value: item},
            
// // // // // //             ]
// // // // // //             console.log('optionsWithDisabled', optionsWithDisabled);
// // // // // //           })
// // // // // //           // for(let i; i<=option.length;i++){
// // // // // //           //   optionsWithDisabled[i]= option[i]
// // // // // //           //   console.log(optionsWithDisabled);
// // // // // //           // }
// // // // // // // arr[0] = "Jani";
// // // // // // // arr[1] = "Hege";
// // // // // // // arr[2] = "Stale";
// // // // // // // arr[3] = "Kai Jim";
// // // // // // // arr[4] = "Borge";
// // // // // //           // const optionsWithDisabled = [
// // // // // //           //   { label: '', value: option[0] },
// // // // // //           //   { label: '', value: 'Pear' },
// // // // // //           //   { label: 'Orage', value: 'Orange', disabled: false },
// // // // // //           // ];
// // // // // //           return { 
// // // // // //             id: item.id,
// // // // // //             key: index+1,
// // // // // //             username: item.username,
// // // // // //             let0:  <Checkbox.Group
// // // // // //             options={x}
// // // // // //             defaultValue={['Apple']}
// // // // // //             onChange={onChange}
// // // // // //           />
// // // // // //             // let1:  <Checkbox.Group style={{ width: '100%' }} onChange={onchange}>
// // // // // //             //     <Row> 
// // // // // //             //       <Col span={8}>
// // // // // //             //         <Checkbox value={item.id}></Checkbox>
// // // // // //             //       </Col>
// // // // // //             //     </Row>
// // // // // //             //   </Checkbox.Group>,
// // // // // //             // let2:  <Checkbox.Group style={{ width: '100%' }} onChange={onchange}>
// // // // // //             //     <Row> 
// // // // // //             //       <Col span={8}>
// // // // // //             //         <Checkbox value={item.id}></Checkbox>
// // // // // //             //       </Col>
// // // // // //             //     </Row>
// // // // // //             //   </Checkbox.Group>,
// // // // // //             // let3:  <Checkbox.Group style={{ width: '100%' }} onChange={onchange}>
// // // // // //             //     <Row> 
// // // // // //             //       <Col span={8}>
// // // // // //             //         <Checkbox value={item.id}></Checkbox>
// // // // // //             //       </Col>
// // // // // //             //     </Row>
// // // // // //             //   </Checkbox.Group>,
// // // // // //             // let4:  <Checkbox.Group style={{ width: '100%' }} onChange={onchange}>
// // // // // //             //     <Row> 
// // // // // //             //       <Col span={8}>
// // // // // //             //         <Checkbox value={item.id}></Checkbox>
// // // // // //             //       </Col>
// // // // // //             //     </Row>
// // // // // //             //   </Checkbox.Group>,
// // // // // //             // let5:  <Checkbox.Group style={{ width: '100%' }} onChange={onchange}>
// // // // // //             //     <Row> 
// // // // // //             //       <Col span={8}>
// // // // // //             //         <Checkbox value={item.id}></Checkbox>
// // // // // //             //       </Col>
// // // // // //             //     </Row>
// // // // // //             //   </Checkbox.Group>,
// // // // // //             // let6:  <Checkbox.Group style={{ width: '100%' }} onChange={onchange}>
// // // // // //             //     <Row> 
// // // // // //             //       <Col span={8}>
// // // // // //             //         <Checkbox value={item.id}></Checkbox>
// // // // // //             //       </Col>
// // // // // //             //     </Row>
// // // // // //             //   </Checkbox.Group>,
// // // // // //             // let7:  <Checkbox.Group style={{ width: '100%' }} onChange={onchange}>
// // // // // //             //     <Row> 
// // // // // //             //       <Col span={8}>
// // // // // //             //         <Checkbox value={item.id}></Checkbox>
// // // // // //             //       </Col>
// // // // // //             //     </Row>
// // // // // //             //   </Checkbox.Group>,
// // // // // //             // let8:  <Checkbox.Group style={{ width: '100%' }} onChange={onchange}>
// // // // // //             //     <Row> 
// // // // // //             //       <Col span={8}>
// // // // // //             //         <Checkbox value={item.id}></Checkbox>
// // // // // //             //       </Col>
// // // // // //             //     </Row>
// // // // // //             //   </Checkbox.Group>,
// // // // // //             // let9:  <Checkbox.Group style={{ width: '100%' }} onChange={onchange}>
// // // // // //             //     <Row> 
// // // // // //             //       <Col span={8}>
// // // // // //             //         <Checkbox value={item.id}></Checkbox>
// // // // // //             //       </Col>
// // // // // //             //     </Row>
// // // // // //             //   </Checkbox.Group>,
// // // // // //             // let10:  <Checkbox.Group style={{ width: '100%' }} onChange={onchange}>
// // // // // //             //     <Row> 
// // // // // //             //       <Col span={8}>
// // // // // //             //         <Checkbox value={item.id}></Checkbox>
// // // // // //             //       </Col>
// // // // // //             //     </Row>
// // // // // //             //   </Checkbox.Group>
// // // // // //           }
// // // // // //         })
// // // // // //         setDataSource(dataSourceMap);
// // // // // //       }
// // // // // //       else{
// // // // // //         setDataSource([{key: '1', userame: 'admin'}]);
// // // // // //       }

// // // // // //       const dataMap = option?.map((item, index) =>{

// // // // // //           return {
// // // // // //             title: item.content,
// // // // // //             dataIndex: 'let'+index,
// // // // // //             width: '30%', 
// // // // // //             id: item.id,
// // // // // //             key: index+1,
// // // // // //           }
// // // // // //         })
// // // // // //         dataMap.unshift({ 
// // // // // //           title: 'username',
// // // // // //           dataIndex: 'username',
// // // // // //           width: '30%',
// // // // // //           editable: true,
// // // // // //         },)
// // // // // //         console.log('dataMap', dataMap);
// // // // // //         setColumns(dataMap);
        
// // // // // //     }, []);

// // // // // //     const handleAdd = (e) => {
// // // // // //         setDataSource([
// // // // // //             ...dataSource,
// // // // // //             { key: `${count}`, username: `let ${count}`}
            
// // // // // //         ])
// // // // // //         setCount(count+1)
// // // // // //     };
// // // // // //     const handleSave = (row) => {
      
// // // // // //         const newData = [...dataSource];
// // // // // //         const index = newData.findIndex((item) => row.key === item.key);
        
// // // // // //         const item = newData[index];
// // // // // //         newData.splice(index, 1, { ...item, ...row });
// // // // // //         setDataSource(newData)
// // // // // //     };
// // // // // //     const components = {
// // // // // //         body: {
// // // // // //         row: EditableRow,
// // // // // //         cell: EditableCell,
// // // // // //         },
// // // // // //     };

// // // // // //     const columnsData = columns.map((col)=>{        
// // // // // //         if (!col.editable) {
// // // // // //             return col;
// // // // // //         }
    
// // // // // //         return {
// // // // // //         ...col,
// // // // // //         onCell: (record) => ({
// // // // // //             record,
// // // // // //             editable: col.editable,
// // // // // //             dataIndex: col.dataIndex,
// // // // // //             title: col.title,
// // // // // //             handleSave: handleSave,
// // // // // //         }),
// // // // // //         };
// // // // // //     })

// // // // // //     const handSubmit = async () =>{
// // // // // //       const topicId = props.location.state
// // // // // //       const data = dataSource
// // // // // //       const dataOption = columns
// // // // // //       console.log(data.length);
// // // // // //       //  const x = data.map((item)=>{
// // // // // //       // const propOwn = Object.getOwnPropertyNames(item);
// // // // // //       // console.log('item',item, propOwn.length);
// // // // // //       //   // return item
// // // // // //       // });
// // // // // //       // console.log(data.length);

// // // // // //       for (let i = 1; i < dataOption.length; i++) {
// // // // // //         console.log('okkk');
// // // // // //         const poll = {
// // // // // //           optionId: dataOption[i],
// // // // // //           userame: data,
// // // // // //         };
// // // // // //         console.log(poll);
// // // // // //         // try {
// // // // // //         //   const response = await axios.post("http://localhost:3020/poll", poll);
// // // // // //         //   if(response){
// // // // // //         //     this.setState({redirect: true})
// // // // // //         //   }
// // // // // //         // } catch (err) {
// // // // // //         //   console.log(err);
// // // // // //         // }
// // // // // //       }
  
// // // // // //     }
// // // // // //     return (
// // // // // //         <div>
// // // // // //           <p></p>
// // // // // //             {/* <button onClick={handleAdd} value= {count}>sfdf</button> */}
// // // // // //             <Button
// // // // // //                 onClick={handleAdd}
// // // // // //                 type="primary"
// // // // // //                 style={{
// // // // // //                     marginBottom: 16,
// // // // // //                 }}
// // // // // //             >
// // // // // //                 Add a row
// // // // // //             </Button>
// // // // // //             <Table
// // // // // //                 components={components}
// // // // // //                 rowClassName={() => 'editable-row'}
// // // // // //                 bordered
// // // // // //                 dataSource={dataSource}
// // // // // //                 columns={columnsData}
// // // // // //             />
// // // // // //             <button onClick={handSubmit}>Submit</button>
// // // // // //         </div>
// // // // // //     );
// // // // // // }
// // // // // // export default  CreatePoll

// // // // // import { Table } from 'antd';
// // // // // import Checkbox from 'antd/lib/checkbox/Checkbox';
// // // // // import React from 'react';

// // // // // const ond =(async (e)=>{
// // // // //   console.log(e.target.value);
// // // // // })
// // // // // const columns = [
// // // // //   {
// // // // //     title: 'Name',
// // // // //     dataIndex: 'name',
// // // // //   },
// // // // //   {
// // // // //     title: 'Age',
// // // // //     dataIndex: 'age',
// // // // //   },
// // // // //   {
// // // // //     title: 'Address',
// // // // //     dataIndex: 'address',
// // // // //   },
// // // // //   {
// // // // //     title: "Can Do Y ", 
// // // // //     key: "canDoY",
// // // // //     width: 100,
// // // // //     render: val => <Checkbox value='iii' onChange={ond}> </Checkbox>
// // // // //   }
// // // // // ];

// // // // // const data = [];
// // // // // for (let i = 0; i < 46; i++) {
// // // // //   data.push({
// // // // //     key: i,
// // // // //     name: `Edward King ${i}`,
// // // // //     age: 32,
// // // // //     address: `London, Park Lane no. ${i}`,
// // // // //   });
// // // // // }

// // // // // export default class CreatePoll extends React.Component {
// // // // //   state = {
// // // // //     selectedRowKeys: [], // Check here to configure the default column
// // // // //   };

// // // // //   onSelectChange = selectedRowKeys => {
// // // // //     console.log('selectedRowKeys changed: ', selectedRowKeys);
// // // // //     this.setState({ selectedRowKeys });
// // // // //   };

// // // // //   render() {
// // // // //     const { selectedRowKeys } = this.state;
// // // // //     const rowSelection = {
// // // // //       selectedRowKeys,
// // // // //       onChange: this.onSelectChange,
// // // // //       selections: [
// // // // //         Table.SELECTION_ALL,
// // // // //         Table.SELECTION_INVERT,
// // // // //         Table.SELECTION_NONE,
// // // // //         {
// // // // //           key: 'odd',
// // // // //           text: 'Select Odd Row',
// // // // //           onSelect: changableRowKeys => {
// // // // //             let newSelectedRowKeys = [];
// // // // //             newSelectedRowKeys = changableRowKeys.filter((key, index) => {
// // // // //               if (index % 2 !== 0) {
// // // // //                 return false;
// // // // //               }
// // // // //               return true;
// // // // //             });
// // // // //             this.setState({ selectedRowKeys: newSelectedRowKeys });
// // // // //           },
// // // // //         },
// // // // //         {
// // // // //           key: 'even',
// // // // //           text: 'Select Even Row',
// // // // //           onSelect: changableRowKeys => {
// // // // //             let newSelectedRowKeys = [];
// // // // //             newSelectedRowKeys = changableRowKeys.filter((key, index) => {
// // // // //               if (index % 2 !== 0) {
// // // // //                 return true;
// // // // //               }
// // // // //               return false;
// // // // //             });
// // // // //             this.setState({ selectedRowKeys: newSelectedRowKeys });
// // // // //           },
// // // // //         },
// // // // //       ],
// // // // //     };
// // // // //     return <Table rowSelection={rowSelection} columns={columns} dataSource={data} />;
// // // // //   }
// // // // // }

// // // // // // ReactDOM.render(<App />, mountNode);
// // // // import React, { useContext, useState, useEffect, useRef } from 'react';
// // // // import { Table, Input, Button, Form, Checkbox, Row, Col } from 'antd';
// // // // import axios from 'axios'

// // // // const EditableContext = React.createContext(null);

// // // // const EditableRow = ({ index, ...props }) => {
// // // //   const [form] = Form.useForm();
// // // //   return (
// // // //     <Form form={form} component={false}>
// // // //       <EditableContext.Provider value={form}>
// // // //         <tr {...props} />
// // // //       </EditableContext.Provider>
// // // //     </Form>
// // // //   );
// // // // };

// // // // const EditableCell = ({
// // // //   title,
// // // //   editable,
// // // //   children,
// // // //   dataIndex,
// // // //   record,
// // // //   handleSave,
// // // //   ...restProps
// // // // }) => {
// // // //   const [editing, setEditing] = useState(false);
// // // //   const inputRef = useRef(null);
// // // //   const form = useContext(EditableContext);
// // // //   useEffect(() => {
// // // //     if (editing) {
// // // //       inputRef.current.focus();
// // // //     }
// // // //   }, [editing]);

// // // //   const toggleEdit = () => {
// // // //     setEditing(!editing);
// // // //     form.setFieldsValue({
// // // //       [dataIndex]: record[dataIndex],
// // // //     });
// // // //   };

// // // //   const save = async () => {
// // // //     try {
// // // //       const values = await form.validateFields();
// // // //       toggleEdit();
// // // //       handleSave({ ...record, ...values });
// // // //     } catch (errInfo) {
// // // //       console.log('Save failed:', errInfo);
// // // //     }
// // // //   };

// // // //   let childNode = children;

// // // //   if (editable) {
// // // //     childNode = editing ? (
// // // //       <Form.Item
// // // //         style={{
// // // //           margin: 0,
// // // //         }}
// // // //         name={dataIndex}
// // // //         rules={[
// // // //           {
// // // //             required: true,
// // // //             message: `${title} is required.`,
// // // //           },
// // // //         ]}
// // // //       >
// // // //         <Input ref={inputRef} onPressEnter={save} onBlur={save} />
// // // //       </Form.Item>
// // // //     ) : (
// // // //       <div
// // // //         className="editable-cell-value-wrap"
// // // //         style={{
// // // //           paddingRight: 24,
// // // //         }}
// // // //         onClick={toggleEdit}
// // // //       >
// // // //         {children}
// // // //       </div>
// // // //     );
// // // //   }

// // // //   return <td {...restProps}>{childNode}</td>;
// // // // };
// // // // const CreatePoll = (props) => {
// // // //     let [count, setCount] = useState(1)
// // // //     let [dataSource, setDataSource] = useState([])
// // // //     let [columns, setColumns] = useState([])

// // // //     const topicId = props.location.state
     
// // // //     useEffect(async () => {
// // // //       const polldata = await axios.get('http://localhost:3020/poll/' + topicId);
// // // //       const countUser = polldata.data.poll.length;
// // // //       const poll = polldata.data.poll
// // // //       const resultTitle = await axios.get(
// // // //         // 'http://localhost:3020/option/'+ topicId
// // // //         'http://localhost:3020/poll/'+ topicId
// // // //       );
      
// // // //       const option =resultTitle.data.option
// // // //       if(countUser !== 0){  
// // // //         const dataSourceMap = poll?.map((item, index)=>{
// // // //           const onchange= (async (e) =>{

// // // //             const optionId = e[0]
// // // //             const username = item.username;
// // // //             const pollDto = {
// // // //               optionId: optionId,
// // // //               username: username
// // // //             }
// // // //             if(pollDto){console.log(pollDto);
// // // //               const poll = await axios.patch('http://localhost:3020/poll/' + username, pollDto);
// // // //             }
// // // //           })
// // // //           return { 
// // // //             id: item.id,
// // // //             key: index+1,
// // // //             username: item.username,
            
// // // //           }
// // // //         })
// // // //         setDataSource(dataSourceMap);
// // // //       }
// // // //       else{
// // // //         setDataSource([{key: '1', userame: 'admin'}]);
// // // //       }

// // // //       const ond =(async (e)=>{
// // // //         console.log(e);
// // // //       })
// // // //       const dataMap = option?.map((item, index) =>{
// // // //           return {
// // // //             title: item.content,
// // // //             dataIndex: 'let'+index,
// // // //             width: '30%', 
// // // //             id: item.id,
// // // //             key: index+1,
// // // //             render: val => <Checkbox value={item.id}  onClick={ond}> </Checkbox>

// // // //           }
// // // //         })
// // // //         dataMap.unshift({ 
// // // //           title: 'username',
// // // //           dataIndex: 'username',
// // // //           width: '30%',
// // // //           editable: true,
// // // //         },)
// // // //         console.log('dataMap', dataMap);
// // // //         setColumns(dataMap);
        
// // // //     }, []);

// // // //     const handleAdd = (e) => {
// // // //         setDataSource([
// // // //             ...dataSource,
// // // //             { key: `${count}`, username: `let ${count}`}
            
// // // //         ])
// // // //         setCount(count+1)
// // // //     };
// // // //     const handleSave = (row) => {
      
// // // //         const newData = [...dataSource];
// // // //         const index = newData.findIndex((item) => row.key === item.key);
        
// // // //         const item = newData[index];
// // // //         newData.splice(index, 1, { ...item, ...row });
// // // //         setDataSource(newData)
// // // //     };
// // // //     const components = {
// // // //         body: {
// // // //         row: EditableRow,
// // // //         cell: EditableCell,
// // // //         },
// // // //     };

// // // //     const columnsData = columns.map((col)=>{        
// // // //         if (!col.editable) {
// // // //             return col;
// // // //         }
    
// // // //         return {
// // // //         ...col,
// // // //         onCell: (record) => ({
// // // //             record,
// // // //             editable: col.editable,
// // // //             dataIndex: col.dataIndex,
// // // //             title: col.title,
// // // //             handleSave: handleSave,
// // // //         }),
// // // //         };
// // // //     })

// // // //     const handSubmit = async () =>{
// // // //       const topicId = props.location.state
// // // //       const data = dataSource
// // // //       const dataOption = columns
// // // //       console.log(data.length);

// // // //       for (let i = 1; i < dataOption.length; i++) {
// // // //         console.log('okkk');
// // // //         const poll = {
// // // //           optionId: dataOption[i],
// // // //           userame: data,
// // // //         };
// // // //       }
  
// // // //     }
// // // //     return (
// // // //         <div>
// // // //           <p></p>
// // // //             {/* <button onClick={handleAdd} value= {count}>sfdf</button> */}
// // // //             <Button
// // // //                 onClick={handleAdd}
// // // //                 type="primary"
// // // //                 style={{
// // // //                     marginBottom: 16,
// // // //                 }}
// // // //             >
// // // //                 Add a row
// // // //             </Button>
// // // //             <Table
// // // //                 components={components}
// // // //                 rowClassName={() => 'editable-row'}
// // // //                 bordered
// // // //                 dataSource={dataSosetStateurce}
// // // //                 columns={columnsData}
// // // //             />
// // // //             <button onClick={handSubmit}>Submit</button>
// // // //         </div>
// // // //     );
// // // // }
// // // // export default  CreatePoll

// // // import { Table, Button } from 'antd';
// // // import React from 'react';
// // // const columns = [
// // //   {
// // //     title: 'Name',
// // //     dataIndex: 'name',
// // //   },
// // //   {
// // //     title: 'Age',
// // //     dataIndex: 'age',
// // //   },
// // //   {
// // //     title: 'Address',
// // //     dataIndex: 'address',
// // //   },
// // // ];

// // // const data = [];
// // // for (let i = 0; i < 46; i++) {
// // //   data.push({
// // //     key: i,
// // //     name: `Edward King ${i}`,
// // //     age: 32,
// // //     address: `London, Park Lane no. ${i}`,
// // //   });
// // // }

// // // export default class Test extends React.Component {
// // //   state = {
// // //     selectedRowKeys: [], // Check here to configure the default column
// // //     loading: false,
// // //   };

// // //   start = () => {
// // //     this.setState({ loading: true });
// // //     // ajax request after empty completing
// // //     setTimeout(() => {
// // //       this.setState({
// // //         selectedRowKeys: [],
// // //         loading: false,
// // //       });
// // //     }, 1000);
// // //   };

// // //   onSelectChange = selectedRowKeys => {
// // //     console.log('selectedRowKeys changed: ', selectedRowKeys);
// // //     this.setState({ selectedRowKeys });
// // //   };

// // //   render() {
// // //     const { loading, selectedRowKeys } = this.state;
// // //     const rowSelection = {
// // //       selectedRowKeys,
// // //       onChange: this.onSelectChange,
// // //     };
// // //     const hasSelected = selectedRowKeys.length > 0;
// // //     return (
// // //       <div>
// // //         <div style={{ marginBottom: 16 }}>
// // //           <Button type="primary" onClick={this.start} disabled={!hasSelected} loading={loading}>
// // //             Reload
// // //           </Button>
// // //           <span style={{ marginLeft: 8 }}>
// // //             {hasSelected ? `Selected ${selectedRowKeys.length} items` : ''}
// // //           </span>
// // //         </div>
// // //         <Table rowSelection={rowSelection} columns={columns} dataSource={data} />
// // //       </div>
// // //     );
// // //   }
// // // }

// // import { Checkbox,  } from 'antd';
// // import React from 'react'

// // const Test = () => {
  
// // function onChange(checkedValues) {
// //   console.log('checked = ', checkedValues);
// // }

// // const options = [
// //   { label: 'Apple', value: 'Apple' },
// //   { label: 'Pear', value: 'Pear' },
// //   { label: 'Orange', value: 'Orange' },
// // ];
// //   return (
// //     <>
// //        <Checkbox.Group options={options} defaultValue={['Pear']} onChange={onChange} />
   
// //     </>
// //   );
// // };

// // export default Test


// try {
      
//     const topicData =  await axios.get('http://localhost:3020/topic/' + topicId);
//     const exp = Date.parse(topicData.data.expires_date)
//     const curr =  Date.parse(Date())
//    if(exp >= curr){
//      console.log('okkk');
//    }else{
//     console.log('no');

//    }
    
   

//   } catch (error) {
    
//   } 
  