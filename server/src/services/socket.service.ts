var gIo: any = null;

function connectSockets(http: any, session: any) {
  gIo = require("socket.io")(http, {
    cors: {
      origin: "*",
      methods: ["GET", "POST", "PUT", "DELETE"],
    },
  });
  gIo.on("connection", (socket: any) => {
    socket.on("disconnect", () => {
      socket.to(socket.myRoom).emit("remove-all-pointers");
    });
    // Signing in a room / creating a new room
    socket.on("roomId", ({ roomId, myUserName }: any) => {
      if (socket.myRoom === roomId) return;
      if (socket.myRoom) {
        socket.leave(socket.myRoom);
      }
      socket.join(roomId);
      socket.myRoom = roomId;
      socket.to(socket.myRoom).emit("user-joined", myUserName);
    });

    socket.on("webApp", (webApp: any) => {
      socket.to(socket.myRoom).emit("webApp return", webApp);
    });
    socket.on("end", (user: any) => {
      socket.to(socket.myRoom).emit("user-left", user.name);
      socket.broadcast.to(socket.myRoom).emit("remove-pointer", user.id);
      socket.disconnect(0);
    }),
      socket.on("update-pointers", (data: any) => {
        socket.broadcast.to(socket.myRoom).emit("show-pointers", data);
      });
  });
}

function emitTo({ type, data, label }: any) {
  if (label) gIo.to("watching:" + label).emit(type, data);
  else gIo.emit(type, data);
}

async function emitToUser({ type, data, userId }: any) {
  const socket = await _getUserSocket(userId);
  if (socket) socket.emit(type, data);
  else {
    console.log("User socket not found");
    _printSockets();
  }
}

// Send to all sockets BUT not the current socket
async function broadcast({ type, data, room = null, userId }: any) {
  const excludedSocket = await _getUserSocket(userId);
  if (!excludedSocket) {
    _printSockets();
    return;
  }
  if (room) {
    excludedSocket.broadcast.to(room).emit(type, data);
  } else {
    excludedSocket.broadcast.emit(type, data);
  }
}

async function _getUserSocket(userId: string) {
  const sockets = await _getAllSockets();
  const socket = sockets.find((s: any) => s.userId == userId);
  return socket;
}
async function _getAllSockets() {
  // return all Socket instances
  const sockets = await gIo.fetchSockets();
  return sockets;
}

async function _printSockets() {
  const sockets = await _getAllSockets();
  console.log(`Sockets: (count: ${sockets.length}):`);
  sockets.forEach(_printSocket);
}
function _printSocket(socket: any) {
  console.log(`Socket - socketId: ${socket.id} userId: ${socket.userId}`);
}

module.exports = {
  connectSockets,
  emitTo,
  emitToUser,
  broadcast,
};
