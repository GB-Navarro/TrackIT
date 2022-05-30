import axios from "axios";

export default function deleteHabit(id, config) {
    axios.delete(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}`, config)
}