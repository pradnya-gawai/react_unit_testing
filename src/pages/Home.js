import React from "react";
import Container from "react-bootstrap/Container";
import {
  homePageSubContent,
  reactComponent,
  testingSnippit,
} from "./CONSTANTS";

import { useState, useEffect } from "react";
import Header from "../components/Header";
import testImage from "../assets/jestlogo.png";

function Home(props) {
  return (
    <div>
      <Header />

      <div>
        <div
          style={{
            marginLeft: "18px",
            marginTop: "55px",
            display: "flex",
            padding: "4",
          }}
        >
          <div
            style={{
              border: "1px solid transparent",
              padding: "130px",
              backgroundColor: "white",
            }}
          ></div>
          <div style={{ border: "1px solid transparent", padding: "4px" }}>
            <div>
              <h5 className="me-auto">
                What is Unit Testing for React Apps? Why is it important?
              </h5>
              <p>{homePageSubContent}</p>
              <div>
                <strong>Process Becomes Agile:</strong>
                <p>
                  Agile Testing process is the main advantage of unit testing.
                  When you add more features to the software, it might affect
                  the older designs and you might need to make changes to the
                  old design and code later. This can be expensive and require
                  extra effort. But if you do unit testing, the whole process
                  becomes much faster and easier.
                </p>
                <strong>Quality of code:</strong>{" "}
                <p>
                  Unit testing significantly improves the quality of the code.
                  It helps developers to identify the smallest defects that can
                  be present in the units before they go for the integration
                  testing.
                </p>
                <strong>Facilitates change:</strong>
                <p>
                  {" "}
                  Refactoring the code or updating the system library becomes
                  much easier when you test each component of the app
                  individually.
                </p>
                <strong>Smooth Debugging:</strong>{" "}
                <p>
                  The debugging process is very simplified by doing unit
                  testing. If a certain test fails, then only the latest changes
                  that have been made to the code need to be debugged.
                </p>
                <strong>Reduction in cost:</strong>
                <p>
                  When bugs are detected at an early stage, through unit
                  testing, they can be fixed at almost no cost as compared to a
                  later stage, let’s say during production, which can be really
                  expensive.
                </p>
                <strong>
                  <i>
                    In the React world, there is an amazing library called the
                    react-testing-library which helps you test your React Apps
                    more efficiently. You use it with Jest.
                  </i>
                </strong>
                <hr />
                <h4>How to perform Unit testing of React Apps using JEST?</h4>
              </div>
              <div>
                <p>
                  <strong>Step 1: Create a new react app</strong> <br /> For
                  unit testing a react app, let’s create one using the command
                  given below:
                  <br />
                  <br />
                  <div
                    style={{
                      backgroundColor: "#363434",
                      padding: "20px 12px",
                      color: "white",
                    }}
                  >
                    npx create-react-app react-testing-tutorial
                  </div>
                  <br />
                  Open the package.json, and you will find that when you use
                  create-react-app for creating a react project, it has default
                  support for jest and react testing library. This means that we
                  do not have to install them manually.
                </p>
                <p>
                  <strong>Step 2: Create a component</strong>
                  <br />
                  Let’s create a component called Counter, which simply
                  increases and decreases a numeric value at the click of
                  respective buttons.
                </p>
                <div
                  style={{
                    backgroundColor: "#363434",
                    padding: "20px 12px",
                    color: "white",
                  }}
                >
                  <pre>
                    <code>{reactComponent}</code>
                  </pre>
                </div>
                <p>
                  Here, the important thing to note is the data-testid
                  attributes that will be used to select these elements in the
                  test file.
                  <br />
                  <strong>
                    Step 3: Write a unit test for the react component
                  </strong>
                  <br />
                  Before writing an actual unit test, let’s understand the
                  general structure of a test block:
                  <br />
                  <ol style={{ lineHeight: "2" }}>
                    <li>A test is usually written in a test block.</li>
                    <li>
                      Inside the test block, the first thing we do is to render
                      the component that we want to test.
                    </li>
                    <li>Select the elements that we want to interact with</li>
                    <li>Interact with those elements</li>
                    <li>Assert that the results are as expected.</li>
                  </ol>
                  <p>
                    The unit test of react component can be written as seen in
                    the code snippet below:
                  </p>
                </p>
                <div
                  style={{
                    backgroundColor: "#363434",
                    padding: "20px 12px",
                    color: "white",
                  }}
                >
                  <pre>
                    <code>{testingSnippit}</code>
                  </pre>
                </div>
                <p>
                  Note: In order to let jest know about this test file, it’s
                  important to use the extension .test.js.
                </p>
                <ol style={{ lineHeight: "2" }}>
                  <li>
                    The test block can be written either using test() or it().
                    Either of the two methods takes two parameters:
                    <ul>
                      <li>
                        The first parameter is to name the test. For example,
                        increments counter.
                      </li>
                      <li>
                        The second parameter is a callback function, which
                        describes the actual test.
                      </li>
                    </ul>
                  </li>
                  <li>
                    Using the render() method from the react testing library in
                    the above test to render the Counter component in a virtual
                    DOM.
                  </li>
                  <li>
                    The screen property from the react testing library helps
                    select the elements needed to test by the test ids provided
                    earlier.
                  </li>
                  <li>
                    To interact with the button, using the fireEvent property
                    from the react testing library in the test.
                  </li>
                  <li>
                    And finally, it is asserted that the counter element will
                    contain a value ‘1’.
                  </li>
                </ol>
                <p>
                  {" "}
                  <strong>Step 4: Run the test</strong>
                </p>
                <div
                  style={{
                    backgroundColor: "#363434",
                    padding: "4px",
                    color: "white",
                  }}
                >
                  <pre>
                    <code>npm run test</code>
                  </pre>
                </div>

              </div>
            </div>
          </div>

          <div
            style={{
              border: "1px solid transparent",
              padding: "4px",
              height: "100%",
              width: "100%",
              backgroundColor: "#f0f2f7",
            }}
          >
            <p>
              <strong>
                There are 2 main libraries when writing unit test cases - test
                runner and helper libraries
              </strong>
            </p>
            <p>
              Libraries like <a href="https://jestjs.io/"> Jest</a> are test
              runners, they provide the framework to write the unit test cases.
            </p>
            <p>
              Libraries like
              <a href="https://testing-library.com/docs/react-testing-library/intro/">
                React Testing Library
              </a>{" "}
              are helper libraries.{" "}
            </p>
            <iframe
              width="320"
              height="200"
              src="https://www.youtube.com/embed/T2sv8jXoP4s"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
            <p style={{ backgroundColor: "#fff87d" }}>
              <i>
                " create-react-app uses jest and react-testing-library by
                default, so we don’t need to do any configuration. "
              </i>
            </p>
            <p style={{ backgroundColor: "#fff87d" }}>
              <i>
                " Jest is a JavaScript test runner that lets you access the DOM
                via jsdom "
              </i>
            </p>
            <p style={{ backgroundColor: "#fff87d" }}>
              <i>
                " Jest can be used in projects that use webpack to manage
                assets, styles, and compilation. webpack does offer some unique
                challenges over other tools. Refer to the
                <a href="https://jestjs.io/docs/webpack">webpack guide</a> to
                get started. "
              </i>
            </p>

            <hr />
            <p>
              <strong>Best practices for testing React Apps with JEST</strong>
            </p>
            <ol>
              <li>Avoid unnecessary tests</li>
              <li>Don’t test implementation details</li>
              <li>
                Push business logic into pure functions rather than UI
                components:
              </li>
            </ol>
            <iframe
              width="320"
              height="200"
              src="https://www.youtube.com/embed/GLSSRtnNY0g"
            ></iframe>
            <iframe
              width="320"
              height="200"
              src="https://www.youtube.com/embed/7dTTFW7yACQ"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
