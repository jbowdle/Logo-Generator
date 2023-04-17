class Validate {
    validateText(input) {
        const string = new String(input);

        if (string.length > 3) {
            return "Text must be 3 characters or less";
        } else {
            return true;
        }
    }

    validateColor(input) {
        const colors = ["aliceblue", "antiquewhite", "aqua", "aquamarine", "azure", "beige", "bisque", 
        "black", "blanchedalmond", "blue", "blueviolet", "brown", "burlywood", "cadetblue",		
        "chartreuse",	"chocolate", "coral", "cornflowerblue", "cornsilk", "crimson", "cyan", "darkblue", "darkcyan",		
        "darkgoldenrod", "darkgray", "darkgreen", "darkgrey", "darkkhaki", "darkmagenta", "darkolivegreen", "darkorange", "darkorchid",	
        "darkred", "arksalmon", "darkseagreen", "darkslateblue", "darkslategray", "darkslategrey", "darkturquoise", "darkviolet",	
        "deeppink", "deepskyblue", "dimgray", "dimgrey", "dodgerblue", "firebrick", "floralwhite", "forestgreen", "fuchsia",	
         "gainsboro", "ghostwhite", "gold", "goldenrod", "gray", "green", "greenyellow", "grey", "honeydew", "hotpink", "indianred",	
        "indigo", "ivory", "khaki", "lavender", "lavenderblush", "lawngreen", "lemonchiffon", "lightblue", "lightcoral", "lightcyan", "lightgoldenrodyellow",		
        "lightgray", "lightgreen", "lightgrey", "lightpink", "lightsalmon", "lightseagreen", "lightskyblue", "lightslategray", "lightslategrey",	
        "lightsteelblue", "lightyellow", "lime", "limegreen", "linen", "magenta", "maroon", "mediumaquamarine",	
        "mediumblue", "mediumorchid", "mediumpurple", "mediumseagreen", "mediumslateblue", "mediumspringgreen", "mediumturquoise", "mediumvioletred",	
        "midnightblue", "mintcream", "mistyrose", "moccasin", "navajowhite", "navy", "oldlace", "olive", "olivedrab", "orange", "orangered", "orchid",	
        "palegoldenrod", "palegreen", "paleturquoise", "palevioletred", "papayawhip", "peachpuff", "peru", "pink", "plum", "powderblue", "purple",
        "red", "rosybrown", "royalblue", "saddlebrown", "salmon", "sandybrown", "seagreen", "seashell", "sienna", "silver", "skyblue",		
        "slateblue", "slategray", "slategrey", "snow", "springgreen", "steelblue", "tan", "teal", "thistle", "tomato", "turquoise", "violet", "wheat",		
        "white", "whitesmoke", "yellow", "yellowgreen"];
    
        const string = new String(input);
    
        // removes all whitespace and changes to lowercase from the input
        // regex expression: /s denotes whitespace, + matchs one or more of /s, g makes the search iterative
        const correctedInput = string.replaceAll(/\s+/g, '').toLowerCase();
    
        if (!colors.includes(correctedInput)) {
            return "Invalid color";
        } else {
            return true;
        }
    }
}

module.exports = Validate;