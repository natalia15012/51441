import RecAnalizadorListener from "./generated/RecAnalizadorListener.js";

export class CustomRecAnalizadorListener extends RecAnalizadorListener {

    enterStat(ctx) {
        console.log(`Se detectó una: ${ctx.constructor.name}`);
    }

}