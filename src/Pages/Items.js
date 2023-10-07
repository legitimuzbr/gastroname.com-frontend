import Card from "../Components/Card";
import Icon from "../Components/Icon";

const Items = ({ items, selectedCategory }) => {
  return (
    <>
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

      {items
        .filter((item) => item.categoryId === selectedCategory)
        .map((item, index) => (
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
    </>
  );
};

export default Items;
