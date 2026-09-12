import { Suspense, useState } from "react";
import Banner from "./Banner";
import Nav from "./Nav";
import Players from "./components/Players";
import type { Iplayer } from "./Type/Type";

// Practice 

const playerFetch = async (): Promise<Iplayer[]> => {
  const res = await fetch("/data.json");
  const data = await res.json();
  return data;
};

function App() {

  const [coin, setCoin] = useState(5000)
  const playerPromise = playerFetch();
  return (
    <>
      <Nav coin={coin} />
      <Banner />
      <Suspense fallback={"Loading....."}>
        <Players playerPromise={playerPromise} coin={coin} setCoin={setCoin}/>
      </Suspense>
    </>
  );
}

export default App;
