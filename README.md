Ответы на вопросы к 5у уроку. --//--

Какая форма лучше для большого проекта?
Для большого проекта - Reactive forms.
Это новый подход для работы с формами в реактивном стиле. Описание формы происходит в компоненте в виде дерева объектов, после чего это дерево связывается с шаблоном. Все манипуляции (проверка валидности, подписка на изменение значения и прочее) производятся в компоненте, что делает работу более гибкой, удобной и предсказуемой.


Ответы на вопросы к 4у уроку. --//--

Почему мы должны использовать геттер и сеттер вместо того, чтобы просто устанавливать переменную в сервисе?
Getters и Setters это специальные функции которые используются для управления свойствами доступа класса. Они по сути предоставляют неограниченное количество возможностей как можно написать реактивный и динамический функционал, в работе с обьектами. Get() - возвращает новое значение, эта функция работает как обычное поле в обьекте. 
Тоже самое косается значения set().

Как установить значение по умолчанию для свойства @Input ()
В Angular2+ мы можем передавать значение переменной между двумя компонентами (от родителя к потомку) с помощью декоратора Input. Используя эти декораторы Input, также можно установить значения свойств по умолчанию
@Input() foo: string = 'bar';


В чем разница между @ViewChild () и @ContentChild ()?
Разница между @ViewChildren и @ContentChildren заключается в том, что @ViewChildren ищет элементы в Shadow DOM, а @ContentChildren - в Light DOM.
Shadow DOM - это внутренний DOM компонента, который определен разработчиком (как создателем компонента) и скрыт от конечного пользователя.
Light DOM - это DOM, который конечный пользователь компонента поставляет в компонент разработчика.

Почему мы добавляем providedIn: «root»?
Cпособ внедрения зависимостей в Angular providedIn: 'root'
Можно представить providedIn как внедрение зависимостей в обратном направлении: раньше в модуле описывались сервисы, в которые он будет подключен, теперь в сервисе определяется модуль, к которому его подключать.
Сервис может быть внедрен в корень приложения(providedIn: 'root') или в любой модуль (providedIn: SomeModule). providedIn: 'root' является сокращением для внедрения в AppModule.

Ответы на вопросы к 3у уроку. --//--

Разница между Структурными и Атрибутивными директивами.

Структурная директива - используются для того что бы работать с шаблонами и влияют на то как будет отрендерен DOM еще до того как попал на страницу.
Используются директвы с * - например *ngIf *ngSwitch *ngFor.
Атрибутные директвы - используются для того что менять DOM который уже отрендерен на странице. Например использует директвы и [ngStyle] и [ngClass] и тд.

что такое trackByFn?
trackByFn используется при перебора массива директивой *ngFor. trackByFn используется для оптимизации производительности. А если использовать trackBy Angular будет изменять DOM только для этого конкретного элемента. Если использовать trackBy angulat будет изменять dom дерево для конкретного отличного элемента не обновляя все DOM-дерево.

Какая разница между ngIf и display: none?
Директива ngIf полностью удаляет элеиент со страницы и DOM-дерева(если условие его отображения не потвердилось). При использовании display: none элемент скрывается со страницы но не удаляется из DOM. При использовании display: none елемент просто скрывается, не исчезая из DOM-дерева. ngIf лучше для оптимизации и производительности.

Обьяснить decimal pipe
Decimal pipe позволяют форматировать отображаемые значения, именно числа,number. В качестве параметра принимает формат числа в виде шаблона:
{{ value | number [ : digitsInfo [ : locale ] ] }}
value: само выводимое значение
digitsInfo: строка в формате "minIntegerDigits.minFractionDigits-maxFractionDigits", где
minIntegerDigits — минимальное количество цифр в целой части
minFractionDigits — минимальное количество цифр в дробной части
maxFractionDigits — максимальное количество цифр в дробной части
locale: код применяемой культуры


Ответы на вопрос к 2у уроку. --//--

Package.json - что это,зачем он нужен. Он хранит список пакетов, необходимых для работы проекта.
Например если в node_modules у нас лежат некоторые пакеты установки(через npm например). На гит эту папку обычно не заливают, из-за ее большого обьема. Рackage.json хранит пакеты которые нужны что запустить наш проект на другой "машине". в моем проекте видны пакеты nglint'a и компоненты material design системы ангуляра.


Что такое NPM 
- это менеджер пакетов устанавливается автоматически вместе с node.js. NPM - используется для скачинивания\загрузки пакетов из облачного сервера.
Например:
npm i @angular/cli - установка CLI Ангуляр
npm install -g sass - установка препроцессора css.


Какова цель папок с ресурсами: main.ts, angular.json, index.html, assets;

При запуске приложения первым выполняется код, который определен в файле main.ts, он служит отправной точкой для модуля приложения. Генерируется с использованием angular-cli
Например вторая строка импортирует функциональность модуля platformBrowserDynamic из пакета angular/platform-browser-dynamic.Далее platformBrowserDynamic использует bootstrapModule для загрузки нужного модуля.
То есть фактически здесь platformBrowserDynamic запускает импортированный во второй строке модуль AppModule. 
После этого начинает работать вся логика, которая заложена в модуле AppModule, который представляет главный модуль приложения. Больше ничего файл main.ts не делает.
Angular.json - главный конфигурационный файл Angular Workspace (папка my-app), сгенерированного с использованием angular-cli и объединяющего в себе множество проектов (само приложение и созданные библиотеки для него). Ссылается на main.ts для обработки запуска приложения
index.html - главный html файл которые генерируется с использованием angular-cli. в него подргружаются все компоненты.
Assets - папка где хранятся различные исходники для проекта. Фав-ико, шрифты, стили, изображения,и прочее.

Глупые и умные компоненты

Глупые компоненты:
не зависят от остальной части приложения.
имеют свои стили
изредка имеют свой state
могут использовать другие глупые компоненты
примеры: Page, Sidebar, Story, UserInfo, List

Умные компоненты:
оборачивает один или несколько глупых или умных компонентов
хранит состояние стора и пробрасывает его как объекты в глупые компоненты
обеспечивает глупые компоненты в виде колбэков
никогда не имеют собственных стилей
редко сами выдают DOM, используйте глупые компоненты для макета
примеры: UserPage, FollowersSidebar, StoryContainer, FollowedUserList

//---------------------------------------------------------------------//--------------------------------------------------------
в Eslint- поставил проверку на наличие alt у img
//---------------------------------------------------------------------//---------------------------------------------------------

Ответы на вопросы к 1у уроку. --//--

Что такое SPA.

SPA - Single page application, оно же одностраничное приложение. Его особенностью заключается в том что все необходимые элементы для работы софта находятся на одной странице.
Они загружаются при его инциализации. Так же такое приложение может загружать допольнительные модули после запроса со стороны пользователя. Такое приложение как-бы работает на одной странице и не требует перезагрузки для обновление "контента" или данных. При загрузке новых модулей,конент обновляется частично,из-за отсутсвия необходимости повторно загружать страницу, не исключая навигации по приложению пользователей. Т.е. возможность скопировать ссылку и открыть софт на любом доступном этапе, другой вкладке, устройстве и тд не исключается. 
СПА имеет ряд преймушеств перед многостраничным приложением.
Скорость - оно работает в разы быстрее из-за особенности своей архитектуры, отстутсвие необходимости перезагрузки страницы, отстусвие повторной загрузки неизмененных элементов.
Универсальность и доступность - Использование с практического любого устройства,поддерживающее интернет соеднение и js.
Упрощенная разработка - разработчикам доступно не мало готовых решений для создания своего приложения.

Разница между фреймворком и библиотекой:
Абстрактно выражаясь библиотека это набор готовых решений, которые можено использовать как и когда захочется. Фреймворк же накладывает опреденный стиль программирования, его элементы связаны между собой и требуют. Наример библиотека jQuery разработчик может использовать ее методы\скрипты при не обходимости. Фреймворк Angular - "говорит" что ему нужно,и когда нужно использовать различные методы, инверсия контроля требует от разработчика ряда уступок при проектировании приложения. При этом различии часто используется,субьективное понятие  opinionated и un-opinionated. Эта оценка основывается на уровне свободы, который имеет разработчик при структурировании кода.

Преймушества Angular
1)это рили фреймворк. Разработка большого проекта будет большим плюсом, из-за стандартна кодирования ,общего стиля и архитектуры.
2)Typescript.  Обеспечивает простую навигацию по коду, предотвращение ошибок и поддержку кода. Он поддерживает статическую типизацию.
3)Модули.  Сервисы, определенные в модуле, доступны всему приложению. То есть контроллеры отдельно, вьюхи отдельно и т.д.
4)Развитие и поддержка. Растущее комьюнити
5)CLI.

Зачем CLI - 
Используется для построенния приложений, тестирования и проверки кода на наличие программных, а также стилистических ошибок
Cоздать компонент - 
ng generate component this_is_be_component

DRY - максимальное снижение повторения кода. то-есть те же dumb компоненты по сути относятся к хорошему примеру DRY. 

# Test

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.10.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
