if (-1 || 0) console.log( 'first' ); // this one will be executed;  true
if (-1 && 0) console.log( 'second' ); // false
if (null || -1 && 1) console.log( 'third' ); // this one will be executed too; true && true = true
