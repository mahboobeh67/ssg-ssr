
import { notFound, redirect } from "next/navigation";

export default function UserDetail({ data }) {
  return (
    <div>
      <h1>UserDetail</h1>
      <h3>{data.name}</h3>
      <h4>{data.email}</h4>
    </div>
  );
}

export async function getStaticPaths() {
  const res = await fetch("http:/localhost:4000/users");
  const data = await res.json();
  const paths = data.map((user) => ({
    params: { userId: user.id.toString() },
  }));

  return {
    paths,

    fallback: false,
  };
}

export async function getStaticProps(context) {
  const { params } = context;
  const res = await fetch(
    `http:/localhost:4000/users/${params.userId}`
  );
  const data = await res.json();
  if(!data.name)
    return {
      // notFound: true


    }
  
  return {
    props: { data },
    revalidate: 10,
    
  };
}
