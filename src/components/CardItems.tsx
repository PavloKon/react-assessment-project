import React,{useState, useEffect}from 'react';
import CardItem from './CardItem';
import { CardItemProps } from './CardItem';
import Grid from '@mui/material/Grid';
import { makeStyles } from '@material-ui/core/styles';

const CardItems = () => {
    const useStyles = makeStyles((theme) => ({
        profileSection: {
            [theme.breakpoints.up('xs')]: {
                justifyContent: 'space-between',
            },
            [theme.breakpoints.up('lg')]: {
                justifyContent: 'unset',
            },
            [theme.breakpoints.down('xs')]: {
                justifyContent: 'center',
            },
        }})
      )
    const classes = useStyles()
      
    const [userList, setUserList] = useState<CardItemProps[]>([])

    const userData = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json()
        return data
    }

    useEffect(() => {
        userData().then(data => {
            setUserList(data)
        })
    }, [])

    useEffect(() => {
        setUserList(userList => {
            return userList.map(item => { return {...item, favour: false }})
        })
    }, [])

    const deleteUserItem = ( id:number ) => {
        setUserList(userList => userList.filter(item => item.id !== id))
    }

    const handleFavour = ( id: number, favour: boolean ) => {
        setUserList(userList => {
            return userList.map(item => {
                if ( item.id === id ) {
                    return { ...item, favour }
                } 
                return item
            })
        })
    }

    return (
        <>
        <Grid container direction="row" className={classes.profileSection}>
            {userList.map((item, index) => 
                <CardItem 
                    key={index}
                    id={item.id}
                    favour={item.favour}
                    name={item.name}
                    email={item.email}
                    phone={item.phone}
                    website={item.website}
                    deleteItem={deleteUserItem}
                    handleFavour={handleFavour}
                />
            )}
        </Grid>
        </>

    )
}

export default CardItems