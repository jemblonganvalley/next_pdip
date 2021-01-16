import { useEffect } from "react";
import Layouts from "../components/Layouts";

const Index = ({ post }) => {
  // useEffect(() => {
  //   window.location.href = "https://pdiperjuangan.id";
  // }, []);
  return (
    <Layouts>
      <h1 style={{ marginTop: "10vh" }}>pdiperjuangan.id</h1>

      <img src="pdip192.png" alt="" />
    </Layouts>
  );
};

export default Index;
