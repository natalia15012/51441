grammar analizador;

programa: declaraciones;

declaraciones
    : declaracion
    | declaraciones declaracion
    ;

declaracion
    : tipo identificador '(' parametros? ')' '{' NEWLINE? cuerpo '}' NEWLINE?
    ;

tipo
    : 'int'
    | 'float'
    | 'char'
    ;

identificador
    : ID
    ;

parametros
    : parametro (',' parametro)*
    ;

parametro
    : tipo identificador
    ;

cuerpo
    : (instruccion NEWLINE?)+
    ;

instruccion
    : retorno
    ;

retorno
    : 'return' expresion ';'
    ;

expresion
    : expresion '+' termino
    | expresion '-' termino
    | termino
    ;

termino
    : termino '*' factor
    | termino '/' factor
    | factor
    ;

factor
    : '(' expresion ')'
    | INT
    | identificador
    ;

MUL : '*';
DIV : '/';
ADD : '+';
SUB : '-';
EQ: '=';
ID : [a-zA-Z]+;
INT : [0-9]+;
LPAREN : '(';
RPAREN : ')';
NEWLINE:'\r'? '\n';
WS: [ \t]+ -> skip;