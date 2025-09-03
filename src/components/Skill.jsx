
export default function Skill({ name, children }) {
    return (
        <div className="flex flex-col w-full h-full justify-center items-center gap-1  bg-white/20  px-4 py-2">
            {children}
            {name}
        </div>
    );
}