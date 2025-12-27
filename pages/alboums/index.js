import Link from "next/link";

function Albums({ albums }) {
  return (
    <div>
      <h1>Albums</h1>
      <ul>
        {albums.map((album) => (
          <li key={album.id}>
            <Link href={`/alboums/${album.id}`}>
            <h3>{album.title}</h3>
            </Link>
            
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Albums;

export async function getServerSideProps(context) {
  const { params, req, response, query } = context;
  const res = await fetch("http://localhost:4000/albums");
  const data = await res.json();
  return {
    props: { albums: data },
  };
}
