/**
Check if a project is using [Yarn](https://yarnpkg.com).

Searches for a `yarn.lock` file in the provided directory and, if not found, walks up parent directories until the filesystem root.

@param cwd - The directory to check. Default: `process.cwd()`.
@returns Whether Yarn is used (a `yarn.lock` exists in `cwd` or any parent directory).
*/
export default function (cwd?: string): boolean;
