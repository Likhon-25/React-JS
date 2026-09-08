import { useState, type Dispatch, type SetStateAction } from "react";
import type { Iplayer } from "../../types/type";
import { FaUser, FaStar, FaTrophy } from "react-icons/fa";

interface IPlayerCardProps {
  players: Iplayer;
  coin: number;
  setCoin: Dispatch<SetStateAction<number>>;
}

const PlayerCart = ({ player , coin, setCoin}: IPlayerCardProps) => {
  const [isSelected, setIsSelected] = useState(false);

    console.log(coin, setCoin);

    const handleSelectPlayer = () =>{
      setIsSelected(true)
    }
  return (
    <div className="group relative overflow-hidden rounded-3xl bg-base-100 border border-base-300 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
      {/* Player Image */}
      <div className="relative h-72 overflow-hidden bg-base-200">
        <img
          src={player.playerImg}
          alt={player.PlayerName}
          className="h-full w-full object-cover object-top transition duration-700 group-hover:scale-110"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

        {/* Player Type */}
        <div className="absolute top-4 right-4">
          <span className="badge badge-primary text-white font-semibold px-4 py-3 shadow-lg">
            {player.playerTyype}
          </span>
        </div>

        {/* Player Name Over Image */}
        <div className="absolute bottom-4 left-5 right-5 text-white">
          <div className="flex items-center gap-2 text-sm text-white/80 mb-1">
            <FaUser />
            {player.origin}
          </div>

          <h2 className="text-2xl font-bold tracking-tight">
            {player.PlayerName}
          </h2>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-5">
        {/* Rating */}
        <div className="flex items-center justify-between mb-5">
          <div>
            <p className="text-xs uppercase tracking-wider text-base-content/50">
              Player Rating
            </p>

            <div className="flex items-center gap-2 mt-1">
              <FaStar className="text-warning" />
              <span className="font-bold text-xl">4.8</span>
              <span className="text-sm text-base-content/50">/ 5</span>
            </div>
          </div>

          <div className="flex items-center gap-2 text-primary">
            <FaTrophy />
            <span className="text-sm font-semibold">Elite Player</span>
          </div>
        </div>
          
        {/* Playing Style */}
        <div className="grid grid-cols-2 gap-3">
          <div className="rounded-2xl bg-base-200 p-3">
            <p className="text-xs text-base-content/50 mb-1">Batting</p>
            <p className="font-semibold text-sm">{player.battingStyle}</p>
          </div>

          <div className="rounded-2xl bg-base-200 p-3">
            <p className="text-xs text-base-content/50 mb-1">Bowling</p>
            <p className="font-semibold text-sm">{player.bowlingStyle}</p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-5 flex items-center justify-between">
          <div>
            <p className="text-xs text-base-content/50 uppercase">Base Price</p>

            <h3 className="text-2xl font-extrabold text-primary">
              ${player.price}
            </h3>
          </div>

          <button
            onClick={() => handleSelectPlayer()}
            className={`btn btn-primary rounded-xl px-5 shadow-md hover:shadow-primary/30`}
            disabled={isSelected ? true : false}
          >
            {isSelected === true ? "Selected" : "Choose Player"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlayerCart;
