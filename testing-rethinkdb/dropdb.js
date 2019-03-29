let r = require('rethinkdb');

const nUpdates = process.argv[2];

r.connect({ host: 'localhost', port: 28015 }, function (err, conn) {
    if (err) throw err;
    console.log('Connection Success!');

    r.dbDrop('testing').run(conn, function (err, result) {
        if (err) throw err;
        console.log('Dropped');

        conn.close(function (err) {
            if (err) throw err;
        });
    });
});

