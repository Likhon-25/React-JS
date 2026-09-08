import type { Dispatch, SetStateAction } from "react";
import type { Iplayer } from "../../types/type";
import PlayerCart from "./PlayerCart";

interface IAvailableprops {
  players: Iplayer;
  coin: number;
  setCoin: Dispatch<SetStateAction<number>>;
  selectedPlayers: Iplayer[];
  setSelectedPlayers: Dispatch<SetStateAction<Iplayer[]>>;
}
const AvailablePlayers = ({
  players,
  coin,
  setCoin,
  selectedPlayers,
  setSelectedPlayers,
}): IAvailableprops => {
  return (
    <div className="grid grid-cols-3 gap-4">
      {players.map((player: Iplayer, ind: number) => {
        return (
          <PlayerCart
            key={ind}
            player={player}
            coin={coin}
            setCoin={setCoin}
            selectedPlayers={selectedPlayers}
            setSelectedPlayers={setSelectedPlayers}
          />
        );
      })}
    </div>
  );
};

export default AvailablePlayers;
