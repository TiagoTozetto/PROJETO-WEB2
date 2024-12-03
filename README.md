# PROJETO-WEB2
ANEXO A -- PROJETO 1 DA DISCIPLINA DE PROGRAMAÇÃO PARA
WEB 2 - 2º SEMESTRE DE 2024
A.1 REQUISITOS DO SISTEMA
Deve-se desenvolver um sistema web que será um portfólio web de todos os alunos
do Curso de Bacharelado em Engenharia de Software. Devem poder acessar esse portfólio
os alunos, um administrador do sistema e qualquer usuário externo.
A.1.1 REQUISITOS DO USUÁRIO ALUNO
1.1 - Fazer Login: O aluno não pode se autocadastrar no sistema, mas deve poder
fazer login.
1.2 - Cadastrar Projetos: Os alunos devem poder cadastrar todos os seus projetos,
que devem ser vinculados a palavras-chave previamente cadastradas no sistema. Um
projeto pode estar vinculado a quantas palavras-chave o aluno desejar. Deve existir um
relacionamento de muitos para muitos (N para N) entre a tabela de projetos e a tabela de
palavras-chave. Cada projeto deve ter um nome, um resumo, e um link externo (pode ser
o link do GitHub).
1.3 - Cada projeto pode ser desenvolvido por mais de um aluno. Nesse caso,
um único aluno pode cadastrar o projeto, mas todos os alunos vinculados ao projeto se
tornam desenvolvedores e podem editar todos os seus dados (inclusive trocar ou remover
palavras-chave e/ou alunos cadastrados como desenvolvedores).
1.4 - Cada aluno pode cadastrar seus conhecimentos e definir seu nível em cada um
(em uma escala de 0 a 10). Todos os conhecimentos devem estar previamente cadastrados
no sistema. Um aluno pode ter zero ou mais conhecimentos.
1.5 - Cada aluno pode editar e/ou excluir seus projetos, as palavras-chave de cada
projeto e seus próprios conhecimentos.
iii
A.1.2 REQUISITOS DO USUÁRIO ADMINISTRADOR
1.6 - O administrador deve poder, quando logado no sistema, cadastrar, listar,
editar e excluir alunos, palavras-chave e conhecimentos no sistema.
A.1.3 REQUISITOS DO USUÁRIO EXTERNO
1.7 - O usuário externo deve poder, sem estar logado no sistema, visualizar todos
os projetos desenvolvidos pelos alunos.
1.8 - O usuário externo deve poder, sem estar logado no sistema, visualizar todos
os projetos vinculados a uma palavra-chave que ele tenha escolhido (entre as palavras-chave
já cadastradas no sistema).
1.9 - O usuário externo deve poder visualizar um relatório com a proporção de
alunos que dominam cada um dos conhecimentos cadastrados no sistema.
A.2 CONFIGURAÇÃO DOS GRUPOS
O projeto pode ser desenvolvido de forma individual, em duplas ou em grupos de,
no máximo, três pessoas.
A.3 TECNOLOGIAS QUE DEVEM SER UTILIZADAS
• O sistema deve ser desenvolvido com as tecnologias apresentadas na disciplina para
o desenvolvimento de uma aplicação web seguindo o estilo arquitetural MVC. Caso
o aluno queira utilizar uma tecnologia diferente, deve:
– Consultar o professor e obter sua aprovação.
– Desenvolver o trabalho sozinho (ou seja, individualmente).
A.4 ARTEFATOS QUE DEVEM SER ENTREGUES
Deve-se entregar todo o projeto do software (com exceção da pasta node_modules)
compactado em um único arquivo .rar.iii
A.5 PROCESSO DE AVALIAÇÃO
A nota será atribuída de acordo com a porcentagem de funcionalidades desenvolvidas
e apresentadas (50%) ao professor em uma prova de autoria (50%), que deve ser
realizada presencialmente.
Se o aluno apenas enviar o projeto e não fizer a apresentação, a nota atribuída
será zero.
