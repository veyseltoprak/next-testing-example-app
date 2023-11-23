"use client"

import TodoList from "./components/TodoList/TodoList"
import AddTodo from "./components/AddTodo/AddTodo"
import { useState } from "react"
import { Form, Input, Select } from "antd"
import { DefaultOptionType } from "antd/es/select"


export default function Home() {
  

  return (
    <>
    <Form onFinish={(data: any)=>{
      console.log(data);
    }}>
      
    <Form.Item name="input1">
      <Input placeholder="input1" />
    </Form.Item>
    <Form.Item name="input2">
      <Input placeholder="input2" />
    </Form.Item>
    <Form.Item name="input3">
      <Input placeholder="input3" />
    </Form.Item>
    <Form.Item name="input4">
      <Input placeholder="input4" />
    </Form.Item>
    <Form.Item name="select1">
      <Select options={[{label:"label1", value:"value1"}, {label:"label2", value: "value2"}] as DefaultOptionType[]} />
    </Form.Item>
    </Form>
    </>
  )
}