import Product from "./Product";

function ProductList(props) {
  const products = props.products;
  const productItems = products.map(product =>
    <Product key={product.id} product={product} />
    );
    return(
      <div>
        <h1>Продукти:</h1>
        { productItems }
      </div>
    )
}

export default ProductList;
