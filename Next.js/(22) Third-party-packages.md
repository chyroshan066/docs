Third party packages can't be directly used inside server-component. We need to first convert the server-component into client-component and then only we can use third-party packages. The other option would be to create a component using third-party packages and importing that component in our server-component file.

In next.js, while using "Image" instead of "img" tag, if the source of the image comes from the web, then we must define width and height of the image because next.js can't detect dimensions of the image directly for the remote URL.
