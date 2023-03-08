import React from "react";
import Container from "react-bootstrap/Container";
import { homePageSubContent } from "./CONSTANTS";

import { useState, useEffect } from "react";
import Header from "../components/Header";
import testImage from "../assets/jestlogo.png";

function Home(props) {
  return (
    <div>
      <Header />

      <div>
        <div style={{ marginLeft: "18px", marginTop: "55px", display: "flex" }}>
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
              </div>
            </div>
          </div>

          {/* <div style={{ border: "1px solid transparent", padding: "4px" }}>
            <div>
              <h5 className="me-auto">
                Best practices for testing React Apps with JEST
              </h5>
              <p>
                Jest is a JavaScript testing framework that allows developers to
                run tests on JavaScript and TypeScript code and can be easily
                integrated with React JS.
                <br />
                <a href="https://jestjs.io/docs/getting-started">
                  jest offical documentation
                </a>
              </p>
              <div>
                <strong>
                  Before writing an actual unit test, let’s understand the
                  general structure of a test block:
                </strong>
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
              </div>
            </div>
          </div> */}
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
                challenges over other tools. Refer to the<a href="https://jestjs.io/docs/webpack">webpack guide</a>  to get
                started. "
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
