const routes = require("express").Router();

routes.get("/", (req, res) => {
  res.send({ message: "bem-vindos a api oficial da unitel" });
});

routes.get("/services", (req, res) => {
  const services = [
    { id: 1, name: "Serviços de Voz", planeBased: false },
    {
      id: 2,
      name: "Serviços de Dados",
      planeBased: true,
      planes: [
        {
          id: 1,
          name: "Net Dia",
          services: [{ id: 1, price: 100, credit: "100 MB" }, {id: 2, price : 200, credit: '200 MB'}]
        },
      ],
    },
  ];
  res.send(services);
});

routes.post("/voiceCreditAddtion", (req, res) => {
  const { phone } = req.body;
  const { price } = req.body;

  if (phone === undefined) res.send({ error: "Algo correu mal." });
  if (price === undefined) res.send({ error: "Algo correu mal." });
  res.send({
    message: `O número ${phone} recebeu um carregamento de voz no valor de ${price},00 Kz`,
  });
});

routes.post("/dataCreditAddtion", (req, res) => {
  const { phone } = req.body;
  const { price } = req.body;

  if (phone === undefined) res.send({ error: "Algo correu mal." });
  if (price === undefined) res.send({ error: "Algo correu mal." });
  res.send({
    message: `O número ${phone} recebeu um carregamento de dados no valor de ${price},00 Kz`,
  });
});

module.exports = routes;
