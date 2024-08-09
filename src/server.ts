import * as net from 'net';

const HOST = 'localhost';
const PORT = 5000;

const server = net.createServer((client) => {
    console.log('Conexão aceita do cliente.');

    client.on('data', (data) => {
        console.log(`Mensagem: ${data.toString()}`);
        client.write('Mensagem recebida!');
    });

    client.on('end', () => {
        console.log('Conexão encerrada.');
    });
});

server.listen(PORT, HOST, () => {
    console.log(`Servidor rodando em ${HOST}:${PORT}`);
});
