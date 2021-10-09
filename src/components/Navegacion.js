import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import useAuth from '../auth/useAuth';
import routes from "../helpers/routes";

export default function Navegacion() {
    const { logout } = useAuth();

    return (
        <Navbar collapseOnSelect expand="lg" variant="dark" bg="dark">
            <Navbar.Brand as={NavLink} to={routes.home}>
				Gestor de tareas
			</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
            <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
            <Nav.Link as={NavLink} to={routes.productos}>
						Productos
					</Nav.Link>
					<NavDropdown title="Admin">
						<NavDropdown.Item as={NavLink} to={routes.admin.usuarios}>
							Usuarios
						</NavDropdown.Item>
					</NavDropdown>
				</Nav>
				<Nav>
					<Nav.Link as={NavLink} to={routes.login}>
						Iniciar Sesión
					</Nav.Link>
					<Nav.Link as={NavLink} to={routes.registro}>
						Registrarse
					</Nav.Link>
					<Nav.Link as={NavLink} to={routes.serviciosId}>
						Servicios
					</Nav.Link>
					<Nav.Link as={NavLink} to={routes.MiCuenta}>
						Mi cuenta
					</Nav.Link>
					<Nav.Link to={routes.MiCuenta} onClick={logout}>
						Cerrar Sesión
					</Nav.Link>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
}