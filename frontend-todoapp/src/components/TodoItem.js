// repäsentiert ein Listenelement

export default function TodoItem({todoItem}) {

    return (

            <li id={todoItem.id}>
                {todoItem.description}
            </li>

    )
}
// EXPORT