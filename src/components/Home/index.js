import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';


import ImageOne from '../../assets/images/imageone.png';
import ImageTwo from '../../assets/images/imageTwo.png';
import ImageThird from '../../assets/images/imageThird.png';
import Colors from '../color.js';

const styles = {
    paperContainer: {
        height: 'auto',
        backgroundImage: `url(${ImageOne})`
    },
    ContainerInmotion: {
        height: 'auto',
        backgroundImage: `url(${ImageTwo})`
    },
    ContainerElectricCycle: {
        height: 'auto%',
        backgroundImage: `url(${ImageThird})`
    },
    HomeDescriptions: {
        fontSize: '26px',
        lineHieght: '32px',
        fontWeight: 600,
    },
    crossText: {
        textDecoration: 'line-through',
        fontWeight: 400,
        fontSize: '18px',
        lineheight: '18px'
    },
    priceText: {
        fontWeight: 400,
        fontSize: '18px',
        lineheight: '18px'
    },
    button: {
        color: 'white',
        border: '1px solid white',
    }

};

function Home() {
    return (
        <>
            <Grid container mt={10} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
                    <Box style={styles.paperContainer} pl={12} pt={8} pb={2}>
                        <Typography variant="p" component="p" color={Colors.homeTitle} fontWeight={600}>
                            KINGSONG S18
                        </Typography>
                        <Typography variant="p" component="p" color={Colors.white} pt={2} style={styles.HomeDescriptions}>
                            Electric Unicycle with <br />
                            air damping suspension
                        </Typography>
                        <Typography variant="p" component="p" color={Colors.white} pt={4} style={styles.crossText}>
                            $1399.00
                        </Typography>
                        <Typography variant="p" component="p" color={Colors.white} style={styles.priceText}>
                            $1099.00
                        </Typography>
                        <Box mt={1}>
                            <Button variant="outlined" style={styles.button}>
                                Buy now
                            </Button>
                        </Box>
                    </Box>

                    <Box style={styles.ContainerInmotion} pl={12} pt={8} pb={2} mt={1}>
                        <Typography variant="p" component="p" color={Colors.homeTitle} fontWeight={600}>
                            INMOTION L8S
                        </Typography>
                        <Typography variant="p" component="p" color={Colors.white} pt={2} style={styles.HomeDescriptions}>
                            Foldable electric scooter<br />
                            250W motor waterproof
                        </Typography>
                        <Typography variant="p" component="p" color={Colors.white} style={styles.priceText} mt={6}>
                            $1799.00
                        </Typography>
                        <Box mt={1}>
                            <Button variant="outlined" style={styles.button}>
                                Buy now
                            </Button>
                        </Box>
                    </Box>

                </Grid>

                <Grid item xl={6} lg={6} md={6} sm={12} xs={12} style={styles.ContainerElectricCycle}>
                       <Box pt={6} pb={0} pl={3}> 
                        <Typography variant="p" component="p" color={Colors.homeTitle} fontWeight={600}>
                            KINGSONG S18
                        </Typography>
                        <Typography variant="p" component="p" color={Colors.white} pt={2} style={styles.HomeDescriptions}>
                            Electric Unicycle with <br />
                            air damping suspension
                        </Typography>
                        <Typography variant="p" component="p" color={Colors.white} style={styles.priceText} mt={7}>
                        $2099.00
                        </Typography>
                        <Box mt={1}>
                            <Button variant="outlined" style={styles.button}>
                                Buy now
                            </Button>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </>
    )
}

export default Home;