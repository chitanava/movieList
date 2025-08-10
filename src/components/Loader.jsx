export default function Loader() {
    return (
        <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
            <div className='flex items-center justify-center'>
                <span className="loading loading-spinner loading-xl text-primary"></span>
            </div>
        </div>
    );
}