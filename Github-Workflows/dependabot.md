To get notifications of dependabot version updates, security updates and alerts regarding the dependency used in the project, we can create "dependabot.yml" file inside the ".github" folder and add the following code inside it for the "js/ts/next/react" project.

```
version: 2
updates:
  - package-ecosystem: "npm"
    directory: "/"  # Path to the "package.json" file from the main repo directory
    schedule:
      interval: "weekly"
    open-pull-requests-limit: 10
    
    # Groups multiple small updates into a single pull request
    groups:
      safe-updates:
        patterns:
          - "*"
        update-types:
          - "minor"
          - "patch"
    
    # Prevents Dependabot from creating PRs for major version updates
    ignore:
      - dependency-name: "react"
        update-types: ["version-update:semver-major"]
      - dependency-name: "react-dom"
        update-types: ["version-update:semver-major"]
      - dependency-name: "next"
        update-types: ["version-update:semver-major"]
      - dependency-name: "typescript"
        update-types: ["version-update:semver-major"]
```

This automatically create pull requests of the dependency updates and all we need to do is merge the pull request. Ensure that when you merge the pull request, it is either minor or patch updates. Merge major updates only when you are able to fix the major breakages in your project as major updates tend to break the project completely. After you merge the pull request, make sure to pull the changes in your workspace so that the github repo and your workspace folder are in sync.