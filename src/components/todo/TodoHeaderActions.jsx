export default function TodoHeaderActions() {
  return (
    <ul className="flex justify-between my-4 text-xs text-gray-500">
      <li className="flex space-x-1 cursor-pointer">
        <img
          className="w-4 h-4"
          src="./images/double-tick.png"
          alt="Complete"
        />
        <span>Complete All Tasks</span>
      </li>
      <li className="cursor-pointer">Clear completed</li>
    </ul>
  );
}
