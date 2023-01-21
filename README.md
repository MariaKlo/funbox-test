# Fun Box test

Ответы на вопросы:

1.	<b>Расскажите, чем, на ваш взгляд, отличается хорошая верстка от плохой с точки зрения 
</b> 
• пользователя;

Поскольку обычный пользователь не знает, что такое вёрстка, JavaScript и всё, что с этим связано, то для пользователя главное, чтобы сайт был красивым, удобным в использовании, чётко работал и не тормозил. Если всё это есть у сайта, значит вёрстка хорошая.

• менеджера проекта; 
Менеджер проекта является не только посредником между командой и клиентом, но и отвечает за процесс разработки. Менеджер проекта может знать общий процесс веб-разработки, не вникая в детали. Для менеджера хорошая вёрстка – это та вёрстка, которая отвечает требованиям клиента и требованиям ТЗ.

• дизайнера; 
Дизайнер отвечает за UI/UX сайта. Для дизайнера хорошая вёрстка, это та вёрстка, которая соответствует дизайну сайта. 

• верстальщика; 
Поскольку верстальщик занимается непосредственно вёрсткой, то его задача сделать так, чтобы вёрстка была максимально валидной, корректно отображалась на всех устройствах, на всех разрешениях экранов, на всех браузерах, с понятным кодом и структурой проекта. Это является для верстальщика хорошей вёрсткой.

• клиентского программиста; 
Клиентский программист, это, как правило, frontend разработчик. В его задачи входит не только вёрстка, но и разработка всей клиентской части (скрипты, фреймворки, базовое взаимодействие с сервером и базой данных). Хорошая вёрстка для клиентского программиста схожа с хорошей вёрсткой для верстальщика, но к этому ещё прибавляется возможность написания хорошего скрипта для добавления сложной анимации, взаимодействия с сервером, скроллинг, карусели и прочую пользовательскую логику.

• серверного программиста.
Серверный программист работает с сервером, и для него хорошая вёрстка – это та вёрстка, где понятная структура и где можно легко понять, какая часть вёрстки должна взаимодействовать с серверной частью.

2.	<b>Опишите основные особенности верстки крупных многостраничных сайтов, дизайн которых может меняться в процессе реализации и поддержки. </b>
При вёрстке главное использовать те компоненты, которые можно легко поддерживать и использовать в другом месте. Есть несколько способов для создания таких компонентов. 
<b>Расскажите о своем опыте верстки подобных сайтов: какие методологии, инструменты и технологии вы применяли на практике.</b>
Есть созданный многостраничный консалтинговый сайт с использованием методологии БЭМ. БЭМ позволила сделать независимые блоки, которые в последствии были изменены (нужно было исправить несоответствия в pixel perfect) 

3.	<b>Опишите основные особенности верстки сайтов, которые должны одинаково хорошо отображаться как на любом современном компьютере, так и на смартфонах и планшетах под управлением iOS и Android. Расскажите о своем опыте верстки подобных сайтов: какие инструменты и технологии вы применяли, как проверяли результат на различных устройствах, какие именно устройства требовалось поддерживать.</b>
Чтобы сайт хорошо отображался на всех устройствах, нужно учитывать следующие факторы:
- экран. Есть ретина-экраны, где плотность пикселей на квадратный дюйм повышена. Такие экраны есть у Apple. При вёрстке может получиться так, что сайт хорошо отображается на Android, но плохо на iOS. 
- размеры экранов. Здесь нужно сверстать адаптивные (или резиновые) страницы, которые будут корректно отображаться на всех экранах: большие, средние, маленькие. В Chrome есть возможность проверять верстку разного размера, и я верстаю адаптивные страницы именно при помощи Chrome.
- браузеры. Не все браузеры поддерживают современные HTML-теги и CSS-свойства. Поэтому важно использовать более старые теги и свойства. Совместимость тегов и свойств я проверяю на сайте caniuse.

4.	<b>Расскажите, какие инструменты помогают вам экономить время в процессе написания, проверки и отладки кода.</b>
Я использую VSCode для написания кода. В этом редакторе есть автозаполнение кода, prettier, eslint – всё это делает код более читаемым и чистым.
Для работы с Git я использую Git Bash. Для сжатия картинок использую kraken.io и svgo. Панель разработчика в Google Chrome для отладки кода.

5.	<b>Вам нужно понять, почему страница отображается некорректно в Safari на iOS и в IE на Windows. Код писали не вы, доступа к исходникам у вас нет. Ваши действия? Сталкивались ли вы с подобными проблемами на практике?</b>
В каждом браузере есть инструменты разработчика, которые позволяют взглянуть на код. С подобными ситуациями на практике сталкиваться не приходилось (всегда были исходники).

6.	<b>Дизайнер отдал вам макет, в котором не показано, как должны выглядеть интерактивные элементы при наведении мыши. Ваши действия?</b>
Спросить дизайнера, как именно должен выглядеть элемент при наведении мыши. Если дизайнер недоступен, то сделать несложный и базовый эффект.

7.	<b>Какие ресурсы вы используете для развития в профессиональной сфере? Приведите несколько конкретных примеров (сайты, блоги и так далее). </b>
У меня много источников, но самые основные это следующие:
Учебные материалы:
- книги (как, например, JavaScript: сильные стороны, Дуглас Крокфорд)
Сайты:
- learn.javascript.ru – качественные статьи про javascript, браузерные события, css-свойства
- канал на YouTube “WebMaster”. Там показывают, как верстать сайты с красивой и нестандартной анимацией.
- мобильное приложение dev community, там я читаю новости и блоги разработчиков со всего мира.

<b>Какое направление развития вам более близко: JS-программирование, HTML/CSS-верстка или что-то ещё? </b>
Мне более близко JS-программирование и frontend (с использованием фреймворков). 
<b>Какие ещё области знаний, кроме тех, что непосредственно относятся к работе, вам интересны?</b>
Я интересуюсь психологией. Психология помогает мне прокачать soft-skills.
Изучаю иностранные языки: английский C1. В данный момент изучаю немецкий (сейчас уровень A1).
Занимаюсь йогой для поддержания здоровья.

8. <b>Расскажите нам о себе и предоставьте несколько ссылок на последние работы, выполненные вами.</b>