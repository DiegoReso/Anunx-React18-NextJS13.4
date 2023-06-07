import { 
  Button,
  Card as CardMUI, 
  CardActions, 
  CardContent, 
  CardMedia, 
  Typography } from '@mui/material'


const Card = ({image, title, subtitle,actions}) =>{

  return( 
    <CardMUI>
      <CardMedia
        component="img"
        image={image}
        title="Titulo da imagem"
        sx={{height: 140}}
      />
      <CardContent>
        <Typography variant='h5' component="h2">
          {title}
        </Typography>
        <Typography>
          {subtitle}
        </Typography>
      </CardContent>
      

        {
          actions
            ?(
              <CardActions>
                {actions}
              </CardActions>
            ) : null

        }
        
    </CardMUI>

  )
}


export default Card