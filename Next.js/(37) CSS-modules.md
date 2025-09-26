For isolation of CSS styles, it is better to use CSS Modules. For that we need to create a file with the extension "module.css" and define our styling there. There isn't any need to wrap it inside "@layer" and you need to define the media query within the same file itself. It is better to name the classes in camelCase when defining in CSS modules.

Then we need to import the file where we want to use and use it as a variable.
```
import styles from "./About.module.css";

export const About = memo(() => (
     <figure className={styles.aboutBanner}>
     </figure>
));

About.displayName = "About";
```