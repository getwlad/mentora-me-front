import React from "react";

import { MainSection } from "./style";

const Main = (props: React.PropsWithChildren) => {
  return <MainSection>{props.children}</MainSection>;
};

export default Main;
