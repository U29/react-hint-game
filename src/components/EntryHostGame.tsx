import { Button, Box } from "@mui/material";
import NameField from "./NameField";
import EntryPlayerNameType from "../types/EntryPlayerNameType";

const EntryHostGame = ( {playerName, setPlayerName}:EntryPlayerNameType ) => {
    return (
        <Box sx={{textAlign: 'center'}} component="form" autoComplete="off">
            <NameField playerName={playerName} setPlayerName={setPlayerName} />
            <Button variant="contained">ゲームをホスト</Button>
        </Box>
    );
}

export default EntryHostGame;