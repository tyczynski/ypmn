const fs = require('fs');
const { spawnSync } = require('child_process');

const YARN_LOCKFILE = 'yarn.lock';

function useYarn() {
    const files = fs.readdirSync(process.cwd());
    const hasLockFile = files.includes(YARN_LOCKFILE);

    if (!hasLockFile) {
        return false;
    }

    // Check if `yarn` is installed
    const cmd = spawnSync('yarn', ['--version']);

    // `cmd.stdout` is null if yarn is not installed. Otherwise, it returns a buffer with a version
    return cmd.stdout !== null;

}

module.exports = function ypmn(argv) {
    const tool = useYarn() ? 'yarn' : 'npm';

    spawnSync(tool, argv, {
        stdio: 'inherit',
    });
}