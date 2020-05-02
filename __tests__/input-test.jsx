import Adapter from "enzyme-adapter-react-16"
import Enzyme, { shallow } from "enzyme"
import Input from "../src/input"
import React from "react"

Enzyme.configure({adapter: new Adapter()})

test("sets the given name on the generated input element", () => {
  const wrapper = shallow(
    <Input name="user[name]" />
  )
  const component = wrapper.find("input")
  const rawInputName = component.props().name

  expect(rawInputName).toEqual("user[name]")
})

test("sets a random id", () => {
  const wrapper = shallow(
    <Input />
  )
  const component = wrapper.find("input")
  const rawInputId = component.props().id

  expect(rawInputId).toMatch(/^[a-z0-9]{21,22}$/m)
})

test("sets the given id", () => {
  const wrapper = shallow(
    <Input id="mine" />
  )
  const component = wrapper.find("input")
  const rawInputId = component.props().id

  expect(rawInputId).toEqual("mine")
})
