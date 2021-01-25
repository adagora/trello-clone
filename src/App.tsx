import React from "react";
import { AppContainer } from "./styles"
import Column from "./Column";
import { AddNewItem } from "./AddNewItem"
import { useAppState } from "./AppStateContext"
import { DragItem } from "./ ColumnDragItem";

interface Task {
  id: string
  text: string
}

interface List {
  id: string
  text: string
  tasks: Task[]
}

export interface AppState {
  draggedItem: DragItem | undefined
  lists: List[]
}

const App = () => {
  const {state, dispatch} = useAppState()

  return (
    <AppContainer>
        {state.lists.map((list, i) => (
        <Column id={list.id} text={list.text} key={list.id} index={i}/>
        ))}
      <AddNewItem
        toggleButtonText="+ Add another list"
        onAdd={text => dispatch({ type: "ADD_LIST", payload: text })}
      />
    </AppContainer>
  )
}

export default App



