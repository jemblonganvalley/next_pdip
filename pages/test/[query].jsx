export default function Test({ data }) {
  return (
    <iframe
      src={`https://www.facebook.com/plugins/share_button.php?href=https%3A%2F%2Fnext-pdip.vercel.app%2Fberita%2F${data}&layout=button&size=small&appId=799588884220574&width=67&height=20`}
      width={67}
      height={20}
      style={{ border: "none", overflow: "hidden" }}
      scrolling="no"
      frameBorder={0}
      allowFullScreen="true"
      allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
    />
  );
}

export async function getServerSideProps(contex) {
  return {
    props: {
      data: contex.params.query,
    },
  };
}
