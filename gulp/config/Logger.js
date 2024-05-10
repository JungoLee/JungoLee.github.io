import plumber from "gulp-plumber"; // 오류 처리 중
import notify from "gulp-notify"; // 메시지(힌트)
import chalk from "chalk";

class Logger {
  handleError(taskName) {
    return plumber({
      errorHandler: notify.onError({
        title: taskName,
        message: "Error: <%= error.message %>",
      }),
    });
  }

  warning(message) {
    console.log(chalk.bold.white.bgGreenBright(message));
  }

  error(message, errors = []) {
    console.log(chalk.bold.white.bgRed(message), errors);
  }
}

export const logger = new Logger();
