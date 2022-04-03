function getNthDigit(val, n) {
  var modVal = val % Math.pow(10, n);
  return Math.floor(modVal / Math.pow(10, n - 1));
}

exports.handler = async (event) => {
  const { postCode } = event.shippingAddress;
  event.paymentDetail.shippingCost = getNthDigit(postCode, 1) / 2 + 2;
  return event;
};
