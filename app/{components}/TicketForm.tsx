"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";

const TicketForm = () => {
  const router = useRouter();

  const startingTicketData = {
    title: "",
    description: "",
    priority: 1,
    progress: 0,
    status: "not started",
    category: "Hardware Problme",
  };

  const [formData, setFormData] = useState(startingTicketData);

const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  const res = await fetch("/api/Tickets", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ formData }),
  });
  if (!res.ok) throw new Error("Failed to create Ticket");

  router.refresh();
  router.push("/");
};

const handleChange = (
  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
) => {
  const { name, value } = e.target;
  setFormData(prev => ({
    ...prev,
    [name]: value,
  }));
};


  return (
    <div className="flex justify-center">
      <form
        action=""
        className="flex flex-col gap-3 w-1/2"
        method="post"
        onSubmit={handleSubmit}
      >
        <h3>Create your Ticket!</h3>
        <label>Title</label>
        <input
          type="text"
          id="title"
          name="title"
          onChange={handleChange}
          required
          value={formData.title}
        />

        <label>Description</label>
        <textarea
          id="description"
          name="description"
          onChange={handleChange}
          required
          value={formData.description}
          rows={5}
        />

        <label>Category</label>
        <select
          name="category"
          id="category"
          value={formData.category}
          onChange={handleChange}
        >
          <option value="Hardware Problem">Hardware Problem</option>
          <option value="Software Problem">Software Problem</option>
          <option value="Project Problem">Project Problem</option>
        </select>

        <label>Priority</label>
        <div>
          <input
            type="radio"
            id="priority-1"
            name="priority"
            onChange={handleChange}
            required
            value={1}
            checked={formData.priority == 1}
          />
          <label>1</label>

          <input
            type="radio"
            id="priority-2"
            name="priority"
            onChange={handleChange}
            required
            value={2}
            checked={formData.priority == 2}
          />
          <label>2</label>

          <input
            type="radio"
            id="priority-3"
            name="priority"
            onChange={handleChange}
            required
            value={3}
            checked={formData.priority == 3}
          />
          <label>3</label>

          <input
            type="radio"
            id="priority-4"
            name="priority"
            onChange={handleChange}
            required
            value={4}
            checked={formData.priority == 4}
          />
          <label>4</label>

          <input
            type="radio"
            id="priority-5"
            name="priority"
            onChange={handleChange}
            required
            value={5}
            checked={formData.priority == 5}
          />
          <label>5</label>
        </div>

        <label>Progress</label>
        <input
          type="range"
          id="progress"
          name="progress"
          value={formData.progress}
          min={0}
          max={100}
          onChange={handleChange}
        />

        <label>Status</label>
        <select
          name="status"
          id="status"
          value={formData.status}
          onChange={handleChange}
        >
          <option value="not started">Not Started</option>
          <option value="started">Started</option>
          <option value="done">Done</option>
        </select>

        <input
          type="submit"
          className="btn"
          value={"Create Ticket"}
        />
      </form>
    </div>
  );
};

export default TicketForm;
