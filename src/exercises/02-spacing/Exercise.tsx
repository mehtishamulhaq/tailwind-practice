// Exercise 02 — Spacing
// TODO:
// - Add padding to the container
// - Add margin between the heading and the paragraph
// - Add spacing between the children of the list (without adding a class to each item)

export default function SpacingExercise() {
  return (
    <div className="p-8 border-gray-300 border-2">
      <h2 className="mb-4 text-3xl font-semibold">Spacing practice</h2>
      <p className="m-3 ml-0">
        Right now everything is squashed together. Use padding, margin and
        "space between" utilities to give things room to breathe.
      </p>

      <div className="flex flex-row gap-4 w-full ">
        <div className="flex-1 bg-amber-200">
          <ul className="space-y-4 mb-4 border-2 border-gray-400 w-72 p-3 rounded-lg mx-auto">
            <li className="">First item</li>
            <li className="">Second item</li>
            <li className="">Third item</li>
            <li className="">Fourth item</li>
          </ul>
        </div>
        <div className="flex-1 bg-gray-200 p-4">
          <div className="flex flex-col w-75 h-50 bg-white p-4 rounded-sm border-l-4 border-red-800 shadow-lg shadow-gray-300">
            <div className="flex-1">
              <p className="text3xl font-semibold pb-4">
                {' '}
                Muhammad Ehtisham Ul Haq{' '}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="size-6 inline"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
                  />
                </svg>
              </p>
              <p>
                {' '}
                I'm a senior frontend software engieer. I have around 7 years of
                experience.
              </p>
            </div>
            <p className="text-xs text-gray-500 ">software egineer</p>
          </div>
        </div>
      </div>

      <div className="space-x-4 mt-4">
        <button className="border-2 border-blue-400 rounded-sm px-5 py-1 bg-blue-500 text-white cursor-pointer">
          Save
        </button>
        <button className="border-2 border-gray-400 rounded-sm px-5 py-1 cursor-pointer">
          Cancel
        </button>
      </div>
    </div>
  );
}
