let io;

function initSocket(server) {
  io = require('socket.io')(server);

  io.on('connection', (socket) => {
    console.log('New client connected', socket.id);

    // Listen for when a user joins a channel (room)
    socket.on('joinChannel', ({ channelId, userId }) => {
      socket.join(channelId); // Join the channel room
      console.log(`User ${userId} joined channel: ${channelId}`);
    });

    // Listen for when a user sends a message in the channel
    socket.on('sendMessage', ({ message,channelId }) => {
      // Broadcast the message to all users in the channel
      io.to(channelId).emit('newMessage', {
        message,
      });
    });

    // Listen for when a user leaves a channel (room)
    socket.on('leaveChannel', ({ channelId, userId }) => {
      socket.leave(channelId); // Leave the channel room
      console.log(`User ${userId} left channel: ${channelId}`);
    });

    // Handle disconnection
    socket.on('disconnect', () => {
      console.log('Client disconnected', socket.id);
    });
  });
}

// Function to retrieve the Socket.io instance
function getSocket() {
  if (!io) {
    throw new Error('Socket.io not initialized');
  }
  return io;
}

module.exports = { initSocket, getSocket };
