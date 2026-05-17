import { io } from "socket.io-client";
//client library
//socket.io = server package
//socket.io-client = client package

// Create the socket ONCE, module-level, outside any component.
const socket = io("http://localhost:3000", {
    
  // autoConnect: false means it won't connect until we call socket.connect()
  // We control exactly when to connect (on Dashboard mount)
  autoConnect: false,

  //auth = object sent to the server during the websocket handshake
  // server reads it via socket.handshake.auth.token
  auth: {
    get token() {
      return localStorage.getItem("token");
    },
  },
});

export default socket;
