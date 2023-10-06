export default function Card(props) {
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
      </div>
    </div>
  );
}
