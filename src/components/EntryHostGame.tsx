import { Button, Box } from "@mui/material";
import NameField from "./NameField";
import EntryPlayerNameType from "../types/EntryPlayerNameType";

const EntryHostGame = ( {playerName, setPlayerName}:EntryPlayerNameType ) => {
    return (
        <Box sx={{textAlign: 'center'}}>
            <NameField playerName={playerName} setPlayerName={setPlayerName} />
            <Button variant="contained">ゲームをホスト</Button>
        </Box>
    );
}

export default EntryHostGame;