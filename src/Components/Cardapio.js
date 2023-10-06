import Card from "./Card";

const Cardapio = ({ items, setSelectedCategory }) => {
  return (
    <>
      <div className="container py-3">
        <div className="row">
          <button
            className="btn btn-secondary my-3"
            onClick={() => setSelectedCategory(null)}
          >
            Voltar
          </button>
          {items.map((item, index) => (
            <div className="col-6 col-md-4 col-lg-3">
              <Card
                key={index}
                title={item.title}
                description={item.description}
                image={item.image}
                price={item.price}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Cardapio;
