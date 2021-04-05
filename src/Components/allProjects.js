import burger from '../img/portImages/Burgerbulder (1).gif'
import rockPaperScissors from '../img/portImages/rock-paper-scissors-game.gif'
import searchUsersGitHub from '../img/portImages/Search-Users-GitHub-REST-API-gif.gif'
import taskManager from '../img/portImages/Task-Manager (1).gif'


const projects = [
    {
        id: 1,
        category: "Vanilla JS",
        link1: 'https://github.com/bomercakmak/rock-paper-scissors-game',
        link2: 'https://bomercakmakgame.netlify.app/',
        icon1: 'SOURCE \n CODE',
        icon2: 'LIVE \n WEBSITE',
        image: rockPaperScissors,
        title: 'Rock Paper Scissors Game',
        info:"HTML5, CSS3, JavaScript"
    },
    {
        id: 2,
        category: "Vanilla JS",
        link1: 'https://github.com/bomercakmak/Search-Users-GitHub-REST-API',
        link2: 'https://bomercakmak.netlify.app/',
        icon1: 'SOURCE \n CODE',
        icon2: 'LIVE \n WEBSITE',
        image: searchUsersGitHub,
        title: 'Search GitHub Users',
        info:"HTML5, CSS3, JavaScript, Web Storage API, GitHub REST API"
    },
    {
        id: 3,
        category: "React JS",
        link1: 'https://github.com/bomercakmak/task-manager-react',
        link2: 'https://static-task-manager-react.netlify.app/',
        icon1: 'SOURCE \n CODE',
        icon2: 'LIVE \n WEBSITE',
        image: taskManager,
        title: 'Task Manager React JS',
        info:"HTML5, CSS3, JavaScript, JSON Server REST API, React JS"
    },
    {
        id: 4,
        category: "React JS",
        link1: 'https://github.com/bomercakmak/task-manager-react',
        link2: 'https://static-task-manager-react.netlify.app/',
        icon1: 'SOURCE \n CODE',
        icon2: '',
        image: taskManager,
        title: 'My Movies React JS',
        info:"HTML5, CSS3, Bootstrap, JavaScript, JSON Server REST API, React JS, React Router,"
    },
   
]

export default projects;