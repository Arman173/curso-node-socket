const socketController = ( socket ) => {
    // console.log('Client connected :)', socket.id );

    socket.on('disconnect', () => {
        // console.log('Client disconnected :(', socket.id );
    });

    socket.on('send-message', (payload, callback) => {
        
        console.log( payload );
        callback( { id: 123346789, date: new Date().getTime() } );

        socket.broadcast.emit( 'send-message', payload );
    })
}

module.exports = {
    socketController
}