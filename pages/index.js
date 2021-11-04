import { useId } from "react";

function DivWithId() {
  const id = useId();
  return <div>{id}</div>;
}

export default function Home() {
  const id = useId();
  return <div>{id}</div>;
}
