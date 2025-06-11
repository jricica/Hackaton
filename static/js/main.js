const tasks = [
    {name: 'Material', type: 'material', duration: '30m'},
    {name: 'Discusión', type: 'discussion', duration: '30m'},
    {name: 'Quiz', type: 'quiz', duration: '15m'},
    {name: 'Debate', type: 'debate', duration: '30m'}
];

function initTasks() {
    const list = document.getElementById('task-list');
    if (!list) return;
    tasks.forEach(t => {
        const li = document.createElement('li');
        li.textContent = `${t.name} (${t.duration})`;
        li.className = 'task';
        li.draggable = true;
        li.dataset.type = t.type;
        li.addEventListener('dragstart', drag);
        list.appendChild(li);
    });
}

function initCalendar() {
    const cal = document.getElementById('calendar');
    if (!cal) return;
    for (let i = 0; i < 14; i++) {
        const day = document.createElement('div');
        day.className = 'day';
        day.dataset.day = i;
        day.addEventListener('dragover', allowDrop);
        day.addEventListener('drop', drop);
        cal.appendChild(day);
    }
}

function drag(ev) {
    ev.dataTransfer.setData('text/plain', ev.target.dataset.type);
}

function allowDrop(ev) {
    ev.preventDefault();
}

function drop(ev) {
    ev.preventDefault();
    const type = ev.dataTransfer.getData('text/plain');
    const task = tasks.find(t => t.type === type);
    const div = document.createElement('div');
    div.textContent = task.name;
    div.className = 'task';
    div.onclick = () => window.location = `/${type}`;
    ev.target.appendChild(div);
}

function completeTask(name) {
    alert(`Tarea completada: ${name}`);
    window.location = '/completion';
}

document.addEventListener('DOMContentLoaded', () => {
    initTasks();
    initCalendar();
});
