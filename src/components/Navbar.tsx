import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faCartShopping } from '@fortawesome/free-solid-svg-icons'


export default function Navbar() {


  return (
    <>
      <nav className="navbar bg-dark sticky-top py-4" data-bs-theme="dark">
        <div className="container-fluid justify-content-center">
          <a className="navbar-brand h1">Gastroname</a>
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Pesquisar" aria-label="Pesquisar" />
            <button className="btn btn-outline-success me-2" type="submit"><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
            <button className="btn btn-outline-success" type="submit"><FontAwesomeIcon icon={faCartShopping} /></button>
          </form>
        </div>
      </nav>
    </>
  )

}