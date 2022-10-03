import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ChosenTask({ GlobalState }) {
    const { chosenTask } = GlobalState;
    const navigate = useNavigate();

    const [myChosenTask, setMyChosenTask] = useState({});

    useEffect(() => {
        console.log(chosenTask);
        setMyChosenTask(chosenTask);
    }, []);

    return (
        <div className="chosen-task-page">
            <button onClick={() => navigate('/')}>
                &#8592; Go back home
            </button>
            <h2>Chosen Task:</h2>
            <p>{myChosenTask ? myChosenTask.task : null}</p>
        </div> 
    )
}