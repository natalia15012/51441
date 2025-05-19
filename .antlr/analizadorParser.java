// Generated from c:/Users/mallm/51441/analizador.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.misc.*;
import org.antlr.v4.runtime.tree.*;
import java.util.List;
import java.util.Iterator;
import java.util.ArrayList;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast", "CheckReturnValue"})
public class analizadorParser extends Parser {
	static { RuntimeMetaData.checkVersion("4.13.1", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		T__0=1, T__1=2, T__2=3, T__3=4, T__4=5, T__5=6, T__6=7, T__7=8, T__8=9, 
		T__9=10, T__10=11, T__11=12, T__12=13, T__13=14, NUMERO=15, IDENTIFICADOR=16, 
		WS=17;
	public static final int
		RULE_programa = 0, RULE_declaraciones = 1, RULE_declaracion = 2, RULE_tipo = 3, 
		RULE_identificador = 4, RULE_parametros = 5, RULE_parametro = 6, RULE_cuerpo = 7, 
		RULE_instruccion = 8, RULE_retorno = 9, RULE_expresion = 10, RULE_termino = 11, 
		RULE_factor = 12;
	private static String[] makeRuleNames() {
		return new String[] {
			"programa", "declaraciones", "declaracion", "tipo", "identificador", 
			"parametros", "parametro", "cuerpo", "instruccion", "retorno", "expresion", 
			"termino", "factor"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'('", "')'", "'{'", "'}'", "'int'", "'float'", "'char'", "','", 
			"'return'", "';'", "'+'", "'-'", "'*'", "'/'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, null, null, null, null, null, null, null, null, null, null, null, 
			null, null, null, "NUMERO", "IDENTIFICADOR", "WS"
		};
	}
	private static final String[] _SYMBOLIC_NAMES = makeSymbolicNames();
	public static final Vocabulary VOCABULARY = new VocabularyImpl(_LITERAL_NAMES, _SYMBOLIC_NAMES);

	/**
	 * @deprecated Use {@link #VOCABULARY} instead.
	 */
	@Deprecated
	public static final String[] tokenNames;
	static {
		tokenNames = new String[_SYMBOLIC_NAMES.length];
		for (int i = 0; i < tokenNames.length; i++) {
			tokenNames[i] = VOCABULARY.getLiteralName(i);
			if (tokenNames[i] == null) {
				tokenNames[i] = VOCABULARY.getSymbolicName(i);
			}

			if (tokenNames[i] == null) {
				tokenNames[i] = "<INVALID>";
			}
		}
	}

	@Override
	@Deprecated
	public String[] getTokenNames() {
		return tokenNames;
	}

	@Override

	public Vocabulary getVocabulary() {
		return VOCABULARY;
	}

	@Override
	public String getGrammarFileName() { return "analizador.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public ATN getATN() { return _ATN; }

	public analizadorParser(TokenStream input) {
		super(input);
		_interp = new ParserATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ProgramaContext extends ParserRuleContext {
		public DeclaracionesContext declaraciones() {
			return getRuleContext(DeclaracionesContext.class,0);
		}
		public ProgramaContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_programa; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof analizadorListener ) ((analizadorListener)listener).enterPrograma(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof analizadorListener ) ((analizadorListener)listener).exitPrograma(this);
		}
	}

	public final ProgramaContext programa() throws RecognitionException {
		ProgramaContext _localctx = new ProgramaContext(_ctx, getState());
		enterRule(_localctx, 0, RULE_programa);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(26);
			declaraciones(0);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class DeclaracionesContext extends ParserRuleContext {
		public DeclaracionContext declaracion() {
			return getRuleContext(DeclaracionContext.class,0);
		}
		public DeclaracionesContext declaraciones() {
			return getRuleContext(DeclaracionesContext.class,0);
		}
		public DeclaracionesContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_declaraciones; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof analizadorListener ) ((analizadorListener)listener).enterDeclaraciones(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof analizadorListener ) ((analizadorListener)listener).exitDeclaraciones(this);
		}
	}

	public final DeclaracionesContext declaraciones() throws RecognitionException {
		return declaraciones(0);
	}

	private DeclaracionesContext declaraciones(int _p) throws RecognitionException {
		ParserRuleContext _parentctx = _ctx;
		int _parentState = getState();
		DeclaracionesContext _localctx = new DeclaracionesContext(_ctx, _parentState);
		DeclaracionesContext _prevctx = _localctx;
		int _startState = 2;
		enterRecursionRule(_localctx, 2, RULE_declaraciones, _p);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			{
			setState(29);
			declaracion();
			}
			_ctx.stop = _input.LT(-1);
			setState(35);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,0,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					{
					_localctx = new DeclaracionesContext(_parentctx, _parentState);
					pushNewRecursionContext(_localctx, _startState, RULE_declaraciones);
					setState(31);
					if (!(precpred(_ctx, 1))) throw new FailedPredicateException(this, "precpred(_ctx, 1)");
					setState(32);
					declaracion();
					}
					} 
				}
				setState(37);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,0,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class DeclaracionContext extends ParserRuleContext {
		public TipoContext tipo() {
			return getRuleContext(TipoContext.class,0);
		}
		public IdentificadorContext identificador() {
			return getRuleContext(IdentificadorContext.class,0);
		}
		public CuerpoContext cuerpo() {
			return getRuleContext(CuerpoContext.class,0);
		}
		public ParametrosContext parametros() {
			return getRuleContext(ParametrosContext.class,0);
		}
		public DeclaracionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_declaracion; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof analizadorListener ) ((analizadorListener)listener).enterDeclaracion(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof analizadorListener ) ((analizadorListener)listener).exitDeclaracion(this);
		}
	}

	public final DeclaracionContext declaracion() throws RecognitionException {
		DeclaracionContext _localctx = new DeclaracionContext(_ctx, getState());
		enterRule(_localctx, 4, RULE_declaracion);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(38);
			tipo();
			setState(39);
			identificador();
			setState(40);
			match(T__0);
			setState(42);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & 224L) != 0)) {
				{
				setState(41);
				parametros();
				}
			}

			setState(44);
			match(T__1);
			setState(45);
			match(T__2);
			setState(46);
			cuerpo();
			setState(47);
			match(T__3);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class TipoContext extends ParserRuleContext {
		public TipoContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_tipo; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof analizadorListener ) ((analizadorListener)listener).enterTipo(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof analizadorListener ) ((analizadorListener)listener).exitTipo(this);
		}
	}

	public final TipoContext tipo() throws RecognitionException {
		TipoContext _localctx = new TipoContext(_ctx, getState());
		enterRule(_localctx, 6, RULE_tipo);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(49);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & 224L) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class IdentificadorContext extends ParserRuleContext {
		public TerminalNode IDENTIFICADOR() { return getToken(analizadorParser.IDENTIFICADOR, 0); }
		public IdentificadorContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_identificador; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof analizadorListener ) ((analizadorListener)listener).enterIdentificador(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof analizadorListener ) ((analizadorListener)listener).exitIdentificador(this);
		}
	}

	public final IdentificadorContext identificador() throws RecognitionException {
		IdentificadorContext _localctx = new IdentificadorContext(_ctx, getState());
		enterRule(_localctx, 8, RULE_identificador);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(51);
			match(IDENTIFICADOR);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ParametrosContext extends ParserRuleContext {
		public List<ParametroContext> parametro() {
			return getRuleContexts(ParametroContext.class);
		}
		public ParametroContext parametro(int i) {
			return getRuleContext(ParametroContext.class,i);
		}
		public ParametrosContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_parametros; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof analizadorListener ) ((analizadorListener)listener).enterParametros(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof analizadorListener ) ((analizadorListener)listener).exitParametros(this);
		}
	}

	public final ParametrosContext parametros() throws RecognitionException {
		ParametrosContext _localctx = new ParametrosContext(_ctx, getState());
		enterRule(_localctx, 10, RULE_parametros);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(53);
			parametro();
			setState(58);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==T__7) {
				{
				{
				setState(54);
				match(T__7);
				setState(55);
				parametro();
				}
				}
				setState(60);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ParametroContext extends ParserRuleContext {
		public TipoContext tipo() {
			return getRuleContext(TipoContext.class,0);
		}
		public IdentificadorContext identificador() {
			return getRuleContext(IdentificadorContext.class,0);
		}
		public ParametroContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_parametro; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof analizadorListener ) ((analizadorListener)listener).enterParametro(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof analizadorListener ) ((analizadorListener)listener).exitParametro(this);
		}
	}

	public final ParametroContext parametro() throws RecognitionException {
		ParametroContext _localctx = new ParametroContext(_ctx, getState());
		enterRule(_localctx, 12, RULE_parametro);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(61);
			tipo();
			setState(62);
			identificador();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class CuerpoContext extends ParserRuleContext {
		public List<InstruccionContext> instruccion() {
			return getRuleContexts(InstruccionContext.class);
		}
		public InstruccionContext instruccion(int i) {
			return getRuleContext(InstruccionContext.class,i);
		}
		public CuerpoContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_cuerpo; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof analizadorListener ) ((analizadorListener)listener).enterCuerpo(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof analizadorListener ) ((analizadorListener)listener).exitCuerpo(this);
		}
	}

	public final CuerpoContext cuerpo() throws RecognitionException {
		CuerpoContext _localctx = new CuerpoContext(_ctx, getState());
		enterRule(_localctx, 14, RULE_cuerpo);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(65); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(64);
				instruccion();
				}
				}
				setState(67); 
				_errHandler.sync(this);
				_la = _input.LA(1);
			} while ( _la==T__8 );
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class InstruccionContext extends ParserRuleContext {
		public RetornoContext retorno() {
			return getRuleContext(RetornoContext.class,0);
		}
		public InstruccionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_instruccion; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof analizadorListener ) ((analizadorListener)listener).enterInstruccion(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof analizadorListener ) ((analizadorListener)listener).exitInstruccion(this);
		}
	}

	public final InstruccionContext instruccion() throws RecognitionException {
		InstruccionContext _localctx = new InstruccionContext(_ctx, getState());
		enterRule(_localctx, 16, RULE_instruccion);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(69);
			retorno();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class RetornoContext extends ParserRuleContext {
		public ExpresionContext expresion() {
			return getRuleContext(ExpresionContext.class,0);
		}
		public RetornoContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_retorno; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof analizadorListener ) ((analizadorListener)listener).enterRetorno(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof analizadorListener ) ((analizadorListener)listener).exitRetorno(this);
		}
	}

	public final RetornoContext retorno() throws RecognitionException {
		RetornoContext _localctx = new RetornoContext(_ctx, getState());
		enterRule(_localctx, 18, RULE_retorno);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(71);
			match(T__8);
			setState(72);
			expresion(0);
			setState(73);
			match(T__9);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ExpresionContext extends ParserRuleContext {
		public TerminoContext termino() {
			return getRuleContext(TerminoContext.class,0);
		}
		public ExpresionContext expresion() {
			return getRuleContext(ExpresionContext.class,0);
		}
		public ExpresionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_expresion; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof analizadorListener ) ((analizadorListener)listener).enterExpresion(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof analizadorListener ) ((analizadorListener)listener).exitExpresion(this);
		}
	}

	public final ExpresionContext expresion() throws RecognitionException {
		return expresion(0);
	}

	private ExpresionContext expresion(int _p) throws RecognitionException {
		ParserRuleContext _parentctx = _ctx;
		int _parentState = getState();
		ExpresionContext _localctx = new ExpresionContext(_ctx, _parentState);
		ExpresionContext _prevctx = _localctx;
		int _startState = 20;
		enterRecursionRule(_localctx, 20, RULE_expresion, _p);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			{
			setState(76);
			termino(0);
			}
			_ctx.stop = _input.LT(-1);
			setState(86);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,5,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					setState(84);
					_errHandler.sync(this);
					switch ( getInterpreter().adaptivePredict(_input,4,_ctx) ) {
					case 1:
						{
						_localctx = new ExpresionContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expresion);
						setState(78);
						if (!(precpred(_ctx, 3))) throw new FailedPredicateException(this, "precpred(_ctx, 3)");
						setState(79);
						match(T__10);
						setState(80);
						termino(0);
						}
						break;
					case 2:
						{
						_localctx = new ExpresionContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expresion);
						setState(81);
						if (!(precpred(_ctx, 2))) throw new FailedPredicateException(this, "precpred(_ctx, 2)");
						setState(82);
						match(T__11);
						setState(83);
						termino(0);
						}
						break;
					}
					} 
				}
				setState(88);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,5,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class TerminoContext extends ParserRuleContext {
		public FactorContext factor() {
			return getRuleContext(FactorContext.class,0);
		}
		public TerminoContext termino() {
			return getRuleContext(TerminoContext.class,0);
		}
		public TerminoContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_termino; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof analizadorListener ) ((analizadorListener)listener).enterTermino(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof analizadorListener ) ((analizadorListener)listener).exitTermino(this);
		}
	}

	public final TerminoContext termino() throws RecognitionException {
		return termino(0);
	}

	private TerminoContext termino(int _p) throws RecognitionException {
		ParserRuleContext _parentctx = _ctx;
		int _parentState = getState();
		TerminoContext _localctx = new TerminoContext(_ctx, _parentState);
		TerminoContext _prevctx = _localctx;
		int _startState = 22;
		enterRecursionRule(_localctx, 22, RULE_termino, _p);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			{
			setState(90);
			factor();
			}
			_ctx.stop = _input.LT(-1);
			setState(100);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,7,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					setState(98);
					_errHandler.sync(this);
					switch ( getInterpreter().adaptivePredict(_input,6,_ctx) ) {
					case 1:
						{
						_localctx = new TerminoContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_termino);
						setState(92);
						if (!(precpred(_ctx, 3))) throw new FailedPredicateException(this, "precpred(_ctx, 3)");
						setState(93);
						match(T__12);
						setState(94);
						factor();
						}
						break;
					case 2:
						{
						_localctx = new TerminoContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_termino);
						setState(95);
						if (!(precpred(_ctx, 2))) throw new FailedPredicateException(this, "precpred(_ctx, 2)");
						setState(96);
						match(T__13);
						setState(97);
						factor();
						}
						break;
					}
					} 
				}
				setState(102);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,7,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class FactorContext extends ParserRuleContext {
		public ExpresionContext expresion() {
			return getRuleContext(ExpresionContext.class,0);
		}
		public TerminalNode NUMERO() { return getToken(analizadorParser.NUMERO, 0); }
		public IdentificadorContext identificador() {
			return getRuleContext(IdentificadorContext.class,0);
		}
		public FactorContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_factor; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof analizadorListener ) ((analizadorListener)listener).enterFactor(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof analizadorListener ) ((analizadorListener)listener).exitFactor(this);
		}
	}

	public final FactorContext factor() throws RecognitionException {
		FactorContext _localctx = new FactorContext(_ctx, getState());
		enterRule(_localctx, 24, RULE_factor);
		try {
			setState(109);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case T__0:
				enterOuterAlt(_localctx, 1);
				{
				setState(103);
				match(T__0);
				setState(104);
				expresion(0);
				setState(105);
				match(T__1);
				}
				break;
			case NUMERO:
				enterOuterAlt(_localctx, 2);
				{
				setState(107);
				match(NUMERO);
				}
				break;
			case IDENTIFICADOR:
				enterOuterAlt(_localctx, 3);
				{
				setState(108);
				identificador();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public boolean sempred(RuleContext _localctx, int ruleIndex, int predIndex) {
		switch (ruleIndex) {
		case 1:
			return declaraciones_sempred((DeclaracionesContext)_localctx, predIndex);
		case 10:
			return expresion_sempred((ExpresionContext)_localctx, predIndex);
		case 11:
			return termino_sempred((TerminoContext)_localctx, predIndex);
		}
		return true;
	}
	private boolean declaraciones_sempred(DeclaracionesContext _localctx, int predIndex) {
		switch (predIndex) {
		case 0:
			return precpred(_ctx, 1);
		}
		return true;
	}
	private boolean expresion_sempred(ExpresionContext _localctx, int predIndex) {
		switch (predIndex) {
		case 1:
			return precpred(_ctx, 3);
		case 2:
			return precpred(_ctx, 2);
		}
		return true;
	}
	private boolean termino_sempred(TerminoContext _localctx, int predIndex) {
		switch (predIndex) {
		case 3:
			return precpred(_ctx, 3);
		case 4:
			return precpred(_ctx, 2);
		}
		return true;
	}

	public static final String _serializedATN =
		"\u0004\u0001\u0011p\u0002\u0000\u0007\u0000\u0002\u0001\u0007\u0001\u0002"+
		"\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0002\u0004\u0007\u0004\u0002"+
		"\u0005\u0007\u0005\u0002\u0006\u0007\u0006\u0002\u0007\u0007\u0007\u0002"+
		"\b\u0007\b\u0002\t\u0007\t\u0002\n\u0007\n\u0002\u000b\u0007\u000b\u0002"+
		"\f\u0007\f\u0001\u0000\u0001\u0000\u0001\u0001\u0001\u0001\u0001\u0001"+
		"\u0001\u0001\u0001\u0001\u0005\u0001\"\b\u0001\n\u0001\f\u0001%\t\u0001"+
		"\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0002\u0003\u0002+\b\u0002"+
		"\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0003"+
		"\u0001\u0003\u0001\u0004\u0001\u0004\u0001\u0005\u0001\u0005\u0001\u0005"+
		"\u0005\u00059\b\u0005\n\u0005\f\u0005<\t\u0005\u0001\u0006\u0001\u0006"+
		"\u0001\u0006\u0001\u0007\u0004\u0007B\b\u0007\u000b\u0007\f\u0007C\u0001"+
		"\b\u0001\b\u0001\t\u0001\t\u0001\t\u0001\t\u0001\n\u0001\n\u0001\n\u0001"+
		"\n\u0001\n\u0001\n\u0001\n\u0001\n\u0001\n\u0005\nU\b\n\n\n\f\nX\t\n\u0001"+
		"\u000b\u0001\u000b\u0001\u000b\u0001\u000b\u0001\u000b\u0001\u000b\u0001"+
		"\u000b\u0001\u000b\u0001\u000b\u0005\u000bc\b\u000b\n\u000b\f\u000bf\t"+
		"\u000b\u0001\f\u0001\f\u0001\f\u0001\f\u0001\f\u0001\f\u0003\fn\b\f\u0001"+
		"\f\u0000\u0003\u0002\u0014\u0016\r\u0000\u0002\u0004\u0006\b\n\f\u000e"+
		"\u0010\u0012\u0014\u0016\u0018\u0000\u0001\u0001\u0000\u0005\u0007l\u0000"+
		"\u001a\u0001\u0000\u0000\u0000\u0002\u001c\u0001\u0000\u0000\u0000\u0004"+
		"&\u0001\u0000\u0000\u0000\u00061\u0001\u0000\u0000\u0000\b3\u0001\u0000"+
		"\u0000\u0000\n5\u0001\u0000\u0000\u0000\f=\u0001\u0000\u0000\u0000\u000e"+
		"A\u0001\u0000\u0000\u0000\u0010E\u0001\u0000\u0000\u0000\u0012G\u0001"+
		"\u0000\u0000\u0000\u0014K\u0001\u0000\u0000\u0000\u0016Y\u0001\u0000\u0000"+
		"\u0000\u0018m\u0001\u0000\u0000\u0000\u001a\u001b\u0003\u0002\u0001\u0000"+
		"\u001b\u0001\u0001\u0000\u0000\u0000\u001c\u001d\u0006\u0001\uffff\uffff"+
		"\u0000\u001d\u001e\u0003\u0004\u0002\u0000\u001e#\u0001\u0000\u0000\u0000"+
		"\u001f \n\u0001\u0000\u0000 \"\u0003\u0004\u0002\u0000!\u001f\u0001\u0000"+
		"\u0000\u0000\"%\u0001\u0000\u0000\u0000#!\u0001\u0000\u0000\u0000#$\u0001"+
		"\u0000\u0000\u0000$\u0003\u0001\u0000\u0000\u0000%#\u0001\u0000\u0000"+
		"\u0000&\'\u0003\u0006\u0003\u0000\'(\u0003\b\u0004\u0000(*\u0005\u0001"+
		"\u0000\u0000)+\u0003\n\u0005\u0000*)\u0001\u0000\u0000\u0000*+\u0001\u0000"+
		"\u0000\u0000+,\u0001\u0000\u0000\u0000,-\u0005\u0002\u0000\u0000-.\u0005"+
		"\u0003\u0000\u0000./\u0003\u000e\u0007\u0000/0\u0005\u0004\u0000\u0000"+
		"0\u0005\u0001\u0000\u0000\u000012\u0007\u0000\u0000\u00002\u0007\u0001"+
		"\u0000\u0000\u000034\u0005\u0010\u0000\u00004\t\u0001\u0000\u0000\u0000"+
		"5:\u0003\f\u0006\u000067\u0005\b\u0000\u000079\u0003\f\u0006\u000086\u0001"+
		"\u0000\u0000\u00009<\u0001\u0000\u0000\u0000:8\u0001\u0000\u0000\u0000"+
		":;\u0001\u0000\u0000\u0000;\u000b\u0001\u0000\u0000\u0000<:\u0001\u0000"+
		"\u0000\u0000=>\u0003\u0006\u0003\u0000>?\u0003\b\u0004\u0000?\r\u0001"+
		"\u0000\u0000\u0000@B\u0003\u0010\b\u0000A@\u0001\u0000\u0000\u0000BC\u0001"+
		"\u0000\u0000\u0000CA\u0001\u0000\u0000\u0000CD\u0001\u0000\u0000\u0000"+
		"D\u000f\u0001\u0000\u0000\u0000EF\u0003\u0012\t\u0000F\u0011\u0001\u0000"+
		"\u0000\u0000GH\u0005\t\u0000\u0000HI\u0003\u0014\n\u0000IJ\u0005\n\u0000"+
		"\u0000J\u0013\u0001\u0000\u0000\u0000KL\u0006\n\uffff\uffff\u0000LM\u0003"+
		"\u0016\u000b\u0000MV\u0001\u0000\u0000\u0000NO\n\u0003\u0000\u0000OP\u0005"+
		"\u000b\u0000\u0000PU\u0003\u0016\u000b\u0000QR\n\u0002\u0000\u0000RS\u0005"+
		"\f\u0000\u0000SU\u0003\u0016\u000b\u0000TN\u0001\u0000\u0000\u0000TQ\u0001"+
		"\u0000\u0000\u0000UX\u0001\u0000\u0000\u0000VT\u0001\u0000\u0000\u0000"+
		"VW\u0001\u0000\u0000\u0000W\u0015\u0001\u0000\u0000\u0000XV\u0001\u0000"+
		"\u0000\u0000YZ\u0006\u000b\uffff\uffff\u0000Z[\u0003\u0018\f\u0000[d\u0001"+
		"\u0000\u0000\u0000\\]\n\u0003\u0000\u0000]^\u0005\r\u0000\u0000^c\u0003"+
		"\u0018\f\u0000_`\n\u0002\u0000\u0000`a\u0005\u000e\u0000\u0000ac\u0003"+
		"\u0018\f\u0000b\\\u0001\u0000\u0000\u0000b_\u0001\u0000\u0000\u0000cf"+
		"\u0001\u0000\u0000\u0000db\u0001\u0000\u0000\u0000de\u0001\u0000\u0000"+
		"\u0000e\u0017\u0001\u0000\u0000\u0000fd\u0001\u0000\u0000\u0000gh\u0005"+
		"\u0001\u0000\u0000hi\u0003\u0014\n\u0000ij\u0005\u0002\u0000\u0000jn\u0001"+
		"\u0000\u0000\u0000kn\u0005\u000f\u0000\u0000ln\u0003\b\u0004\u0000mg\u0001"+
		"\u0000\u0000\u0000mk\u0001\u0000\u0000\u0000ml\u0001\u0000\u0000\u0000"+
		"n\u0019\u0001\u0000\u0000\u0000\t#*:CTVbdm";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}