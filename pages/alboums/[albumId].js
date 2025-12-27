import { notFound, redirect } from "next/navigation";
import React from "react";

function AlbumDetail({ album }) {
  return (
    <div>
      <h2>AlbumDetail</h2>

      <h4>
        {album.id} - {album.title}{" "}
      </h4>
    </div>
  );
}

export default AlbumDetail;

export async function getServerSideProps(context) {
  const { params } = context;
  const res = await fetch(
    `http://localhost:4000/albums/${params.albumId}`
  );
const data = await res.json();

// if(!data.title){
//     return{
//         // notFound: true,
//         redirect:{destination : "/alboums"}
//     }
// }
  return {
    props: { album: data },
  };
}
