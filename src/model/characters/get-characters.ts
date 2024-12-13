import { config } from "@/shared/config"
import { hpType } from "../character.type"

export const getCharacters = async (cache?: RequestCache) => {
    const res = await fetch(config.characters, { cache: cache })

    if (!res.ok) {
        const err = new Error("リクエストエラー")

        throw err
    }

    const characters = (await res.json()) as hpType[]

    return characters
}
