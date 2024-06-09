import React from "react";
import Counter from "../components/CounterOld";

export default {
  title: "Counter Component",
  component: Counter,
};

function Template() {
  return <Counter />;
}

export const Default = Template.bind({});
