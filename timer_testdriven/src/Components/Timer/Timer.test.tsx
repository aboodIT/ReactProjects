import React from "react"
import { shallow, mount } from "enzyme"
import Timer from "./Timer"
import TimerButton from '../TimeButton/TimerButton'

describe("Timer", () => {
  let container:any

  beforeEach(() => (container = shallow(<Timer />)))

  it("should render a <div />", () => {
    expect(container.find("div").length).toBeGreaterThanOrEqual(1)
  })

  it("should render a <TimerButton />", () => {
    expect(container.find("TimerButton").length).toEqual(3)
  })


})

describe('mounted Timer', () => {
    let container:any;

    const changed = jest.fn();
    beforeEach(() => (container = mount(<Timer />)));
  

    it('invokes startTimer when the start button is clicked', () => {
        container.find('#start-timer').simulate('click');
        expect('startTimer').toHaveBeenCalled
      });
    
    it('invokes startTimer when the start button is clicked', () => {
    container.find('#stop-timer').simulate('click');
    expect('stopTimer').toHaveBeenCalled
    });

    it('invokes startTimer when the start button is clicked', () => {
    container.find('#reset-timer').simulate('click');
    container.find('#reset-timer').simulate('click');
    expect('resetTimer').toHaveBeenCalled
    });

})

