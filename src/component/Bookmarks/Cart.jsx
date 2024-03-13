
const Cart = ({data, ind}) => {
        const {title} = data;
    return (
        <div className=" bg-white p-2 rounded-lg flex gap-2 items-center"> 
            <p>{ind + 1}.</p>
            <h2>{title}</h2>
        </div>
    );
};

export default Cart;