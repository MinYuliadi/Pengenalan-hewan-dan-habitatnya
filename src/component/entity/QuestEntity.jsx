import React from "react";
import { Card } from "antd";

const QuestEntity = ({ children }) => {
  return (
    <Card className=" h-[530px] overflow-auto max-w-[375px] md:max-w-[720px] bg-white">
      {children}
    </Card>
  );
};

export default QuestEntity;
