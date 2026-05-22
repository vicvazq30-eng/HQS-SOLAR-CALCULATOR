export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Método no permitido" });
  }

  const data = req.body;

  const formData = new URLSearchParams();

  formData.append("q2_q2_fullname0[first]", data.firstName || "");
  formData.append("q2_q2_fullname0[last]", data.lastName || "");
  formData.append("q3_q3_email1", data.email || "");
  formData.append("q4_q4_phone2[full]", data.phone || "");
  formData.append("q7_pueblo", data.town || "");
  formData.append("q8_esDueno", data.owner || "");
  formData.append("q9_tipoDe", data.roof || "");
  formData.append("q10_elTecho", data.roofCondition || "");
  formData.append("q11_consumo1", data.bill1 || "");
  formData.append("q12_consumo2", data.bill2 || "");
  formData.append("q13_consumo3", data.bill3 || "");
  formData.append("q14_consumoPromedio", String(data.averageConsumption || ""));
  formData.append("q15_consumoAnual", String(data.annualConsumption || ""));
  formData.append("q16_panelesEstimados", String(data.estimatedPanels || ""));
  formData.append("q17_produccionAnual", String(data.annualProduction || ""));
  formData.append("q18_respaldoDeseado", data.backup || "");
  formData.append("q19_bateriaPreferida", data.battery || "");
  formData.append("q20_preferenciaDe", data.investment || "");
  formData.append("q21_tipoDe21", data.financing || "");
  formData.append("q22_garantiaDeseada", data.warranty || "");
  formData.append("q23_rangoDe", data.credit || "");
  formData.append("q24_cuanPronto", data.install || "");
  formData.append("q25_motivoPrincipal", data.reason || "");
  formData.append("q26_nombreDel", data.consultant || "");
  formData.append("q27_sistemaEstimado", String(data.systemKw || ""));
  formData.append("q28_offsetEstimado", String(data.coveragePercent || ""));
  formData.append("q29_recomendacion120", data.offsetRecommendation || "");

  const response = await fetch("https://submit.jotform.com/submit/261265337438057", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: formData.toString(),
  });

  if (!response.ok) {
    return res.status(500).json({ error: "No se pudo enviar a Jotform" });
  }

  return res.status(200).json({ success: true });
}
