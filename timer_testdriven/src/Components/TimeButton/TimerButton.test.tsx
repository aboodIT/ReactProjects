import React from "react"
import { shallow,mount } from "enzyme"
import TimerButton from "./TimerButton"

describe("TimerButton", () => {
  let container:any

  beforeEach(() => {
    container = shallow(
      <TimerButton
        buttonAction={jest.fn()}
        buttonValue={""}
      />
    )
  })

  it("should render a <div />", () => {
    expect(container.find("div").length).toBeGreaterThanOrEqual(1)
  })
})

