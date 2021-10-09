import { Switch, Route } from 'react-router-dom';
import MiCuenta from '../vistas/MiCuenta';
import Usuarios from '../vistas/admin/Usuarios';
import PaginaInicio from '../vistas/PaginaInicio';
import LoginPage from '../vistas/LoginPage';
import Productos from '../vistas/Productos';
import Registro from '../vistas/Registro';
import ServiciosId from '../vistas/ServiciosId';
import PaginaNoEncontrada from '../vistas/PaginaNoEncontrada';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import roles from '../helpers/roles';
import routes from '../helpers/routes';


export default function Rutas() {
	return (
		<Switch>
			<PublicRoute exact path={routes.PaginaInicio} component={PaginaInicio} />
			<PublicRoute exact path={routes.LoginPage} component={LoginPage} />
			<PublicRoute exact path={routes.registro} component={Registro} />
			<PrivateRoute exact path={routes.MiCuenta} component={MiCuenta} />
			<PrivateRoute exact path={routes.productos} component={Productos} />
            <PrivateRoute exact path={routes.serviciosId()} component={ServiciosId} />
			<PrivateRoute hasRole={roles.admin} exact path={routes.admin.usuarios} component={Usuarios} />

			<Route path="*" component={PaginaNoEncontrada} />
		</Switch>
	);
}

