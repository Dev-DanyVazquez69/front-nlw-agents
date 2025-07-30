//import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";


interface GetRoomsApiResponse {
    id: string;
    name: string;
}

const CreateRooms = () => {

    // const { data, isLoading } = useQuery({
    //     queryKey: ['rooms'],
    //     queryFn: async () => {
    //         const response = await fetch('http://localhost:3333/rooms');
    //         const result: GetRoomsApiResponse = await response.json();
    //     }
    // })

    const data: GetRoomsApiResponse [] = [
        { id: '1', name: 'Room 1' },
        { id: '2', name: 'Room 2' },
        { id: '3', name: 'Room 3' },
        { id: '4', name: 'Room 4' },
        { id: '5', name: 'Room 5' }
    ]

    return (
        <>
            {/* {isLoading && <div>Loading...</div>} */}
            {data && data.map(room => (
                <Link key={room.id} to={`/room?id=${room.id}`}>
                    <div className="p-4 bg-gray-800 rounded-lg mb-4">
                        <h2 className="text-xl font-bold">{room.name}</h2>
                    </div>
                </Link>
            ))}
        </>
    )
}

export default CreateRooms;