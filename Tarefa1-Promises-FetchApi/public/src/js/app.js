
var button = document.querySelector('#start-button');
var output = document.querySelector('#output');

button.addEventListener('click', function () {
  //Crie uma nova Promise aqui e use setTimeout dentro da função que você passar para o construtor
  var promise = new Promise((resolve, reject)=>{
    setTimeout(function () { // <- Guarde isso DENTRO da Promessa que você criou!
      // Resolva o seguinte URL: https://swapi.co/api/people/1
      resolve('https://swapi.dev/api/people/1');
    }, 3000);
  
  }).then((url)=>{
    return fetch(url);
  }).then((response)=>{
    return response.json();
  }).then((data)=>{
    output.innerHTML = 'Nome: ' + data.name + '<br>Altura: ' + data.height +'<br/>Cabelo:' + data.hair_color + '<br>Planeta Natal: ' + data.homeworld;
  });


  // Trata a "resposta" da Promise (=> o valor que você resolveu) e retorna um fetch()
  // chamada para o valor (= URL) que você resolveu (use uma solicitação GET)

  // Manipula a resposta da chamada fetch() e extrai os dados JSON, retorna isso
  // e manipulá-lo em outro bloco then()

  // Por fim, imprima a propriedade "name" dos dados que você recuperou (por exemplo, data.name) dentro
  // o elemento "output" (ver variáveis ​​no topo do arquivo)

  // Repita o exercício com uma solicitação PUT que você envia para https://httpbin.org/put
  // Certifique-se de definir os cabeçalhos apropriados (como mostrado na palestra)
  // Envie qualquer dado de sua escolha, certifique-se de acessá-lo corretamente ao enviá-lo
  // Exemplo: Se você enviar {person: {name: 'Max', age: 28}}, você acessa data.json.person.name
  // para enviar o nome (supondo que seu JSON analisado esteja armazenado em "dados")

  // Para finalizar a atribuição, adicione um erro à URL e adicione o tratamento do erro tanto quanto
  // um segundo argumento para then() bem como via alternativa ensinada no módulo
});