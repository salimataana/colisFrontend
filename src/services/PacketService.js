import axios from 'axios'

const PACKET_API_BASE_URL = 'http://localhost:8080/rest/v1/packet'

class PacketService{
    getPackets(){
        return axios.get(PACKET_API_BASE_URL);
    }
}
export default new PacketService()