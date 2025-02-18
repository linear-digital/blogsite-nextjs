---
title: "Agents 101: How to build your first AI Agent in 30 minutes!"
datePublished: Tue Feb 18 2025 13:54:17 GMT+0000 (Coordinated Universal Time)
cuid: cm7av6ogj000209l20ahceija
slug: agents-101-how-to-build-your-first-ai-agent-in-30-minutes
cover: https://cdn.hashnode.com/res/hashnode/image/upload/v1739906124996/112d8ad9-3f5c-44f2-a5ad-bc2c12e5be39.gif

---

We are seeing a rise in AI agents in 2025.

Building your own agent can be complex, with all the concepts, frameworks and practices you need to follow.

In this guide, you will learn how to build your first AI agent in just 30 minutes, even if you have never known anything about AI agents.

Let’s jump in.

---

## What is covered?

In a nutshell, we are covering these topics in detail.

1. What are AI agents?
2. A step-by-step guide on building your agent with Copilotkit and LangGraph.
3. Some real-world examples with source code.

Note: Copilotkit (framework for building AI Copilots) recently launched CoAgents with the partnership of LangChain. That is what we will be using in this.

---

## 1. What are AI agents?

AI agents are like really smart assistants. You just tell them what you need and they figure out how to get it done!!

The LLM acts as the `brain` of the system. When an AI has to communicate with the outside world, obtain data, or carry out particular tasks, it can utilize tools, which are external resources or APIs.

They can plan, make decisions and even get better over time. Think of it as a digital entity that can observe, think and act, much like how humans interact with their surroundings, but in a programmed and purposeful manner.

AI agents can be mainly of two types:

⚡ `Reactive`: Respond to immediate inputs from their environment.
⚡ `Proactive Agents`: Plan ahead to achieve long-term goals.

![ai agent](https://cdn.hashnode.com/res/hashnode/image/upload/v1739906096737/4c1d5b5d-4c2a-44ae-b7a1-b7dccc60bfcf.png)
<figcaption>Credits go to Abhishek Reddy (Medium)</figcaption>

&nbsp;

### Core Components.

At its core, an AI agent is made up of the following interconnected components that allow them to perceive their environment, reason, act and learn:

- `Perception` - collects and interprets data from its environment.
- `Reasoning` - analyzes information to make decisions.
- `Action` - performs tasks based on decisions made.
- `Learning` - adapts and improves performance from past experiences using ML algorithms. 
- `Communication Interface` - interacts with other agents or systems through NLP and protocols.
- `Memory` - stores past data and knowledge for future use.
- `Profiling` - agent's means of gathering the data from its environment.

You will find different details in different places but it more or less says the same thing.

If you're interested in reading more, you can check the guide on [What is an AI Agent](https://www.simform.com/blog/ai-agent/) by simform.

![ai agent in larger environments](https://cdn.hashnode.com/res/hashnode/image/upload/v1739906098639/5ae151ff-2d40-45a7-86b2-84d0a3975837.png)
<figcaption>AI agents in larger environment</figcaption>

&nbsp;

### What AI Agents Are Not

A lot of people are actually confused about AI agents. Let's clarify what an AI agent is not:

❌ `Not magic` - they don’t “think” like humans but only follow patterns.
❌ `Not always accurate` - they can hallucinate and can make errors.

Plus, they are not always needed. Like if you already know all possible user actions, just code it. For instance, a user clicks a button to book a hotel room → show available dates → confirm the booking. No AI is needed at all.

A simple thumb of rule: <mark>If your task is straightforward, rule-based or needs 100% accuracy, AI agents are not the right choice.</mark>

Now that we have understood about AI agents, it's time to build one in the next section.

---

## 2. A step-by-step guide on building your agent with Copilotkit and LangGraph.

In this section, we will be talking about how to build your first Agent within a few minutes.

[CopilotKit](https://github.com/CopilotKit/CopilotKit) is a framework for integrating AI copilots into products. It offers React components for AI chat, generative UI, and autocomplete, plus a runtime that improves AI agents with context, tools and skills based on user behavior. They recently announced CoAgents (which is in the beta stage).

With `LangGraph SDK` + [`CoAgents (Copilotkit)`](https://www.copilotkit.ai/coagents), developers can quickly build these types of applications for any vertical. Simply build a `LangGraph agent` attuned to your workflow, then use `CoAgents` to integrate custom actions and generative UI experiences. 

Plus, this is all within a clean framework to manage agents inside your application (thanks to LangGraph). You get everything you need including:

- Shared State (Agent ↔ Application)
- Agentic Generative UI
- Human-in-the-Loop
- Realtime frontend actions
- Agent Steering (LangGraph checkpoints)

You can read more on [copilotkit.ai/coagents](https://www.copilotkit.ai/coagents) which also has illustrative diagrams to help you understand.

![coagents with langgraph](https://cdn.hashnode.com/res/hashnode/image/upload/v1739906100208/2f0b4f19-7e11-4e6c-96e6-d80a798f8628.png)

If you want a quick overview, watch this 2-minute video by Atai (Co-founder of Copilotkit)!

%[https://www.youtube.com/watch?v=tVjVYJE-Nic]


If you want to explore yourself, you can follow the official [quickstart guide](https://docs.copilotkit.ai/coagents/quickstart/langgraph). It's okay if you don't want to, I will be explaining all the steps in detail.

If you have a LangGraph agent, you can just skip to `step 3`. Here, we will clone the starter repository to start quickly.

To avoid making this blog very long, I won't be covering every minor concept. You can read it in the learning section of the [docs](https://docs.copilotkit.ai/coagents/concepts/agentic-copilots?experience=new) including terminologies, concepts and much more.

![concepts](https://cdn.hashnode.com/res/hashnode/image/upload/v1739906101690/0a71f8e6-a464-4d36-8e14-4d214f58351f.png)

&nbsp;

### Step 1: Clone the starter repository.

Since we don't have an agent and just need to get started. We will need to clone the [coagents starter repository](https://github.com/CopilotKit/CopilotKit/tree/main/examples/coagents-starter) under the CopilotKit GitHub.

```
git clone https://github.com/CopilotKit/CopilotKit
cd CopilotKit/examples/coagents-starter/agent-py
```

![copilotkit repo clone](https://cdn.hashnode.com/res/hashnode/image/upload/v1739906103365/f53f23a5-5c0e-4488-ac64-e0643ffe0a5d.png)

I've created a new clean directory (copy-paste) so it's much easier to understand. You can follow the same steps with the cloned repo.

This is how our directory will look. The `agent` directory will hold the LangGraph Agent and the `ui` will contain our frontend application.

![directory structure](https://cdn.hashnode.com/res/hashnode/image/upload/v1739906104228/e37e47e4-3546-46b2-83e7-6e37166ab9ea.png)

If you don't have a frontend, you can create a new Next.js app with TypeScript and then install the Copilotkit react package. In the cloned repository, it's already there, so you just need to install the dependencies using `pnpm i` under the `ui` directory.

![installing dependencies](https://cdn.hashnode.com/res/hashnode/image/upload/v1739906105168/95361160-d6f8-4019-bec1-30683f97cad0.png)

```
// creates a nextjs app with typescript

npx create-next-app@latest ui --typescript

// install copilotkit packages

npm install @copilotkit/react-ui @copilotkit/react-core
```

The CopilotKit packages allow the co-agent to interact with the React state values and make decisions within the application.

You need to run the frontend using `pnpm run dev`.

You can use the `agent-js` directory if you want to use [`LangGraph JS`](https://langchain-ai.github.io/langgraphjs/), I will be using the Python version (`agent-py`) for the scope of this blog.

![structure within agent directory](https://cdn.hashnode.com/res/hashnode/image/upload/v1739906106142/925e0813-b4d9-468b-8d7e-eb093e51345f.png)

Inside the `agent-py` directory, install the project dependencies using [Poetry](https://python-poetry.org/docs/).

```
cd agent/agent-py
poetry install
```

![poetry install](https://cdn.hashnode.com/res/hashnode/image/upload/v1739906106997/cfc4e48a-786b-45d2-aee1-db474dfd0102.png)
<figcaption>poetry install</figcaption>

&nbsp;

Then, run the demo using the command: `poetry run demo`.

![poetry run demo](https://cdn.hashnode.com/res/hashnode/image/upload/v1739906107847/ec7f1e40-3667-4153-8937-20c8409ec86b.png)

&nbsp;

### Step 2: Add necessary API Keys.

Create a `.env` file under the `agent-py` directory. Then add your [OpenAI API key](https://platform.openai.com/api-keys) and [LangSmith API key](https://docs.smith.langchain.com/administration/how_to_guides/organization_management/create_account_api_key#api-keys) to the `.env` file. I've attached the docs link so it's easy to follow.

This will be the naming convention.

```
OPENAI_API_KEY=your_openai_api_key
LANGSMITH_API_KEY=your_langsmith_api_key
```

![langsmith api key](https://cdn.hashnode.com/res/hashnode/image/upload/v1739906108868/70213831-099a-4d8b-89e9-6bcf8381fb08.png)
<figcaption>langsmith api key</figcaption>

&nbsp;

![openai api key](https://cdn.hashnode.com/res/hashnode/image/upload/v1739906110080/a02f2da4-bad5-4aa2-85f1-19133e301a97.png)
<figcaption>openai api key</figcaption>

&nbsp;

### Step 3: Start your LangGraph Agent.

There are various ways you can start your agent, such as using Self-hosted (FastAPI) which is only supported for Python agents or deploying to LangGraph Platform by following the [official guide for production](https://langchain-ai.github.io/langgraph/cloud/deployment/cloud/).

For the scope of this article, we will be using local development, where we use the [LangGraph CLI](https://langchain-ai.github.io/langgraph/cloud/reference/cli/) to start a development server and LangGraph studio session.

You will need a [LangSmith account](https://smith.langchain.com/) to use this method. You will need to make sure docker is installed in your system and then install the CLI using `pip install langgraph-cli`.

![langgraph version](https://cdn.hashnode.com/res/hashnode/image/upload/v1739906111025/85111c41-02e0-451d-9fe0-4cc5149b40cc.png)

Before running the main command, you need to make sure `CopilotKit` is installed. You can do so by following this command.

```
python -m pip show copilotkit
```

![check if copilotkit is installed](https://cdn.hashnode.com/res/hashnode/image/upload/v1739906112426/a48422f2-4b46-48f1-8c60-b346cfa9bbbd.png)

If it's not installed, you can do so using: `python -m pip install copilotkit`.

Then, just run the following command to host it locally.

```
langgraph dev --host localhost --port 8000
# our deployment URL will be http://localhost:8000
```

This command starts a LangGraph development server and uses the `langgraph.json` to read settings (like routes, nodes, behaviors) from this file to configure the application.

![local deployment](https://cdn.hashnode.com/res/hashnode/image/upload/v1739906113376/cd44d757-0070-4ec0-8875-99de20055618.png)

&nbsp;

If it's running successfully, then you will get a local LangGraph studio. It helps visualize the `steps_node`, then searches for the results, summarizes them and extracts the key points.

You can run and test different flows interactively while debugging issues with step-by-step execution.

![local LangGraph studio](https://cdn.hashnode.com/res/hashnode/image/upload/v1739906114421/31ea123a-8f87-498d-94eb-b3757bb844e0.png)
<figcaption>local LangGraph studio</figcaption>

&nbsp;

![api docs](https://cdn.hashnode.com/res/hashnode/image/upload/v1739906115504/88401418-4c83-4bc8-b541-c3404f119b81.png)
<figcaption>api docs</figcaption>

&nbsp;

### Step 4: Connect your LangGraph agent to CopilotKit.

Now, you need to connect your LangGraph agent to CopilotKit using either a self-hosted cloud runtime or Copilot Cloud (recommended), which we will use here.

With [Copilot Cloud](https://cloud.copilotkit.ai/onboarding), you need to connect a remote endpoint to your LangGraph agent. You can read the [docs](https://docs.copilotkit.ai/coagents/quickstart/langgraph?copilot-hosting=copilot-cloud&lg-deployment-type=LangGraph+Platform#add-a-remote-endpoint-for-your-langgraph-agent) if you're interested in self-hosted (FastAPI) or LangGraph platform. 

We will be setting it up locally using LangGraph Studio. When running your LangGraph agent locally, you need to open a tunnel so Copilot Cloud can connect to it. Use the following command:

```
npx copilotkit@latest dev --port 8000
```

You will get the option to install that copilotkit package and also the option to authenticate with Copilot Cloud in case you are not.

![copilotkit cloud](https://cdn.hashnode.com/res/hashnode/image/upload/v1739906117199/70d8c19d-0c96-457a-9fc3-3913171b0105.png)

As you can see, the Local tunnel is live and linked to Copilot Cloud!

![local tunnel](https://cdn.hashnode.com/res/hashnode/image/upload/v1739906118298/1f63cb23-e8de-4cd9-a5a9-d4464487a0e1.png)

You will also receive the confirmation on the CopilotKit cloud dashboard.

![copilotkit cloud dashboard](https://cdn.hashnode.com/res/hashnode/image/upload/v1739906119336/1a2ef726-c823-400a-b6c9-45468f40e861.png)
<figcaption>copilotkit cloud dashboard</figcaption>

&nbsp;

### Step 5: Setup CopilotKit provider.

The `<CopilotKit>` component must wrap the Copilot-aware parts of your application.  In most cases, it's best to place it around the entire app, like in `layout.tsx`.

You can find it in `ui/app/layout.tsx`. You will get this API key on the copilotkit cloud available at [cloud.copilotkit.ai](https://cloud.copilotkit.ai/).

```typescript
import type { Metadata } from "next";

import { CopilotKit } from "@copilotkit/react-core";

import "@copilotkit/react-ui/styles.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "CoAgents Starter",
  description: "CoAgents Starter",
};

export default function RootLayout({ children }: { children: any }) {
  return (
    <html lang="en">
      <body>
        {/* Use the public api key you got from Copilot Cloud  */}
        <CopilotKit
          agent="sample_agent" // lock the agent to the sample_agent since we only have one agent
          //  runtimeUrl="/api/copilotkit"
          showDevConsole={false}
          publicApiKey="<your-copilot-cloud-public-api-key>"
        >
          {children}
        </CopilotKit>
      </body>
    </html>
  );
}
```

Since we are using `Copilot Cloud`, we have to omit the `runtimeUrl` property in the `CopilotKit` component and provide a valid API key.

In this example, we are only using a single agent, but if you're looking to run multiple LangGraph agents, check the [official Multi-Agent guide](https://docs.copilotkit.ai/coagents/multi-agent-flows).

&nbsp;

### Step 6: Setup the Copilot UI.

The last step is to use CopilotKit's UI components to render the chat interaction with your agent. In most cases, this is done alongside your core page components, like in your `page.tsx` file.

```typescript
import "@copilotkit/react-ui/styles.css";
import { CopilotPopup } from "@copilotkit/react-ui";
 
export function YourApp() {
  return (
    <main>
      <h1>Your main content</h1>

      <CopilotPopup
        labels={{
            title: "Popup Assistant",
            initial: "Hi! I'm connected to an agent. How can I help?",
        }}
      />
    </main>
  );
}
```

In the cloned repo, `CopilotSidebar` is used with proper styling. Either of these is totally fine, I used this so it's easy to understand.

If you are looking for other chat component options (`CopilotPopup`, `CopilotChat`...), you can check out the [Agentic Chat UI guide](https://docs.copilotkit.ai/coagents/agentic-chat-ui).

That's it. Congrats! 🎉

You have successfully integrated a LangGraph agent into your application. To start, try asking a few questions to your agent.

![final generative ui](https://cdn.hashnode.com/res/hashnode/image/upload/v1739906120544/b1607f2d-b5a7-487c-9665-2e2b967e6e5e.gif)

&nbsp;

I also recommend reading [Introducing CoAgents: Everything You Need To Build Agent-Native Applications Powered by LangGraph](https://www.copilotkit.ai/blog/everything-you-need-to-build-agent-native-applications) on the official copilotkit blog. It goes into deeper concepts you might find interesting.

In the next section, we will check out some of the examples of applications we can build.

---

## 3. Some real-world examples with source code.

You can build lots of innovative AI agents, so let's explore a few that stand out. All of these include source code (GitHub repository).

### ✅ [AI Travel App](https://dev.to/copilotkit/build-an-ai-travel-planner-with-copilotkit-langgraph-google-maps-api-32fm)

![ai travel app demo](https://cdn.hashnode.com/res/hashnode/image/upload/v1739906122050/891aa733-70fc-4068-a14c-0e49e60869c3.png)

You can read this blog to build an AI Travel app using `CopilotKit`, `LangGraph` & `Google Maps API`. You can ask the agent: `Plan a Trip to England` and it will provide all the details which you can act on.

You can check the [GitHub Repository](https://github.com/CopilotKit/CopilotKit/tree/main/examples/coagents-travel), [Docs](https://docs.copilotkit.ai/coagents/tutorials/ai-travel-app) and [live demo](https://examples-coagents-ai-travel-app.vercel.app/).

%[https://www.youtube.com/watch?v=9v3kXiOY3vg]


&nbsp;

### ✅ [Research Canvas](https://docs.copilotkit.ai/coagents/videos/research-canvas)

![research canvas](https://cdn.hashnode.com/res/hashnode/image/upload/v1739906123038/76700a0f-2aec-4e15-b6ef-9ecf04d531f6.png)

You can build a virtual research assistant which has a shared state with the user interface. It uses `LangGraph` and `CoAgents (CopilotKit)`.

You can check the [GitHub Repository](https://github.com/CopilotKit/CopilotKit/tree/main/examples/coagents-research-canvas) and [live demo](https://examples-coagents-research-canvas-ui.vercel.app/).

%[https://youtu.be/0b6BVqPwqA0]


&nbsp;

### ✅ [Perplexity Clone](https://www.copilotkit.ai/blog/build-a-perplexity-clone-with-copilotkit)

![perplexity clone](https://cdn.hashnode.com/res/hashnode/image/upload/v1739906124017/4e2e44a3-5525-4a19-9c6c-21ae8040bc82.png)

You can check this tutorial blog to build a Perplexity-style application using `LangGraph`, `Tavily` and `CopilotKit`.

You can check the [GitHub Repository](https://github.com/CopilotKit/CopilotKit/tree/main/examples/coagents-ai-researcher) and [live demo](https://examples-coagents-ai-researcher-ui.vercel.app/).

%[https://youtu.be/HvzmwwDF4aM]


You can also find a few others on the [official examples](https://github.com/CopilotKit/CopilotKit/tree/main/examples) in the CopilotKit repository.

---

Many developers believe building AI agents is tough.

Hopefully, this guide makes it easier for you to build your first agent.

Let me know if you have any other ideas or if you have built any agents before.

Have a great day! Until next time :)

| You can check<br />my work at [anmolbaranwal.com](https://anmolbaranwal.com/). <br />Thank you for reading! 🥰 | <a href="https://twitter.com/Anmol_Codes"><img src="https://img.shields.io/badge/Twitter-d5d5d5?style=for-the-badge&logoColor=000" alt="profile of Twitter with username Anmol_Codes" ></a> <a href="https://github.com/Anmol-Baranwal"><img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logoColor=white" alt="profile of GitHub with username Anmol-Baranwal" ></a> <a href="https://www.linkedin.com/in/Anmol-Baranwal/"><img src="https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logoColor=white" alt="profile of LinkedIn with username Anmol-Baranwal" /></a> |
| --------- | -------- |

Follow CopilotKit for more content like this.

%[https://dev.to/copilotkit]
