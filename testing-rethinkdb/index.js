let r = require('rethinkdb');

const nUpdates = process.argv[2];

r.connect({ host: 'localhost', port: 28015 }, function (err, conn) {
    if (err) throw err;
    console.log('Connection Success!');

    r.dbCreate('testing').run(conn, function (err, result) {
        if (err) throw err;
        console.log('Created Database "testing"');

        conn.use('testing');

        r.db('testing').tableCreate('temp').run(conn, function (err, result) {
            if (err) throw err;
            console.log('Created temp table for testing');

            r.table('temp').changes().run(conn, function (err, cursor) {
                if (err) throw err;

                let beginTime = new Date().getTime();
                let deltaT = 0;

                console.log('BEGIN TIMESTAMP:', beginTime);

                cursor.each(function (err, row) {
                    let currentTime = new Date().getTime();
                    deltaT += currentTime - beginTime;
                    beginTime = currentTime;

                    if (err) throw err;

                    console.log('ID:', row.new_val.id, '. Timestamp:', currentTime, '. Ping (ms):', deltaT);
                });
            });

            for (let i = 1; i <= nUpdates; i++) {
                r.table('temp').insert({
                    id: i
                }).run(conn, function (err, result) {
                    if (err) throw err;
                });
            }
        });
    });
});

