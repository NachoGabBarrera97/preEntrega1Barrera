import CartIcon from "./CartIcon";
import CartItems from "./CartItems";

const CartContainer = () => {
    return (
        <div className="bg-primary-subtle rounded-circle p-3 position-relative">
            <CartIcon color="red"/> 
            <CartItems count={5}/>
             </div>
    )
}

export default CartContainer