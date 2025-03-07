# React Component Library - Release Guide

This guide outlines the steps to release a new version of the React component library by tagging and pushing to GitHub and npm.

## Release Process

Follow these steps to release a new version:

1. **Update the version**: Open the `package.json` file and update the version field to the desired version number. Save the changes.

2. **Commit the changes**: Commit the updated `package.json` file using the following command:

    ```shell
    git add package.json
    git commit -m "Bump version to vX.X.X"
    ```

3. **Tag the release**: Create a new Git tag for the release using the following command:

    ```shell
    git tag -a vX.X.X -m "Release vX.X.X"
    ```

    Replace `X.X.X` with the actual version number.

4. **Push the changes**: Push the committed changes and the newly created tag to the GitHub repository:

    ```shell
    git push origin main
    git push origin vX.X.X
    ```

5. **Create a GitHub release**: Create a new release in GitHub with the new tag. This will trigger a GitHub action that will automatically publish the new version to npm.

6. **Verify the release**: Visit the GitHub repository and [npm package](https://www.npmjs.com/package/@wedevs/tail-react) page to verify that the new version has been successfully released.

## Conclusion

By following these steps, you can release a new version of tail-react by tagging and pushing to GitHub and npm.

For any issues or questions, please refer to the project's documentation or seek assistance from the project maintainers.
