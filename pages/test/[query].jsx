const Test = ({ posts }) => {
  return (
    <>
      {posts.map((e) => (
        <div key={e.id}>
          <h3>{e.title}</h3>
          <p>{e.body}</p>
        </div>
      ))}
    </>
  );
};

Test.getInitialProps = ({query})=> {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${query}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const posts = await res.json();
  return {
    props: {
      posts,
    },
  };
}

export default Test;
