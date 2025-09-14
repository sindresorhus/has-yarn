/**
Check if a project is using [Yarn](https://yarnpkg.com).

It checks for a `yarn.lock` file in the given directory or any of its parent directories (useful for Yarn workspaces).

@param cwd - The directory to check. Default: `process.cwd()`.
@returns Whether Yarn is used (a `yarn.lock` exists in `cwd` or any parent directory).
*/
export default function (cwd?: string): boolean;
