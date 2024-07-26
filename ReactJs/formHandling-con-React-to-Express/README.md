# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

` How to connect form React to Express(Backend)`

```
 1. Sbse pehle npm create vite@latest krna he,
 2. project ka name,
 3. Select: react,
 4. Select : javaScript
 5. npm i [current folder me]
 6. npm i react-hook-form: isse form ko banane ki sari requrments ko ful fiel kiya jatah he.
```

very imp function

````
const onSubmit = async (data) => {
   await delay(2);
   let r = await fetch("http://localhost:3000/", {
     method: "POST",
     headers: {
       "Content-Type": "application/json",
     },
     body: JSON.stringify(data),
   });
   let res = await r.text();
   console.log("This is data:", data, res);}
   ```
````

```
 7. npm i express@latest / express@5
 8. npm i cors :
```

```
 import cors from "cors";
  and apply this outside of function
  app.use(cors())
```

```
9.  npm i body-parser :
```

```
import bodyParser from 'body-parser'
 apply this outside of function
app.use(bodyParser.json())
```

```
10. nodemon .\backend\server.js
isse terminal par submit kiya huaa deta dikhega..


```

```
This is Very IMP
```
