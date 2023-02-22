import {BuildOptions} from "./types/config";
import webpack from "webpack";
import {buildPlugins} from "./buildPlugins";
import {builderLoader} from "./builderLoader";
import {builderResolve} from "./builderResolve";
import {buildWebpackServer} from "./buildWebpackServer";

export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
    const {mode, paths, isDev} = options

    return {
        mode: mode,
        entry: paths.entry,
        output: {
            filename: "[name].[contenthash].js",
            path: paths.build,
            clean: true,
        },
        plugins: buildPlugins(options),
        module: {
            rules: builderLoader()
        },
        resolve: builderResolve(),
        devServer: isDev ? buildWebpackServer(options) : undefined,
        devtool: isDev ? 'inline-source-map' : undefined
    }
}