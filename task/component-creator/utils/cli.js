'use strict';
const ChildProcess = require('child_process');
const exec = ChildProcess.exec;

const CLI = {
    currentProcess: null,
    execute(command, cwd) {
        this.currentProcess = exec(command, this.onExec.bind(this));
    },
    onExec(error, stdout, stderr) {
        if (error) {
            console.error(`exec error: ${error}`);
            return;
        }
        console.log(`stdout: ${stdout}`);
        console.log(`stderr: ${stderr}`);
        this.currentProcess.kill();
    }
}


module.exports = CLI;
