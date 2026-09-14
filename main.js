const { Client } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');
const { MessageMedia } = require('whatsapp-web.js');

// Create a new client instance
const client = new Client();

// When the client is ready, run this code (only once)
client.once('ready', () => {
    console.log('Client is ready!');
});

// When the client received QR-Code
client.on('qr', (qr) => {
    console.log('QR RECEIVED', qr);
    qrcode.generate(qr, {small: true});
});

client.on('message', async (msg) => {
	if (msg.body === 'Mim de figurinhas AX123') { // Pack 1
        const media = MessageMedia.fromFilePath('./imagens/Pack 1/assexual_bee.jpg');
        await client.sendMessage(msg.from, media, {
            sendMediaAsSticker: true,
            stickerName: "Assexbee",
            stickerAuthor: "Fellas"
        });
        const media2 = MessageMedia.fromFilePath('./imagens/Pack 1/809662839304428233.jpg');
        await client.sendMessage(msg.from, media2, {
            sendMediaAsSticker: true,
            stickerName: "Ryuunosuke Akutagawa",
            stickerAuthor: "Fellas"
        });
        const media3 = MessageMedia.fromFilePath('./imagens/Pack 1/809662839304401525.png');
        await client.sendMessage(msg.from, media3, {
            sendMediaAsSticker: true,
            stickerName: "Colors Cats",
            stickerAuthor: "Fellas"
        });
        const media4 = MessageMedia.fromFilePath('./imagens/Pack 1/809662839304450638.jpg');
        await client.sendMessage(msg.from, media4, {
            sendMediaAsSticker: true,
            stickerName: "Omori Sunny",
            stickerAuthor: "Fellas"
        });
        const media5 = MessageMedia.fromFilePath('./imagens/Pack 1/809662839306349901.jpg');
        await client.sendMessage(msg.from, media5, {
            sendMediaAsSticker: true,
            stickerName: "Wooloo",
            stickerAuthor: "Fellas"
        });
        const media6 = MessageMedia.fromFilePath('./imagens/Pack 1/809662839306351565.jpg');
        await client.sendMessage(msg.from, media6, {
            sendMediaAsSticker: true,
            stickerName: "BNA Ogami",
            stickerAuthor: "Fellas"
        });
    } else if (msg.body === 'Mim de figurinhas GH427') { // Pack 2
        const media = MessageMedia.fromFilePath('./imagens/Pack 2/809662839306351566.jpg');
        await client.sendMessage(msg.from, media, {
            sendMediaAsSticker: true,
            stickerName: "Prismo",
            stickerAuthor: "Fellas"
        });
        const media2 = MessageMedia.fromFilePath('./imagens/Pack 2/809662839306459517.jpg');
        await client.sendMessage(msg.from, media2, {
            sendMediaAsSticker: true,
            stickerName: "HATSUNEMIKU AAAAAAAAAAAAAAA",
            stickerAuthor: "Fellas"
        });
        const media3 = MessageMedia.fromFilePath('./imagens/Pack 2/809662839306466582.jpg');
        await client.sendMessage(msg.from, media3, {
            sendMediaAsSticker: true,
            stickerName: "Sol do SoulEater",
            stickerAuthor: "Fellas"
        });
        const media4 = MessageMedia.fromFilePath('./imagens/Pack 2/809662839306478821.jpg');
        await client.sendMessage(msg.from, media4, {
            sendMediaAsSticker: true,
            stickerName: "Formação da quebrada 444 nois na fita",
            stickerAuthor: "Fellas"
        });
        const media5 = MessageMedia.fromFilePath('./imagens/Pack 2/809662839306482101.jpg');
        await client.sendMessage(msg.from, media5, {
            sendMediaAsSticker: true,
            stickerName: "Foi só ir pro Brasil e ficou depresivo",
            stickerAuthor: "Fellas"
        });
        const media6 = MessageMedia.fromFilePath('./imagens/Pack 2/809662839306491973.jpg');
        await client.sendMessage(msg.from, media6, {
            sendMediaAsSticker: true,
            stickerName: "Ela dança eu QUAAAA",
            stickerAuthor: "Fellas"
        });
    } else if (msg.body === 'Mim de figurinhas BL011') { // Pack 3
        const media = MessageMedia.fromFilePath('./imagens/Pack 3/809662839304378273.jpg');
        await client.sendMessage(msg.from, media, {
            sendMediaAsSticker: true,
            stickerName: "Anime superestimado e personagem mais ainda",
            stickerAuthor: "Fellas"
        });
        const media2 = MessageMedia.fromFilePath('./imagens/Pack 3/809662839304378355.png');
        await client.sendMessage(msg.from, media2, {
            sendMediaAsSticker: true,
            stickerName: "GATO ARROMBADO SO TIRA 20",
            stickerAuthor: "Fellas"
        });
        const media3 = MessageMedia.fromFilePath('./imagens/Pack 3/809662839304398980.png');
        await client.sendMessage(msg.from, media3, {
            sendMediaAsSticker: true,
            stickerName: "A guilda inteira sao mimicos fingindo ser magos",
            stickerAuthor: "Fellas"
        });
        const media4 = MessageMedia.fromFilePath('./imagens/Pack 3/809662839304410442.png');
        await client.sendMessage(msg.from, media4, {
            sendMediaAsSticker: true,
            stickerName: "Ja me ocorreu... eu nunca gritei tao alto",
            stickerAuthor: "Fellas"
        });
        const media5 = MessageMedia.fromFilePath('./imagens/Pack 3/809662839304410443.jpg');
        await client.sendMessage(msg.from, media5, {
            sendMediaAsSticker: true,
            stickerName: "Dazai me come pfv",
            stickerAuthor: "Fellas"
        }); 
        const media6 = MessageMedia.fromFilePath('./imagens/Pack 3/809662839304470941.jpg');
        await client.sendMessage(msg.from, media6, {
            sendMediaAsSticker: true,
            stickerName: "Filmaço da porra namoral chorei litros",
            stickerAuthor: "Fellas"
        });
    }
});

// Start your client
client.initialize();