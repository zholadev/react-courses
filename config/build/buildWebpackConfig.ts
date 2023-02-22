import {BuildOptions} from "./types/config";
import webpack from "webpack";
import {buildPlugins} from "./buildPlugins";
import {builderLoader} from "./builderLoader";
import {builderResolve} from "./builderResolve";

export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
    const {mode, paths} = options

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
        resolve: builderResolve()
    }
}