import React from "react";

async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}
const ExampleUseHook = () => {
  const data = use(getData);
  return data && data.map((post) => <p key={post.id}>{post.title}</p>);
};

export default ExampleUseHook;
