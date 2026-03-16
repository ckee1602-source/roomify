![readme-hero](https://github.com/user-attachments/assets/0fbfb67b-a310-4bf9-800b-1d31e0b6af5e)
<div align="center">

<img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React" />
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
<br/>
![Puter](https://img.shields.io/badge/Puter-8A2BE2?style=for-the-badge&logo=puter&logoColor=white)
![Claude](https://img.shields.io/badge/Claude-D97757?style=for-the-badge&logo=anthropic&logoColor=white)
![Gemini](https://img.shields.io/badge/Gemini-8E75C2?style=for-the-badge&logo=googlegemini&logoColor=white)
![CodeRabbit](https://img.shields.io/badge/CodeRabbit-FF6600?style=for-the-badge&logo=coderabbit&logoColor=white)

</div>

# ✨ Introduction 
AI-powered architectural visualization SaaS built with React, TypeScript, and Puter. Use AI models from Claude to Gemini to transform 2D floor plans into photorealistic 3D renders with permanent hosting and persistent metadata. This project features 2D-to-3D photorealistic rendering, serverless workers, high-performance KV storage, and a global community feed.

## ⚙️ Tech Stack
👉React is a popular JavaScript library for building user interfaces, specifically for creating single-page applications with a component-based architecture.

👉Vite is a next-generation frontend tool that provides an extremely fast development environment and optimized build process for modern web projects.

👉TypeScript is a strongly typed superset of JavaScript that adds static types, helping developers catch errors early and write more maintainable code.

👉TailwindCSS is a utility-first CSS framework that allows for rapid UI development by applying pre-defined classes directly in your markup.

👉Puter is the underlying cloud computing platform and "Internet OS" that provides the infrastructure; including serverless Workers, permanent file storage, key-value (KV) databases, and hosted AI models.

👉Puter.js is the official JavaScript SDK that allows developers to interact with those cloud services directly from the frontend.

👉CodeRabbit is an AI-powered code review platform that provides deep insights and automated suggestions to improve code quality and security.

👉Claude and Gemini are state-of-the-art large language models used to power the architectural transformation and image generation logic within the application.

## Features

👉 2D-to-3D Visualization: Instant architectural rendering that transforms flat floor plans into photorealistic 3D models using state-of-the-art AI.

👉 Persistent Media Hosting: Permanent file storage that generates public URLs for every upload and output, ensuring your renders are always accessible.

👉 Dynamic Project Gallery: A personalized workspace that tracks your history of visualizations with instant loading and metadata persistence.

👉 Side-by-Side Comparison: Interactive tools designed to visualize the direct transformation from a source architectural sketch to its AI-rendered counterpart.

👉 Global Community Feed: A public discovery engine where users share their architectural projects with the world in a single click.

👉 Privacy Controls: Granular public and private toggles that give users full authority over the visibility and security of their architectural data.

👉 Ownership Mapping: A clean metadata system that tracks project details and user IDs across the entire platform for seamless account management.

👉 Modern Export Functionality: High-performance tools to download and move AI-generated renders into real-world presentations and workflows.


## 🤸 Quick Start
Follow these steps to set up the project locally on your machine.

## Prerequisites

Make sure you have the following installed on your machine:
* **Git**
* **Node.js**
* **npm** (Node Package Manager)

## Getting Started

### 1. Cloning the Repository
```bash
git clone <your-repository-url>
cd roomify
```

###  2.Installation
Install the project dependencies using npm:
```bash
npm install
```
### 3. Set Up Environment Variables
Create a new file named .env in the root of your project and add the following content:
```bash
VITE_PUTER_WORKER_URL="your_actual_worker_url_here"
```
Note: Replace the placeholder values with your real credentials. You can get these by signing up at Puter.com.
### 4. Running the Project
Start the development server:
```bash
npm run dev
```

