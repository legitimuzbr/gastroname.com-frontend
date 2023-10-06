import Card from "../Components/Card";
import Icon from "../Components/Icon";

const Items = ({ items, setSelectedCategory }) => {
  return (
    <>
      <div className="container">
        <div className="row">
          <button
            className="btn btn-success mb-3"
            onClick={() => setSelectedCategory(null)}
          >
            Voltar
          </button>
          <div className="d-flex mb-3">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Pesquisar"
              aria-label="Pesquisar"
            />
            <button className="btn btn-outline-success" type="submit">
              <Icon icon="search" />
            </button>
          </div>
          {items.map((item, index) => (
            <div className="col-12 col-md-8">
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

export default Items;
