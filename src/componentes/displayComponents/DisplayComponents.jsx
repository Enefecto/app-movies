import AddTask from '../add-edit-task/AddTask';
import EditTask from '../add-edit-task/EditTask';

const DisplayComponents = ({displayEdit, setDisplayEdit,idEdit,displayAdd,setDisplayAdd,setTasksList,tasksList}) => {

    if (displayAdd){
        return <AddTask 
            setDisplayAdd={setDisplayAdd}
            setTasksList={setTasksList}
        />
    
    } else if (displayEdit){
        return <EditTask 
            setDisplayEdit={setDisplayEdit}
            idEdit={idEdit}
            tasksList={tasksList}
            setTasksList={setTasksList}
        />
    
    } else {
        return (
            <div>
    
            </div>
        )
    }
}
export default DisplayComponents;