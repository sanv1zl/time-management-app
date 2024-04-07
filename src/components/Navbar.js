import { Children } from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

export default function Navbar() {
    return (<nav className="nav">
        <Link to="/" className="site-title">Home</Link>
        <ul>
            <CustomLink to="/tasks">Tasks</CustomLink>
            <CustomLink to="/day-schedule">Day schedule</CustomLink>
            <CustomLink to="/calendar">Calendar</CustomLink>
        </ul>
    </nav>)
}

function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({ path: resolvedPath.pathname, end: true });

    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>{children}</Link>
        </li>
    )
}