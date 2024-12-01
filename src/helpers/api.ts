import { Item } from "../types/Item.type";

const API_URL = "https://api.pokemontcg.io/v2/cards?q=set.id:base1 name:";

const createQuery = (query: string) => `${API_URL}${query}*`;

export const fetchPokemon = async (query: string) => {
    const url = createQuery(query);
    const response = await fetch(url);
    return await response.json();
};

interface Response {
    data: Item[];
}

export const mapPokemon = (response: Response) =>
    response.data.map(({ id, name }: Item) => ({
        id,
        name,
    }));
