const { createApp, ref, computed} = Vue;

const dailyTasksQuotes = [
    { message: 'Start your day with a plan, and end it with a sense of accomplishment.', source: 'Morning Routine' },
    { message: 'Small steps every day lead to big achievements.', source: 'Daily Motivation' },
    { message: 'Consistency is the key to mastering any task.', source: 'Work Ethic' },
    { message: 'Prioritize your tasks, and watch your productivity soar.', source: 'Time Management' },
    { message: 'The hardest part is starting, but once you begin, it gets easier.', source: 'Task Completion' },
    { message: 'A well-organized day is a day well-lived.', source: 'Daily Organization' },
];


const app = createApp({
    setup() {
        const showTaskImportant = ref(true)
        const dayliTasks = ref(dailyTasksQuotes)
        const newHomework = ref('')

        const addHomework = () => {
            dayliTasks.value.unshift({ message: newHomework.value, source: 'Importante'})
            newHomework.value = '';
        }

        const totalHomeworks = computed(() => {
            return dayliTasks.value.length
        })

        return{
            showTaskImportant,
            dayliTasks,
            addHomework,
            newHomework,
            totalHomeworks,
        }
    }
})



app.mount('#myApp')