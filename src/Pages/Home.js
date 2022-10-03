import { useNavigate } from "react-router-dom";

export default function Home({ GlobalState }) {
    const { toDoList, setToDoList, task, setTask, setChosenTask } = GlobalState;
    const navigate = useNavigate();

    const handleSubmit = () => {
        const id = toDoList.length + 1;
        setToDoList(prevState => [...prevState, { id: id, task: task }]);
        setTask('');
    }

    const handleChooseTask = (e) => {
        console.log(e);
        setChosenTask(e);
        navigate('/chosen-task');
    }

    return (
        <div className="home-page" >
            <input
                value={task}
                onChange={event => setTask(event.target.value)}
                placeholder="New task..."
            />
            <button onClick={() => handleSubmit()}>
                Submit
            </button>
            <h2>To Do List:</h2>
            {toDoList.map(e => {
                console.log(e)
                return (
                    <div className="task" key={e.id} onClick={() => handleChooseTask(e)}>
                        {e.task}
                    </div>
                )
            })}
        </div>
    )
}