const tasks = [
  {
    _id: '5d2ca9e2e03d40b326596aa7',
    completed: true,
    body:
      'Occaecat non ea quis occaecat ad culpa amet deserunt incididunt elit fugiat pariatur. Exercitation commodo culpa in veniam proident laboris in. Excepteur cupidatat eiusmod dolor consectetur exercitation nulla aliqua veniam fugiat irure mollit. Eu dolor dolor excepteur pariatur aute do do ut pariatur consequat reprehenderit deserunt.\r\n',
    title: 'Eu ea incididunt sunt consectetur fugiat non.',
  },
  {
    _id: '5d2ca9e29c8a94095c1288e0',
    completed: false,
    body:
      'Aliquip cupidatat ex adipisicing veniam do tempor. Lorem nulla adipisicing et esse cupidatat qui deserunt in fugiat duis est qui. Est adipisicing ipsum qui cupidatat exercitation. Cupidatat aliqua deserunt id deserunt excepteur nostrud culpa eu voluptate excepteur. Cillum officia proident anim aliquip. Dolore veniam qui reprehenderit voluptate non id anim.\r\n',
    title:
      'Deserunt laborum id consectetur pariatur veniam occaecat occaecat tempor voluptate pariatur nulla reprehenderit ipsum.',
  },
  {
    _id: '5d2ca9e2e03d40b3232496aa7',
    completed: true,
    body:
      'Occaecat non ea quis occaecat ad culpa amet deserunt incididunt elit fugiat pariatur. Exercitation commodo culpa in veniam proident laboris in. Excepteur cupidatat eiusmod dolor consectetur exercitation nulla aliqua veniam fugiat irure mollit. Eu dolor dolor excepteur pariatur aute do do ut pariatur consequat reprehenderit deserunt.\r\n',
    title: 'Eu ea incididunt sunt consectetur fugiat non.',
  },
  {
    _id: '5d2ca9e29c8a94095564788e0',
    completed: false,
    body:
      'Aliquip cupidatat ex adipisicing veniam do tempor. Lorem nulla adipisicing et esse cupidatat qui deserunt in fugiat duis est qui. Est adipisicing ipsum qui cupidatat exercitation. Cupidatat aliqua deserunt id deserunt excepteur nostrud culpa eu voluptate excepteur. Cillum officia proident anim aliquip. Dolore veniam qui reprehenderit voluptate non id anim.\r\n',
    title:
      'Deserunt laborum id consectetur pariatur veniam occaecat occaecat tempor voluptate pariatur nulla reprehenderit ipsum.',
  },
];

(function(arrOfTasks) {
  // переводив массив объектов в объект объектов. (1)
  const objOfTasks = arrOfTasks.reduce((acc, task) => {
    acc[task._id] = task 
    return acc
  }, {})

  // Elemts UI.
  // Нашли контейнер, куда будем добавлять задачи.
  const listContainer = document.querySelector('.tasks-list-section .list-group');
  // Находим форму.
  const form = document.forms['addTask'];
  // Находим inputTitle через форму.
  const inputTitle = form.elements['title'];
  // Находим inputBody через форму.
  const inputBody = form.elements['body'];

  // Events
  // Получает на вход объект задач.
  renderAllTasks(objOfTasks);
  // На форму вешаем обработчик событий 'submit', функцию onFormSubmitHandler.
  form.addEventListener('submit', onFormSubmitHandler);

  function renderAllTasks(tasksList) {
    // Проверят перед ли объект задачи.
    if (!tasksList) {
      console.error("Передайте список задач!");
      return
    }

    // Создаем фрагмент, будущего списка задачими, для того чтобы не добавлять задачи по одной.
    // тем самым не вызывая каждый раз перерисовку дома.
    const fragment = document.createDocumentFragment();

    // Перебираем список задач.
    Object.values(tasksList).forEach(task => {

      // На каждой итерации 1 задачу передаем передаем в функцию.
      // Где получаем 1 дом элемент наполненый.
      const li = listItemTemplate(task);

      // Добавляем его во фрагмент.
      fragment.appendChild(li);
    })

    // После перебора списка задач, добавляем в лист-контейнер, наш весь фрагмент.
    listContainer.appendChild(fragment)
  }

  // Занимается генерацией 1-го элемента списка, основыясь на нашей задачей,
  // которую сюда передали, основываясь на таске и возвращает li.
  function listItemTemplate( { _id, title, body } ={}) {
    const li = document.createElement('li');
    li.classList.add('list-group-item', 'd-flex', 'align-items-center' ,'flex-wrap', 'mt-2')
    const span = document.createElement('span');
    span.textContent = title;
    span.style.fontWeight = 'bold';

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = "Delete task";
    deleteBtn.classList.add('btn', 'btn-danger', 'ml-auto', 'delete-btn')

    const article = document.createElement('p');
    article.textContent = body;
    article.classList.add('mt-2', 'w-100');

    li.appendChild(span);
    li.appendChild(deleteBtn);
    li.appendChild(article);

    return li;
  }


  function onFormSubmitHandler(e) {
    // Отменяем перезагрузку страницы и отменяем отправку форму. (Прекращаем стандартное действие)
    e.preventDefault();

    // Находим значения title и body.
    const titleValue = inputTitle.value;
    const bodyValue = inputBody.value;

    // Проверяем есть ли значения.
    if (!titleValue || !bodyValue) {
      alert('Пожалуйста введите title и body');
      return
    }

    // Получаем копию новой задачи.
    const task = createNewTask(titleValue, bodyValue);

    // Получем дом объект с помощью функции listItemTemplate шаблон элемента списка на основе созданой задачи.
    const listItem = listItemTemplate(task);

    // Добавлем новый дом объекта в самое начала списка задач.
    listContainer.insertAdjacentElement('afterbegin', listItem);
   
    // Ощищаем форму, после добавления задачи.
    form.reset();
  }

  // Создает 1 объект задачи, в которой записываем title и body, переданные из обработчика.
  function createNewTask(title, body) {
    const newTask = {
      title, 
      body,
      completed: false,
      // Генерируем рандомный id.
      _id: `tak-${Math.random()}`,
    };

    // Новую задачу добавляем в список всех задач.
    objOfTasks[newTask._id] = newTask;

    // Возвращаем копию новой задачи.
    return { ...newTask }
  }
})(tasks);





/*
1. Это упрощает доступ к каждой задачи. Потому что будем знать id отдельной задачи и по ключу получить доступ к задаче - удалить, изменить и т.п.
*/