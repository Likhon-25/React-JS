import { use } from "react";
import type { Iplayer } from "../Type/Type";

interface PlayersProps {
    playerPromise : Promise<Iplayer>
}
const Players = ({playerPromise}) : PlayersProps => {
    const players = use(playerPromise)
    console.log(players);
    return (
        <div>
            
        </div>
    );
};

export default Players;