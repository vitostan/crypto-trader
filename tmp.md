auto trade:
2.Loop, for one worker
2.1 sync balance
2.2 time to buy?
if 
then buy: send buy order as ticker.best_bid * 0.01
sync balance
2.3if no buy, time to sell?
if
then sell: send sell order as ticker.best_ask * 0.01
sync balance
2.4generate report


### arbitrage trading
* check price differences between different exchanges
* buy from lower asks and sell to higher bids
* transfer assets back to maintain half-half balance