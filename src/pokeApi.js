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