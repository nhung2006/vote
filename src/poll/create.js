import React, { useContext, useState, useEffect, useRef } from 'react';
import { Table, Input, Button, Form, Checkbox } from 'antd';
import axios from 'axios'
import { now } from 'mongoose';

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
  // let [pollColumnData, setPollColumnData] = useState([])
  const [listoption, setListoption] = useState([]);
  const [name, setName] = useState([]);

  const topicId = props.location.state

  useEffect(async () => {

    const polldata = await axios.get('http://localhost:3020/poll/' + topicId);
    const countUser = polldata.data.poll.length;
    // const poll = polldata.data.poll
    const polluser = await axios.get('http://localhost:3020/poll/username/' + topicId);
    const resultTitle = await axios.get(
      'http://localhost:3020/option/'+ topicId
    );

    
    if (countUser !== 0) {
      const dataSourceMap = polluser?.data?.map((item, index) => {
        return {
          id: item.id,
          key: index + 1,
          username: item.username,
        }
      })
      setDataSource(dataSourceMap);
    }
    else {
      setDataSource([{ key: '1', username: 'admin' }]);
    }

    const onChangeCheckbox = (async (e) => {
      const data = (e.target.value);
      const index = data.lastIndexOf('.');
      const username = data.slice(0, index);
      setName(username)
      const optionId = data.slice(index + 1, data.length);
    
      if (e.target.checked) {
        listoption.push(optionId)
        setListoption(listoption)
      }
      else{
          const index =listoption.indexOf(optionId);
          listoption.splice(index, 1)
          setListoption(listoption)
      }

    })

    const dataMap = resultTitle.data?.map((item, index) => {
      const checked= true

      return {
        title: item.content,
        // dataIndex: 'let' + index,
        dataIndex: item.id,
        width: '30%',
        id: item.id,
        key: index + 1,
        value: item.id,
        render: (avl, row) => <Checkbox checked={checked} option={item.id} value={row.username + '.' + item.id}  defaultValue={[item.content]} onChange={onChangeCheckbox}> </Checkbox>
        // render: (avl, row) => <Checkbox defaultChecked={false} options={item.id} value={item.id}  defaultValue={[item.content]} onChange={onChangeCheckbox}> </Checkbox>
      }
    })
    dataMap.unshift({
      title: 'username',
      dataIndex: 'username',
      width: '30%',
      editable: true,
    })
    setColumns(dataMap);

  }, []);

  const handleAdd = (e) => {
    const user =  {
      topicId: topicId, 
      username: `let ${count}` 
    }
    setDataSource([
      ...dataSource,
      {id:`${count}`,  key: `${count}`, username: `let ${count}` }

    ])
    setCount(count + 1)
    axios.post("http://localhost:3020/poll/username", user);

  };
  const handleSave = (row) => {

    const newData = [...dataSource];
    const index = newData.findIndex((item) => row.key === item.key);

    const item = newData[index];

    newData.splice(index, 1, { ...item, ...row });
    // const update = newData.splice(index, 1, { ...item, ...row });
    // const response = axios.post("http://localhost:3020/poll/username", update);
    setDataSource(newData)
  };
  const components = {
    body: {
      row: EditableRow,
      cell: EditableCell,
    },
  };

  const columnsData = columns.map((col) => {
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

  const handSubmit = async event => {
    const topicId = props.location.state
    // const data = dataSource
    // const dataOption = columns
    const url = 'http://localhost:3020/poll/' + topicId
    const sub = listoption?.map((item)=>{
      const data = {
        topicId: topicId,
        optionId: item,
        username: name
      }
      try{
        axios.post(url, data)

      }catch (err) {
        console.log(err);
        }
    })
  }
  return (
    <div>
      <p></p>
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
export default CreatePoll