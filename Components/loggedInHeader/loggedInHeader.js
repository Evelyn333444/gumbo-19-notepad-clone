const loggedInHeader = () => {
  return (
    <header className="logged-in-header">
        <h1>Welcome Back!</h1>
        <nav>
            <ul>
                <li><a href="/">study sets</a></li>
                <li><a href="/logout">logout</a></li>
                <li><a href="/contact">contact</a></li>
            </ul>
        </nav>
    </header>
  )
}

export default loggedInHeader    