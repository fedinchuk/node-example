function Product(props) {
  return (
    <div>
      <h3>{ props.product.name }</h3>
      <p>{ props.product.price }</p>
    </div>
  );
}

export default Product;
