import Card from "../Components/Card";
import Icon from "../Components/Icon";

const Items = (props) => {
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

      {props.items
        .filter((item) => item.categoryId === props.selectedCategory)
        .map((item, index) => (
          <div className="col-12 col-md-8">
            <Card
              key={index}
              title={item.title}
              description={item.description}
              image={item.image}
              price={item.price}
              edit={props.edit}
              itemId={item.id}
            />
          </div>
        ))}
    </>
  );
};

export default Items;
