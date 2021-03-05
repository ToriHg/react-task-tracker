import Task from './Task'
const Tasks = ({tasks,onDelete,onToggle}) => {
  return (
    <>
      {
        tasks.map((task) => (
          <Task 
            key={task.id} 
            task={task} 
            onDelete={onDelete} 
            onToggle={onToggle}
          />
        ))
      }
    </>
  )
}

export default Tasks


// const Table = () => {
//   return (
//     <table>
//       <thead></thead>
//       <tbody>
//         <tr>
//           <td></td>
//         </tr>
//       </tbody>
//     </table>
//   )
// }