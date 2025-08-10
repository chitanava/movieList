export default function PageContent({children}) {
    return (
        <main className='container mx-auto grid grid-cols-2 gap-4 min-h-0 mb-6'>
            {children}
        </main>
    );
}