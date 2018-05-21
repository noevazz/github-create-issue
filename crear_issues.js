
var createIssue = require( 'github-create-issue' );

var repo = "usuario_en_github/repo"; // no borrar la diagonal

var mis_issues = [
    {"titulo-issue": "MI ISSUE 1!!!!",
    "opcciones":{
        'token':  'EL MISMO TOKEN VA AQUI',
        'body':   'MI DESCRIPCCION!!!!!'
        //aqui se pueden agregar mas opcciones, opcciones validas: https://www.npmjs.com/package/github-create-issue
        }
    },

    {"titulo-issue": "MI ISSUE 2!!!!",
    "opcciones":{
        'token':  'EL MISMO TOKEN VA AQUI',
        'body':   'MI DESCRIPCCION!!!!!'
        }
    }
]

// Las siguentes lineas no necesitan ser modificadas:

for (var item in mis_issues){
    createIssue( repo, mis_issues[item]["titulo-issue"], mis_issues[item]["opcciones"], clbk );
}

function clbk( error, issue, info ) {
    if ( info ) {
        console.error( 'Limit: %d', info.limit );
        console.error( 'Remaining: %d', info.remaining );
        console.error( 'Reset: %s', (new Date( info.reset*1000 )).toISOString() );
    }
    console.log( JSON.stringify( issue ) );
}
