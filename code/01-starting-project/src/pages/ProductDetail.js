import { useParams } from "react-router";
const ProductDetail = () => {
  // this will give us key value pairs
  const params = useParams();
  console.log(params.productId);

  return (
    <section>
      <h1>Product details</h1>
      <p>{params.productId}</p>
    </section>
  );
};

export default ProductDetail;
