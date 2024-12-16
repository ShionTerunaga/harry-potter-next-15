import { CharactersView } from "@/components/view/characters-view"
import type { Meta, StoryObj } from "@storybook/react"

const meta: Meta<typeof CharactersView> = {
    title: "components/characters-view",
    component: CharactersView
}

export default meta

type Story = StoryObj<typeof CharactersView>

export const sample: Story = {}
