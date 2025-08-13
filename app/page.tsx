import React from "react";
import TicketCard from "./{components}/TicketCard";
import {  TypeTicket } from "./{types}/alltypes";

const fetchTickets = async (): Promise<{ tickets: TypeTicket[] }> => {
  try {
    const res = await fetch("http://localhost:3000/api/Tickets", {
      cache: "no-store",
    });
const data = await res.json(); // ✅ Read once
console.log(data);
return data;

  } catch (error) {
    console.log(error);
    return { tickets: [] };
  }
};

const Dashboard = async () => {
  const { tickets } = await fetchTickets();

  const uniqueCategories = [
    ...new Set(tickets?.map((ticket) => ticket.category)),
  ];

  return (
    <div className="p-5">
      {uniqueCategories.map((uniqueCategory, categoryIndex) => (
        <div
          key={categoryIndex}
          className="mb-8"
        >
          <h2 className="text-xl font-bold mb-4">{uniqueCategory}</h2>

          <div className="lg:grid grid-cols-2 xl:grid-cols-4 gap-4">
            {tickets
              .filter((ticket) => ticket.category === uniqueCategory)
              .map((filteredTicket, index) => (
                <TicketCard
                  key={index}
                  
                  ticket={filteredTicket}
                />
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Dashboard;
