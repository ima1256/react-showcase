import { Box } from "@mui/material";
import Skeleton from "@mui/material/Skeleton";
import axios from 'axios'

const Prueba = ({style}) => {

    const skeletonStyles = {bgColor: 'red'}

    return (
        <Box className='transition-all duration-300 custom-box' style={style} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 2, padding: 2}}>

            <Skeleton key={'1'} sx={skeletonStyles} variant="circular" animation='wave' width={80} height={80}/>

            <Skeleton key={'2'} animation='wave' variant="rectangular" width='60%' height={20}/>

            <Skeleton key={'3'} animation='wave' variant="text" width="80%"/>
            <Skeleton key={'4'} animation='wave' variant="text" width="80%"/>
            <Skeleton key={'5'} animation='wave' variant="text" width="80%"/>

        </Box>
    )
}

export default Prueba