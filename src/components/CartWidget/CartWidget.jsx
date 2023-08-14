import carrito from '../../img/carrito.png'

const CartWidget = () => {
    
    return (
        <div className="CartWidget">
            <a href="#">
                <img src={carrito} alt='carrito'/>
            </a>
            <p>1</p>
        </div>    
    );
}

export default CartWidget;