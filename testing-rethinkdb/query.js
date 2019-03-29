let r = require('rethinkdb');

console.log(process.argv);

// r.connect({ host: 'localhost', port: 28015 }, function (err, conn) {
//     if (err) throw err;
//     console.log('Connect Success!');

//     r.table('authors').run(conn, function (err, cursor) {
//         if (err) throw err;
//         cursor.toArray(function (err, result) {
//             if (err) throw err;
//             console.log(JSON.stringify(result, null, 2));
//         });
//     });
// });