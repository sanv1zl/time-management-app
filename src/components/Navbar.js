export default function Navbar() {
    return <nav className="nav">
        <a href="/" className="site-title">Home</a>
        <ul>
            <li>
                <a href="/tasks">Tasks</a>
                <a href="day-schedule">Day schedule</a>
                <a href="calendar">Calendar</a>
            </li>
        </ul>
    </nav>
}