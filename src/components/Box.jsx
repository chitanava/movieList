export default function Box({children}) {
    return (
        <section className='bg-base-300 min-h-0 border border-base-content/20 rounded-lg relative'>
            <div className='h-full overflow-auto'>
                {children}
            </div>
        </section>
    );
}