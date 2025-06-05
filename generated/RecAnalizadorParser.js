// Generated from c:/Users/mallm/4to_analizador/RecAnalizador.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import RecAnalizadorListener from './RecAnalizadorListener.js';
import RecAnalizadorVisitor from './RecAnalizadorVisitor.js';

const serializedATN = [4,1,16,98,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,1,0,1,0,1,0,
1,1,1,1,1,1,1,1,1,1,5,1,33,8,1,10,1,12,1,36,9,1,1,2,1,2,1,3,1,3,1,3,1,3,
1,3,1,3,1,3,1,3,1,4,1,4,1,4,1,4,1,4,5,4,53,8,4,10,4,12,4,56,9,4,1,5,1,5,
1,5,1,5,1,5,1,5,1,5,3,5,65,8,5,1,6,1,6,4,6,69,8,6,11,6,12,6,70,1,7,1,7,1,
7,1,7,1,7,1,7,1,8,1,8,1,8,1,9,1,9,1,9,1,9,1,10,1,10,1,10,1,10,1,10,5,10,
91,8,10,10,10,12,10,94,9,10,1,11,1,11,1,11,0,3,2,8,20,12,0,2,4,6,8,10,12,
14,16,18,20,22,0,1,1,0,11,13,91,0,24,1,0,0,0,2,27,1,0,0,0,4,37,1,0,0,0,6,
39,1,0,0,0,8,47,1,0,0,0,10,64,1,0,0,0,12,68,1,0,0,0,14,72,1,0,0,0,16,78,
1,0,0,0,18,81,1,0,0,0,20,85,1,0,0,0,22,95,1,0,0,0,24,25,3,2,1,0,25,26,5,
0,0,1,26,1,1,0,0,0,27,28,6,1,-1,0,28,29,3,4,2,0,29,34,1,0,0,0,30,31,10,1,
0,0,31,33,3,4,2,0,32,30,1,0,0,0,33,36,1,0,0,0,34,32,1,0,0,0,34,35,1,0,0,
0,35,3,1,0,0,0,36,34,1,0,0,0,37,38,3,6,3,0,38,5,1,0,0,0,39,40,5,1,0,0,40,
41,5,14,0,0,41,42,5,11,0,0,42,43,5,15,0,0,43,44,5,2,0,0,44,45,3,8,4,0,45,
46,5,3,0,0,46,7,1,0,0,0,47,48,6,4,-1,0,48,49,3,10,5,0,49,54,1,0,0,0,50,51,
10,1,0,0,51,53,3,10,5,0,52,50,1,0,0,0,53,56,1,0,0,0,54,52,1,0,0,0,54,55,
1,0,0,0,55,9,1,0,0,0,56,54,1,0,0,0,57,58,5,4,0,0,58,59,5,12,0,0,59,60,5,
5,0,0,60,65,3,12,6,0,61,62,5,6,0,0,62,63,5,5,0,0,63,65,3,12,6,0,64,57,1,
0,0,0,64,61,1,0,0,0,65,11,1,0,0,0,66,69,3,14,7,0,67,69,3,16,8,0,68,66,1,
0,0,0,68,67,1,0,0,0,69,70,1,0,0,0,70,68,1,0,0,0,70,71,1,0,0,0,71,13,1,0,
0,0,72,73,5,7,0,0,73,74,5,14,0,0,74,75,3,18,9,0,75,76,5,15,0,0,76,77,5,8,
0,0,77,15,1,0,0,0,78,79,5,9,0,0,79,80,5,8,0,0,80,17,1,0,0,0,81,82,5,10,0,
0,82,83,3,20,10,0,83,84,5,10,0,0,84,19,1,0,0,0,85,86,6,10,-1,0,86,87,3,22,
11,0,87,92,1,0,0,0,88,89,10,1,0,0,89,91,3,22,11,0,90,88,1,0,0,0,91,94,1,
0,0,0,92,90,1,0,0,0,92,93,1,0,0,0,93,21,1,0,0,0,94,92,1,0,0,0,95,96,7,0,
0,0,96,23,1,0,0,0,6,34,54,64,68,70,92];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class RecAnalizadorParser extends antlr4.Parser {

    static grammarFileName = "RecAnalizador.g4";
    static literalNames = [ null, "'switch'", "'{'", "'}'", "'case'", "':'", 
                            "'default'", "'printf'", "';'", "'break'", "'\"'", 
                            null, null, null, "'('", "')'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, "ID", "INT", "SIMBOLO", "LPAREN", 
                             "RPAREN", "WS" ];
    static ruleNames = [ "programa", "instrucciones", "instruccion", "seleccion", 
                         "casos", "caso", "sentencia", "salida", "terminar", 
                         "cadena", "caracteres", "caracter" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = RecAnalizadorParser.ruleNames;
        this.literalNames = RecAnalizadorParser.literalNames;
        this.symbolicNames = RecAnalizadorParser.symbolicNames;
    }

    sempred(localctx, ruleIndex, predIndex) {
    	switch(ruleIndex) {
    	case 1:
    	    		return this.instrucciones_sempred(localctx, predIndex);
    	case 4:
    	    		return this.casos_sempred(localctx, predIndex);
    	case 10:
    	    		return this.caracteres_sempred(localctx, predIndex);
        default:
            throw "No predicate with index:" + ruleIndex;
       }
    }

    instrucciones_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 0:
    			return this.precpred(this._ctx, 1);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };

    casos_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 1:
    			return this.precpred(this._ctx, 1);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };

    caracteres_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 2:
    			return this.precpred(this._ctx, 1);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };




	programa() {
	    let localctx = new ProgramaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, RecAnalizadorParser.RULE_programa);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 24;
	        this.instrucciones(0);
	        this.state = 25;
	        this.match(RecAnalizadorParser.EOF);
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


	instrucciones(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new InstruccionesContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 2;
	    this.enterRecursionRule(localctx, 2, RecAnalizadorParser.RULE_instrucciones, _p);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 28;
	        this.instruccion();
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 34;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,0,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                localctx = new InstruccionesContext(this, _parentctx, _parentState);
	                this.pushNewRecursionContext(localctx, _startState, RecAnalizadorParser.RULE_instrucciones);
	                this.state = 30;
	                if (!( this.precpred(this._ctx, 1))) {
	                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
	                }
	                this.state = 31;
	                this.instruccion(); 
	            }
	            this.state = 36;
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



	instruccion() {
	    let localctx = new InstruccionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, RecAnalizadorParser.RULE_instruccion);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 37;
	        this.seleccion();
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



	seleccion() {
	    let localctx = new SeleccionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, RecAnalizadorParser.RULE_seleccion);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 39;
	        this.match(RecAnalizadorParser.T__0);
	        this.state = 40;
	        this.match(RecAnalizadorParser.LPAREN);
	        this.state = 41;
	        this.match(RecAnalizadorParser.ID);
	        this.state = 42;
	        this.match(RecAnalizadorParser.RPAREN);
	        this.state = 43;
	        this.match(RecAnalizadorParser.T__1);
	        this.state = 44;
	        this.casos(0);
	        this.state = 45;
	        this.match(RecAnalizadorParser.T__2);
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


	casos(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new CasosContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 8;
	    this.enterRecursionRule(localctx, 8, RecAnalizadorParser.RULE_casos, _p);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 48;
	        this.caso();
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 54;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,1,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                localctx = new CasosContext(this, _parentctx, _parentState);
	                this.pushNewRecursionContext(localctx, _startState, RecAnalizadorParser.RULE_casos);
	                this.state = 50;
	                if (!( this.precpred(this._ctx, 1))) {
	                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
	                }
	                this.state = 51;
	                this.caso(); 
	            }
	            this.state = 56;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,1,this._ctx);
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



	caso() {
	    let localctx = new CasoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, RecAnalizadorParser.RULE_caso);
	    try {
	        this.state = 64;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 4:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 57;
	            this.match(RecAnalizadorParser.T__3);
	            this.state = 58;
	            this.match(RecAnalizadorParser.INT);
	            this.state = 59;
	            this.match(RecAnalizadorParser.T__4);
	            this.state = 60;
	            this.sentencia();
	            break;
	        case 6:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 61;
	            this.match(RecAnalizadorParser.T__5);
	            this.state = 62;
	            this.match(RecAnalizadorParser.T__4);
	            this.state = 63;
	            this.sentencia();
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



	sentencia() {
	    let localctx = new SentenciaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, RecAnalizadorParser.RULE_sentencia);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 68; 
	        this._errHandler.sync(this);
	        var _alt = 1;
	        do {
	        	switch (_alt) {
	        	case 1:
	        		this.state = 68;
	        		this._errHandler.sync(this);
	        		switch(this._input.LA(1)) {
	        		case 7:
	        		    this.state = 66;
	        		    this.salida();
	        		    break;
	        		case 9:
	        		    this.state = 67;
	        		    this.terminar();
	        		    break;
	        		default:
	        		    throw new antlr4.error.NoViableAltException(this);
	        		}
	        		break;
	        	default:
	        		throw new antlr4.error.NoViableAltException(this);
	        	}
	        	this.state = 70; 
	        	this._errHandler.sync(this);
	        	_alt = this._interp.adaptivePredict(this._input,4, this._ctx);
	        } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
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



	salida() {
	    let localctx = new SalidaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, RecAnalizadorParser.RULE_salida);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 72;
	        this.match(RecAnalizadorParser.T__6);
	        this.state = 73;
	        this.match(RecAnalizadorParser.LPAREN);
	        this.state = 74;
	        this.cadena();
	        this.state = 75;
	        this.match(RecAnalizadorParser.RPAREN);
	        this.state = 76;
	        this.match(RecAnalizadorParser.T__7);
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



	terminar() {
	    let localctx = new TerminarContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, RecAnalizadorParser.RULE_terminar);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 78;
	        this.match(RecAnalizadorParser.T__8);
	        this.state = 79;
	        this.match(RecAnalizadorParser.T__7);
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



	cadena() {
	    let localctx = new CadenaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, RecAnalizadorParser.RULE_cadena);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 81;
	        this.match(RecAnalizadorParser.T__9);
	        this.state = 82;
	        this.caracteres(0);
	        this.state = 83;
	        this.match(RecAnalizadorParser.T__9);
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


	caracteres(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new CaracteresContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 20;
	    this.enterRecursionRule(localctx, 20, RecAnalizadorParser.RULE_caracteres, _p);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 86;
	        this.caracter();
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 92;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,5,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                localctx = new CaracteresContext(this, _parentctx, _parentState);
	                this.pushNewRecursionContext(localctx, _startState, RecAnalizadorParser.RULE_caracteres);
	                this.state = 88;
	                if (!( this.precpred(this._ctx, 1))) {
	                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
	                }
	                this.state = 89;
	                this.caracter(); 
	            }
	            this.state = 94;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,5,this._ctx);
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



	caracter() {
	    let localctx = new CaracterContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, RecAnalizadorParser.RULE_caracter);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 95;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 14336) !== 0))) {
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


}

RecAnalizadorParser.EOF = antlr4.Token.EOF;
RecAnalizadorParser.T__0 = 1;
RecAnalizadorParser.T__1 = 2;
RecAnalizadorParser.T__2 = 3;
RecAnalizadorParser.T__3 = 4;
RecAnalizadorParser.T__4 = 5;
RecAnalizadorParser.T__5 = 6;
RecAnalizadorParser.T__6 = 7;
RecAnalizadorParser.T__7 = 8;
RecAnalizadorParser.T__8 = 9;
RecAnalizadorParser.T__9 = 10;
RecAnalizadorParser.ID = 11;
RecAnalizadorParser.INT = 12;
RecAnalizadorParser.SIMBOLO = 13;
RecAnalizadorParser.LPAREN = 14;
RecAnalizadorParser.RPAREN = 15;
RecAnalizadorParser.WS = 16;

RecAnalizadorParser.RULE_programa = 0;
RecAnalizadorParser.RULE_instrucciones = 1;
RecAnalizadorParser.RULE_instruccion = 2;
RecAnalizadorParser.RULE_seleccion = 3;
RecAnalizadorParser.RULE_casos = 4;
RecAnalizadorParser.RULE_caso = 5;
RecAnalizadorParser.RULE_sentencia = 6;
RecAnalizadorParser.RULE_salida = 7;
RecAnalizadorParser.RULE_terminar = 8;
RecAnalizadorParser.RULE_cadena = 9;
RecAnalizadorParser.RULE_caracteres = 10;
RecAnalizadorParser.RULE_caracter = 11;

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
        this.ruleIndex = RecAnalizadorParser.RULE_programa;
    }

	instrucciones() {
	    return this.getTypedRuleContext(InstruccionesContext,0);
	};

	EOF() {
	    return this.getToken(RecAnalizadorParser.EOF, 0);
	};

	enterRule(listener) {
	    if(listener instanceof RecAnalizadorListener ) {
	        listener.enterPrograma(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RecAnalizadorListener ) {
	        listener.exitPrograma(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof RecAnalizadorVisitor ) {
	        return visitor.visitPrograma(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class InstruccionesContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RecAnalizadorParser.RULE_instrucciones;
    }

	instruccion() {
	    return this.getTypedRuleContext(InstruccionContext,0);
	};

	instrucciones() {
	    return this.getTypedRuleContext(InstruccionesContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof RecAnalizadorListener ) {
	        listener.enterInstrucciones(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RecAnalizadorListener ) {
	        listener.exitInstrucciones(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof RecAnalizadorVisitor ) {
	        return visitor.visitInstrucciones(this);
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
        this.ruleIndex = RecAnalizadorParser.RULE_instruccion;
    }

	seleccion() {
	    return this.getTypedRuleContext(SeleccionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof RecAnalizadorListener ) {
	        listener.enterInstruccion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RecAnalizadorListener ) {
	        listener.exitInstruccion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof RecAnalizadorVisitor ) {
	        return visitor.visitInstruccion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class SeleccionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RecAnalizadorParser.RULE_seleccion;
    }

	LPAREN() {
	    return this.getToken(RecAnalizadorParser.LPAREN, 0);
	};

	ID() {
	    return this.getToken(RecAnalizadorParser.ID, 0);
	};

	RPAREN() {
	    return this.getToken(RecAnalizadorParser.RPAREN, 0);
	};

	casos() {
	    return this.getTypedRuleContext(CasosContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof RecAnalizadorListener ) {
	        listener.enterSeleccion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RecAnalizadorListener ) {
	        listener.exitSeleccion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof RecAnalizadorVisitor ) {
	        return visitor.visitSeleccion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class CasosContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RecAnalizadorParser.RULE_casos;
    }

	caso() {
	    return this.getTypedRuleContext(CasoContext,0);
	};

	casos() {
	    return this.getTypedRuleContext(CasosContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof RecAnalizadorListener ) {
	        listener.enterCasos(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RecAnalizadorListener ) {
	        listener.exitCasos(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof RecAnalizadorVisitor ) {
	        return visitor.visitCasos(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class CasoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RecAnalizadorParser.RULE_caso;
    }

	INT() {
	    return this.getToken(RecAnalizadorParser.INT, 0);
	};

	sentencia() {
	    return this.getTypedRuleContext(SentenciaContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof RecAnalizadorListener ) {
	        listener.enterCaso(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RecAnalizadorListener ) {
	        listener.exitCaso(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof RecAnalizadorVisitor ) {
	        return visitor.visitCaso(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class SentenciaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RecAnalizadorParser.RULE_sentencia;
    }

	salida = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(SalidaContext);
	    } else {
	        return this.getTypedRuleContext(SalidaContext,i);
	    }
	};

	terminar = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(TerminarContext);
	    } else {
	        return this.getTypedRuleContext(TerminarContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof RecAnalizadorListener ) {
	        listener.enterSentencia(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RecAnalizadorListener ) {
	        listener.exitSentencia(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof RecAnalizadorVisitor ) {
	        return visitor.visitSentencia(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class SalidaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RecAnalizadorParser.RULE_salida;
    }

	LPAREN() {
	    return this.getToken(RecAnalizadorParser.LPAREN, 0);
	};

	cadena() {
	    return this.getTypedRuleContext(CadenaContext,0);
	};

	RPAREN() {
	    return this.getToken(RecAnalizadorParser.RPAREN, 0);
	};

	enterRule(listener) {
	    if(listener instanceof RecAnalizadorListener ) {
	        listener.enterSalida(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RecAnalizadorListener ) {
	        listener.exitSalida(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof RecAnalizadorVisitor ) {
	        return visitor.visitSalida(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class TerminarContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RecAnalizadorParser.RULE_terminar;
    }


	enterRule(listener) {
	    if(listener instanceof RecAnalizadorListener ) {
	        listener.enterTerminar(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RecAnalizadorListener ) {
	        listener.exitTerminar(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof RecAnalizadorVisitor ) {
	        return visitor.visitTerminar(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class CadenaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RecAnalizadorParser.RULE_cadena;
    }

	caracteres() {
	    return this.getTypedRuleContext(CaracteresContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof RecAnalizadorListener ) {
	        listener.enterCadena(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RecAnalizadorListener ) {
	        listener.exitCadena(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof RecAnalizadorVisitor ) {
	        return visitor.visitCadena(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class CaracteresContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RecAnalizadorParser.RULE_caracteres;
    }

	caracter() {
	    return this.getTypedRuleContext(CaracterContext,0);
	};

	caracteres() {
	    return this.getTypedRuleContext(CaracteresContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof RecAnalizadorListener ) {
	        listener.enterCaracteres(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RecAnalizadorListener ) {
	        listener.exitCaracteres(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof RecAnalizadorVisitor ) {
	        return visitor.visitCaracteres(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class CaracterContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RecAnalizadorParser.RULE_caracter;
    }

	ID() {
	    return this.getToken(RecAnalizadorParser.ID, 0);
	};

	INT() {
	    return this.getToken(RecAnalizadorParser.INT, 0);
	};

	SIMBOLO() {
	    return this.getToken(RecAnalizadorParser.SIMBOLO, 0);
	};

	enterRule(listener) {
	    if(listener instanceof RecAnalizadorListener ) {
	        listener.enterCaracter(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RecAnalizadorListener ) {
	        listener.exitCaracter(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof RecAnalizadorVisitor ) {
	        return visitor.visitCaracter(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




RecAnalizadorParser.ProgramaContext = ProgramaContext; 
RecAnalizadorParser.InstruccionesContext = InstruccionesContext; 
RecAnalizadorParser.InstruccionContext = InstruccionContext; 
RecAnalizadorParser.SeleccionContext = SeleccionContext; 
RecAnalizadorParser.CasosContext = CasosContext; 
RecAnalizadorParser.CasoContext = CasoContext; 
RecAnalizadorParser.SentenciaContext = SentenciaContext; 
RecAnalizadorParser.SalidaContext = SalidaContext; 
RecAnalizadorParser.TerminarContext = TerminarContext; 
RecAnalizadorParser.CadenaContext = CadenaContext; 
RecAnalizadorParser.CaracteresContext = CaracteresContext; 
RecAnalizadorParser.CaracterContext = CaracterContext; 
