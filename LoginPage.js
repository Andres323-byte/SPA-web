export default function LoginPage() {

    const { login } = useAuth();

    return (
       <div>
           <h1>LoginPage</h1>
           <button onClick={() => login(userCredentials)}>Iniciar Sesión</button>
       </div>
    )
}