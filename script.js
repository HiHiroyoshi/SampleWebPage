// DOM要素を取得
const taskInput = document.getElementById('new-task');
const addTaskBtn = document.getElementById('add-task-btn');
const taskList = document.getElementById('tasks');

// タスクを追加する関数
function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === '') return alert('Please enter a task.');

    // タスクのリストアイテムを作成
    const taskItem = document.createElement('li');
    taskItem.textContent = taskText;

    // 完了ボタンを作成
    const completeBtn = document.createElement('button');
    completeBtn.textContent = 'Complete';
    completeBtn.onclick = () => {
        taskItem.style.textDecoration = 'line-through';
        completeBtn.remove();
    };

    // 削除ボタンを作成
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.onclick = () => taskItem.remove();

    // ボタンをタスクに追加
    taskItem.appendChild(completeBtn);
    taskItem.appendChild(deleteBtn);

    // タスクをリストに追加
    taskList.appendChild(taskItem);

    // 入力フィールドをクリア
    taskInput.value = '';
}

// イベントリスナーを設定
addTaskBtn.addEventListener('click', addTask);
taskInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') addTask();
});
