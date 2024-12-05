const axios = require("axios");
const ws = require("ws");


const createMessagingSocket = () => {
    return new ws('ws://localhost:3001/messages');
}


const getMessages = () => {
    return axios.get('http://localhost:3001/messages').then(res=>res.data);
}

const sendMessage = (message) => {
    return axios.post('http://localhost:3001/messages',message);
}

module.exports.createMessagingSocket = createMessagingSocket;
module.exports.getMessages = getMessages;
module.exports.sendMessage = sendMessage;
