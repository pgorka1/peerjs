import Peer from "peerjs";

const subscribers = [];
let connection = null;
const peer = new Peer();

const subscribeToOpen = (cb) => {
    subscribers.push(cb);
};

const connectToPeer = (id) => {
    connection = peer.connect(id);
    connection.on('open', function () {
        console.log('connection open, sending message')
        connection.send('hi!');
    });
};

peer.on('connection', function(conn) {
    conn.on('data', function(data){
        // Will print 'hi!'
        console.log(data);
    });
});

peer.on('open', function (id) {
    subscribers.forEach(subscriber => subscriber(id));
    if (connection) {
        connection.on('data', function (data) {
            console.log(data);
        });
    }
});

export {peer, subscribeToOpen, connectToPeer}
