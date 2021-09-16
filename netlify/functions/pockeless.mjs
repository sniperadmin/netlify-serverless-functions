import fetch from 'node-fetch'

exports.handler = async function (event, context) {
  const eventbody = JSON.parse(event.body)
  const POKE_API = 'https://pokeapi.co/api/v2/pokedex/' + eventbody.region

  response = await fetch(POKE_API)

  const data = await response.json()

  return {
    statusCode: 200,
    body: JSON.stringify(data.pokemon_entries)
  }
}
