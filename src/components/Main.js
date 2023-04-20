
import { addToCart, emptyCart, removeToCart } from '../Redux/action';
import { useDispatch } from 'react-redux'
import { productList } from '../Redux/productAction';
import {useSelector} from 'react-redux'
import { useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';
function Main() {
  const dispatch = useDispatch();
  let data = useSelector((state)=>state.productData);
  console.warn("data in main component", data);
  
  useEffect(()=>{
    dispatch(productList())
  },[])
  return (
    <div>
      <div>
      <button onClick={() => dispatch(emptyCart())}>Empty Cart</button>
      </div>
      <div className='product-container'>
        {
          // data.map((item)=><div className='product-item'>
          //   <div> <h5>Resturent Name : {item.name} </h5></div>
          //   <img src={item.imgdata} alt="" />
         
          //   <div>
          //     <button onClick={() => dispatch(addToCart(item))} >Add to Cart</button>
          //     <button onClick={() => dispatch(removeToCart(item.id))}>Remove to Cart</button>

          //     </div>
          // </div>)





          data.map((item)=>  <Card sx={{ maxWidth: 345,justifyContent:'center',padding:'8px' }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={item.imgdata}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
              {item.name} 
              </Typography>
              <Typography variant="body2" color="text.secondary">
              <div>Category : {item.address} </div>
            <div style={{display:'flex',justifyContent:'space-around'}}>
            <div>Price : {item.price} </div> 
            <div>Rating : {item.rating} </div>
            </div>
          
          <div>Order : {item.somedata} </div>

          <div >
          <Stack spacing={2} direction="row" style={{justifyContent:'space-around',textAlign:'center',margin:'auto'}}>
      <Button onClick={() => dispatch(addToCart(item))}><AddShoppingCartIcon/></Button>
      <Button  onClick={() => dispatch(removeToCart(item.id))}><RemoveShoppingCartIcon/></Button>
      
    </Stack>
          </div>
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>)
        }
      </div>
    </div>
  );
}

export default Main;