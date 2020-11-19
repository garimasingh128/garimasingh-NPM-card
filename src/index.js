#!/usr/bin/env node

"use strict";

const boxen = require("boxen");
const chalk = require("chalk");
const inquirer = require("inquirer");
const clear = require("clear");
const open = require("open");

clear();

const prompt = inquirer.createPromptModule();

const questions = [
  {
    type: "list",
    name: "action",
    message: "What you want to do?",
    choices: [
      {
        name: `Send me an ${chalk.green.bold("email")}?`,
        value: () => {
          open("mailto:garingh128@gmail.com");
          console.log("\nDone, see you soon.\n");
        }
      },
      {
        name: "Just quit.",
        value: () => {
          console.log("Ok, bye.\n");
        }
      }
    ]
  }
];

const data = {
  name: chalk.bold.green("        Garima Singh"),
  handle: chalk.red("@garimasingh128"),
  work: `${chalk.blue("BTech, Computer Science Junior at")} ${chalk
    .hex("#2b82b2")
    .bold("National Institute of Technology, Patna")}`,
  medium: chalk.whiteBright("https://medium.com/") + chalk.whiteBright("@garingh128"),
  twitter: chalk.cyan("https://twitter.com/") + chalk.cyan("garingh128"),
  npm: chalk.red("https://npmjs.com/") + chalk.red("~garimasingh128"),
  github: chalk.green("https://github.com/") + chalk.green("garimasingh128"),
  linkedin: chalk.blue("https://linkedin.com/in/") + chalk.blue("garimasinghnitp"),
  web: chalk.cyan("http://garimasingh.me"),
  blog: chalk.yellow("https://garimasingh.netlify.app"),
  npx: chalk.red("npx") + " " + chalk.white("garimasingh"),

  labelWork: chalk.white.bold("       Work:"),
  labelMedium: chalk.white.bold("     Medium:"),
  labelTwitter: chalk.white.bold("    Twitter:"),
  labelnpm: chalk.white.bold("        npm:"),
  labelGitHub: chalk.white.bold("     GitHub:"),
  labelLinkedIn: chalk.white.bold("   LinkedIn:"),
  labelWeb: chalk.white.bold("        Web:"),
  labelBlog: chalk.white.bold("        Blog:"),
  labelCard: chalk.white.bold("       Card:")
};

const me = boxen(
  [
    `${data.name} / ${data.handle}`,
    ``,
    `${data.labelWork}  ${data.work}`,
    `${data.labelBlog}  ${data.blog}`,
    `${data.labelTwitter}  ${data.twitter}`,
    `${data.labelMedium}  ${data.medium}`,
    `${data.labelnpm}  ${data.npm}`,
    `${data.labelGitHub}  ${data.github}`,
    `${data.labelLinkedIn}  ${data.linkedin}`,
    `${data.labelWeb}  ${data.web}`,
    ``,
    `${data.labelCard}  ${data.npx}`,
    ``,
    `${chalk.italic(
      "I'm a curious and enthusiastic student most of the time."
    )}`,
    `${chalk.italic("The rest of the time, I write code that others can read.")}`
  ].join("\n"),
  {
    margin: 1,
    float: 'center',
    padding: 1,
    borderStyle: "single",
    borderColor: "green"
  }
);

console.log(me);
const tip = [
  `Tip: Try ${chalk.cyanBright.bold(
    "cmd/ctrl + click"
  )} on the links above`,
  '',
].join("\n");
console.log(tip);


prompt(questions).then(answer => answer.action());
