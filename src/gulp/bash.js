var exec = require('child_process').exec;

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
