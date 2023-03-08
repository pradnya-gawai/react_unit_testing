export const homePageSubContent =
  `Unit Testing is a testing method that tests an individual unit of software in isolation. Unit testing for React Apps means testing an individual React Component .
  Unit Testing is important for React Apps, as it helps in testing the individual functionality of React components. Moreover, any error in code can be identified at the beginning itself, saving time to rectify it at later stages. Some of the core benefits of Unit Testing are:
`
export const reactComponent = `import React, { useState } from "react"

const Counter = () => {
const [counter, setCounter] = useState(0);

const incrementCounter = () => {
setCounter((prevCounter) => prevCounter + 1);
};

const decrementCounter = () => {
setCounter((prevCounter) => prevCounter - 1);
};

return (
        <>
        <button data-testid="increment" onClick={incrementCounter}>
        +
        </button>
        <p data-testid="counter">{counter}</p>
        <button disabled data-testid="decrement" onClick={decrementCounter}>
        -
        </button>
        </>
  )
}
export default Counter`
export const testingSnippit=`import { render, fireEvent, screen } from "@testing-library/react";
import Counter from "../components/Counter";

//test block
test("increments counter", () => {
// render the component on virtual dom
render(<Counter />);

//select the elements you want to interact with
const counter = screen.getByTestId("counter");
const incrementBtn = screen.getByTestId("increment");

//interact with those elements
fireEvent.click(incrementBtn);

//assert the expected result
expect(counter).toHaveTextContent("1");
});`