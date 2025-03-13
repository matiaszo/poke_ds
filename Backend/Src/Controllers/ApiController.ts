import express, { Request, Response, Router } from "express";
import ApiService from "../Services/ApiService";

class ApiController {

    static async GetPokemon(req: Request, res: Response) : Promise<any> {
        const { id } = req.params
        try {
            let data = await ApiService.GetPokemon(+id)
            console.log(data)
            res.status(200).json({message: "Pokémon data gotten successfully!", pokemon: data})
        } catch (error) {
            console.log(`An error has occurred: ${error}`);
        }
    }

    static async GetAllPokemons(req: Request, res: Response): Promise<any>{
        try {
            let data = await ApiService.GetAllPokemons();
            console.log(data);
            res.status(200).json({message: "All pokemons got", pokemon: data})
        } catch (error) {
            console.log("Something happened getting all pokemons");
        }
    }

    static async UpdatePokemon(req: Request, res: Response): Promise<any>{
        const { id } = req.params
        const { captured } = req.params
        
        const isCaptured = captured === 'true';

        try {
            await ApiService.UpdatePokemon(+id, isCaptured);
        } catch (error) {
            console.log("Something went wrong updating the pokemon");
        }
    }

    static async DeletePokemon(req: Request, res: Response): Promise<any>{
        const {id} = req.params;
        try{
            await ApiService.DeletePokemon(+id);
            res.status(200).json({message: `Pokemon with id ${id} deleted succesfully!`});
        }catch (error){
            console.log("Something went wrong deleting a pokemon");
        }
    }
}

export default ApiController;