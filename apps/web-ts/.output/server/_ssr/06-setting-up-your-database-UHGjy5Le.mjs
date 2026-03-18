import { r as __toESM } from "../_runtime.mjs";
import { n as __exportAll } from "./chunk-BnRpC7BT.mjs";
import { v as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/06-setting-up-your-database-UHGjy5Le.js
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime());
var _06_setting_up_your_database_exports = /* @__PURE__ */ __exportAll({
	default: () => MDXContent,
	frontmatter: () => frontmatter,
	structuredData: () => structuredData,
	toc: () => toc
});
var frontmatter = {
	"title": "Setting Up Your Database",
	"description": "Setup a database for your application and seed it with initial data.",
	"image": "https://nextjs.org/api/learn-og?title=Setting%20Up%20Your%20Database&amp;chapter=6",
	"headline": "App Router: Setting Up Your Database"
};
var structuredData = {
	"contents": [
		{
			"heading": void 0,
			"content": "Before you can continue working on your dashboard, you'll need some data. In this chapter, you'll be setting up a PostgreSQL database from one of Vercel's marketplace integrations. If you're already familiar with PostgreSQL and would prefer to use your own database provider, you can skip this chapter and set it up on your own. Otherwise, let's continue!"
		},
		{
			"heading": "create-a-github-repository",
			"content": "To start, let's push your repository to GitHub if you haven't already. This will make it easier to set up your database and deploy."
		},
		{
			"heading": "create-a-github-repository",
			"content": "If you need help setting up your repository, take a look at this guide on GitHub."
		},
		{
			"heading": "create-a-github-repository",
			"content": "> **Good to know:**\n>\n> * You can also use other git providers like GitLab or Bitbucket.\n> * If you're new to GitHub, we recommend the GitHub Desktop App for a simplified development workflow."
		},
		{
			"heading": "create-a-vercel-account",
			"content": "Visit vercel.com/signup to create an account. Choose the free \"hobby\" plan. Select **Continue with GitHub** to connect your GitHub and Vercel accounts."
		},
		{
			"heading": "connect-and-deploy-your-project",
			"content": "Next, you'll be taken to this screen where you can select and **import** the GitHub repository you've just created:"
		},
		{
			"heading": "connect-and-deploy-your-project",
			"content": "Name your project and click **Deploy**."
		},
		{
			"heading": "connect-and-deploy-your-project",
			"content": "Hooray! 🎉 Your project is now deployed."
		},
		{
			"heading": "connect-and-deploy-your-project",
			"content": "By connecting your GitHub repository, whenever you push changes to your **main** branch, Vercel will automatically redeploy your application with no configuration needed. When opening pull requests, you'll also have instant preview URLs which allow you to catch deployment errors early and share a preview of your project with team members for feedback."
		},
		{
			"heading": "create-a-postgres-database",
			"content": "Next, to set up a database, click **Continue to Dashboard** and select the **Storage** tab from your project dashboard. Select **Create Database**. Depending on when your Vercel account was created, you may see options like Neon or Supabase. Choose your preferred provider and click **Continue**."
		},
		{
			"heading": "create-a-postgres-database",
			"content": "Choose your region and storage plan, if required. The default region for all Vercel projects is &#x2A;*Washington D.C (iad1)**, and we recommend choosing this if available to reduce latency for data requests."
		},
		{
			"heading": "create-a-postgres-database",
			"content": "Once connected, navigate to the `.env.local` tab, click **Show secret** and **Copy Snippet**. Make sure you reveal the secrets before copying them."
		},
		{
			"heading": "create-a-postgres-database",
			"content": "Navigate to your code editor and rename the `.env.example&#x60; file to &#x2A;*`.env`**. Paste in the copied contents from Vercel."
		},
		{
			"heading": "create-a-postgres-database",
			"content": "> **Important:** Go to your `.gitignore` file and make sure `.env` is in the ignored files to prevent your database secrets from being exposed when you push to GitHub."
		},
		{
			"heading": "seed-your-database",
			"content": "Now that your database has been created, let's seed it with some initial data."
		},
		{
			"heading": "seed-your-database",
			"content": "We've included an API you can access in the browser, which will run a seed script to populate the database with an initial set of data."
		},
		{
			"heading": "seed-your-database",
			"content": "The script uses **SQL** to create the tables, and the data from `placeholder-data.ts` file to populate them after they've been created."
		},
		{
			"heading": "seed-your-database",
			"content": "Ensure your local development server is running with `pnpm run dev` and navigate to `localhost:3000/seed` in your browser. When finished, you will see a message \"Database seeded successfully\" in the browser. Once completed, you can delete this file."
		},
		{
			"heading": "seed-your-database",
			"content": "> **Troubleshooting**:\n>\n> * Make sure to reveal your database secrets before copying it into your `.env` file.\n> * The script uses `bcrypt` to hash the user's password, if `bcrypt` isn't compatible with your environment, you can update the script to use `bcryptjs` instead.\n> * If you run into any issues while seeding your database and want to run the script again, you can drop any existing tables by running `DROP TABLE tablename` in your database query interface. See the executing queries section below for more details. But be careful, this command will delete the tables and all their data. It's ok to do this with your example app since you're working with placeholder data, but you shouldn't run this command in a production app."
		},
		{
			"heading": "executing-queries",
			"content": "Let's execute a query to make sure everything is working as expected. We'll use another Router Handler, `app/query/route.ts`, to query the database. Inside this file, you'll find a `listInvoices()` function that has the following SQL query."
		},
		{
			"heading": "executing-queries",
			"content": "Uncomment the file, remove the `Response.json() block`, and navigate to `localhost:3000/query` in your browser. You should see that an invoice `amount` and `name` is returned."
		}
	],
	"headings": [
		{
			"id": "create-a-github-repository",
			"content": "Create a GitHub repository"
		},
		{
			"id": "create-a-vercel-account",
			"content": "Create a Vercel account"
		},
		{
			"id": "connect-and-deploy-your-project",
			"content": "Connect and deploy your project"
		},
		{
			"id": "create-a-postgres-database",
			"content": "Create a Postgres database"
		},
		{
			"id": "seed-your-database",
			"content": "Seed your database"
		},
		{
			"id": "executing-queries",
			"content": "Executing queries"
		}
	]
};
var toc = [
	{
		depth: 2,
		url: "#create-a-github-repository",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#create-a-github-repository",
			children: "Create a GitHub repository"
		}) })
	},
	{
		depth: 2,
		url: "#create-a-vercel-account",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#create-a-vercel-account",
			children: "Create a Vercel account"
		}) })
	},
	{
		depth: 2,
		url: "#connect-and-deploy-your-project",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#connect-and-deploy-your-project",
			children: "Connect and deploy your project"
		}) })
	},
	{
		depth: 2,
		url: "#create-a-postgres-database",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#create-a-postgres-database",
			children: "Create a Postgres database"
		}) })
	},
	{
		depth: 2,
		url: "#seed-your-database",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#seed-your-database",
			children: "Seed your database"
		}) })
	},
	{
		depth: 2,
		url: "#executing-queries",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#executing-queries",
			children: "Executing queries"
		}) })
	}
];
function _createMdxContent(props) {
	const _components = {
		a: "a",
		blockquote: "blockquote",
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		pre: "pre",
		span: "span",
		strong: "strong",
		ul: "ul",
		...props.components
	}, { Image } = _components;
	if (!Image) _missingMdxReference("Image", true);
	return (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Before you can continue working on your dashboard, you'll need some data. In this chapter, you'll be setting up a PostgreSQL database from one of ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://vercel.com/marketplace?category=databases",
				children: "Vercel's marketplace integrations"
			}),
			". If you're already familiar with PostgreSQL and would prefer to use your own database provider, you can skip this chapter and set it up on your own. Otherwise, let's continue!"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "create-a-github-repository",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#create-a-github-repository",
				children: "Create a GitHub repository"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "To start, let's push your repository to GitHub if you haven't already. This will make it easier to set up your database and deploy." }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"If you need help setting up your repository, take a look at ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://help.github.com/en/github/getting-started-with-github/create-a-repo",
				children: "this guide on GitHub"
			}),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.blockquote, { children: [
			"\n",
			(0, import_jsx_runtime.jsx)(_components.p, { children: (0, import_jsx_runtime.jsx)(_components.strong, { children: "Good to know:" }) }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
				"\n",
				(0, import_jsx_runtime.jsx)(_components.li, { children: "You can also use other git providers like GitLab or Bitbucket." }),
				"\n",
				(0, import_jsx_runtime.jsxs)(_components.li, { children: [
					"If you're new to GitHub, we recommend the ",
					(0, import_jsx_runtime.jsx)(_components.a, {
						href: "https://desktop.github.com/",
						children: "GitHub Desktop App"
					}),
					" for a simplified development workflow."
				] }),
				"\n"
			] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "create-a-vercel-account",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#create-a-vercel-account",
				children: "Create a Vercel account"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Visit ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://vercel.com/signup",
				children: "vercel.com/signup"
			}),
			" to create an account. Choose the free \"hobby\" plan. Select ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "Continue with GitHub" }),
			" to connect your GitHub and Vercel accounts."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "connect-and-deploy-your-project",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#connect-and-deploy-your-project",
				children: "Connect and deploy your project"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Next, you'll be taken to this screen where you can select and ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "import" }),
			" the GitHub repository you've just created:"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(Image, {
			alt: "Screenshot of Vercel Dashboard, showing the import project screen with a list of the user's GitHub Repositories",
			srcLight: "https://h8DxKfmAPhn8O0p3.public.blob.vercel-storage.com/learn/light/import-git-repo.png",
			srcDark: "https://h8DxKfmAPhn8O0p3.public.blob.vercel-storage.com/learn/dark/import-git-repo.png",
			width: "960",
			height: "511"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Name your project and click ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "Deploy" }),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(Image, {
			alt: "Deployment screen showing the project name field and a deploy button",
			srcLight: "https://h8DxKfmAPhn8O0p3.public.blob.vercel-storage.com/learn/light/configure-project.png",
			srcDark: "https://h8DxKfmAPhn8O0p3.public.blob.vercel-storage.com/learn/dark/configure-project.png",
			width: "960",
			height: "491"
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Hooray! 🎉 Your project is now deployed." }),
		"\n",
		(0, import_jsx_runtime.jsx)(Image, {
			alt: "Project overview screen showing the project name, domain, and deployment status",
			srcLight: "https://h8DxKfmAPhn8O0p3.public.blob.vercel-storage.com/learn/light/deployed-project.png",
			srcDark: "https://h8DxKfmAPhn8O0p3.public.blob.vercel-storage.com/learn/dark/deployed-project.png",
			width: "960",
			height: "479"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"By connecting your GitHub repository, whenever you push changes to your ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "main" }),
			" branch, Vercel will automatically redeploy your application with no configuration needed. When opening pull requests, you'll also have ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://vercel.com/docs/deployments/environments#preview-environment-pre-production#preview-urls",
				children: "instant preview URLs"
			}),
			" which allow you to catch deployment errors early and share a preview of your project with team members for feedback."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "create-a-postgres-database",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#create-a-postgres-database",
				children: "Create a Postgres database"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Next, to set up a database, click ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "Continue to Dashboard" }),
			" and select the ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "Storage" }),
			" tab from your project dashboard. Select ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "Create Database" }),
			". Depending on when your Vercel account was created, you may see options like Neon or Supabase. Choose your preferred provider and click ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "Continue" }),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(Image, {
			alt: "Connect Store screen showing the Postgres option along with KV, Blob and Edge Config",
			srcLight: "https://h8DxKfmAPhn8O0p3.public.blob.vercel-storage.com/learn/light/create-database.png",
			srcDark: "https://h8DxKfmAPhn8O0p3.public.blob.vercel-storage.com/learn/dark/create-database.png",
			width: "960",
			height: "513"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Choose your region and storage plan, if required. The ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://vercel.com/docs/functions/configuring-functions/region",
				children: "default region"
			}),
			" for all Vercel projects is ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "Washington D.C (iad1)" }),
			", and we recommend choosing this if available to reduce ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://developer.mozilla.org/en-US/docs/Web/Performance/Understanding_latency",
				children: "latency"
			}),
			" for data requests."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(Image, {
			alt: "Database creation modal showing the database name and region",
			srcLight: "https://h8DxKfmAPhn8O0p3.public.blob.vercel-storage.com/learn/light/database-region.png",
			srcDark: "https://h8DxKfmAPhn8O0p3.public.blob.vercel-storage.com/learn/dark/database-region.png",
			width: "960",
			height: "513"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Once connected, navigate to the ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: ".env.local" }),
			" tab, click ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "Show secret" }),
			" and ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "Copy Snippet" }),
			". Make sure you reveal the secrets before copying them."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(Image, {
			alt: "The .env.local tab showing the hidden database secrets",
			srcLight: "https://h8DxKfmAPhn8O0p3.public.blob.vercel-storage.com/learn/light/database-dashboard.png",
			srcDark: "https://h8DxKfmAPhn8O0p3.public.blob.vercel-storage.com/learn/dark/database-dashboard.png",
			width: "960",
			height: "358"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Navigate to your code editor and rename the ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: ".env.example" }),
			" file to ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: ".env" }) }),
			". Paste in the copied contents from Vercel."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.blockquote, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.p, { children: [
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "Important:" }),
				" Go to your ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: ".gitignore" }),
				" file and make sure ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: ".env" }),
				" is in the ignored files to prevent your database secrets from being exposed when you push to GitHub."
			] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "seed-your-database",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#seed-your-database",
				children: "Seed your database"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Now that your database has been created, let's seed it with some initial data." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "We've included an API you can access in the browser, which will run a seed script to populate the database with an initial set of data." }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"The script uses ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "SQL" }),
			" to create the tables, and the data from ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "placeholder-data.ts" }),
			" file to populate them after they've been created."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Ensure your local development server is running with ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "pnpm run dev" }),
			" and navigate to ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "http://localhost:3000/seed",
				children: (0, import_jsx_runtime.jsx)(_components.code, { children: "localhost:3000/seed" })
			}),
			" in your browser. When finished, you will see a message \"Database seeded successfully\" in the browser. Once completed, you can delete this file."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.blockquote, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.p, { children: [(0, import_jsx_runtime.jsx)(_components.strong, { children: "Troubleshooting" }), ":"] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
				"\n",
				(0, import_jsx_runtime.jsxs)(_components.li, { children: [
					"Make sure to reveal your database secrets before copying it into your ",
					(0, import_jsx_runtime.jsx)(_components.code, { children: ".env" }),
					" file."
				] }),
				"\n",
				(0, import_jsx_runtime.jsxs)(_components.li, { children: [
					"The script uses ",
					(0, import_jsx_runtime.jsx)(_components.code, { children: "bcrypt" }),
					" to hash the user's password, if ",
					(0, import_jsx_runtime.jsx)(_components.code, { children: "bcrypt" }),
					" isn't compatible with your environment, you can update the script to use ",
					(0, import_jsx_runtime.jsx)(_components.a, {
						href: "https://www.npmjs.com/package/bcryptjs",
						children: (0, import_jsx_runtime.jsx)(_components.code, { children: "bcryptjs" })
					}),
					" instead."
				] }),
				"\n",
				(0, import_jsx_runtime.jsxs)(_components.li, { children: [
					"If you run into any issues while seeding your database and want to run the script again, you can drop any existing tables by running ",
					(0, import_jsx_runtime.jsx)(_components.code, { children: "DROP TABLE tablename" }),
					" in your database query interface. See the ",
					(0, import_jsx_runtime.jsx)(_components.a, {
						href: "#executing-queries",
						children: "executing queries section"
					}),
					" below for more details. But be careful, this command will delete the tables and all their data. It's ok to do this with your example app since you're working with placeholder data, but you shouldn't run this command in a production app."
				] }),
				"\n"
			] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "executing-queries",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#executing-queries",
				children: "Executing queries"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Let's execute a query to make sure everything is working as expected. We'll use another Router Handler, ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "app/query/route.ts" }),
			", to query the database. Inside this file, you'll find a ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "listInvoices()" }),
			" function that has the following SQL query."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)(_components.pre, {
			className: "shiki shiki-themes github-light github-dark",
			style: {
				"--shiki-light": "#24292e",
				"--shiki-dark": "#e1e4e8",
				"--shiki-light-bg": "#fff",
				"--shiki-dark-bg": "#24292e"
			},
			tabIndex: "0",
			icon: "<svg viewBox=\"0 0 24 24\"><path d=\"M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z\" fill=\"currentColor\" /></svg>",
			children: (0, import_jsx_runtime.jsxs)(_components.code, { children: [
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "SELECT invoices.amount, customers.name" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "FROM invoices" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "JOIN customers ON invoices.customer_id = customers.id" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "WHERE invoices.amount = 666;" })
				})
			] })
		}) }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Uncomment the file, remove the ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "Response.json() block" }),
			", and navigate to ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "http://localhost:3000/query",
				children: (0, import_jsx_runtime.jsx)(_components.code, { children: "localhost:3000/query" })
			}),
			" in your browser. You should see that an invoice ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "amount" }),
			" and ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "name" }),
			" is returned."
		] })
	] });
}
function MDXContent(props = {}) {
	const { wrapper: MDXLayout } = props.components || {};
	return MDXLayout ? (0, import_jsx_runtime.jsx)(MDXLayout, {
		...props,
		children: (0, import_jsx_runtime.jsx)(_createMdxContent, { ...props })
	}) : _createMdxContent(props);
}
function _missingMdxReference(id, component) {
	throw new Error("Expected " + (component ? "component" : "object") + " `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");
}
//#endregion
export { toc as a, structuredData as i, _06_setting_up_your_database_exports as n, frontmatter as r, MDXContent as t };
