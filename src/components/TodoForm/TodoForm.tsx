import { useRef } from "react";

interface TodoFormProps {
  onAdd(title: string): void
}

const TodoForm: React.FC<TodoFormProps> = props => {
  // const [title, setTitle] = useState<string>('');
  const ref = useRef<HTMLInputElement>(null)
  // const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setTitle(e.target.value);
  // };

  const keyPressHandler = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      props.onAdd(ref.current!.value)
        // console.log(ref.current!.value);
        ref.current!.value = ''
    //   console.log(title);
    //   setTitle('');
    }
  };

  return (
    <div className="input-field mt2">
      <input
        // onChange={changeHandler}
        // value={title}
        ref={ref}
        onKeyPress={keyPressHandler}
        type="text"
        id="title"
      />
      <label htmlFor="title" className="active">Введите название дела</label>
    </div>
  );
}

export default TodoForm
