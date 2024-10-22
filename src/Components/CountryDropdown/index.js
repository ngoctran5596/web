import { FaAngleDown } from 'react-icons/fa'
import * as React from 'react';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import PersonIcon from '@mui/icons-material/Person';
import AddIcon from '@mui/icons-material/Add';
import Typography from '@mui/material/Typography';
import { blue } from '@mui/material/colors';
const emails = ['username@gmail.com', 'user02@gmail.com'];
function CountryDropdown(props) {
    const { onClose, selectedValue, open } = props;

    const handleClose = () => {
        onClose(selectedValue);
    };

    const handleListItemClick = (value) => {
        onClose(value);
    };

    return (
        <>
            <Button className='countryDrop'>
                <div className='info d-flex  flex-column'>
                    <span className='label'>Your location</span>
                    <span className='name'>Viet Nam</span>
                </div>
                <span className='ml-auto'>
                    <FaAngleDown />
                </span>
            </Button>
            <Dialog className='locationDropDown' open={true}>
                <h1>ok</h1>
            </Dialog>
        </>
    )
}

export default CountryDropdown