import { APIURL } from "../Lib/Api";
import axios from "axios";

class ApiService {
    static async GetPokemon(id?: number) : Promise<any> {
        try {
            const response = await axios.get(`${APIURL}/pokemon/${id}`)
            return response.data
        } catch (error) {
            console.log(`Ocorreu o seguinte erro ao pegar os dados do pokemon: ${error}`)
        }
    }

    static async GetAllPokemons() : Promise<any> {

        try {
            const response = await axios.get(`${APIURL}/pokemon`)
            return response.data
        } catch (error) {
            console.log(`Ocorreu um erro ao pegar os dados: ${error}`)
        }
    }

    static async DeletePokemon(id?: number): Promise<any>{
        try{
            await axios.delete(`${APIURL}/pokemon`)
        }catch(error){
            console.log("A problem ocurred deleting a pokemon")
        }
    }

    static async UpdatePokemon(id?: number, captured?: boolean): Promise<any>{
        try {
            const response = await axios.patch(`${APIURL}/pokemon/${id}`,{ captured })
            return response.data
        } catch (error) {
            console.log("Something happened updating the pokemon");
        }
    }
}

export default ApiService;