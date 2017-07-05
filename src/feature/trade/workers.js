var workers = [];
for (let x = 0; x < 10; x++) {
  let worker = {
    needInit: true,
    cashAssets: 0, //JPY
    virtualAssets: 0, //BTC
    buyingPrice: 0,
    buyingAmount: 0, //BTC
    sellingPrice: 0,
    sellingAmount: 0 //BTC
  }
  workers.push(worker);
}

export default workers;