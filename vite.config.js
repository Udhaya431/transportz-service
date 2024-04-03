// import { defineConfig } from 'vite'

// export default defineConfig({
//     base:"/transport-service/"
// })
import { defineConfig } from 'vite';
import { resolve } from "path";

export default defineConfig({
    base: "./",
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                login: resolve(__dirname, 'login.html'),
            },
        },
    },
});

