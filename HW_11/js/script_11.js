async function getRandomChinese(length) {
  const delay = 50;
  let chineseStr = "";

  const makeChinesChar = () => {
    const sign = +String(Date.now()).slice(-5);
    return String.fromCharCode(sign);
  };

  let getRandomChar = () =>
    new Promise((resolve) =>
      setTimeout(() => {
        return resolve(makeChinesChar());
      }, delay)
    );

  while (length > 0) {
    chineseStr += await getRandomChar();
    length--;
  }
  return chineseStr;
}
getRandomChinese(4).then((result) => console.log(result));


