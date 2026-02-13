# naiga-chatbot
 Naiga Chatbot
A sleek, responsive communication interface built with Next.js and deployed via Vercel, and designed by SHILLAH NAIGAGA.

Unlike traditional AI bots, this project functions as a Direct-to-Email bridge. It provides users with a familiar chat interface while routing all messages directly to a designated email inbox, ensuring you never miss an inquiry.

🌐 https://naiga-chatbot.vercel.app/

🚀 Key Features
Direct-to-Email Messaging: Bridges the gap between web visitors and your inbox.

Zero-Terminal Deployment: Fully managed and deployed through the Vercel dashboard.

Responsive UI: A mobile-first design that works on any device.

Serverless Efficiency: Runs on Vercel’s global edge network for instant loading.

🛠️ How It Works
The bot captures user input through a controlled form and uses a backend integration (like Formspree or a custom API) to forward the data. This eliminates the need for a database while keeping user data private and direct.

🏁 Deployment Guide (No Terminal Required)
This project is designed to be deployed directly from the browser:

Fork this Repository: Click the "Fork" button at the top right of this page to save a copy to your own GitHub account.

Connect to Vercel:

Log in to Vercel.com.

Click "Add New" > "Project".

Import your naiga-chatbot repository.

Environment Variables:

In the Vercel setup screen, add any necessary keys (like your Email ID) under the Environment Variables section.

Deploy: Click "Deploy". Vercel will build the site and provide you with a live URL automatically.

📝 Project Structure
app/  - Contains the core chat interface logic.

public/ - Static assets and icons.

styles/ - Custom styling using Tailwind CSS.

📄 License
This project is open-source and available under the MIT License.
