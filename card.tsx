function Card({ product, onClick }: any) {
  const { title, description, image, id } = product;

  return (
    <div className="card">
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <p>{description}</p>
      <button onClick={() => onClick(id)}></button>
    </div>
  );
}

export default Card;
