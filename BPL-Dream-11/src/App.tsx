import { Suspense, useState } from "react";
import Banner from "./components/Banner";
import Nav from "./components/Nav";
import Players from "./components/Players/Players";
import type { Iplayer } from "./types/type";

const playersFetch = async (): Promise<Iplayer[]> => {
  const res = await fetch("/data.json");
  const data = await res.json();
  return data;
};

function App() {
  // const playersPromise = playersFetch();
  const [playersPromise] = useState(() => playersFetch())

  const [coin, setCoin] = useState(5000);

  return (
    <>
      <Nav coin={coin} />
      <Banner />
      <Suspense fallback={"Loading....."}>
        <Players playersPromise={playersPromise} coin={coin} setCoin={setCoin} />
      </Suspense>
    </>
  );
}

export default App;
