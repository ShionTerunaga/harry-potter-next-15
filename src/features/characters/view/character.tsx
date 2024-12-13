import { getCharacters, hpType } from "@/model"

export const CharacterComponents = async () => {
    try {
        const characterList: hpType[] = await getCharacters()

        console.log(characterList)

        return <main>Enter</main>
    } catch {
        return <main>Enter</main>
    }
}
