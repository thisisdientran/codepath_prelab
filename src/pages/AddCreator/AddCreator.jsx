import { useState } from "react";
import { supabase } from "../../client.js";
import { Link } from "react-router-dom";

async function addCreator(newCreator) {
  const { error } = await supabase.from("creators").insert([newCreator]);
  if (error) throw error;
}

export default function AddCreator() {
  const [form, setForm] = useState({
    name: "",
    description: "",
    url: "",
    imageURL: ""
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    await addCreator(form);
    alert("Creator added!");
  }

  return (
    <>
      <h1>AddCreator Page</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input name="name" placeholder="Name" onChange={handleChange} required />
        <br />
        <label htmlFor="description">Description:</label>
        <textarea name="description" placeholder="Description" onChange={handleChange} required />
        <br />
        <label htmlFor="url">Website URL:</label>
        <input name="url" placeholder="Website URL" onChange={handleChange} required />
        <br />
        <label htmlFor="imageURL">Image URL:</label>
        <input name="imageURL" placeholder="Image URL" onChange={handleChange} required />
        <br />
        <button type="submit">Add Creator</button>
      </form>
    </>
  );
}