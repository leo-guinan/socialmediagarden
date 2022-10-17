import { useState } from "react"
import { getAntiCSRFToken } from "@blitzjs/auth"

const CreateAccount = () => {
  const antiCSRFToken = getAntiCSRFToken()
  const [email, setEmail] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    await fetch("/api/admin/create", {
      method: "POST",
      credentials: "include",
      headers: {
        "anti-csrf": antiCSRFToken,
      },
      body: JSON.stringify({
        email: email,
      })
    })
  }

  return (
    <>
      <div className="bg-white shadow sm:rounded-lg">
        <div className="px-4 py-5 sm:p-6">
          <h3 className="text-lg font-medium leading-6 text-gray-900">Add account for email</h3>
          <div className="mt-2 max-w-xl text-sm text-gray-500">
            <p>Enter the email to create an account for.</p>
          </div>
          <form className="mt-5 sm:flex sm:items-center"
            onSubmit={handleSubmit}
          >
            <div className="w-full sm:max-w-xs">
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                onChange={(e) => setEmail(e.target.value)}
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                placeholder="you@example.com"
              />
            </div>
            <button
              type="submit"
              className="mt-3 inline-flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
            >
              Save
            </button>
          </form>
        </div>
      </div>
    </>
  )
}

export default CreateAccount
