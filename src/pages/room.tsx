import { useParams } from "react-router-dom";

type RoomParams = {
    roomId: string;
}

const Room = () => {

    const params = useParams<RoomParams>();
    const roomId = params.roomId;

    if (!roomId) {
        return <div>Error: Room ID is missing</div>;
    }
    return (
        <div>room</div>
    )
}
export default Room;