export default function Link({ href, children, className = "" }) {
    return (
        <a className={"hover:bg-gray-300 rounded-xs p-3 " + className} href={href}>
            {children}
        </a>
    );
}   