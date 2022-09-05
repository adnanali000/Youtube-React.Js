import React from 'react'
import { Oval } from 'react-loader-spinner'
import { Box, Stack, Typography } from '@mui/material'

const Loading = () => {
    return (
        <Box sx={{minHeight:'100vh'}}>
            <Stack direction="row" gap="10px" alignItems="center">
                <Typography color="#fff" variant="h6">
                    Loading
                </Typography>
                <Oval
                    height={80}
                    width={80}
                    color="red"
                    wrapperStyle={{}}
                    wrapperClass=""
                    visible={true}
                    ariaLabel='oval-loading'
                    secondaryColor="red"
                    strokeWidth={2}
                    strokeWidthSecondary={2}
                />
            </Stack>
        </Box>
    )
}

export default Loading