import axios from 'axios';

const serverIP = '192.168.1.104'; // Substitua pelo endereço IP do seu servidor

const api = axios.create({
  baseURL: `http://${serverIP}:3001`, // Substitua pela porta correta do seu servidor
});

export default api;