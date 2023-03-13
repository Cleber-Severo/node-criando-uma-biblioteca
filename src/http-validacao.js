function extraiLinks(arrLinks) {
  return arrLinks.map((objetoLink) => Object.values(objetoLink).join())  
}

export default function lsitaValidada (listaDeLinks) {
    return extraiLinks(listaDeLinks);
}