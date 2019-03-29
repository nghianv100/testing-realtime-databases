let r = require('rethinkdb');

r.connect({ host: 'localhost', port: 28015 }, function (err, conn) {
    if (err) throw err;
    console.log('Connection success!');

    r.table('authors').insert([
        {
            name: 'William Adama', tv_show: 'Battlestar Galatica',
            posts: [
                { title: 'Decommissioning speech', content: 'The Cylon War is long over ...' },
                { title: 'We are at war', content: 'Moments ago, this ship received word ...' },
                { title: 'The new Earth', content: 'The discoveries of the past few days ...' }
            ]
        }
    ]).run(conn, function (err, result) {
        if (err) throw err;
        console.log(JSON.stringify(result, null, 2));
    });
});

