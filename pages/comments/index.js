import useSWR from "swr";

const url = "http://localhost:4000/comments";
const fetcher = (url) => fetch(url).then((res) => res.json());

function Comments() {
  const { data, error } = useSWR(url, fetcher);
  console.log({data , error})
  return (
    <div>
      {data ? (
        data.map((comment) => <h3 key={comment.id}>{comment.name}</h3>)
      ) : (
        <h3>Loading</h3>
      )}
    </div>
  );
}

export default Comments;
