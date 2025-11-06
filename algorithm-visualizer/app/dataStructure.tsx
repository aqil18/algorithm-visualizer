
export default function DataStructure({ array }: { array: number[] }) {    
    return (
        <div>
            {array.map((value) => (
                <div className="p-2 m-2 bg-blue-500 text-white rounded">
                    {value}
                </div>
            ))}
        </div>
    )
}