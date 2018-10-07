function depositProfit(deposit, rate, threshold) {

  let years = 0;

  while(deposit < threshold) {

  const yearlyIncrese = (deposit / 100) * rate;
  deposit+=yearlyIncrese;
  years++;
}
return years;
}

