import Icon from "./Icon"

export default function Navbar() {


  return (
      <nav className="navbar bg-dark sticky-top py-3" data-bs-theme="dark">
        <div className="container justify-content-center justify-content-sm-between">
          <a className="navbar-brand h1">Pizza do Zé</a>
          <div className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Pesquisar" aria-label="Pesquisar" />
            <button className="btn btn-outline-success me-2" type="submit"><Icon icon="search" /></button>
            <button className="btn btn-outline-success d-flex align-items-center" type="submit"><Icon icon="cart" /> <span className="me-2"></span>3</button>
          </div>
        </div>
      </nav>
  )
}