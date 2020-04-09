import Input from "../src/input"
import React from "react"
import TestRenderer from "react-test-renderer"

test("something", () => {
  const renderer = TestRenderer.create(
    <Input name="user[name]" />
  )
  const instance = renderer.root
  const component = instance.findByType(Input)

  console.log(component.refs)

  const rawInputName = component.refs.input.name

  expect(rawInputName).toEq("user[name]")
  console.log("Hello world")
})
