import type { Dispatch, SetStateAction } from "react";
import type { Iplayer } from "../../types/type";
import PlayerCart from "./PlayerCart";

interface IAvailableprops {
  players: Iplayer;
  coin: number;
  setCoin: Dispatch<SetStateAction<number>>;
}
const AvailablePlayers = ({ players, coin, setCoin }) : IAvailableprops => {
  return (
    <div className="grid grid-cols-3 gap-4">
      {players.map((player: Iplayer, ind: number) => {
        return <PlayerCart key={ind} player={player} coin={coin} setCoin={setCoin} />;
      })}
    </div>
  );
};

export default AvailablePlayers;
