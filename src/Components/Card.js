export default function Card(props) {
  return (    
    <div className="card mb-3" style={{width: "18rem;"}}>
      <img src={props.image} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.description}</p>
        <span class="badge rounded-pill text-bg-success">R$ {props.price}</span>
      </div>
    </div>
  )
}