# AngularThingy

Este projeto foi gerado com [Angular CLI](https://github.com/angular/angular-cli) versão 18.2.12.

## Servidor de Desenvolvimento

Execute `ng serve` para iniciar um servidor de desenvolvimento. Navegue para `http://localhost:4200/`. A aplicação será recarregada automaticamente se você alterar qualquer um dos arquivos de origem.

## Criação de Código

Execute `ng generate component component-name` para gerar um novo componente. Você também pode usar `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Execute `ng build` para construir o projeto. Os artefatos de construção serão armazenados no diretório `dist/`.

## Executando Testes Unitários

Execute `ng test` para executar os testes unitários via [Karma](https://karma-runner.github.io).

## Executando Testes de Ponta a Ponta

Execute `ng e2e` para executar os testes de ponta a ponta via uma plataforma de sua escolha. Para usar este comando, você precisa primeiro adicionar um pacote que implemente capacidades de teste de ponta a ponta.

## Documentação Técnica

### Visão Geral

Este documento descreve a estrutura de um aplicativo Angular com duas telas, cada uma dividida em componentes distintos. A comunicação e parametrização entre os componentes são detalhadas, incluindo exemplos de código para facilitar a compreensão e implementação.

### Estrutura do Aplicativo

#### Tela 1: Dashboard

##### Componentes

1. **HeaderComponent**
   - **Descrição**: Componente responsável por exibir o cabeçalho da aplicação.
   - **Inputs**:
     - `title: string` - Título a ser exibido no cabeçalho.
   - **Outputs**: Nenhum.
   - **Exemplo de Uso**:
     ```html
     <app-header [title]="dashboardTitle"></app-header>
     ```

2. **CalendarComponent**
   - **Descrição**: Componente que exibe um calendário com base em datas fornecidas.
   - **Inputs**:
     - `startDate: Date` - Data inicial para o calendário.
     - `endDate: Date` - Data final para o calendário.
   - **Outputs**:
     - `onSelect: EventEmitter<Date>` - Evento emitido quando uma data é selecionada.
   - **Exemplo de Uso**:
     ```html
     <app-calendar [startDate]="startDate" [endDate]="endDate" (onSelect)="handleDateSelect($event)"></app-calendar>
     ```

#### Tela 2: User Profile

##### Componentes

1. **UserProfileComponent**
   - **Descrição**: Componente que exibe informações do perfil do usuário.
   - **Inputs**:
     - `user: User` - Objeto contendo as informações do usuário.
   - **Outputs**: Nenhum.
   - **Exemplo de Uso**:
     ```html
     <app-user-profile [user]="currentUser"></app-user-profile>
     ```

2. **UserSettingsComponent**
   - **Descrição**: Componente que permite ao usuário alterar suas configurações.
   - **Inputs**:
     - `settings: UserSettings` - Objeto contendo as configurações do usuário.
   - **Outputs**:
     - `onSettingsChange: EventEmitter<UserSettings>` - Evento emitido quando as configurações são alteradas.
   - **Exemplo de Uso**:
     ```html
     <app-user-settings [settings]="userSettings" (onSettingsChange)="handleSettingsChange($event)"></app-user-settings>
     ```
