import { LabeledTextField } from "app/core/components/LabeledTextField"
import { Form, FORM_ERROR } from "app/core/components/Form"
import signup from "app/auth/mutations/signup"
import { Signup } from "app/auth/validations"
import { useMutation } from "@blitzjs/rpc"

type SignupFormProps = {
  onSuccess?: () => void
}

export const SignupForm = (props: SignupFormProps) => {
  const [signupMutation] = useMutation(signup)
  return (
    <>
      {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-gray-50">
        <body class="h-full">
        ```
      */}
      <div className="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <img
            className="mx-auto h-12 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
          />
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">Create an account</h2>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <Form className="space-y-6"
                  initialValues={{ email: "", password: "" }}
                  onSubmit={async (values) => {
                    try {
                      await signupMutation(values)
                      props.onSuccess?.()
                    } catch (error: any) {
                      if (error.code === "P2002" && error.meta?.target?.includes("email")) {
                        // This error comes from Prisma
                        return { email: "This email is already being used" }
                      } else {
                        return { [FORM_ERROR]: error.toString() }
                      }
                    }
                  }}>
              <div>
                <div className="mt-1">
                  <LabeledTextField name="email" label="Email" placeholder="Email" />
                </div>
              </div>

              <div>
                <div className="mt-1">
                  <LabeledTextField name="password" label="Password" placeholder="Password" type="password" />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Create an account
                </button>
              </div>
            </Form>



          </div>
        </div>
      </div>
    </>
    // <div>
    //   <h1>Create an Account</h1>
    //
    //   <Form
    //     submitText="Create Account"
    //     schema={Signup}
    //     initialValues={{ email: "", password: "", organizationName: "" }}
    //     onSubmit={async (values) => {
    //       try {
    //         await signupMutation(values)
    //         props.onSuccess?.()
    //       } catch (error: any) {
    //         if (error.code === "P2002" && error.meta?.target?.includes("email")) {
    //           // This error comes from Prisma
    //           return { email: "This email is already being used" }
    //         } else {
    //           return { [FORM_ERROR]: error.toString() }
    //         }
    //       }
    //     }}
    //   >
    //     <LabeledTextField name="email" label="Email" placeholder="Email" />
    //     <LabeledTextField name="password" label="Password" placeholder="Password" type="password" />
    //     <LabeledTextField name="organizationName" label="Organization Name" placeholder="Organization" type="text" />
    //   </Form>
    // </div>
  )
}

export default SignupForm
