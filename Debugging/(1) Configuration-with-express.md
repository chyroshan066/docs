Click the "Run and Debug Icon" located in the side navbar of the VS-Code Editor just above the extension icon.
<br> After clicking that click "create a launch.json file". Then select the type of language/framework you are using. In this case, select "Node.js". This will create "lauch.json" file. Configure your "launch.json" as;

```
{
    "version": "0.2.0",
    "configurations": [
        {
            "type": "node",
            "request": "launch",
            "name": "Debug Main (index.ts)",
            "runtimeExecutable": "tsx",
            "args": [
                "src/index.ts"
            ],
            "skipFiles": [
                "<node_internals>/**"
            ],
            "console": "integratedTerminal",
            "internalConsoleOptions": "neverOpen",
            "env": {
                "TS_NODE_PROJECT": "${workspaceFolder}/tsconfig.json"
            }
        }
    ]
}
```

The "args" option/key allows you choose which file/folder you want to debug. Choosing "index.ts" file, debugs the whole source code.
