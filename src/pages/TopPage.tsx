import { Button, Box, Tab } from "@mui/material";
import { useState, SyntheticEvent } from "react";
import EntryHostGame from "../components/EntryHostGame";
import EntryJoinGame from "../components/EntryJoinGame";
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { useParams } from "react-router";

const TopPage = () => {
    const [tabValue, setTabValue] = useState('1');
    const handleTabChange = (event: SyntheticEvent, newValue: string) => {
        setTabValue(newValue);
    };
    const [playerName, setPlayerName] = useState('');
    // const { roomId } = Object.keys(useParams()).length ? '1234' : '1234';
    const params = useParams();
    const { roomId } = Object.keys(params).length === 0 && params.constructor === Object ? {roomId: ''} : params;
    return (
        <Box sx={{width: '100%'}}>
            <TabContext value={tabValue}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <TabList value={tabValue} onChange={handleTabChange} aria-label="top page tabs" centered >
                        <Tab label="ゲームに参加" value='1' />
                        <Tab label="ゲームをホスト" value='2' />
                    </TabList>
                </Box>
                <TabPanel value='1'>
                    <EntryJoinGame playerName={playerName} setPlayerName={setPlayerName} roomId={roomId} />
                </TabPanel>
                <TabPanel value='2'>
                    <EntryHostGame playerName={playerName} setPlayerName={setPlayerName} />
                </TabPanel>
            </TabContext>
        </Box>
    );
}

export default TopPage;