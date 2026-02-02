import { useEffect, useState, useNavigate } from "react";
import { supabase } from "../../client.js";
import { useParams, Link } from "react-router-dom";

export default function EditCreator() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    description: "",
    url: "",
    imageURL: ""
  });

  useEffect(() => {
    async function fetchCreator() {
      const { data } = await supabase
        .from("creators")
        .select("*")
        .eq("id", id)
        .single();

      if (data) setForm(data);
    }
    fetchCreator();
  }, [id]);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }
  async function handleSubmit(e) {
    e.preventDefault();

    await supabase
      .from("creators")
      .update({
        name: form.name,
        description: form.description,
        url: form.url,
        imageURL: form.imageURL
      })
      .eq("id", id);

    navigate(`/creator/${id}`);
  }

  return (
    <>
      <h1>EditCreator Page</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input name="name" value={form.name} onChange={handleChange} required />
        <br />
        <label htmlFor="description">Description:</label>
        <textarea name="description" value={form.description} onChange={handleChange} required />
        <br />
        <label htmlFor="url">Website URL:</label>
        <input name="url" value={form.url} onChange={handleChange} required />
        <br />
        <label htmlFor="imageURL">Image URL:</label>
        <input name="imageURL" value={form.imageURL} onChange={handleChange} required />
        <br />
        <button type="submit">Update Creator</button>
      </form>
    </>
  );
}