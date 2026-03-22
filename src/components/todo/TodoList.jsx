import TodoFooterActions from "./TodoFooterActions";
import TodoHeaderActions from "./TodoHeaderActions";
import TodoInput from "./TodoInput";
import TodoItem from "./TodoItem";

export default function TodoList() {
  return (
    <div className="w-full max-w-3xl shadow-lg rounded-lg p-6 bg-white">
      <div>
        <TodoInput />

        <TodoHeaderActions />
      </div>
      <hr className="mt-4" />

      <div className="mt-2 text-gray-700 text-sm max-h-75 overflow-y-auto">
        <TodoItem />
        <TodoItem />
      </div>

      <hr className="mt-4" />

      <TodoFooterActions />
    </div>
  );
}
