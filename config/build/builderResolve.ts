import webpack from "webpack";

export function builderResolve(): webpack.ResolveOptions {
    return {
        extensions: ['.tsx', '.ts', '.js']
    }
}