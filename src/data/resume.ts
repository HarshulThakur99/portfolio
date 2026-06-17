export const resumeData = {
  name: "Harshul Thakur",
  title: "AI Architect",
  summary: `Results-driven AI Architect with 6+ years designing and shipping production ML systems and LLM/Agentic AI platforms at scale. Track record spans classical ML (forecasting, anomaly detection, time-series) through modern GenAI — RAG pipelines, MCP-based multi-agent systems, graph memory architectures, and LLM fine-tuning (SFT/DPO) — all deployed end-to-end on AWS (Bedrock, OpenSearch) and Azure (AKS, AML, CosmosDB). Adept at owning full delivery: from solution architecture and ML pipeline design to CI/CD, real-time inference, and cloud-native security. Expert in Python, PyTorch, LangGraph, and PySpark.`,
  contact: {
    email: "harshulthakur99@gmail.com",
    linkedin: "https://www.linkedin.com/in/harshul-thakur/",
  },
  experience: [
    {
      company: "Quantiphi Inc.",
      title: "AI/ML Architect",
      period: "February 2024 – Present",
      projects: [
        {
          name: "Agentic AI Platform (Internal Product)",
          bullets: [
            "Architected a no-code/low-code platform enabling rapid development and deployment of autonomous AI agents for enterprise business workflows using LangGraph and CrewAI for multi-agent orchestration.",
            "Designed modular agent orchestration architecture supporting composition of multiple AI agents with shared contextual memory, tool routing, and dynamic task planning.",
            "Integrated AWS Bedrock foundation models (Claude, Titan) and implemented scalable agent pipelines following MCP and A2A interoperability protocols.",
            "Built REST APIs to expose agent capabilities to downstream applications, enabling seamless integration with enterprise systems and data sources.",
            "Enabled rapid deployment of AI-driven workflows through dynamic configuration of agents, tools, and data sources — reducing time-to-production for new use cases by ~60%.",
          ],
        },
        {
          name: "Generative AI Digital Driver Assistant",
          bullets: [
            "Built a production-grade MCP client+server agentic platform for enterprise fleet management with real-time SSE streaming, GraphMemo graph memory, and a DB-driven dynamic tool registry — deployed on Azure (AKS, CosmosDB, Redis, Azure SQL).",
            "Engineered a per-intent vector retrieval router seeding each tool as multiple CosmosDB phrase-nodes; improved semantic tool-match scores from ~0.30 → 0.65–0.90 and cut routing latency from ~2–3 s to <400 ms.",
            "Designed a custom graph memory layer (GraphMemo) with Tool Nodes (vector-embedded API descriptions), Fact Nodes (stateful entities with field-change history), and Relationship Nodes; implemented Redis hot-cache (TTL-tiered) + CosmosDB cold-storage with automatic LLM-driven conversation summarization replacing naive truncation.",
            "Implemented a 4-tier parallel safety pipeline — Azure Content Safety pre-flight (~50–100 ms) + embedding intent classifier at 86.8% accuracy / 150 ms + role×intent permission matrix + LLM business-rules — running before every tool execution.",
            "Achieved zero-code tool onboarding via an Azure SQL-backed dynamic tool registry with atomic cache refresh ordering (MCP → RetrievalRouter → GraphMemo → Redis) and session-scoped context injection; customer_id enforced non-overridable by LLM design.",
            "Integrated Azure Key Vault (DefaultAzureCredential), 5-tier RBAC, hot-reloadable guardrail configs, and Kubernetes-native health/readiness probes for production resilience.",
          ],
        },
        {
          name: "Vehicle Lease Renewal Forecasting",
          bullets: [
            "Designed and deployed a scalable ML system on Azure predicting vehicle lease renewals, achieving 85% recall and 90% precision — improving operational efficiency by 40%.",
            "Built distributed feature engineering pipelines using PySpark; deployed real-time inference on Azure Kubernetes Service with event-driven ingestion via Azure Event Hub and Event Grid.",
          ],
        },
      ],
    },
    {
      company: "Grazitti Interactive",
      title: "Data Scientist",
      period: "August 2021 – February 2024",
      projects: [
        {
          name: "LLM Decision Systems (Intel Vision 2023)",
          bullets: [
            "Built LLM-powered executive decision support prototypes demonstrated at Intel Vision 2023.",
            "Enabled natural language querying over enterprise data sources improving information access and decision speed.",
          ],
        },
        {
          name: "Financial Anomaly Detection",
          bullets: [
            "Designed machine learning models for anomaly detection within a model risk governance framework.",
            "Implemented validation pipelines, feedback loops, and monitoring metrics aligned with compliance standards.",
          ],
        },
        {
          name: "RAG-based Financial Knowledge System",
          bullets: [
            "Implemented a retrieval augmented generation system using AWS OpenSearch vector database.",
            "Built automated document ingestion pipelines using Amazon S3 enabling continuously updated knowledge bases.",
          ],
        },
        {
          name: "Speech Model Optimization",
          bullets: [
            "Improved Whisper speech model performance through transfer learning and model quantization.",
            "Reduced model size and enabled real-time inference on resource-constrained devices with 70x CPU speed improvement.",
          ],
        },
        {
          name: "LLM Evaluation Framework",
          bullets: [
            "Built BERT-based evaluation pipelines to measure factual consistency of LLM outputs.",
            "Implemented cross-encoder ranking models to reduce hallucinations by 40%.",
          ],
        },
        {
          name: "Forecasting Systems",
          bullets: [
            "Built time series forecasting pipelines using Holt-Winters exponential smoothing for tax revenue forecasting.",
          ],
        },
      ],
    },
    {
      company: "Volvo Eicher Commercial Vehicles Ltd.",
      title: "Data Science Consultant",
      period: "June 2020 – August 2021",
      projects: [
        {
          name: "Predictive Maintenance & RUL Modeling",
          bullets: [
            "Developed machine learning models predicting remaining useful life of industrial components using time series analysis and deep learning.",
          ],
        },
        {
          name: "Automated Data Intelligence Pipeline",
          bullets: [
            "Built Python automation pipelines transforming raw datasets into automated reporting dashboards.",
            "Reduced manual analysis time by 32 hours per week and delivered ~$20K annual operational savings.",
          ],
        },
      ],
    },
  ],
  skills: [
    {
      icon: "🤖",
      category: "Agentic AI & Frameworks",
      tools: [
        { name: "LangGraph", slug: "langgraph" },
        { name: "LangChain", slug: "langchain" },
        { name: "CrewAI" },
        { name: "AWS Bedrock Agents" },
        { name: "Azure AI Foundry" },
        { name: "MCP Protocol" },
        { name: "A2A Protocol" },
        { name: "Autonomous Agents" },
        { name: "Multi-Agent Orchestration" },
      ],
    },
    {
      icon: "🧠",
      category: "LLM & GenAI",
      tools: [
        { name: "Large Language Models" },
        { name: "Prompt Engineering" },
        { name: "Retrieval-Augmented Generation" },
        { name: "Fine-Tuning (SFT/DPO)" },
        { name: "Hallucination Reduction" },
        { name: "LLM Evaluation" },
        { name: "Responsible AI" },
      ],
    },
    {
      icon: "💻",
      category: "Languages & APIs",
      tools: [
        { name: "Python", slug: "python" },
        { name: "SQL" },
        { name: "FastAPI", slug: "fastapi" },
        { name: "PySpark", slug: "apachespark" },
        { name: "OpenAI API" },
      ],
    },
    {
      icon: "☁️",
      category: "Cloud & Infrastructure",
      tools: [
        { name: "AWS Bedrock" },
        { name: "AWS S3" },
        { name: "AWS OpenSearch" },
        { name: "Azure AKS" },
        { name: "Azure CosmosDB" },
        { name: "Azure Event Hub" },
        { name: "Azure Event Grid" },
        { name: "Azure AI Foundry" },
        { name: "GCP Vertex AI" },
        { name: "Kubernetes", slug: "kubernetes" },
        { name: "Docker", slug: "docker" },
        { name: "Azure DevOps", slug: "azuredevops" },
        { name: "GitHub Actions", slug: "githubactions" },
      ],
    },
    {
      icon: "📊",
      category: "ML & Data",
      tools: [
        { name: "Deep Learning" },
        { name: "Transformers" },
        { name: "MLOps" },
        { name: "Time Series Analysis" },
        { name: "Demand Forecasting" },
        { name: "Computer Vision" },
        { name: "Statistical Modelling" },
        { name: "MongoDB", slug: "mongodb" },
        { name: "Redis", slug: "redis" },
        { name: "Apache Kafka", slug: "apachekafka" },
        { name: "Tableau", slug: "tableau" },
      ],
    },
    {
      icon: "💰",
      category: "Financial Domain",
      tools: [
        { name: "Financial Anomaly Detection" },
        { name: "Model Risk Governance" },
        { name: "Regulatory Compliance Pipelines" },
        { name: "Financial Forecasting" },
        { name: "Risk Management Frameworks" },
      ],
    },
  ],
  certifications: [
    {
      name: "AWS Certified AI Practitioner",
      issuer: "AWS",
      date: "",
      link: "https://www.credly.com/badges/d8eee366-d5d5-46da-931e-4f6c0f38e31a/public_url"
    },
    {
      name: "Ultimate Agentic AI Course on AWS: Bedrock, Crew AI and MCP",
      issuer: "AWS",
      date: "",
    },
    {
      name: "AWS Generative AI Innovation Center Partner Alliance Innovation Program",
      issuer: "AWS",
      date: "",
    },
    {
      name: "DeepLearning.AI TensorFlow Developer Professional Certificate",
      issuer: "DeepLearning.AI",
      date: "",
      link: "https://coursera.org/share/56d58de8801203fad04e9903b904366f"
    },
    {
      name: "Natural Language Processing in TensorFlow",
      issuer: "DeepLearning.AI",
      date: "",
      link: "https://coursera.org/share/6dcb9f222094302c367a991dee322670"
    },
    {
      name: "Applied Machine Learning using Python",
      issuer: "University of Michigan",
      date: "",
      link: "https://coursera.org/share/a3e3ac61682a78043d65013a31258c0d"
    },
    {
      name: "Introduction to Data Science in Python",
      issuer: "University of Michigan",
      date: "",
      link: "https://coursera.org/share/e76a8e25a7c05d54868784e32e67af5a"
    },
    {
      name: "AWS Fundamentals: Going Cloud-Native",
      issuer: "AWS",
      date: "",
      link: "https://coursera.org/share/642fd3af4fd557049ff4a07fe67dc518"
    },
    {
      name: "Nanodegree in Big Data Foundations",
      issuer: "Udacity",
      date: "",
      link: "https://confirm.udacity.com/V67U3GES"
    }
  ],
};
