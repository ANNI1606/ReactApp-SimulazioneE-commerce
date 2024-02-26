function Card({
  title,
  description,
  image,
}: {
  title: string;
  description: string;
  image: string;
}) {
  return (
    <div className="card">
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <p>{description}</p>
      <button onClick={() => addTocart}></button>
    </div>
  );
}
//function addTocart(products: object[]){
//const productToAdd= products.find(product => product.id

export default Card;
