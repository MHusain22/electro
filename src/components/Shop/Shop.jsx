
import './Shop.css';
import { NavLink } from 'react-router-dom'
import { ProductData } from '../ProductData'
import { useCartContext } from '../../context/cart_context.js';
import { useFilterContext } from '../../context/filter_context.js';

const Shop = () => {

    const {addToCart} = useCartContext();
    const { sorting,  updateFilterValue } = useFilterContext();
    const { filters:{text} } = useFilterContext();

    
    
  return (
    <div className='shop'>
        <div className="small-container">
        <h2  style={{textAlign:"center",marginBottom:"30px"}}>Products</h2>
        <form onSubmit={(e) => e.preventDefault()} action="">
                <input type="text" name="text" value={text} onChange={updateFilterValue} />
            <div className="search">
                
            </div>
        </form>
            <label htmlFor="sort"></label>
            <select onClick={sorting} name="sort" id="sort" className='sortselect'>
            <option value="lowest">Price(low to high)</option>
            <option value="highest">Price(high to low)</option>
            <option value="a-z">Price(a-z)</option>
            <option value="z-a">Price(z-a)</option>
            </select>
        <div className="row">
         {
            ProductData.map((data) => (
                <div className="row">
                <div className='col3' key={data.id}>
                <img src={data.Image} alt="image" />
                <NavLink to="/cart" onClick={() => addToCart(data.id,data.name,data.price,data.Image)}>
                <button className='cbtn'>Add To Cart</button>
                </NavLink>
                <h6>{data.type}</h6>
                <h3>{data.name}</h3>
                <h3>{`$${data.price}`}</h3>
                </div>
                </div>

                ))
            }
                    
        </div>
        </div>
    </div>
  )
}

export default Shop