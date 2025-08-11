import { TypeParams } from "@/app/{types}/alltypes";
import React from "react";

const TicketsPage = ({ params }:TypeParams) => {
  return <div>TicketsPage {`${params.id}`}</div>;
};

export default TicketsPage;
