

export default function Home({data }) {
 
  return <div >Next.js week 22
  <ul>
    {data.map((item) => <li key={item.id}>{item.title}</li>)}
  </ul>
  </div>;
}

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts")
const data = await res.json()

  return {
    props: {
      data,
    },
  };
}
