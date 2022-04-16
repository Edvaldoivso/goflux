# Teste goFlux Desenvolvedor Pleno/Sênior - goTruck

Oi, é um prazer ter você aqui, mas preciso da sua ajuda, tivemos a idéia do século, sério, aposto que nunca ouviu isso antes... Eu preciso que você me ajude a finalizar um projeto, ele é incrível, vou te explicar.

A gente precisa de um sistema onde **embarcadores** possam divulgar suas **ofertas** de cargas para suas **transportadoras** afiliadas. Os **usuários membros** de uma embarcadora precisam conseguir criar uma nova oferta de carga contendo um **produto em determinada quantidade**, que deve ser entregue de um endereço até outro.

Depois que essa oferta for criada, todas as transportadoras afiliadas vão conseguir ver, e por sua vez, vão poder dizer qual o volume que podem carregar, e quanto cobram por isso, dando um lance nessa oferta.

Esses lances são visíveis para a embarcadora, que deve escolher um vencedor, que vai ser a transportadora responsável por levar aquela carga.

A gente só precisa garantir que apenas as transportadores afiliadas possam ver essas ofertas. Isso inclui todos os funcionários de tal transportadora.

Tá bom, agora que te falei um pouco do que preciso, vou te mostrar melhor, olha só:

Uma embarcadora vai ter N funcionários, que podem criar ofertas no sistema.

uma oferta precisa ter um endereço de coleta, e um endereço de entrega, assim como um produto a ser transportado e qual quantidade desse produto está disponível.

Assim que criada, essa oferta vai aparecer para os funcionários das transportadoras afiliadas à embarcadora que a criou. 

Uma embarcadora pode ter N transportadoras vinculadas, assim como uma transportadora pode ser vinculada a N embarcadoras.

Esses funcionários podem dar lances nessa oferta, dizendo qual quantia podem transportar, e quanto cobram por essa quantia.

A embarcadora vai poder ver suas ofertas criadas, e também em detalhe, poderão ver os lances nessas ofertas.

Um lance é composto por uma quantia em volume que não pode ser maior que o volume disponível para carga, e um preço por esse volume.

Uma oferta é finalizada uma vez que o volume total dela foi "leiloado"

A embarcadora, na visão em detalhe de uma oferta, pode selecionar um lance vencedor, fazendo com que aquela quantia de volume proposto seja removido do volume total da oferta.

## Sua aplicação precisa cumprir o seguinte:

- Ter autenticação;
 
- Um usuário precisa pertencer a uma empresa;
 
- Uma empresa pode ser uma embarcadora, ou transportadora;

- Apenas funcionários de uma embarcadora podem criar ofertas;
 
- Transportadoras só conseguem ver ofertas criadas por embarcadoras nas quais elas estão atreladas;
 
- Transportadoras devem conseguir dar lances em uma oferta;
 
- Embarcadores devem conseguir declarar um lance como vencedor;
 

## Diferenciais:

- Testes unitários;

- Docker ou alguma outra tecnologia para setup do projeto
