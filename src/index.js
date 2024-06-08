import chalk from "chalk";
import logSymbols from "log-symbols";

console.log(chalk.italic.bgRed.bold("Hello world!"));

console.log(logSymbols.success, chalk.green.italic("Success!"));