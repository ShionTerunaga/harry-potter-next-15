export type hpType = {
    id: string
    name: string
    alternate_names: string[]
    species: string
    gender: "male" | "female"
    house: string
    dateOfBirth: "31-07-1980"
    yearOfBirth: number
    wizard: boolean
    ancestry: string
    eyeColour: string
    hairColour: string
    wand: {
        wood: string
        core: string
        length: number
    }
    patronus: string
    hogwartsStudent: boolean
    hogwartsStaff: boolean
    actor: string
    alternate_actors: string[]
    alive: boolean
    image: string
}
