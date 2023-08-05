import {React,useState}  from 'react'
import './Product.css'
import Plane from '../../assets/plane.png'
import { ProductsData } from '../../data/products'
import {useAutoAnimate} from '@formkit/auto-animate/react'

const Product = () => {

    const [parent]=useAutoAnimate()

    const[MenuProducts,setMenuProducts]=useState(ProductsData)

    const filter=(type)=>{
        setMenuProducts(ProductsData.filter((product)=>product.type === type))
    }

  return (
    <div className="container">
      <img src={Plane} alt="" />
      <h1>Our Future Products</h1>
      <div className="products">
        <ul className='menu'>
          <li onClick={()=>setMenuProducts(ProductsData)}>All</li>
          <li onClick={()=>filter("skin care")}>Skin Care</li>
          <li onClick={()=>filter("conditioners")}>Conditioners</li>
          <li onClick={()=>filter("foundations")}>Foundations</li>
        </ul>
        <div className="list" ref={parent}>
            {
                MenuProducts.map((product,i)=>(
                    <div className='product'>
                        <div className="left-s">
                            <div className="name">
                                <span>{product.name}</span>
                                <span>{product.detail}</span>
                            </div>
                            <span>{product.price} rs</span>
                            <div>Show Now</div>
                        </div>
                        <img src={product.img} alt="" className='img-p' />
                    </div>
                ))
            }

        </div>
      </div>
    </div>
  )
}

export default Product
