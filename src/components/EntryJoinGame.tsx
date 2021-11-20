import { Button, Box, TextField, Alert } from "@mui/material";
import NameField from "./NameField";
import EntryPlayerNameType from "../types/EntryPlayerNameType";

const EntryJoinGame = ( {playerName, setPlayerName, roomId}:EntryPlayerNameType ) => {
    return (
        <Box sx={{textAlign: 'center'}}>
            <NameField playerName={playerName} setPlayerName={setPlayerName} />
            <Box sx={{pb:3}}>
                <TextField id="input-room-id" label="ルームID" variant="outlined" value={roomId} />
            </Box>
            {
                roomId === '' ? null :
                    <Box sx={{pb:3, margin: 'auto',  width: '100%'}}>
                        <Alert severity="success" sx={{justifyContent: 'center'}}>招待ルームIDを自動入力しました</Alert>
                    </Box>
            }
            <Button variant="contained">ゲームに参加</Button>
        </Box>
    );
}

export default EntryJoinGame;