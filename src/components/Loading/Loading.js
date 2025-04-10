import './Loading.scss'
import { Box, Skeleton, Stack } from '@mui/material'

const Loading = ({show}) => {

    const dots = [1, 2, 3]

    return (
        <Box style={{opacity: show ? 1 : 0}} className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-opacity duration-300' 
         display='flex' justifyContent='center' alignItems='center' gap={1} >
            {dots.map((dot, index ) => (
                <Skeleton sx={{ borderRadius: '50%' }} variant='circle' width={12} height={12} animation='pulse'  />))}
        </Box>
    )
}

export default Loading