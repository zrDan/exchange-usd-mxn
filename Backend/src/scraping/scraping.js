const cheerio = require("cheerio");
const request = require("request-promise");
const fetch = require("node-fetch");

function updateTask(bank, buy_value, sell_value) {
  fetch(`localhost:3000/update/${bank}`, {
    method: "PUT",
    body: JSON.stringify({
      Compra: buy_value,
      Venta: sell_value,
    }),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .catch((err) => console.log(`Error: ${err}`));
}

async function azteca() {
  const $ = await request({
    uri: "https://www.eldolar.info/es-MX/mexico/dia/hoy", // Obtener toda la informacion html
    transform: (body) => cheerio.load(body), // Toma el contenido para que cheerio lo analize
  });

  var aztecaData = ["AZTECA"];
  const ultraRowData = $("tbody").text().split("Banco");
  let aztecaRowData = ultraRowData[1].trim().slice(6);
  aztecaData.push(aztecaRowData.slice(0, 5));
  aztecaData.push(aztecaRowData.slice(5, 10));

  updateTask(aztecaData[0], aztecaData[1], aztecaData[2]);
  // console.log(`Banco: ${aztecaData[0]}
  //              Buy:   ${aztecaData[1]}
  //              Sell:  ${aztecaData[2]}`);
}

async function afirme() {
  const $ = await request({
    uri: "https://www.afirme.com/afirme",
    transform: (body) => cheerio.load(body),
  });

  var afirmeData = ["AFIRME"];

  $(".infoIndicador").each((index, element) => {
    const price = $(element).find("p").text();
    if (index === 0) {
      afirmeData.push(price.slice(1).trim());
    } else if (index === 1) {
      afirmeData.push(price.slice(1).trim());
    }
  });

  updateTask(afirmeData[0], afirmeData[1], afirmeData[2]);
  // console.log(`Banco: ${afirmeData[0]}
  //              Buy:   ${afirmeData[1]}
  //              Sell:  ${afirmeData[2]}`);
}

async function banamex() {
  const $ = await request({
    uri: "https://www.eldolar.info/es-MX/mexico/dia/hoy",
    transform: (body) => cheerio.load(body),
  });

  var banamexData = ["BANAMEX"];

  const ultraRowData = $("tbody").text().split("Citibanamex");
  const banamexRowData = ultraRowData[1].slice(0, 10);
  banamexData.push(banamexRowData.slice(0, 5));
  banamexData.push(banamexRowData.slice(5, 10));

  updateTask(banamexData[0], banamexData[1], banamexData[2]);
  // console.log(`Banco: ${banamexData[0]}
  //              Buy:   ${banamexData[1]}
  //              Sell:  ${banamexData[2]}`);
}

async function banbajio() {
  const $ = await request({
    uri: "https://dolarenmexico.com/precio-dolar-banco-del-bajio.php",
    transform: (body) => cheerio.load(body),
  });

  var banbajioData = ["BANBAJIO"];
  var spanData = [];

  $(".content").each((index, element) => {
    const spanRowData = $(element).find("span").text();
    spanData.push(spanRowData);
  });

  banbajioData.push(spanData[0].slice(8, 13).trim());
  banbajioData.push(spanData[0].slice(20, 25).trim());

  updateTask(banbajioData[0], banbajioData[1], banbajioData[2]);
  // console.log(`Banco: ${banbajioData[0]}
  //              Buy:   ${banbajioData[1]}
  //              Sell:  ${banbajioData[2]}`);
}

async function banorte() {
  const $ = await request({
    uri: "https://www.eldolar.info/es-MX/mexico/dia/hoy",
    transform: (body) => cheerio.load(body),
  });

  var banorteData = ["BANORTE"];

  const ultraRowData = $("tbody").text().split("Banorte");
  banorteRowData = ultraRowData[1].slice(0, 10);
  banorteData.push(banorteRowData.slice(0, 5).trim());
  banorteData.push(banorteRowData.slice(5, 10).trim());

  updateTask(banorteData[0], banorteData[1], banorteData[2]);
  // console.log(`Banco: ${banorteData[0]}
  //              Buy:   ${banorteData[1]}
  //              Sell:  ${banorteData[2]}`);
}

async function banxico() {
  const $ = await request({
    uri: "https://dolarenmexico.com/precio-dolar-banxico.php",
    transform: (body) => cheerio.load(body),
  });

  var banxicoData = ["BANXICO"];
  var spanData = [];

  $(".content").each((index, element) => {
    const spanRowData = $(element).find("span").text();
    spanData.push(spanRowData);
  });

  banxicoData.push(spanData[0].slice(8, 13).trim());
  banxicoData.push(spanData[0].slice(20, 25).trim());

  updateTask(banxicoData[0], banxicoData[1], banxicoData[2]);
  // console.log(`Banco: ${banxicoData[0]}
  //              Buy:   ${banxicoData[1]}
  //              Sell:  ${banxicoData[2]}`);
}

async function bbva() {
  const $ = await request({
    uri: "https://www.eldolar.info/es-MX/mexico/dia/hoy",
    transform: (body) => cheerio.load(body),
  });

  var bbvaData = ["BBVA"];

  const ultraRowData = $("tbody").text().split("BBVA Bancomer");
  bbvaRowData = ultraRowData[1].slice(0, 10);
  bbvaData.push(bbvaRowData.slice(0, 5).trim());
  bbvaData.push(bbvaRowData.slice(5, 10).trim());

  updateTask(bbvaData[0], bbvaData[1], bbvaData[2]);
  // console.log(`Banco: ${bbvaData[0]}
  //               Buy:   ${bbvaData[1]}
  //               Sell:  ${bbvaData[2]}`);
}

async function bxplus() {
  const $ = await request({
    uri: "https://dolarenmexico.com/precio-dolar-bxmas.php",
    transform: (body) => cheerio.load(body),
  });

  var bxplusData = ["BXPLUS"];
  var spanData = [];

  $(".content").each((index, element) => {
    const spanRowData = $(element).find("span").text();
    spanData.push(spanRowData);
  });

  bxplusData.push(spanData[0].slice(8, 13).trim());
  bxplusData.push(spanData[0].slice(20, 25).trim());

  updateTask(bxplusData[0], bxplusData[1], bxplusData[2]);
  // console.log(`Banco: ${bxplusData[0]}
  //              Buy:   ${bxplusData[1]}
  //              Sell:  ${bxplusData[2]}`);
}

async function hsbc() {
  const $ = await request({
    uri: "https://dolarenmexico.com/precio-dolar-hsbc.php",
    transform: (body) => cheerio.load(body),
  });

  var hsbcData = ["HSBC"];
  var spanData = [];

  $(".content").each((index, element) => {
    const spanRowData = $(element).find("span").text();
    spanData.push(spanRowData);
  });

  hsbcData.push(spanData[0].slice(8, 13).trim());
  hsbcData.push(spanData[0].slice(20, 25).trim());

  updateTask(hsbcData[0], hsbcData[1], hsbcData[2]);
  // console.log(`Banco: ${hsbcData[0]}
  //              Buy:   ${hsbcData[1]}
  //              Sell:  ${hsbcData[2]}`);
}

async function inbursa() {
  const $ = await request({
    uri: "https://www.inbursa.com/Portal/?id_category=1",
    transform: (body) => cheerio.load(body),
  });

  var inbursaData = ["INBURSA"];
  var tdData = [];

  $("tbody").each((index, element) => {
    const tdRowData = $(element)
      .find("td.text-center")
      .text()
      .replace(/(^\$)/g, "")
      .trim();
    tdData.push(tdRowData);
  });

  inbursaData.push(tdData[0].slice(0, 5));
  inbursaData.push(tdData[0].slice(23, 28));

  updateTask(inbursaData[0], inbursaData[1], inbursaData[2]);
  // console.log(`Banco: ${inbursaData[0]}
  //              Buy:   ${inbursaData[1]}
  //              Sell:  ${inbursaData[2]}`);
}

async function ixe() {
  const $ = await request({
    uri: "https://www.eldolar.info/es-MX/mexico/dia/hoy",
    transform: (body) => cheerio.load(body),
  });

  var ixeData = ["IXE"];

  const ultraRowData = $("tbody").text().split("IXE");
  ixeRowData = ultraRowData[1].slice(0, 10);
  ixeData.push(ixeRowData.slice(0, 5).trim());
  ixeData.push(ixeRowData.slice(5, 10).trim());

  updateTask(ixeData[0], ixeData[1], ixeData[2]);
  // console.log(`Banco: ${ixeData[0]}
  //               Buy:   ${ixeData[1]}
  //               Sell:  ${ixeData[2]}`);
}

async function monex() {
  const $ = await request({
    uri: "https://www.eldolar.info/es-MX/mexico/dia/hoy",
    transform: (body) => cheerio.load(body),
  });

  var monexData = ["MONEX"];

  const ultraRowData = $("tbody").text().split("Monex");
  monexRowData = ultraRowData[1].slice(0, 10);
  monexData.push(monexRowData.slice(0, 5).trim());
  monexData.push(monexRowData.slice(5, 10).trim());

  updateTask(monexData[0], monexData[1], monexData[2]);
  // console.log(`Banco: ${monexData[0]}
  //               Buy:   ${monexData[1]}
  //               Sell:  ${monexData[2]}`);
}

async function santander() {
  const $ = await request({
    uri: "https://dolarenmexico.com/precio-dolar-santander.php",
    transform: (body) => cheerio.load(body),
  });

  var santanderData = ["SANTANDER"];
  var spanData = [];

  $(".content").each((index, element) => {
    const spanRowData = $(element).find("span").text();
    spanData.push(spanRowData);
  });

  santanderData.push(spanData[0].slice(8, 13).trim());
  santanderData.push(spanData[0].slice(20, 25).trim());

  updateTask(santanderData[0], santanderData[1], santanderData[2]);
  // console.log(`Banco: ${santanderData[0]}
  //              Buy:   ${santanderData[1]}
  //              Sell:  ${santanderData[2]}`);
}

async function scotiabank() {
  const $ = await request({
    uri: "https://dolarenmexico.com/precio-dolar-scotiabank.php",
    transform: (body) => cheerio.load(body),
  });

  var scotiabankData = ["SCOTIABANK"];
  var spanData = [];

  $(".content").each((index, element) => {
    const spanRowData = $(element).find("span").text();
    spanData.push(spanRowData);
  });

  scotiabankData.push(spanData[0].slice(8, 13).trim());
  scotiabankData.push(spanData[0].slice(20, 25).trim());

  updateTask(scotiabankData[0], scotiabankData[1], scotiabankData[2]);
  // console.log(`Banco: ${scotiabankData[0]}
  //              Buy:   ${scotiabankData[1]}
  //              Sell:  ${scotiabankData[2]}`);
}

const dataTrigger = async function data() {
  await azteca();
  await afirme();
  await banamex();
  await banbajio();
  await banorte();
  await banxico();
  await bbva();
  await bxplus();
  await hsbc();
  await inbursa();
  await ixe();
  await monex();
  await santander();
  await scotiabank();

  console.log("Update complete");
};

module.exports = dataTrigger;
