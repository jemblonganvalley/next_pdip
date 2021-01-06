import { useEffect } from "react";

const Index = ({ post }) => {
  useEffect(() => {
    window.location.href = "https://pdiperjuangan.id";
  }, []);
  return (
    <div>
      <h1>pdiperjuangan.id</h1>
    </div>
  );
};

export default Index;
