import { useState, useEffect } from "react";

function UserProf() {
  const [posts, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((Response) => Response.json())
      .then((data) => {
        setUsers(data.slice(0, 1));
      });
  }, []);

  return (
    <>
      {posts.map((posts) => (
        <div className="p-3 border mt-2 mb-2 frostedglass2 xtransp cardNBody">
          <div key={posts.id}>
            <h3 className="mb-3 cardName">{posts.name}</h3>
            <p> {posts.email}</p>
          </div>
        </div>
      ))}
    </>
  );
}
export default UserProf;
