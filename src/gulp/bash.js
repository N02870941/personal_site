var exec = require('child_process').exec;

/**
 * Run a bash command
 *
 * @param command The bash command string to run
 */
function runCommand(command) {
  exec(command, function (err, stdout, stderr) {

    // Print stdout of the executed command
    if (stdout) {
      console.log(stdout);
    }

    // Log any errors
    if (stderr) {
      console.log(stderr);
    }

  });
}

module.exports = {
  runCommand : runCommand
}
