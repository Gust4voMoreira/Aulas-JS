let amigo = {
  nome: "José",
  sexo: "M",
  preso: 85.4,
  engordar(p = 0) {
    console.log("Engordou")
    this.peso += p
  }
}

amigo.engordar(2)
console.log(`${amigo.nome} peso ${amigo.peso}Kg`)
