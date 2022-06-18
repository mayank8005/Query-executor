const QueryInput = () => {


    return (
        <div className="w-3/4 mt-12">
            <h2 className="mb-4 text-white font-semibold text-lg">Query</h2>
            <textarea className="w-full h-32 resize-none p-4 font-medium bg-sky-100 rounded-lg"></textarea>
            <div className="w-full flex justify-end mt-4">
                <button className="bg-sky-400 text-white py-2 px-8 rounded-lg">
                    Execute
                </button>
            </div>
        </div>
    )
}

export default QueryInput;