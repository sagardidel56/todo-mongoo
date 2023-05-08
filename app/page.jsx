import { TodoItem } from "@/components/ServerComp";
import AddToDoForm from "./AddToDoForm";

export default function Home() {
  return (
    <div className="container">
      <AddToDoForm />
      <section className="todosContainer">
        <TodoItem title={'hello'} description={'dfasfj asflkfjal kjhkjh'} comlpeted={false} id={'aslkdfjasl'} />
      </section>
    </div>
  )
}
