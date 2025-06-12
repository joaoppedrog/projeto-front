function simularTransporte() {
  const meios = ["Ônibus", "Metrô", "Bicicleta", "Caminhada", "Patinete"];
  const precos = ["R$ 4,40", "R$ 5,00", "Grátis", "Grátis", "R$ 3,00"];
  const tempos = ["25 min", "15 min", "35 min", "45 min", "20 min"];
  const i = Math.floor(Math.random() * meios.length);
  document.getElementById("resultado").innerText =
    `Transporte sugerido: ${meios[i]} | Tempo estimado: ${tempos[i]} | Custo: ${precos[i]}`;
}
