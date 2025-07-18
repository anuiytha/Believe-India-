function Welcome({ user }) {
    return (
        <div>
            <h2>Welcome, {user?.user_name || 'Guest'}!</h2>
        </div>
    );
}

export default Welcome;
