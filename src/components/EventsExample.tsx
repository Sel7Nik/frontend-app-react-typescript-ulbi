import { ChangeEvent, DragEvent, FC, MouseEvent, useState } from 'react'

const EventsExample: FC = () => {
  const [value, setValue] = useState<string>('')
  const [isDrag, setIsDrag] = useState<boolean>(false)
  const changeHandler = (ev: ChangeEvent<HTMLInputElement>) => {
    setValue(ev.target.value)
  }

  const clickHandler = (ev: MouseEvent<HTMLButtonElement>) => {
    console.log(value)
  }

  const dragHandler = (ev: DragEvent<HTMLDivElement>) => {
    console.log('DRAG')
  }
  const dragWithPreventHandler = (ev: DragEvent<HTMLDivElement>) => {
    ev.preventDefault()
    setIsDrag(true)
  }
  const onDragLeave = (ev: DragEvent<HTMLDivElement>) => {
    ev.preventDefault()
    setIsDrag(false)
  }

  const dropHandler = (ev: DragEvent<HTMLDivElement>) => {
    ev.preventDefault()
    setIsDrag(false)
  }
  return (
    <div>
      <input value={value} onChange={changeHandler} type="text" />
      <button onClick={clickHandler}>ЖМИ</button>
      <div onDrag={dragHandler} draggable style={{ width: 200, height: 200, border: '1px solid teal', margin: 15 }}></div>
      <div
        onDragOver={dragWithPreventHandler}
        onDragLeave={onDragLeave}
        onDrop={dropHandler}
        style={{ width: 200, height: 200, border: '1px solid teal', margin: 15, background: isDrag ? 'blue' : 'red' }}></div>
    </div>
  )
}

export default EventsExample
