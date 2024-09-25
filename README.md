# poly-glide-template-js

This is a template project to demonstrate how to integrate with PolyAPI in a git-centric typescript workflow.

## Prerequisites

To make use of this template you'll need the following installed:

* Node.js, with npm
* Git
* Bash or similar shell environment

If you're on MacOS or Linux there's a good chance you already have these installed on your system.

In addition you'll need an API key for PolyAPI. If you don't have one, signup at: https://polyapi.io/


## Getting started

1. Fork this repository right from Github. Github will give you the chance to rename it at this time. OR you can clone it or you can download the template project as a [zip file](https://github.com/polyapi/poly-glide-template-js/archive/refs/heads/main.zip).

2. Setup the necessary secrets while you're here in github.
   
   Add `POLY_API_KEY_PROD` and `POLY_API_BASE_URL_PROD` as action secrets in your git repo.
   
   See [Github documentation](https://docs.github.com/en/actions/security-for-github-actions/security-guides/using-secrets-in-github-actions#creating-secrets-for-a-repository) for more details on creating secrets.

3. Clone your new repository onto your local machine `git clone https://github.com/yourusername/your-repository-name.git` and open it up in your favorite editor: VSCode.

4. Update the `package.json` name, description, author, and license fields to your satisfaction. And modify or delete the `README.md` file to be relevant for your project.

5. Install all needed project dependencies using `npm install`.

6. Setup the polyapi client by running `npx poly setup` and putting in your instance url and api key.

7. Run `npx poly generate` to generate the full, up-to-date typescript SDK for PolyAPI (which includes functions Poly makes available out of the box as well as any functions other members of your team might create and publish).

8. Optionally edit or remove the `./src/helloPoly.ts` file.

And that's it! Your project should now be ready to develop and deploy to PolyAPI.

## Using the glide workflow to develop new code

1. Make changes to your PolyAPI functions or create a new one.

2. Commit your changes using git by running something like: `git commit -am 'some useful message describing my changes here...'`

3. Watch the `poly prepare` command run and catalog all your deployable functions.

4. If the prepare command made changes to any code comments then your commit will be paused to give you a chance to review those changes.  If changes were made review, edit, and commit.

5. Push your changes to github: `git push origin`

6. Watch the github action run and automagically sync your server function(s) with PolyAPI!

9. After the github deployment action is complete run `git pull` to pull the latest.

10. Follow the link within the auto-generated deploy receipt at the top of your function file to view the deployed instance of the function in the PolyAPI management GUI, where you can view the function details, view any runtime logs, and even execute the function manually.

In the future, we will expand this Github Action to operate with different keys and different environments on develop vs main.

If you'd like to see an example, or have any other questions about Poly's Git Glide, please reach out to:

support@polyapi.io
