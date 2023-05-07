import React from "react";
import ReactDOM from "react-dom/client";
import ShoesStore from "./homework-3/ShoesStore";
import FormDemo from "./homework-4/FormDemo";
import Form from "./reactForm/Form";
import Lifecycle from "./reactlifecycle/Lifecycle";

import { Provider } from "react-redux";
import { store } from "./redux/configStore";
import Homepages from "./redux/Demo/Homepages";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <ShoesStore></ShoesStore>
  // <Form></Form>
  // <FormDemo></FormDemo>
  // <Lifecycle></Lifecycle>
  <Provider store={store}>
    <Homepages></Homepages>
  </Provider>
);
