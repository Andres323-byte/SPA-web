const routes = {

PaginaInicio: '/',
login: '/login',
registro: '/registro',
MiCuenta: '/MiCuenta',
productos: '/productos',
ServiciosId: (serviciosId) => serviciosId ? `/serviciosId/:${serviciosId}` : '/ServiciosId/serviciosId',
admin: {

    usuarios: '/admin/usuarios'

}

    

};

export default routes;
