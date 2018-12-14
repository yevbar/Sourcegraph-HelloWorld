import * as sourcegraph from 'sourcegraph'

export function activate(ctx: sourcegraph.ExtensionContext): void {
    console.log("We have now activated");
    ctx.subscriptions.add(
        sourcegraph.languages.registerHoverProvider(['*'], {
            provideHover: () => {
                console.log("Hello from the hover function");
                return { contents: { value: "Hello world from my first extension!"}}
            }
        })
    )
}

// Sourcegraph extension documentation: https://docs.sourcegraph.com/extensions/authoring
