import inquirer from "inquirer";
import { processMove } from "./game.js";

const promptUser = () => {
  const question = [
    {
      type: "list",
      name: "direction",
      message: "Which direction would you like to travel: ",
      choices: ["Up", "Down", "Left", "Right"],
    },
  ];

  inquirer.prompt(question).then((answer) => {
    processMove(answer.direction);
  });
};

export { promptUser };
