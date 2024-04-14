const readline = require('readline');
const crypto = require('crypto');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function hashPassword(password) {
    const hash = crypto.createHash('sha256');
    hash.update(password);
    return hash.digest('hex');
}

rl.question('Enter password: ', (password) => {
    const hashedPassword = hashPassword(password);
    console.log('Pass hesh:', hashedPassword);
    rl.close();
});
