import React from "react";
import Deleteblock from "./Deleteblock";
import PriorityDisplay from "./PriorityDisplay";
import ProgressBar from "./ProgressBar";
import StatusDisplay from "./StatusDisplay";
import { TypeTicketCreate } from "../{types}/alltypes";

const TicketCard = ({ ticket }: TypeTicketCreate) => {
  return (
    <div className="flex flex-col bg-card hover:bg-card-hover rounded-md shadow-lg p-3 m-2">
      <div className="flex mb-3">
        <PriorityDisplay priority={ticket.priority} />
        <div className="ml-auto">
          <Deleteblock />
        </div>
      </div>
      <h4>{ticket.title}</h4>
      <hr className="h-px border-0 bg-page mb-2" />
      <p className="whitespace-pre-wrap">{ticket.description}</p>

      <div className="flex-grow"></div>

      <div className="flex mt-2">
        <div className="flex flex-col ">
          <p>{ticket.createdAt?.slice(0, 10)}</p>
          <ProgressBar progress={ticket.progress} />
        </div>

        <div className="ml-auto flex items-end">
          <StatusDisplay status={ticket.status} />
        </div>
      </div>
    </div>
  );
};

export default TicketCard;
