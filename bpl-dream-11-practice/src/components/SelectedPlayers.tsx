import type { Dispatch, SetStateAction } from "react";
import type { Iplayer } from "../Type/Type";
import SelectedPlayerCard from "./SelectedPlayerCard";

interface ISelectedPlayersProps {
  selectedPlayers: Iplayer[];
  setSelectedPlayers: Dispatch<SetStateAction<Iplayer[]>>;
  coin: number;
  setCoin: Dispatch<SetStateAction<number>>;
}
const SelectedPlayers = ({
  selectedPlayers,
  setSelectedPlayers,
  coin,
  setCoin,
}: ISelectedPlayersProps) => {
  return (
    <div>
      {selectedPlayers.map((player: Iplayer, ind : number) => {
        return (
          <SelectedPlayerCard
          key={ind}
            selectedPlayers={selectedPlayers}
            setSelectedPlayers={setSelectedPlayers}
            player={player}
            coin={coin}
            setCoin={setCoin}
          />
        );
      })}
    </div>
  );
};

export default SelectedPlayers;
