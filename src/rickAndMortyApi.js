const body = document.body

function percorrerItens (array) {
    const percorrerArray = array.forEach ((obj) => {

        let cardProduto = criarCard(obj)
        return cardProduto
    })

    return percorrerArray
}

function criarCard (produto) {
    const { name, status, location, species, image } = produto

    let tagLi = document.createElement("li")
    let tagNome = document.createElement("h1")
    let tagStatus = document.createElement("span")
    let tagCidade = document.createElement("p")
    let tagSpecie = document.createElement("p")
    let tagImg = document.createElement("img")
    let tagDiv = document.createElement("div")

    tagNome.innerText = `Nome: ${name}`
    tagStatus.innerText = `Vivo: ${status}`
    tagCidade.innerText = `Cidade: ${location.name}`
    tagSpecie.innerText = `Espécie: ${species}`
    tagImg.src = image

    const tagUl = document.querySelector("ul")

    tagDiv.append(tagNome, tagStatus, tagSpecie, tagCidade)
    tagLi.append(tagImg, tagDiv)
    tagUl.append(tagLi)

    return tagLi

}

async function getCharacter () {
    const personagens = await fetch("https://rickandmortyapi.com/api/character/")
    .then((res) => res.json())
    .then(({results}) => {
        percorrerItens(results)
    })
    .catch((err) => console.log(err))

    return personagens
}
getCharacter()

