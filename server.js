const { fork } = require('child_process');
const http = require('http');

const child = fork('node_modules/next/dist/bin/next', ['dev', '--webpack', '--port', '3000'], {
  cwd: __dirname,
  stdio: 'inherit',
  env: { ...process.env }
});

child.on('exit', (code) => {
  console.log('Next.js exited with code:', code);
  process.exit(code || 1);
});

process.on('SIGINT', () => { child.kill(); process.exit(0); });
process.on('SIGTERM', () => { child.kill(); process.exit(0); });
