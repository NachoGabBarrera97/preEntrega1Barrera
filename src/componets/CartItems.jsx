const CartItems = ({count = 0}) => {
    return (
       <div ClassName="position-absoluite .bg-primary rounded-circle px-2" style={{top:0, right:0}}>
        <span style={{fontSize:"20px", color:"white"}}>{count}</span>

       </div>
    )
}

export default CartItems