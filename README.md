## Getting Started

First, install the necessary dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

Then run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

## Code Challenge Overview

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result. You can login via any username and password. The login api does not run any logic except to ensure that both email and password is filled.

After you login, you will be redirected to Home page. Navigate to the form page by clicking the form link. This is where you will start your challenge.

During the code challenge, you should commit your change whenever you complete the task. You can complete the task in any order you liked, except task #1 as it affects the functionality of the form generator. Once you are done with the challenge, email the entire project (including the .git folder) back to us.

There is no time limit for this challenge. You can take as much time as you need to complete the challenge. However, do note that the speed at which you complete the challenge will be taken into consideration.

## Tasks 1

There are 4 challenge within this project.

1. There is a bug within `useFormGen` custom hook. When I type in the input field, the value is not updating. Fix this bug.
2. Browser console is throwing a warning, fix the issue mentioned by the browser console.
3. Create a password field component that should not display the password when the user is typing. The password should be displayed as dots. (Optional, you can build an eye icon that will toggle the password visibility when clicked)
4. Logout from the session. You should be redirected back to the login page. Change the login page to use form generator with the `useFormGen` hook to handle the form submit.
5. Optimize the form generator rendering. If you look into the console, you will notice that last_name field is being rendered whenever you type in the first_name field. The last_name field should only be rendered when the last_name field value is being typed in.

## Tasks 2

1. Make a simple page to Get List Data from consume API.
2. You can use: Poke API [https://pokeapi.co/](https://pokeapi.co/) (please utilize the data and display it properly according to the API).
3. Make with Responsive Datatable and make it to be can Search and applying pagination.

### Optional Tasks:

You do not have to complete any of the tasks within this section at all. However, if you do complete them, or even took some effort to attempt them, it will be taken into consideration during the review process.

1. Beautify the Form page and Login page using TailwindCSS.
2. Make the pages responsive using TailwindCSS.
3. Attempt to add validation to the form generator via `useFormGen` hook. You can use any validation library of your choice.
4. You can use React Query or Redux Toolkit (RTK) from effectivecally consume API.
