import type { Dispatch, SetStateAction } from "react";
import type { Iplayer } from "../Type/Type";

interface ISelectedPlayerCard {
  player: Iplayer;
  selectedPlayers: Iplayer[];
  setSelectedPlayers: Dispatch<SetStateAction<Iplayer[]>>;
  coin: number;
  setCoin: Dispatch<SetStateAction<number>>;
}

const SelectedPlayerCard = ({
  player,
  selectedPlayers,
  setSelectedPlayers,
  coin,
  setCoin,
}: ISelectedPlayerCard) => {
  const handleRemovePlayer = (player: Iplayer) => {
    const restPlayers = selectedPlayers.filter(
      (selectedPlayer) => selectedPlayer.PlayerName != player.PlayerName,
    );
    setSelectedPlayers(restPlayers);

    const newCoinTotal = coin + player.price;

    setCoin(newCoinTotal);
  };
  return (
    <div>
      <div className="flex items-center justify-between p-4 bg-white/80 backdrop-blur-md rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300">
        <div className="flex gap-4 items-center">
          <img
            src={player.playerImg}
            alt={player.PlayerName}
            className="w-16 h-16 rounded-xl object-cover shadow-sm"
          />
          <div>
            <h2 className="text-lg font-bold text-gray-900 tracking-tight">
              {player.PlayerName}
            </h2>
            <p className="text-xs font-semibold text-gray-400 mt-0.5 uppercase tracking-wider">
              {player.playerTyype}
            </p>
          </div>
        </div>
        <span
          onClick={() => handleRemovePlayer(player)}
          className="text-gray-400 hover:text-red-500 p-2.5 rounded-xl hover:bg-red-50 transition-all duration-200 text-xl cursor-pointer"
        >
          Delete
        </span>
      </div>
    </div>
  );
};

export default SelectedPlayerCard;
