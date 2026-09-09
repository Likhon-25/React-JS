import { Suspense } from "react";
import Banner from "./Banner";
import Nav from "./Nav";
import Players from "./components/Players";
import type { Iplayer } from "./Type/Type";

const playerFetch = async (): Promise<Iplayer[]> => {
  const res = await fetch("/data.json");
  const data = await res.json();
  return data;
};

function App() {
  const playerPromise = playerFetch();
  return (
    <>
      <Nav />
      <Banner />
      <Suspense fallback={"Loading....."}>
        <Players playerPromise={playerPromise} />
      </Suspense>
    </>
  );
}

export default App;
