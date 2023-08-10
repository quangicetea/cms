const path = require("path");
const fs = require("fs");

export default async function handler(req, res) {

        if (req.method == "GET") {
            
            var resListConfig = [];
            resListConfig.push({"ID": 24,"key": 24, "botname": "bot01", "symbol":"WLD_USDT",  "tradeType":"both", "interval": "Min15","extend":	"0.8", "oclist": "0.5", "ignore": "0.7", "takeProfit":"0.48", "reduceTakeProfit": "0.22", "amountlist":	"5.0", "status": "mustStop"});
            resListConfig.push({"ID": 25,"key": 25, "botname": "bot02", "symbol":"XHY_USDT",  "tradeType":"both", "interval": "Min15","extend":	"0.8", "oclist": "0.5", "ignore": "0.7", "takeProfit":"0.48", "reduceTakeProfit": "0.22", "amountlist":	"5.0", "status": "mustStop"});
            resListConfig.push({"ID": 26,"key": 26, "botname": "bot03", "symbol":"HDS_USDT",  "tradeType":"both", "interval": "Min15","extend":	"0.8", "oclist": "0.5", "ignore": "0.7", "takeProfit":"0.48", "reduceTakeProfit": "0.22", "amountlist":	"5.0", "status": "mustStop"});
            resListConfig.push({"ID": 27,"key": 27, "botname": "bot04", "symbol":"HAK_USDT",  "tradeType":"both", "interval": "Min15","extend":	"0.8", "oclist": "0.5", "ignore": "0.7", "takeProfit":"0.48", "reduceTakeProfit": "0.22", "amountlist":	"5.0", "status": "mustStop"});
            resListConfig.push({"ID": 28,"key": 28, "botname": "bot05", "symbol":"HAK_USDT",  "tradeType":"both", "interval": "Min15","extend":	"0.8", "oclist": "0.5", "ignore": "0.7", "takeProfit":"0.48", "reduceTakeProfit": "0.22", "amountlist":	"5.0", "status": "mustStop"});
            resListConfig.push({"ID": 29,"key": 29, "botname": "bot06", "symbol":"HAK_USDT",  "tradeType":"both", "interval": "Min15","extend":	"0.8", "oclist": "0.5", "ignore": "0.7", "takeProfit":"0.48", "reduceTakeProfit": "0.22", "amountlist":	"5.0", "status": "mustStop"});
            resListConfig.push({"ID": 30,"key": 30, "botname": "bot07", "symbol":"HAK_USDT",  "tradeType":"both", "interval": "Min15","extend":	"0.8", "oclist": "0.5", "ignore": "0.7", "takeProfit":"0.48", "reduceTakeProfit": "0.22", "amountlist":	"5.0", "status": "mustStop"});
            resListConfig.push({"ID": 31,"key": 31, "botname": "bot08", "symbol":"HAK_USDT",  "tradeType":"both", "interval": "Min15","extend":	"0.8", "oclist": "0.5", "ignore": "0.7", "takeProfit":"0.48", "reduceTakeProfit": "0.22", "amountlist":	"5.0", "status": "mustStop"});
            res.status(200).json(resListConfig);
        } else{
            res.status(200).json([]);
        }
    
}