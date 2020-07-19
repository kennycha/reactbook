import React, { useState, Suspense } from "react";
import loadable from "@loadable/component";
const SplitMe = loadable(() => import("./SplitMe"), {
  fallback: <div>loading...</div>,
});

const App = () => {
  const [visible, setVisible] = useState(false);
  const onClick = () => {
    setVisible(!visible);
  };
  const onMouseOver = () => {
    SplitMe.preload();
  };
  return (
    <div>
      <p onClick={onClick} onMouseOver={onMouseOver}>
        Hello React
      </p>
      {visible && <SplitMe />}
    </div>
  );
};

export default App;
