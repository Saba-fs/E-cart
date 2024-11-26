import React from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'
import Header from '../Components/Header'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromewishlist } from '../Redux/slice/wishlistSlice'
import { addToCart } from '../Redux/slice/cartSlice'

function Wishlist() {

  
  const {wishlist} = useSelector(state=>state.wishListReducer)
  const dispatch=useDispatch()
  const handleCart=(product)=>{
    dispatch(addToCart(product))
    dispatch(removeFromewishlist(product?.id))
  }

  return (
   <>
    <Header/>
    <div style={{marginTop:"50px"}} className='container-fluid'>
   <Row>
    {
      wishlist?.length>0?wishlist.map(product=>(
        <Col>
            <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" width={"100%"} src={product?.thumbnail} />
      <Card.Body>
        <Card.Title>{product?.title.slice(0,10)}..</Card.Title>
        <Card.Text>
        {product?.description.slice(0,20)}...
        </Card.Text>
        <div className='d-flex justify-content-between'>
          <Button className="btn btn-light" onClick={()=>dispatch(removeFromewishlist(product?.id))}><i class="fa-solid fa-trash text-danger "></i></Button>
          <Button className="btn btn-light" onClick={()=>handleCart(product)}><i class="fa-solid fa-cart-plus text-info"></i></Button>
        </div>
      </Card.Body>
    </Card>
        </Col>
      )):<div className='text-center'>
          <img src="https://www.adanione.com/~/media/Foundation/Adani/emptyImages/empty_cart.gif" alt="" />
          <h1 className='text-danger mt-4'>Your Wishlist Is Empty...</h1>
      </div>
      
    }
   </Row>
    </div>
    </>
  )
}

export default Wishlist
