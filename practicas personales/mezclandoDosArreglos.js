const users = [ { name: 'Georg', email: 'georg@academlo.com', },
    { name: 'Andrea', email: 'andrea@gmail.com'} ];

const attendance = [ { email: 'georg@academlo.com', attendance: true },
    { email: 'andrea@gmail.com', attendance: false }];

function mergeData(users, attendance) {
    var nuevoArreglo = [users,attendance];
    return console.log(nuevoArreglo);
}

mergeData (users, attendance);