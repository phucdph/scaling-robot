import { defineConfig } from 'rollup';

import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import { terser } from "rollup-plugin-terser";
import peerDepsExternal from 'rollup-plugin-peer-deps-external';


export default defineConfig([
  {
    input: [
      "src/index.ts",
      "src/hooks/index.ts",
      "src/services/index.ts",
      "src/configs/index.ts"
    ],
    output: [
      {
        dir: 'dist',
        format: 'esm',
        preserveModules: true,
        preserveModulesRoot: 'src',
        sourcemap: true,
      },
    ],
    plugins: [
      peerDepsExternal(),
      resolve(),
      commonjs(),
      typescript({
        tsconfig: "./tsconfig.json", declaration: true,
        declarationDir: 'dist',
      }),
      terser(),
    ],
    external: ["react", "react-dom", "axios"]
  },
]);
