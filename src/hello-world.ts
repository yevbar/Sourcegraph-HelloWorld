import * as sourcegraph from 'sourcegraph'

export function activate(ctx: sourcegraph.ExtensionContext): void {
    ctx.subscriptions.add(
        sourcegraph.languages.registerHoverProvider(['*'], {
            provideHover: () => {console.log("Hello world, this should work!");return { contents: { value: 'Hello world from WIP: My first extension! 🎉🎉🎉' } }}
        })
    )
}

// Sourcegraph extension documentation: https://docs.sourcegraph.com/extensions/authoring
