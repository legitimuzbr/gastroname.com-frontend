import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faCartShopping } from '@fortawesome/free-solid-svg-icons'


export default function Navbar() {


  return (
    <>
      <nav className="navbar bg-dark sticky-top py-3" data-bs-theme="dark">
        <div className="container justify-content-center justify-content-sm-between">
          <a className="navbar-brand h1">Pizza do Zé</a>
          <div className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Pesquisar" aria-label="Pesquisar" />
            <button className="btn btn-outline-success me-2" type="submit"><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
            <button className="btn btn-outline-success d-flex align-items-center" type="submit"><FontAwesomeIcon icon={faCartShopping} /> <span className="me-2"></span>3</button>
          </div>
        </div>
      </nav>
    </>
  )
}