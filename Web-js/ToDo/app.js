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

(function (arrOfTasks) {
  // Переобразовываем массив объектов в объект объектов. (*)
  const objOfTasks = arrOfTasks.reduce((acc, task) => {
    acc[task._id] = task
    return acc
  }, {})

  // Elemts UI.
  // Нашли контейнер, куда будем добавлять задачи.
  const listContainer = document.querySelector('.tasks-list-section .list-group');
  listContainer.style.background = "#f7f0f0";

  const incompleteTasksBtn = document.querySelector('.incomplete-tasks');

  // Находим форму.
  const form = document.forms['addTask'];
  // Находим inputTitle через форму.
  const inputTitle = form.elements['title'];
  // Находим inputBody через форму.
  const inputBody = form.elements['body'];

  // Events
  // Получает на вход объект задач.
  checkEmptyListFrom(objOfTasks);
  renderAllTasks(objOfTasks);
  // На форму вешаем обработчик событий 'submit', функцию onFormSubmitHandler.
  form.addEventListener('submit', onFormSubmitHandler);
  // Повесили обработчик на весь список, в которой генерируется задача. Т.к. все элементы генерируются через JS и нет прямого доступа.
  listContainer.addEventListener('click', onDeletehandler);
  listContainer.addEventListener('click', onPerformedhandler);
  incompleteTasksBtn.addEventListener('click', onShowIncompleteTasks)

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
  function listItemTemplate({ _id, title, body } = {}) {
    const li = document.createElement('li');
    li.classList.add('list-group-item', 'mt-2')
    // При гинерации атрибут id добавляем на элемент, чтобы в дальйнешм опредять какой элемент нужно удалить.
    li.setAttribute('data-task-id', _id)

    const span = document.createElement('span');
    span.textContent = title;
    span.style.fontWeight = 'bold';

    const article = document.createElement('p');
    article.textContent = body;
    article.classList.add('mt-2', 'w-100');

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = "Delete task";
    deleteBtn.classList.add('btn', 'btn-danger', 'delete-btn')

    const performedBtn = document.createElement('button');
    performedBtn.textContent = "Done";
    performedBtn.classList.add('btn', 'btn-success', 'performed-btn')

    const divGroupBtn = document.createElement('div');
    divGroupBtn.classList.add('d-flex', 'justify-content-between')
    divGroupBtn.appendChild(performedBtn);
    divGroupBtn.appendChild(deleteBtn);  
   
    li.appendChild(span);
    li.appendChild(article);
    li.appendChild(divGroupBtn);

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

  function deleteTask(id) {
    // Вытягиваем title задачи для подтверждения удаления.
    const { title } = objOfTasks[id];
    const isConfirm = confirm(`Вы действительно хотите удалить задачу ${title}`);
    if (!isConfirm) return isConfirm;
    // Удаляем задачу из списка задач.
    delete objOfTasks[id];
    return isConfirm;
  }

  //! проверка на пустоту
  function checkEmptyListFrom(tasksList) {
    const emptyTitle = document.querySelector('.title-empty')
    if (!Object.keys(tasksList).length) {
      emptyTitle.classList.remove('d-none')
    } 
  }

  function deleteTaskFromHtml(confirmed, el) {
    // Если подверждения не было, то ничего не делаем, иначе удаляем.
    if (!confirmed) return;
    el.remove();
  }

  function perfomedTaskFromHtml(el) {
    el.classList.add('.bg-info');
    el.classList.toggle('bg-info')
  }

  // Определяет на кого произошел клик.
  function onDeletehandler({ target }) {
    // Если по кнопке.
    if (!target.classList.contains('delete-btn')) {
      return
    } 
     // То находим родителя кнопки.
     const parent = target.closest('[data-task-id]');
     // Получаем id задачи.
     const id = parent.dataset.taskId;
     // Получаем статус удаления задачи (true, false).
     const confirmed = deleteTask(id);
     // Передаем статус удаления и элемента, которого хотим удалить.
     deleteTaskFromHtml(confirmed, parent);
     checkEmptyListFrom(objOfTasks);
  }

  //! ДЗ - 2 задачка
  function onPerformedhandler({ target }) {
    if (!target.classList.contains('performed-btn')) {
      return
    }
    const parent = target.closest('[data-task-id]');
    const id = parent.getAttribute('data-task-id')
    objOfTasks[id].completed = true;
    perfomedTaskFromHtml(parent)
  }

  function onShowIncompleteTasks() {
    let completeTasks = getCompleteTasks()

    hideTasks(completeTasks)
    checkEmptyListFrom(objOfTasks);
  }

  function getCompleteTasks() {
    let completedTasks = [];
    Object.keys(objOfTasks).forEach(id => {
      if (objOfTasks[id].completed) {
        completedTasks.push(objOfTasks[id])
      }
    })
    return completedTasks
  }

  function hideTasks(tasks) {
    tasks.forEach(task => {
      hideTask(task._id)
    })
  }

  function hideTask(taskId) {
    const parent = document.querySelector(`[data-task-id="${taskId}"]`)
    parent.classList.add('d-none')
  }
})(tasks);





/*
 (*) Это упрощает доступ к каждой задачи. Потому что будем знать id отдельной задачи и по ключу получить доступ к задаче - удалить, изменить и т.п.


 //! ДЗ
 1. Если массив с задачами пустой то под формой нужно выводить сообщение об этом, также это же сообщение нужно выводить если вы удалите все задачи.
 2. В каждый элемент li добавить кнопку которая будет делать задачу выполненной. завершенные задачи должны быть подсвечены любым цветом.
 3. Добавить функционал отображения незавершенных задач и всех задач. т.е у вас будет две кнопки над таблицей 1-я "показать все задачи" и 2-я "показать незавершенные задачи", определить завершена задача или нет можно по полю completed в объекте задачи.  По умолчанию при загрузке отображаются все задачи. 
 */