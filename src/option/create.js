import React, { useContext, useState, useEffect, useRef } from 'react';
import {
  Redirect,
} from "react-router-dom";
import { Table, Input, Button, Popconfirm, Form } from 'antd';
import axios from 'axios';
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

export default class CreateOption extends React.Component {
  
  constructor(props) {
    
    super(props);
    this.columns = [
      {
        title: 'Option',
        dataIndex: 'content',
        width: '90%',
        editable: true,
      },
      {
        title: 'operation',
        dataIndex: 'operation',
        render: (_, record) =>
          this.state.dataSource.length >= 1 ? (
            <Popconfirm title="Sure to delete?" onConfirm={() => this.handleDelete(record.key)}>
              <a>Delete</a>
            </Popconfirm>
          ) : null,
      },
    ];
    this.state = {
      dataSource: [

      ],
      count: 1,
    };
  }

  handleDelete = (key) => {
    const dataSource = [...this.state.dataSource];
    this.setState({
      dataSource: dataSource.filter((item) => item.key !== key),
    });
  };

  handleAdd = () => {
    const { count, dataSource } = this.state;
    if(count<10){
      const newData = {
        key: count,
        content: `add option ${count}`,
      };
      this.setState({
        dataSource: [...dataSource, newData],
        count: count + 1,
      });
    }
  };

  handleSave = (row) => {
    const newData = [...this.state.dataSource];
    const index = newData.findIndex((item) => row.key === item.key);
    const item = newData[index];
    newData.splice(index, 1, { ...item, ...row });
    this.setState({
      dataSource: newData,
    });
  };

  handleSaveOption = async event => {
    const topicId = this.props.location.state
    const state = {
      redirect: false
    }
    event.preventDefault();
    const dataSource = [...this.state.dataSource];
    for (let i = 0; i < dataSource.length; i++) {
      const option = {
        topicId: topicId,
        content: dataSource[i].content
      };
      try {
        const response = await axios.post("http://localhost:3020/option", option);
        if(response){
          this.setState({redirect: true})
        }
      } catch (err) {
        console.log(err);
      }
    }

  }

  render() {
    const topicId = this.props.location.state

    const { dataSource } = this.state;
    const { redirect } = this.state;
    const components = {
      body: {
        row: EditableRow,
        cell: EditableCell,
      },
    };
    const columns = this.columns.map((col) => {
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
          handleSave: this.handleSave,
        }),
      };
    });
    
    if (redirect) {
      return <Redirect to={{pathname : '/create-name', state: topicId}} />;
    }else{
      return (
        
        <div className='option'>
          <b>Step 2/3</b>
          <h3>What are the proposals?</h3>
          <div className="option-add">
            <Button
              onClick={this.handleAdd}
              type="primary"
              style={{
                marginBottom: 16,
              }}
            >
              Add a row
            </Button>
          </div>
          <div className='option-table'>
            <Table
              components={components}
              rowClassName={() => 'editable-row'}
              bordered
              dataSource={dataSource}
              columns={columns}
            />
          </div>
          <Button
            className="option-btn"
            onClick={this.handleBack}
            type="primary"
            href="http://localhost:2020/create-topic"
          >
            Back
          </Button> 
          <Button
            onClick={this.handleSaveOption}
            type="primary"
            className="option-btn"
          >
            Poll
          </Button>
          
          
        </div>
      );
      
    }
  }
}
