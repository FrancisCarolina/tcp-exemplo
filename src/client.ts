import * as net from 'net';
import * as readline from 'readline';

const HOST = 'localhost';
const PORT = 5000;

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const client = new net.Socket();

client.connect(PORT, HOST, () => {
    rl.question('Digite sua mensagem: ', (message) => {
        client.write(message);
    });
});

client.on('data', (data) => {
    console.log(`Mensagem direto do servidor: ${data.toString()}`);
    client.destroy(); // Fecha a conexão depois de receber a resposta
});

client.on('close', () => {
    console.log('Conexão encerrada.');
});
