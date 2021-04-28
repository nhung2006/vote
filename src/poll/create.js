import React, { useContext, useState, useEffect, useRef } from 'react';
import { Table, Input, Button, Form, Checkbox } from 'antd';
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
        const result = await axios.get(
            'http://localhost:3020/poll/' + topicId,
        );
        const sum = result.data.poll.length;
        if(sum !== 0){
          setDataSource(result.data.poll);
        }
        else{
          setDataSource([{key: '1', userame: 'admin'}]);
        }
    }, []);
     
    useEffect(async () => {
      const result = await axios.get(
        // 'http://localhost:3020/option/'+ topicId
        'http://localhost:3020/poll/'+ topicId
      );
        const option =result.data.option
        console.log(option);
        const dataMap = option?.map((item) =>{
          return {
            title: item.content,
            dataIndex: item.content,
            width: '30%', 
            id: item.id,
            render: checkbox => {
              const  onChange = (async(e) =>{
                const check = e.target.checked;
                const username = result.data.poll[0].username
                const poll = {
                  username: username,
                  optionId: item.id
                }
                if(check){
                  const updatepoll = await axios.patch("http://localhost:3020/poll/"+ username, poll);
                  console.log(updatepoll.data);
                  
                }else{
                  console.log('nooo');
                }
              })

              return <Checkbox onChange={onChange} />
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
      console.log(data);
      // console.log(data.length);

      // for (let i = 0; i < data.length; i++) {
      //   console.log('okkk');
      //   const poll = {
      //     optionId: data[i].option.id,
      //     userame: data[i].username,
      //   };
      //   console.log(poll);
      //   // try {
      //   //   const response = await axios.post("http://localhost:3020/poll", poll);
      //   //   if(response){
      //   //     this.setState({redirect: true})
      //   //   }
      //   // } catch (err) {
      //   //   console.log(err);
      //   // }
      // }
  
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
