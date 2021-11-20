import { Typography, Box, Chip, Tooltip, ClickAwayListener, Button } from "@mui/material";
import { useParams } from "react-router-dom";
import { useState } from "react";
import testUsers from "../test_json/Users.json";
import UserChip from "../components/UserChip";
import InviteButton from "../components/InviteButton";

type RoomPageType = {
    roomId: string
}

const RoomPage = ( {roomId}:RoomPageType ) => {
    const Users = testUsers;
    // const { roomId } = useParams();
    const [users, setUsers] = useState(Users);   

    return (
        <Box sx={{width: '100%', textAlign: 'center'}}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Typography variant="h6">Room{roomId}</Typography>
                <Typography variant="h5">ユーザーリスト</Typography>
            </Box>
            <Box p={3}>
                { 
                    users.users.map((user) => <UserChip user={user} key={user.clientId} />)
                }
            </Box>
            <Box>
                <InviteButton roomId={roomId} />
            </Box>
        </Box>
    );    
}

export default RoomPage;
