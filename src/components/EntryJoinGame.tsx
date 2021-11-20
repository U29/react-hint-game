import { Button, Box, TextField, Alert } from "@mui/material";
import NameField from "./NameField";
import EntryPlayerNameType from "../types/EntryPlayerNameType";
import { useState } from "react";

const EntryJoinGame = ( {playerName, setPlayerName, roomId}:EntryPlayerNameType ) => {
    const [inputRoomId, setInputRoomId] = useState(roomId);
    return (
        <Box component="form" autoComplete="off" sx={{textAlign: 'center'}}>
            <NameField playerName={playerName} setPlayerName={setPlayerName} />
            <Box sx={{pb:3}}>
                <TextField required inputProps={{maxLength: 4}} id="input-room-id" label="ルームID" variant="outlined" onChange={e => setInputRoomId(e.target.value)} value={inputRoomId} />
            </Box>
            {
                roomId === '' ? null :
                    <Box sx={{pb:3, margin: 'auto',  width: '100%'}}>
                        <Alert severity="success" sx={{justifyContent: 'center'}}>招待ルームIDを自動入力しました</Alert>
                    </Box>
            }
            <Button variant="contained" href={`/room/${roomId}`} >ゲームに参加</Button>
        </Box>
    );
}

export default EntryJoinGame;