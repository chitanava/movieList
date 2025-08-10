export default function Layout({children}) {
    return (
        <div className="grotesk-regular grid grid-rows-[auto_auto_1fr] h-screen">
            {children}
        </div>
    );
}