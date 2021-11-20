import { Typography, Box, Chip, Tooltip, ClickAwayListener } from "@mui/material";
import { useParams } from "react-router-dom";
import FaceIcon from '@mui/icons-material/Face'
import StarsIcon from '@mui/icons-material/Stars';
import styled from "@emotion/styled";
import { ReactEventHandler, SyntheticEvent, useState } from "react";
import testUsers from "../test_json/Users.json";
import UserChip from "../components/UserChip";


const RoomPage = () => {
    const Users = testUsers;
    const { roomId } = useParams();
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
        </Box>
    );    
}

export default RoomPage;
