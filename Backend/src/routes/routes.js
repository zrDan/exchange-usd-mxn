const express = require("express");
const router = express.Router();
const Bank = require("../models/bk-inf");

router.get("/", async (req, res) => {
  Bank.find()
    .exec()
    .then((bankList) => res.status(200).json(bankList))
    .catch((err) => res.status(500).json({ error: err }));
});

router.put("/update/:id", async (req, res) => {
  const { Compra, Venta } = req.body;
  const newBank = { Compra, Venta };
  await Bank.findByIdAndUpdate(req.params.id, newBank);
  res.json({ status: "Task Updated" });
});

module.exports = router;
