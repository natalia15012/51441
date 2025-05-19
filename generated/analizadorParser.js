// Generated from c:/Users/mallm/51441/analizador.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import analizadorListener from './analizadorListener.js';
import analizadorVisitor from './analizadorVisitor.js';

const serializedATN = [4,1,19,120,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
1,0,1,0,1,1,1,1,1,1,1,1,1,1,5,1,34,8,1,10,1,12,1,37,9,1,1,2,1,2,1,2,1,2,
3,2,43,8,2,1,2,1,2,1,2,3,2,48,8,2,1,2,1,2,1,2,3,2,53,8,2,1,3,1,3,1,4,1,4,
1,5,1,5,1,5,5,5,62,8,5,10,5,12,5,65,9,5,1,6,1,6,1,6,1,7,1,7,3,7,72,8,7,4,
7,74,8,7,11,7,12,7,75,1,8,1,8,1,9,1,9,1,9,1,9,1,10,1,10,1,10,1,10,1,10,1,
10,1,10,1,10,1,10,5,10,93,8,10,10,10,12,10,96,9,10,1,11,1,11,1,11,1,11,1,
11,1,11,1,11,1,11,1,11,5,11,107,8,11,10,11,12,11,110,9,11,1,12,1,12,1,12,
1,12,1,12,1,12,3,12,118,8,12,1,12,0,3,2,20,22,13,0,2,4,6,8,10,12,14,16,18,
20,22,24,0,1,1,0,3,5,119,0,26,1,0,0,0,2,28,1,0,0,0,4,38,1,0,0,0,6,54,1,0,
0,0,8,56,1,0,0,0,10,58,1,0,0,0,12,66,1,0,0,0,14,73,1,0,0,0,16,77,1,0,0,0,
18,79,1,0,0,0,20,83,1,0,0,0,22,97,1,0,0,0,24,117,1,0,0,0,26,27,3,2,1,0,27,
1,1,0,0,0,28,29,6,1,-1,0,29,30,3,4,2,0,30,35,1,0,0,0,31,32,10,1,0,0,32,34,
3,4,2,0,33,31,1,0,0,0,34,37,1,0,0,0,35,33,1,0,0,0,35,36,1,0,0,0,36,3,1,0,
0,0,37,35,1,0,0,0,38,39,3,6,3,0,39,40,3,8,4,0,40,42,5,16,0,0,41,43,3,10,
5,0,42,41,1,0,0,0,42,43,1,0,0,0,43,44,1,0,0,0,44,45,5,17,0,0,45,47,5,1,0,
0,46,48,5,18,0,0,47,46,1,0,0,0,47,48,1,0,0,0,48,49,1,0,0,0,49,50,3,14,7,
0,50,52,5,2,0,0,51,53,5,18,0,0,52,51,1,0,0,0,52,53,1,0,0,0,53,5,1,0,0,0,
54,55,7,0,0,0,55,7,1,0,0,0,56,57,5,14,0,0,57,9,1,0,0,0,58,63,3,12,6,0,59,
60,5,6,0,0,60,62,3,12,6,0,61,59,1,0,0,0,62,65,1,0,0,0,63,61,1,0,0,0,63,64,
1,0,0,0,64,11,1,0,0,0,65,63,1,0,0,0,66,67,3,6,3,0,67,68,3,8,4,0,68,13,1,
0,0,0,69,71,3,16,8,0,70,72,5,18,0,0,71,70,1,0,0,0,71,72,1,0,0,0,72,74,1,
0,0,0,73,69,1,0,0,0,74,75,1,0,0,0,75,73,1,0,0,0,75,76,1,0,0,0,76,15,1,0,
0,0,77,78,3,18,9,0,78,17,1,0,0,0,79,80,5,7,0,0,80,81,3,20,10,0,81,82,5,8,
0,0,82,19,1,0,0,0,83,84,6,10,-1,0,84,85,3,22,11,0,85,94,1,0,0,0,86,87,10,
3,0,0,87,88,5,11,0,0,88,93,3,22,11,0,89,90,10,2,0,0,90,91,5,12,0,0,91,93,
3,22,11,0,92,86,1,0,0,0,92,89,1,0,0,0,93,96,1,0,0,0,94,92,1,0,0,0,94,95,
1,0,0,0,95,21,1,0,0,0,96,94,1,0,0,0,97,98,6,11,-1,0,98,99,3,24,12,0,99,108,
1,0,0,0,100,101,10,3,0,0,101,102,5,9,0,0,102,107,3,24,12,0,103,104,10,2,
0,0,104,105,5,10,0,0,105,107,3,24,12,0,106,100,1,0,0,0,106,103,1,0,0,0,107,
110,1,0,0,0,108,106,1,0,0,0,108,109,1,0,0,0,109,23,1,0,0,0,110,108,1,0,0,
0,111,112,5,16,0,0,112,113,3,20,10,0,113,114,5,17,0,0,114,118,1,0,0,0,115,
118,5,15,0,0,116,118,3,8,4,0,117,111,1,0,0,0,117,115,1,0,0,0,117,116,1,0,
0,0,118,25,1,0,0,0,12,35,42,47,52,63,71,75,92,94,106,108,117];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class analizadorParser extends antlr4.Parser {

    static grammarFileName = "analizador.g4";
    static literalNames = [ null, "'{'", "'}'", "'int'", "'float'", "'char'", 
                            "','", "'return'", "';'", "'*'", "'/'", "'+'", 
                            "'-'", "'='", null, null, "'('", "')'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, "MUL", "DIV", "ADD", "SUB", "EQ", "ID", 
                             "INT", "LPAREN", "RPAREN", "NEWLINE", "WS" ];
    static ruleNames = [ "programa", "declaraciones", "declaracion", "tipo", 
                         "identificador", "parametros", "parametro", "cuerpo", 
                         "instruccion", "retorno", "expresion", "termino", 
                         "factor" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = analizadorParser.ruleNames;
        this.literalNames = analizadorParser.literalNames;
        this.symbolicNames = analizadorParser.symbolicNames;
    }

    sempred(localctx, ruleIndex, predIndex) {
    	switch(ruleIndex) {
    	case 1:
    	    		return this.declaraciones_sempred(localctx, predIndex);
    	case 10:
    	    		return this.expresion_sempred(localctx, predIndex);
    	case 11:
    	    		return this.termino_sempred(localctx, predIndex);
        default:
            throw "No predicate with index:" + ruleIndex;
       }
    }

    declaraciones_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 0:
    			return this.precpred(this._ctx, 1);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };

    expresion_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 1:
    			return this.precpred(this._ctx, 3);
    		case 2:
    			return this.precpred(this._ctx, 2);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };

    termino_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 3:
    			return this.precpred(this._ctx, 3);
    		case 4:
    			return this.precpred(this._ctx, 2);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };




	programa() {
	    let localctx = new ProgramaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, analizadorParser.RULE_programa);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 26;
	        this.declaraciones(0);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


	declaraciones(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new DeclaracionesContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 2;
	    this.enterRecursionRule(localctx, 2, analizadorParser.RULE_declaraciones, _p);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 29;
	        this.declaracion();
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 35;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,0,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                localctx = new DeclaracionesContext(this, _parentctx, _parentState);
	                this.pushNewRecursionContext(localctx, _startState, analizadorParser.RULE_declaraciones);
	                this.state = 31;
	                if (!( this.precpred(this._ctx, 1))) {
	                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
	                }
	                this.state = 32;
	                this.declaracion(); 
	            }
	            this.state = 37;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,0,this._ctx);
	        }

	    } catch( error) {
	        if(error instanceof antlr4.error.RecognitionException) {
		        localctx.exception = error;
		        this._errHandler.reportError(this, error);
		        this._errHandler.recover(this, error);
		    } else {
		    	throw error;
		    }
	    } finally {
	        this.unrollRecursionContexts(_parentctx)
	    }
	    return localctx;
	}



	declaracion() {
	    let localctx = new DeclaracionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, analizadorParser.RULE_declaracion);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 38;
	        this.tipo();
	        this.state = 39;
	        this.identificador();
	        this.state = 40;
	        this.match(analizadorParser.LPAREN);
	        this.state = 42;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) === 0 && ((1 << _la) & 56) !== 0)) {
	            this.state = 41;
	            this.parametros();
	        }

	        this.state = 44;
	        this.match(analizadorParser.RPAREN);
	        this.state = 45;
	        this.match(analizadorParser.T__0);
	        this.state = 47;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===18) {
	            this.state = 46;
	            this.match(analizadorParser.NEWLINE);
	        }

	        this.state = 49;
	        this.cuerpo();
	        this.state = 50;
	        this.match(analizadorParser.T__1);
	        this.state = 52;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,3,this._ctx);
	        if(la_===1) {
	            this.state = 51;
	            this.match(analizadorParser.NEWLINE);

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	tipo() {
	    let localctx = new TipoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, analizadorParser.RULE_tipo);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 54;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 56) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	identificador() {
	    let localctx = new IdentificadorContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, analizadorParser.RULE_identificador);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 56;
	        this.match(analizadorParser.ID);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	parametros() {
	    let localctx = new ParametrosContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, analizadorParser.RULE_parametros);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 58;
	        this.parametro();
	        this.state = 63;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===6) {
	            this.state = 59;
	            this.match(analizadorParser.T__5);
	            this.state = 60;
	            this.parametro();
	            this.state = 65;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	parametro() {
	    let localctx = new ParametroContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, analizadorParser.RULE_parametro);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 66;
	        this.tipo();
	        this.state = 67;
	        this.identificador();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	cuerpo() {
	    let localctx = new CuerpoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, analizadorParser.RULE_cuerpo);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 73; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 69;
	            this.instruccion();
	            this.state = 71;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===18) {
	                this.state = 70;
	                this.match(analizadorParser.NEWLINE);
	            }

	            this.state = 75; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===7);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	instruccion() {
	    let localctx = new InstruccionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, analizadorParser.RULE_instruccion);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 77;
	        this.retorno();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	retorno() {
	    let localctx = new RetornoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, analizadorParser.RULE_retorno);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 79;
	        this.match(analizadorParser.T__6);
	        this.state = 80;
	        this.expresion(0);
	        this.state = 81;
	        this.match(analizadorParser.T__7);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


	expresion(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new ExpresionContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 20;
	    this.enterRecursionRule(localctx, 20, analizadorParser.RULE_expresion, _p);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 84;
	        this.termino(0);
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 94;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,8,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 92;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,7,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new ExpresionContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, analizadorParser.RULE_expresion);
	                    this.state = 86;
	                    if (!( this.precpred(this._ctx, 3))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
	                    }
	                    this.state = 87;
	                    this.match(analizadorParser.ADD);
	                    this.state = 88;
	                    this.termino(0);
	                    break;

	                case 2:
	                    localctx = new ExpresionContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, analizadorParser.RULE_expresion);
	                    this.state = 89;
	                    if (!( this.precpred(this._ctx, 2))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
	                    }
	                    this.state = 90;
	                    this.match(analizadorParser.SUB);
	                    this.state = 91;
	                    this.termino(0);
	                    break;

	                } 
	            }
	            this.state = 96;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,8,this._ctx);
	        }

	    } catch( error) {
	        if(error instanceof antlr4.error.RecognitionException) {
		        localctx.exception = error;
		        this._errHandler.reportError(this, error);
		        this._errHandler.recover(this, error);
		    } else {
		    	throw error;
		    }
	    } finally {
	        this.unrollRecursionContexts(_parentctx)
	    }
	    return localctx;
	}


	termino(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new TerminoContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 22;
	    this.enterRecursionRule(localctx, 22, analizadorParser.RULE_termino, _p);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 98;
	        this.factor();
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 108;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,10,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 106;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,9,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new TerminoContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, analizadorParser.RULE_termino);
	                    this.state = 100;
	                    if (!( this.precpred(this._ctx, 3))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
	                    }
	                    this.state = 101;
	                    this.match(analizadorParser.MUL);
	                    this.state = 102;
	                    this.factor();
	                    break;

	                case 2:
	                    localctx = new TerminoContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, analizadorParser.RULE_termino);
	                    this.state = 103;
	                    if (!( this.precpred(this._ctx, 2))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
	                    }
	                    this.state = 104;
	                    this.match(analizadorParser.DIV);
	                    this.state = 105;
	                    this.factor();
	                    break;

	                } 
	            }
	            this.state = 110;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,10,this._ctx);
	        }

	    } catch( error) {
	        if(error instanceof antlr4.error.RecognitionException) {
		        localctx.exception = error;
		        this._errHandler.reportError(this, error);
		        this._errHandler.recover(this, error);
		    } else {
		    	throw error;
		    }
	    } finally {
	        this.unrollRecursionContexts(_parentctx)
	    }
	    return localctx;
	}



	factor() {
	    let localctx = new FactorContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, analizadorParser.RULE_factor);
	    try {
	        this.state = 117;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 16:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 111;
	            this.match(analizadorParser.LPAREN);
	            this.state = 112;
	            this.expresion(0);
	            this.state = 113;
	            this.match(analizadorParser.RPAREN);
	            break;
	        case 15:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 115;
	            this.match(analizadorParser.INT);
	            break;
	        case 14:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 116;
	            this.identificador();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

analizadorParser.EOF = antlr4.Token.EOF;
analizadorParser.T__0 = 1;
analizadorParser.T__1 = 2;
analizadorParser.T__2 = 3;
analizadorParser.T__3 = 4;
analizadorParser.T__4 = 5;
analizadorParser.T__5 = 6;
analizadorParser.T__6 = 7;
analizadorParser.T__7 = 8;
analizadorParser.MUL = 9;
analizadorParser.DIV = 10;
analizadorParser.ADD = 11;
analizadorParser.SUB = 12;
analizadorParser.EQ = 13;
analizadorParser.ID = 14;
analizadorParser.INT = 15;
analizadorParser.LPAREN = 16;
analizadorParser.RPAREN = 17;
analizadorParser.NEWLINE = 18;
analizadorParser.WS = 19;

analizadorParser.RULE_programa = 0;
analizadorParser.RULE_declaraciones = 1;
analizadorParser.RULE_declaracion = 2;
analizadorParser.RULE_tipo = 3;
analizadorParser.RULE_identificador = 4;
analizadorParser.RULE_parametros = 5;
analizadorParser.RULE_parametro = 6;
analizadorParser.RULE_cuerpo = 7;
analizadorParser.RULE_instruccion = 8;
analizadorParser.RULE_retorno = 9;
analizadorParser.RULE_expresion = 10;
analizadorParser.RULE_termino = 11;
analizadorParser.RULE_factor = 12;

class ProgramaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = analizadorParser.RULE_programa;
    }

	declaraciones() {
	    return this.getTypedRuleContext(DeclaracionesContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof analizadorListener ) {
	        listener.enterPrograma(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof analizadorListener ) {
	        listener.exitPrograma(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof analizadorVisitor ) {
	        return visitor.visitPrograma(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class DeclaracionesContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = analizadorParser.RULE_declaraciones;
    }

	declaracion() {
	    return this.getTypedRuleContext(DeclaracionContext,0);
	};

	declaraciones() {
	    return this.getTypedRuleContext(DeclaracionesContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof analizadorListener ) {
	        listener.enterDeclaraciones(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof analizadorListener ) {
	        listener.exitDeclaraciones(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof analizadorVisitor ) {
	        return visitor.visitDeclaraciones(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class DeclaracionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = analizadorParser.RULE_declaracion;
    }

	tipo() {
	    return this.getTypedRuleContext(TipoContext,0);
	};

	identificador() {
	    return this.getTypedRuleContext(IdentificadorContext,0);
	};

	LPAREN() {
	    return this.getToken(analizadorParser.LPAREN, 0);
	};

	RPAREN() {
	    return this.getToken(analizadorParser.RPAREN, 0);
	};

	cuerpo() {
	    return this.getTypedRuleContext(CuerpoContext,0);
	};

	parametros() {
	    return this.getTypedRuleContext(ParametrosContext,0);
	};

	NEWLINE = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(analizadorParser.NEWLINE);
	    } else {
	        return this.getToken(analizadorParser.NEWLINE, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof analizadorListener ) {
	        listener.enterDeclaracion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof analizadorListener ) {
	        listener.exitDeclaracion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof analizadorVisitor ) {
	        return visitor.visitDeclaracion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class TipoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = analizadorParser.RULE_tipo;
    }


	enterRule(listener) {
	    if(listener instanceof analizadorListener ) {
	        listener.enterTipo(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof analizadorListener ) {
	        listener.exitTipo(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof analizadorVisitor ) {
	        return visitor.visitTipo(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class IdentificadorContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = analizadorParser.RULE_identificador;
    }

	ID() {
	    return this.getToken(analizadorParser.ID, 0);
	};

	enterRule(listener) {
	    if(listener instanceof analizadorListener ) {
	        listener.enterIdentificador(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof analizadorListener ) {
	        listener.exitIdentificador(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof analizadorVisitor ) {
	        return visitor.visitIdentificador(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ParametrosContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = analizadorParser.RULE_parametros;
    }

	parametro = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ParametroContext);
	    } else {
	        return this.getTypedRuleContext(ParametroContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof analizadorListener ) {
	        listener.enterParametros(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof analizadorListener ) {
	        listener.exitParametros(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof analizadorVisitor ) {
	        return visitor.visitParametros(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ParametroContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = analizadorParser.RULE_parametro;
    }

	tipo() {
	    return this.getTypedRuleContext(TipoContext,0);
	};

	identificador() {
	    return this.getTypedRuleContext(IdentificadorContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof analizadorListener ) {
	        listener.enterParametro(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof analizadorListener ) {
	        listener.exitParametro(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof analizadorVisitor ) {
	        return visitor.visitParametro(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class CuerpoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = analizadorParser.RULE_cuerpo;
    }

	instruccion = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(InstruccionContext);
	    } else {
	        return this.getTypedRuleContext(InstruccionContext,i);
	    }
	};

	NEWLINE = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(analizadorParser.NEWLINE);
	    } else {
	        return this.getToken(analizadorParser.NEWLINE, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof analizadorListener ) {
	        listener.enterCuerpo(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof analizadorListener ) {
	        listener.exitCuerpo(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof analizadorVisitor ) {
	        return visitor.visitCuerpo(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class InstruccionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = analizadorParser.RULE_instruccion;
    }

	retorno() {
	    return this.getTypedRuleContext(RetornoContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof analizadorListener ) {
	        listener.enterInstruccion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof analizadorListener ) {
	        listener.exitInstruccion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof analizadorVisitor ) {
	        return visitor.visitInstruccion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class RetornoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = analizadorParser.RULE_retorno;
    }

	expresion() {
	    return this.getTypedRuleContext(ExpresionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof analizadorListener ) {
	        listener.enterRetorno(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof analizadorListener ) {
	        listener.exitRetorno(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof analizadorVisitor ) {
	        return visitor.visitRetorno(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ExpresionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = analizadorParser.RULE_expresion;
    }

	termino() {
	    return this.getTypedRuleContext(TerminoContext,0);
	};

	expresion() {
	    return this.getTypedRuleContext(ExpresionContext,0);
	};

	ADD() {
	    return this.getToken(analizadorParser.ADD, 0);
	};

	SUB() {
	    return this.getToken(analizadorParser.SUB, 0);
	};

	enterRule(listener) {
	    if(listener instanceof analizadorListener ) {
	        listener.enterExpresion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof analizadorListener ) {
	        listener.exitExpresion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof analizadorVisitor ) {
	        return visitor.visitExpresion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class TerminoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = analizadorParser.RULE_termino;
    }

	factor() {
	    return this.getTypedRuleContext(FactorContext,0);
	};

	termino() {
	    return this.getTypedRuleContext(TerminoContext,0);
	};

	MUL() {
	    return this.getToken(analizadorParser.MUL, 0);
	};

	DIV() {
	    return this.getToken(analizadorParser.DIV, 0);
	};

	enterRule(listener) {
	    if(listener instanceof analizadorListener ) {
	        listener.enterTermino(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof analizadorListener ) {
	        listener.exitTermino(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof analizadorVisitor ) {
	        return visitor.visitTermino(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class FactorContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = analizadorParser.RULE_factor;
    }

	LPAREN() {
	    return this.getToken(analizadorParser.LPAREN, 0);
	};

	expresion() {
	    return this.getTypedRuleContext(ExpresionContext,0);
	};

	RPAREN() {
	    return this.getToken(analizadorParser.RPAREN, 0);
	};

	INT() {
	    return this.getToken(analizadorParser.INT, 0);
	};

	identificador() {
	    return this.getTypedRuleContext(IdentificadorContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof analizadorListener ) {
	        listener.enterFactor(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof analizadorListener ) {
	        listener.exitFactor(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof analizadorVisitor ) {
	        return visitor.visitFactor(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




analizadorParser.ProgramaContext = ProgramaContext; 
analizadorParser.DeclaracionesContext = DeclaracionesContext; 
analizadorParser.DeclaracionContext = DeclaracionContext; 
analizadorParser.TipoContext = TipoContext; 
analizadorParser.IdentificadorContext = IdentificadorContext; 
analizadorParser.ParametrosContext = ParametrosContext; 
analizadorParser.ParametroContext = ParametroContext; 
analizadorParser.CuerpoContext = CuerpoContext; 
analizadorParser.InstruccionContext = InstruccionContext; 
analizadorParser.RetornoContext = RetornoContext; 
analizadorParser.ExpresionContext = ExpresionContext; 
analizadorParser.TerminoContext = TerminoContext; 
analizadorParser.FactorContext = FactorContext; 
