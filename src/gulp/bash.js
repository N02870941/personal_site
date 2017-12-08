var exec = require('child_process').exec;

/**
 * Run a bash command
 *
 * @param command The bash command string to run
 */
function runCommand(command) {
  exec(command, function (err, stdout, stderr) {

    if (stdout)
      console.log(stdout);

    if (stderr)
      console.log(stderr);
  });
}

module.exports = {
  runCommand : runCommand
}
