// Generated from c:/Users/mallm/51441/analizador.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.tree.ParseTreeListener;

/**
 * This interface defines a complete listener for a parse tree produced by
 * {@link analizadorParser}.
 */
public interface analizadorListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by {@link analizadorParser#programa}.
	 * @param ctx the parse tree
	 */
	void enterPrograma(analizadorParser.ProgramaContext ctx);
	/**
	 * Exit a parse tree produced by {@link analizadorParser#programa}.
	 * @param ctx the parse tree
	 */
	void exitPrograma(analizadorParser.ProgramaContext ctx);
	/**
	 * Enter a parse tree produced by {@link analizadorParser#declaraciones}.
	 * @param ctx the parse tree
	 */
	void enterDeclaraciones(analizadorParser.DeclaracionesContext ctx);
	/**
	 * Exit a parse tree produced by {@link analizadorParser#declaraciones}.
	 * @param ctx the parse tree
	 */
	void exitDeclaraciones(analizadorParser.DeclaracionesContext ctx);
	/**
	 * Enter a parse tree produced by {@link analizadorParser#declaracion}.
	 * @param ctx the parse tree
	 */
	void enterDeclaracion(analizadorParser.DeclaracionContext ctx);
	/**
	 * Exit a parse tree produced by {@link analizadorParser#declaracion}.
	 * @param ctx the parse tree
	 */
	void exitDeclaracion(analizadorParser.DeclaracionContext ctx);
	/**
	 * Enter a parse tree produced by {@link analizadorParser#tipo}.
	 * @param ctx the parse tree
	 */
	void enterTipo(analizadorParser.TipoContext ctx);
	/**
	 * Exit a parse tree produced by {@link analizadorParser#tipo}.
	 * @param ctx the parse tree
	 */
	void exitTipo(analizadorParser.TipoContext ctx);
	/**
	 * Enter a parse tree produced by {@link analizadorParser#identificador}.
	 * @param ctx the parse tree
	 */
	void enterIdentificador(analizadorParser.IdentificadorContext ctx);
	/**
	 * Exit a parse tree produced by {@link analizadorParser#identificador}.
	 * @param ctx the parse tree
	 */
	void exitIdentificador(analizadorParser.IdentificadorContext ctx);
	/**
	 * Enter a parse tree produced by {@link analizadorParser#parametros}.
	 * @param ctx the parse tree
	 */
	void enterParametros(analizadorParser.ParametrosContext ctx);
	/**
	 * Exit a parse tree produced by {@link analizadorParser#parametros}.
	 * @param ctx the parse tree
	 */
	void exitParametros(analizadorParser.ParametrosContext ctx);
	/**
	 * Enter a parse tree produced by {@link analizadorParser#parametro}.
	 * @param ctx the parse tree
	 */
	void enterParametro(analizadorParser.ParametroContext ctx);
	/**
	 * Exit a parse tree produced by {@link analizadorParser#parametro}.
	 * @param ctx the parse tree
	 */
	void exitParametro(analizadorParser.ParametroContext ctx);
	/**
	 * Enter a parse tree produced by {@link analizadorParser#cuerpo}.
	 * @param ctx the parse tree
	 */
	void enterCuerpo(analizadorParser.CuerpoContext ctx);
	/**
	 * Exit a parse tree produced by {@link analizadorParser#cuerpo}.
	 * @param ctx the parse tree
	 */
	void exitCuerpo(analizadorParser.CuerpoContext ctx);
	/**
	 * Enter a parse tree produced by {@link analizadorParser#instruccion}.
	 * @param ctx the parse tree
	 */
	void enterInstruccion(analizadorParser.InstruccionContext ctx);
	/**
	 * Exit a parse tree produced by {@link analizadorParser#instruccion}.
	 * @param ctx the parse tree
	 */
	void exitInstruccion(analizadorParser.InstruccionContext ctx);
	/**
	 * Enter a parse tree produced by {@link analizadorParser#retorno}.
	 * @param ctx the parse tree
	 */
	void enterRetorno(analizadorParser.RetornoContext ctx);
	/**
	 * Exit a parse tree produced by {@link analizadorParser#retorno}.
	 * @param ctx the parse tree
	 */
	void exitRetorno(analizadorParser.RetornoContext ctx);
	/**
	 * Enter a parse tree produced by {@link analizadorParser#expresion}.
	 * @param ctx the parse tree
	 */
	void enterExpresion(analizadorParser.ExpresionContext ctx);
	/**
	 * Exit a parse tree produced by {@link analizadorParser#expresion}.
	 * @param ctx the parse tree
	 */
	void exitExpresion(analizadorParser.ExpresionContext ctx);
	/**
	 * Enter a parse tree produced by {@link analizadorParser#termino}.
	 * @param ctx the parse tree
	 */
	void enterTermino(analizadorParser.TerminoContext ctx);
	/**
	 * Exit a parse tree produced by {@link analizadorParser#termino}.
	 * @param ctx the parse tree
	 */
	void exitTermino(analizadorParser.TerminoContext ctx);
	/**
	 * Enter a parse tree produced by {@link analizadorParser#factor}.
	 * @param ctx the parse tree
	 */
	void enterFactor(analizadorParser.FactorContext ctx);
	/**
	 * Exit a parse tree produced by {@link analizadorParser#factor}.
	 * @param ctx the parse tree
	 */
	void exitFactor(analizadorParser.FactorContext ctx);
}