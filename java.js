let characters =JSON.parse(poke_file).result
let character_input =document.getElementById("escribirPokemon")
let character_info =document.getElementById("nombrePokemon")
let character_tipo =document.getElementById("TipoPokemon")
let character_img =document.getElementById("imagenPokemon")
let character_peso =document.getElementById("descripcionPokedex")
let character_numero =document.getElementById("descripcionPokedex")
let character_altura =document.getElementById("descripcionPokedex")
let character_abilities =document.getElementById("descripcionPokedex")



function find_character()
{
    let input_value=character_input.value;
    let resultPokemon=find_result(input_value);

    character_info.innerHTML=`
    <p>Nombre: ${resultPokemon.name}</p>
    `;
    character_tipo.innerHTML=`
    <p>Tipo: ${resultPokemon.type}</p>
    `;

    character_img.innerHTML=`
    <img alt="ImagenPokemon" src="${resultPokemon.ThumbnailImage}">
    `;
     character_altura.innerHTML=`
    <p>No.: ${resultPokemon.number}</p>

    <p>abilities: ${resultPokemon.abilities}</p>
    
    <p>Peso: ${resultPokemon.weight} kg</p>

    <p>Altura: ${resultPokemon.height} cm</p>
    `;

}
function find_result(input_value)
{
    for(let i=0; i<characters.length;i++)
    {
        if(characters[i].number == input_value)
        {
            return characters[i]
        }
    }
    for(let i=0; i<characters.length;i++)
    {
        if(characters[i].name == input_value)
        {
            return characters[i]
        }
    }
}