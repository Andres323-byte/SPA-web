import Navegacion from '../Navegacion';

export default function Layout({ children }) {
    return (
        <>
           <Navegacion />
           {children}
           <h1>Footer</h1>
        </>
    )
    
}