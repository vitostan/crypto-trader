var workers = [];
for (var x = 0; x < 10; x++) {
  var worker = {
    needInit: true,
    cashAssets: 0, //JPY/CNY
    virtualAssets: 0, //BTC/ETH
    buyingPrice: 0, //
    sellingPrice: 0,
    feeRatio: 0
  }
  workers.push(worker);
}

export default workers;