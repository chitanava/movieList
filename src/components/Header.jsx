export default function Header({children}) {
    return (
        <header className='bg-base-300 py-6 mb-6'>
            <div className="container mx-auto grid grid-cols-[16rem_1fr_16rem] items-center">
                {children}
            </div>
        </header>
    );
}