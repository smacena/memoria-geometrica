// Cada par tem uma "chave" (o nome da figura) e dois lados: a e b.
// Cada lado é { imagem, alt } ou { texto }.
const figura = (pasta, arquivo, nome) => ({
  chave: nome,
  a: { imagem: `img/${pasta}/${arquivo}`, alt: nome },
  b: { texto: nome },
});

const objetoEFigura = (objeto, solido, nome) => ({
  chave: nome,
  a: { imagem: `img/objetos/${objeto}.gif`, alt: `Objeto: ${nome}` },
  b: { imagem: `img/solidos/${solido}.gif`, alt: nome },
});

const objetoENome = (objeto, nome) => ({
  chave: nome,
  a: { imagem: `img/objetos/${objeto}.gif`, alt: `Objeto: ${nome}` },
  b: { texto: nome },
});

export const planas = [
  figura('planas', 'triangulo.svg', 'Triângulo'),
  figura('planas', 'quadrado.svg', 'Quadrado'),
  figura('planas', 'retangulo.svg', 'Retângulo'),
  figura('planas', 'losango.svg', 'Losango'),
  figura('planas', 'trapezio.svg', 'Trapézio'),
  figura('planas', 'paralelogramo.svg', 'Paralelogramo'),
  figura('planas', 'pentagono.svg', 'Pentágono'),
  figura('planas', 'hexagono.svg', 'Hexágono'),
  figura('planas', 'octogono.svg', 'Octógono'),
  figura('planas', 'circulo.svg', 'Círculo'),
];

export const solidos = [
  figura('solidos', 'cubo.gif', 'Cubo'),
  figura('solidos', 'paralelepipedo.gif', 'Paralelepípedo'),
  figura('solidos', 'cilindro.gif', 'Cilindro'),
  figura('solidos', 'cone.gif', 'Cone'),
  figura('solidos', 'esfera.gif', 'Esfera'),
  figura('solidos', 'piramide.gif', 'Pirâmide'),
  figura('solidos', 'prisma-triangular.gif', 'Prisma triangular'),
];

export const objetos = [
  objetoEFigura('caixa-de-leite', 'paralelepipedo', 'Paralelepípedo'),
  objetoEFigura('dado', 'cubo', 'Cubo'),
  objetoEFigura('lata', 'cilindro', 'Cilindro'),
  objetoEFigura('casquinha', 'cone', 'Cone'),
  objetoEFigura('bola', 'esfera', 'Esfera'),
  objetoEFigura('barraca', 'prisma-triangular', 'Prisma triangular'),
];

export const objetosNome = [
  objetoENome('caixa-de-leite', 'Paralelepípedo'),
  objetoENome('dado', 'Cubo'),
  objetoENome('lata', 'Cilindro'),
  objetoENome('casquinha', 'Cone'),
  objetoENome('bola', 'Esfera'),
  objetoENome('barraca', 'Prisma triangular'),
];