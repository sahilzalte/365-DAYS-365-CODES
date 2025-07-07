import {submitAction} from '../actions/form'
export default function Home() {
  return (
    <div className="w-2/3 mx-auto my-10">
      <form action={submitAction} className="space-y-4">
        <div className="flex flex-col">
          <label htmlFor="name" className="text-lg font-medium">
            Name
          </label>
          <input
            name="name"
            id="name"
            className="bg-gray-400 text-white p-2 rounded-lg"
            type="text"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="add" className="text-lg font-medium">
            Address
          </label>
          <input
            name="add"
            id="add"
            className="bg-gray-400 text-white p-2 rounded-lg"
            type="text"
          />
        </div>
        <div>
          <button type="submit" className="bg-blue-500 p-2 rounded-lg">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

