import { useEffect } from "react";
import Layouts from "../components/Layouts";
import Wait from "../components/wait/Wait";

const Index = ({ post }) => {
  // useEffect(() => {
  //   window.location.href = "https://pdiperjuangan.id";
  // }, []);
  return (
    <Layouts>
      <Wait />
    </Layouts>
  );
};

export default Index;
