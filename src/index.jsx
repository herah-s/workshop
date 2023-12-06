import '../assets/stylesheets/application.scss';
import React from 'react';
import { createRoot } from "react-dom/client";
import App from "./components/App";

const container = document.querySelector("#root");
const root = createRoot(container);
root.render(<App />);

// // 1. How to render react
// // 2. How to create a react Component
// // 3. How to customize a component with props
// 4. How to breack down the app into nested components
// 5.Ho to refactor the components with props and iterations
// 6. How to handle events with states (React hook states using useState())

// const Hello = ({ name, job }) => {
//   // same as ☝️
//   // const name = props.name
//   // const job = props.job
//   // same as 👇
//   // const { name, job } = props; (props passed as an argument)

//   return (
//     <h1>hi, I'm {name}, working as a {job}</h1>
//   );
// };
