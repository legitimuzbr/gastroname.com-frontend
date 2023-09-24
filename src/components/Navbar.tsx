import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'


export default function Navbar() {


  return (
    <nav className="navbar bg-dark" data-bs-theme="dark">
      <div className="container-fluid">
        <a className="navbar-brand">Gastroname</a>
        <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Pesquisar" aria-label="Pesquisar" />
          <button className="btn btn-outline-success" type="submit"><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
        </form>
      </div>
    </nav>
  )

}