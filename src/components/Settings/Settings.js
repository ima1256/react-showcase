import SettingsIcon from '@mui/icons-material/Settings';
import { IconButton, Menu, MenuItem } from '@mui/material';
import { VolumeOff, VolumeUp } from '@mui/icons-material'
import { useDispatch, useSelector } from 'react-redux';
import { toggleVolume } from '../../redux/volumeSlice';
import { useState, useEffect } from 'react';

export const Settings = () => {

    const dispatch = useDispatch()

    const isVolumeEnabled = useSelector((state) => state.volume.isEnabled)

    const [anchorEl, setAnchorEl] = useState(null)

    // useEffect(() => {
    //     console.log('Hola perro')
    // }, [])

    const handleToggleVolume = () => {
        dispatch(toggleVolume()); // Dispatch the action to toggle the volume state
    };

    return (
        <div className='settings flex flex-row items-center'>

            <div onClick={() => handleToggleVolume()} className='text-white volume cursor-pointer'>
                {isVolumeEnabled ? <VolumeUp /> : <VolumeOff />}
            </div>

            <div>

                <IconButton color='primary'>

                    <SettingsIcon className='text-white' />

                </IconButton>
                
            </div>


        </div>
    )

}

export default Settings
