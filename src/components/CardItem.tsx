import React, {useState} from 'react'
import { Typography, Box } from '@mui/material'
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';
import LanguageIcon from '@mui/icons-material/Language';
import Grid from '@mui/material/Grid';
import FavoriteBorderTwoToneIcon from '@mui/icons-material/FavoriteBorderTwoTone';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
import DeleteIcon from '@mui/icons-material/Delete';

export interface CardItemProps {
    id: number
    name: string,
    email: string
    phone?: number
    website?: string
    favour?: boolean
    deleteItem: (id: number) => void;
    handleFavour: (id: number, favour: boolean) => void;
}
const CardItem = ({id,name, email, favour, phone, website, deleteItem, handleFavour}: CardItemProps) => {
    const handleDelete = ( userId:number ) => {
        deleteItem(userId)
    }
    return(
        <Box m="10px" sx={{color: "dimgrey"}}>
            <Grid item sx={{border: '2px solid #dedede', minWidth: "300px"}}>
                <Box sx={{paddingTop: `20px`, backgroundColor: '#eee', display: 'flex', justifyContent: 'center' }} >
                    <img style={{height: '200px'}} alt={`${name}`} src={`https://avatars.dicebear.com/v2/avataaars/${name}.svg?options[mood][]=happy)`}/>
                </Box>
                <Box m="20px">
                    <Box sx={{ marginBottom: '10px'}}>
                        <Typography variant="h6" component="p" style={{ fontWeight: 'bold' }}>
                            {name}
                        </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '5px'}}>
                        <MailOutlineIcon style={{ marginRight: '10px'}}/>
                        <Typography variant="body1" component="p">
                        {email}
                        </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '5px' }}>
                        <PhoneEnabledIcon style={{ marginRight: '10px'}}/>
                        <Typography variant="body1" component="p">                        
                            {phone}
                        </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '5px' }}>
                        <LanguageIcon style={{ marginRight: '10px'}}/>
                        <Typography variant="body1" component="p">
                            {website}
                        </Typography>
                    </Box>                    
                </Box>
                <Box sx={{ backgroundColor: "#eee", display: 'flex', textAlign: 'center', padding: '10px 0' }}>
                    <Box sx={{ width: 'calc(100% / 3)' }}>
                    {!favour ? 
                        <FavoriteBorderTwoToneIcon sx={{color: 'red', cursor: 'pointer' }} onClick={()=>handleFavour(id, !favour)}/>
                        :
                        <FavoriteRoundedIcon sx={{color: 'red', cursor: 'pointer' }} onClick={()=>handleFavour(id, !favour)}/>
                    }
                    </Box>
                    <Box sx={{ width: 'calc(100% / 3)', borderLeft: '1px solid #ccc', borderRight: '1px solid #ccc' }}>
                        <BorderColorOutlinedIcon style={{ cursor: 'pointer'}} />
                    </Box>
                    <Box sx={{ width: 'calc(100% / 3)' }}>
                        <DeleteIcon onClick={() => handleDelete(id)} style={{ cursor: 'pointer' }} />
                    </Box>
                </Box>
            </Grid>
        </Box>
        
    )
}

export default CardItem