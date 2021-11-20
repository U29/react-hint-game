import { TextField, Box } from "@mui/material";

type EntryPlayerNameType = {
    playerName: string,
    setPlayerName: React.Dispatch<React.SetStateAction<string>>
}

const NameField = ({playerName, setPlayerName}:EntryPlayerNameType) => {
    return (
        <Box sx={{pb:3}}>
            <TextField id="input-player-name" label="プレイヤー名" variant="outlined" value={playerName} onChange={e => setPlayerName(e.target.value)} autoComplete="off" />
        </Box>
    );
}

export default NameField;