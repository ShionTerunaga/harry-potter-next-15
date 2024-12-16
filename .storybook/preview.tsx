import type { Preview } from "@storybook/react"
import React from "react"

const preview: Preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i
            }
        },
        layout: "fullscreen"
    },
    decorators: (Story) => {
        return (
            <div
                style={{
                    backgroundColor: "black",
                    color: "white",
                    height: "100vh"
                }}
            >
                <Story />
            </div>
        )
    }
}

export default preview
