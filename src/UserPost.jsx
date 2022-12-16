import { useState, useEffect } from "react";

function UserPost() {
  const [posts, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((Response) => Response.json())
      .then((data) => {
        setUsers(data.slice(0, 50));
      });
  }, []);

  return (
    <>
      {posts.map((posts) => (
        <div className="p-4 border mt-4 mb-2 frostedglass xtransp cardNBody">
          <div key={posts.id}>
            <h3 className="mb-5 cardName">{posts.title}</h3>
            <p> {posts.body}</p>
          </div>
        </div>
      ))}
    </>
  );
}
export default UserPost;
