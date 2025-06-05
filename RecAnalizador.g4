grammar RecAnalizador;

// Reglas del parser
programa: instrucciones EOF;

instrucciones
    : instruccion
    | instrucciones instruccion
    ;

instruccion
    : seleccion
    ;

seleccion
    : 'switch' LPAREN ID RPAREN '{' casos '}'
    ;

casos
    : caso
    | casos caso
    ;

caso
    : 'case' INT ':' sentencia
    | 'default' ':' sentencia
    ;

sentencia
    : (salida | terminar)+
    ;

salida
    : 'printf' LPAREN cadena RPAREN ';'
    ;

terminar
    : 'break' ';'
    ;

cadena
    : '"' caracteres '"'
    ;

caracteres
    : caracter
    | caracteres caracter
    ;

caracter
    : ID
    | INT
    | SIMBOLO
    ;


// Lexemas
ID  : [a-zA-Z]+;
INT : [0-9]+;
SIMBOLO: [.,!?:;];
LPAREN : '(';
RPAREN : ')';
WS: [ \t\r\n]+ -> skip;