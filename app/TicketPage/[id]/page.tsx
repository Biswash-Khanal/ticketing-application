import TicketForm from "@/app/{components}/TicketForm";

import React from "react";

const getTicketById = async (id: string) => {
  try {
    const res = await fetch(`http://localhost:3000/api/Tickets/${id}`, {
      cache: "no-store",
    });

    return res.json();
  } catch (error) {
    console.log(error);
  }
};

const TicketsPage = async ({ params }: { params: { id: string } }) => {
  const EDITMODE: boolean = params.id === "new" ? false : true;
  let updateTicketData = {};
  if (EDITMODE) {
    updateTicketData = await getTicketById(params.id);
    console.log(updateTicketData);
  }
  return <TicketForm />;
};

export default TicketsPage;
