## **O que são apontamentos?**

No GAT Core, é usado esse termo para se referir ao registro de um possível problema que um ou mais ativos de uma determinada organização possam ter.


### **O que é uma vulnerabilidade?**

O termo vulnerabilidade é o nome dado a qualquer problema, evento ou situação que possam ser usados por um agente malicioso, ou até mesmo por um usuário desavisado, para causar todo tipo de prejuízo à tecnologia e/ou informação pertencente a uma certa organização. Elas abrangem senhas fracas, e-mails expostos, falhas em protocolos de rede, permissões de acesso inexistente ou mal-configuradas, acesso a discos rígidos descartados, dentre muitas outras possibilidades. 


### **Qual a diferença entre apontamento e vulnerabilidade?**

Um apontamento não é somente uma vulnerabilidade. É o estudo, a confirmação (ou não) da existência de, a análise e o tratamento de uma vulnerabilidade. É também a análise da falta de configurações adequadas, o registro de uma análise de pentest. Dito em outras palavras, cada apontamento é o controle da gestão de uma vulnerabilidade, mesmo quando ela não existir.


### **Qual a relação de Apontamento com Ativos?**

No GAT Core, é feito a distinção se uma vulnerabilidade está em análise pois pode estar afetando algum ativo da organização ou se é somente conhecida em teoria.

Para que ela seja considerada um Apontamento, ela precisa ter pelo menos um ativo relacionado. A existência de um apontamento implica necessariamente a presença de um ativo, uma vez que, ao tratar apenas de uma vulnerabilidade conhecida, esta seria incluída na Base de Conhecimento, não gerando um apontamento separado. E um único apontamento pode atingir um ou mais ativos ao mesmo tempo. Por outro lado, é possível existir ativos sem nenhum apontamento, o que inclusive é a situação idealizada por CISOs e gestores de Segurança da Informação. E também é possível, infelizmente, que um único ativo esteja sendo atingido por mais de um apontamento ao mesmo tempo.


### **Como surgem os Apontamentos?**

É possível incluir tais apontamentos, ou seja, problemas que possam estar atingindo ativos da organização, através dos seguintes modos: através de integrações nativas, importações de arquivos, o uso de avaliações/checklists e inserção manual.

As importações podem ocorrer através de integração com o GAT Security Score, que proporciona uma conexão constante ou atualizações contínuas. Além dela, o GAT Core também oferece integrações nativas com ferramentas líderes de mercado:  Arachni, Burp Suite, Nessus v. 7+, Qualys, Rapid7 e Tenable.IO. Feitas assim, o GAT Core fica em conexão contínua com elas, sendo populado com novos dados em tempo real. E para situações em que o monitoramento contínuo não é necessário, é possível trazer _snapshots,_ ou seja, arquivos de resultado que refletem instantaneamente o estado atual do scanner de uma dessas ferramentas com a importação de arquivos. E caso queira trazer apontamentos de outras ferramentas, é possível fazer isso através de importação de planilhas customizadas.  Essa flexibilidade permite adaptar o GAT Core às necessidades específicas da sua operação de segurança.

É também possível fazer uma gestão de apontamentos de maneira proativa, ou seja, sem esperar o resultado de varreduras convencionais. Essa estratégia envolve o uso de checklists e avaliações para identificar potenciais apontamentos antes mesmo dos resultados de varreduras. Esses apontamentos indicam áreas que podem precisar de atenção para garantir a conformidade com as normas de segurança, conhecidas como práticas de _compliance_. Essa metodologia antecipa possíveis problemas, permitindo uma abordagem mais preventiva na proteção da sua organização.


### **O que pode acontecer com eles**

Os apontamentos no GAT Core passam por um _ciclo de vida_, no qual ele existe em um destes estados: Pendente, Em tratamento, Não Existente, Em Reteste, Reaberto, Corrigido, Aceito, e Não Executado. Este ciclo pode ser um bem simples e linear: o apontamento surge como Pendente, passa por um certo tempo por Em Tratamento e no fim torna-se Corrigido. Mas nem todo ciclo será assim tão direto e curto. Os apontamentos podem ser corrigidos mas depois reabertos, ou então considerados Não Existentes e depois convertidos em Pendentes. Quando adicionados a um projeto, seja por checklist ou avaliação, os apontamentos iniciam o ciclo no estado Não Executado, indicando que ainda não foram validados quanto à existência, podendo eventualmente se tornar Pendentes ou então Corrigidos. Caso queira analisar um Caso de Uso onde mostramos como realizar o acompanhamento deste ciclo, confira esse artigo.


### **Propriedades de Apontamentos**

Todo apontamento é constituído de um conjunto de propriedades. As seguintes podem ser consultadas na listagem da tela de Apontamentos:


<table>
  <tr>
   <td>ID
   </td>
   <td>uma identificação única usada para evitar apontamentos repetidos
   </td>
  </tr>
  <tr>
   <td>NOME
   </td>
   <td>uma descrição sobre do que se trata o apontamento
   </td>
  </tr>
  <tr>
   <td>ATIVOS
   </td>
   <td>indica sobre quais ativos o apontamento possivelmente incide sobre
   </td>
  </tr>
  <tr>
   <td>ESTADO
   </td>
   <td>indica qual etapa do processo está o tratamento do apontamento
   </td>
  </tr>
  <tr>
   <td>SEVERIDADE
   </td>
   <td>um dos cinco graus: Info, Baixo, Médio, Alto, Crítico
   </td>
  </tr>
  <tr>
   <td>RESPONSÁVEL
   </td>
   <td>quem é a pessoa, ou time de pessoas, responsável em dar tratamento ao apontamento
   </td>
  </tr>
  <tr>
   <td>DATA DE CRIAÇÃO
   </td>
   <td>indica o dia que o apontamento foi inserido no GAT Core
   </td>
  </tr>
  <tr>
   <td>DATA LIMITE
   </td>
   <td>indica o prazo previsto para o tratamento do apontamento
   </td>
  </tr>
  <tr>
   <td>TAG
   </td>
   <td>tags podem ser inseridas para que apontamentos sejam colocados em grupos significativos para os gestores e agentes que usam o GAT Core
   </td>
  </tr>
  <tr>
   <td>PORTA/ PARÂMETRO VULNERÁVEL
   </td>
   <td>caso seja pertinente, indica qual porta e/ou parâmetro da URL que podem apresentar vulnerabilidades
   </td>
  </tr>
  <tr>
   <td>PROTOCOLO/MÉTODO
   </td>
   <td>caso seja pertinente, indica qual protocolo (http, ftp) e método da requisição (GET, POST) que podem apresentar vulnerabilidades
   </td>
  </tr>
  <tr>
   <td>CAUSA RAÍZ
   </td>
   <td>a natureza do risco de segurança do apontamento
   </td>
  </tr>
  <tr>
   <td>SERVIÇO
   </td>
   <td>processo rodando em plano de fundo que fica normalmente esperando por eventos ocorrerem (ex. ssh)
   </td>
  </tr>
  <tr>
   <td>ORIGEM
   </td>
   <td>de onde o apontamento veio para o GAT Core: Scan, Checklist ou inserção manual
   </td>
  </tr>
  <tr>
   <td>DATA DE ATUALIZAÇÃO
   </td>
   <td>exibe a data da última alteração feita em qualquer uma das propriedades do apontamento
   </td>
  </tr>
  <tr>
   <td>CATEGORIAS
   </td>
   <td>são usadas para encaixar o apontamento em classificações universais, tais como: "senhas", "banco de dados", "DoS" dentre outras
   </td>
  </tr>
</table>


E ao clicar sobre qualquer um dos apontamentos, surgirá um modal contendo algumas das mencionadas acima e mais:


<table>
  <tr>
   <td>NOME DA PROPRIEDADE
   </td>
   <td>DESCRIÇÃO
   </td>
   <td>ABA
   </td>
  </tr>
  <tr>
   <td>DESCRIÇÃO
   </td>
   <td>campo usado para dar mais informações sobre a vulnerabilidade
   </td>
   <td>INFO
   </td>
  </tr>
  <tr>
   <td>SEVERIDADE SCORE
   </td>
   <td>uma avaliação quantitativa a respeito do risco. Quanto maior o score, maior o risco
   </td>
   <td>INFO
   </td>
  </tr>
  <tr>
   <td>TESTE
   </td>
   <td>como averiguar a existência da vulnerabilidade
   </td>
   <td>PLANO DE AÇÃO
   </td>
  </tr>
  <tr>
   <td>RECOMENDAÇÃO
   </td>
   <td>o que se prevê que pode ser feito para tratar a vulnerabilidade
   </td>
   <td>PLANO DE AÇÃO
   </td>
  </tr>
  <tr>
   <td>MITIGAÇÃO
   </td>
   <td>o que foi feito para tratar a vulnerabilidade
   </td>
   <td>PLANO DE AÇÃO
   </td>
  </tr>
  <tr>
   <td>REFERÊNCIAS
   </td>
   <td>material de consulta a respeito da vulnerabilidade
   </td>
   <td>PLANO DE AÇÃO
   </td>
  </tr>
  <tr>
   <td>EVIDÊNCIAS
   </td>
   <td>arquivos que comprovam o tratamento dado à vulnerabilidade
   </td>
   <td>EVIDÊNCIAS
   </td>
  </tr>
  <tr>
   <td>COMENTÁRIO
   </td>
   <td>texto fornecido pelo responsável pelo apontamento
   </td>
   <td>COMENTÁRIOS
   </td>
  </tr>
  <tr>
   <td>OBSERVADORES
   </td>
   <td>adição de outras pessoas interessadas no tratamento do apontamento
   </td>
   <td>COMENTÁRIOS
   </td>
  </tr>
  <tr>
   <td>MÉTRICAS DE IMPACTO
   </td>
   <td>nível de impacto relacionados à confidencialidade, integridade e disponibilidade do ativo afetado
   </td>
   <td>SEVERIDADE
   </td>
  </tr>
  <tr>
   <td>MÉTRICAS DE EXPLORAÇÃO
   </td>
   <td>níveis relacionados a tentativas de se abusar da vulnerabilidade: vetor do ataque, complexidade do ataque, privilégios necessários e necessidade de interação do usuário
   </td>
   <td>SEVERIDADE
   </td>
  </tr>
  <tr>
   <td>IMPACTO
   </td>
   <td>uma avaliação quantitativa a respeito do impacto. Quanto maior o valor, maior o impacto
   </td>
   <td>SEVERIDADE
   </td>
  </tr>
  <tr>
   <td>PROBABILIDADE
   </td>
   <td>a chance da vulnerabilidade ser abusada. Quanto maior o valor, maior a chance
   </td>
   <td>SEVERIDADE
   </td>
  </tr>
  <tr>
   <td>HISTÓRICO
   </td>
   <td>Registra todas as alterações sofridas pelo apontamento
   </td>
   <td>HISTÓRICO
   </td>
  </tr>
</table>


 


### **Centralizando sua gestão de apontamentos**

O local mais frequente para a atualização de apontamento é através da tela de Apontamentos. Ela exibe a tabela de apontamentos de acordo com paginação e filtros:



<p id="gdcalert1" ><span style="color: red; font-weight: bold">  gd2md-html alert: inline image link here (to images/image1.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert2">Next alert</a>)<br><span style="color: red; font-weight: bold"> </span></p>


![alt_text](images/image1.png "image_tooltip")


No topo da tela de Apontamentos existem os botões: criar **Novo Apontamento** manualmente, **Exportar** para xlsx/csv,  gerar **Relatório PDF**, **Recarregar** a tabela (caso o usuário suspeite que a tabela não está atualizada com alterações feitas por outros usuários) e modificar **Filtros** aplicados à tabela:



<p id="gdcalert2" ><span style="color: red; font-weight: bold">  gd2md-html alert: inline image link here (to images/image2.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert3">Next alert</a>)<br><span style="color: red; font-weight: bold"> </span></p>


![alt_text](images/image2.png "image_tooltip")


Abaixo destes botões, há um seletor para alterar o que será listado na tela (Padrão, Categoria, Causa Raiz, Ativos ou Grupo de Ativos), um campo para buscar apontamentos, um controle de paginação, um seletor de quantos apontamentos serão exibidos por página (15, 30, 60 ou 100) e um seletor (ícone de um olho) de quais colunas serão exibidas na tabela:



<p id="gdcalert3" ><span style="color: red; font-weight: bold">  gd2md-html alert: inline image link here (to images/image3.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert4">Next alert</a>)<br><span style="color: red; font-weight: bold"> </span></p>


![alt_text](images/image3.png "image_tooltip")


No topo da tabela, é possível redimensionar a largura das colunas passando o mouse por cima da borda delas: \


<p id="gdcalert4" ><span style="color: red; font-weight: bold">  gd2md-html alert: inline image link here (to images/image4.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert5">Next alert</a>)<br><span style="color: red; font-weight: bold"> </span></p>


![alt_text](images/image4.png "image_tooltip")


Além disso, ao selecionar um ou mais apontamentos, é exibido a barra de ações abaixo, onde é possível alterar o Estado, Severidade, Responsável, Data Limite, adicionar Comentário, Editar ou Remover o(s) apontamento(s). É possível realizar todas essas ações em lote, exceto pelo botão Editar, que só pode ser utilizado individualmente. E passando o mouse por sobre a opção "Mais", é possível inserir o apontamento em: Projeto(s), Categoria(s), TAG(s) e Observador(es).



<p id="gdcalert5" ><span style="color: red; font-weight: bold">  gd2md-html alert: inline image link here (to images/image5.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert6">Next alert</a>)<br><span style="color: red; font-weight: bold"> </span></p>


![alt_text](images/image5.png "image_tooltip")


E ao clicar sobre um apontamento, é exibido o detalhamento contendo mais informação a respeito do apontamento:



<p id="gdcalert6" ><span style="color: red; font-weight: bold">  gd2md-html alert: inline image link here (to images/image6.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert7">Next alert</a>)<br><span style="color: red; font-weight: bold"> </span></p>


![alt_text](images/image6.png "image_tooltip")


Entender o que é o conceito de Apontamento com certeza trará mais confiança no seu processo de gestão, e com isso você terá mais tranquilidade, transparência e produtividade em sua rotina de uso na solução GAT Core.

 
