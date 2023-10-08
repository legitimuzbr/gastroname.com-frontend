import axios from "axios";

export default function Card(props) {
  const deleteItem = async (itemId) => {
    try {
      const response = await axios.delete(
        `https://api.gastroname.com/deleteItem/${itemId}`
      );
      if (response.status === 200) {
        console.log("Item deleted successfully");
        window.location.reload();
      }
    } catch (error) {
      console.error("Error deleting the item", error);
    }
  };

  return (
    <div className="card mb-3" style={{ maxWidth: "540px" }}>
      <div className="row g-0 align-items-center">
        <div className="col-4">
          <img
            src={props.image}
            className="img-fluid rounded-start"
            alt="..."
          />
        </div>
        <div className="col-8">
          <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">{props.description}</p>
            <p className="card-text">
              <span class="badge rounded-pill text-bg-success">
                R$ {props.price}
              </span>
            </p>
          </div>
        </div>
        {props.edit && (
          <div className="card-footer">
            <button
              type="button"
              class="btn btn-link"
              onClick={() => deleteItem(props.itemId)}
            >
              Remover
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
