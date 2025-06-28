export const resumeData = {
  name: "Harshul Thakur",
  title: "Data Scientist",
  summary: `Results-driven Senior Machine Learning Engineer with 5 years of experience architecting, developing, and deploying scalable AI/ML solutions. I specialize in Large Language Models (LLMs), Generative AI, and MLOps on cloud platforms like Azure and AWS. I enjoy translating complex business challenges into impactful technical solutions, and I thrive on leading projects from ideation to production. My expertise spans Python, TensorFlow, PyTorch, PySpark, and a range of ML frameworks, with a strong focus on building systems that deliver real business value.`,
  contact: {
    email: "harshulthakur99@gmail.com",
    linkedin: "https://www.linkedin.com/in/harshul-thakur/",
  },
  experience: [
    {
      company: "Quantiphi",
      title: "Sr. ML Engineer",
      period: "February 2024 – Present",
      description: [
        "Developed a Generative AI Digital Driver Assistant using Azure OpenAI Service (GPT-4o) and Azure Cognitive Services (Speech-to-Text) to enhance driver interaction.",
        "Engineered the system to process natural language queries, generate SQL for data retrieval, and provide contextually relevant answers from documents/policies using Retrieval-Augmented Generation (RAG).",
        "Fine-tuned GPT-4o on a curated dataset of 10,000+ domain-specific driver interactions and company policies to improve understanding of industry jargon and common queries.",
        "Established a CI/CD pipeline for deploying updated fine-tuned models, including automated testing against a benchmark dataset of driver queries to ensure consistent performance and prevent regressions.",
        "Designed a feedback mechanism allowing drivers to rate responses, with this data periodically used to refine prompts and identify areas for further model fine-tuning.",
        "Architected and developed an ML model to predict vehicle lease renewals within a 90-day window, achieving 85% recall and 90% precision, resulting in a 20% increase in customer retention.",
        "Engineered features identifying 10 key predictors, improving model performance by 30%.",
        "Led the migration of the ML pipeline from AWS to Azure, utilizing Azure Machine Learning Studio and Azure Blob Storage.",
        "Deployed the model on Azure ML endpoints for real-time inference and batch processing, reducing operational bottlenecks by 40%.",
        "Developed a robust CI/CD pipeline using Azure DevOps, automating code integration, unit/integration testing, model validation, and staged deployment (Dev, UAT, Prod) to Azure ML.",
        "Integrated automated triggers for model retraining based on performance degradation alerts or significant data drift, ensuring sustained model accuracy.",
      ],
    },
    {
      company: "Grazitti Interactive",
      title: "Data Scientist",
      period: "August 2021 – February 2024",
      description: [
        "Engineered and fine-tuned LLMs using Retrieval Augmented Generation (RAG) by integrating with AWS OpenSearch vector database populated with financial reports and medical research papers. Automated ingestion pipeline from Amazon S3 kept the knowledge base dynamically updated.",
        "Enhanced Whisper model performance via tailored transfer learning on a domain-specific audio dataset, unfreezing select layers and fine-tuning with a custom loss function for accent robustness. Achieved 70x inference speedup on CPU by quantizing the model and optimizing the execution graph with TensorFlow ONNX Runtime.",
        "Utilized BERT-based scoring to assess factual consistency of LLM outputs against source documents and employed a cross-encoder architecture to re-rank responses, reducing model hallucination by 40%.",
        "Presented the RAG LLM pipeline at the 2023 Intel Vision Demo, attracting attention from Intel's CEO for its impact on decision-making with LLMs.",
        "Developed a model risk management solution for financial anomaly detection, achieving a 25% increase in recall by applying reinforcement learning principles to refine predictions and enhance decision-making.",
        "Led a tax data project using advanced pre-processing and Holt-Winters exponential smoothing for improved time series forecasting accuracy.",
        "Developed a human pose detection library integrating Ultralytics YOLOv5 for accurate human detection across varied images.",
      ],
    },
    {
      company: "Volvo Eicher Commercial Vehicles Ltd.",
      title: "Data Science Consultant",
      period: "June 2020 – August 2021",
      description: [
        "Led a project to predict the remaining operational lifespan (RUL) of industrial assets, conducting feature engineering and model selection to develop accurate predictions using Time Series Analysis and Deep Learning.",
        "Created a Python automation script that transformed large datasets into professional presentations, saving 32 hours weekly and reducing company costs by $20,000 annually."
      ],
    },
  ],
  skills: [
    {
      icon: "🧠",
      category: "AI/ML",
      tools: [
        { name: "Artificial Intelligence" },
        { name: "Computer Vision" },
        { name: "Data Engineering" },
        { name: "Deep Learning" },
        { name: "Demand Forecasting" },
        { name: "Generative AI" },
        { name: "Image Recognition" },
        { name: "Large Language Models" },
        { name: "Machine Learning" },
        { name: "MLOps" },
        { name: "Natural Language Processing" },
        { name: "PySpark" },
        { name: "Retrieval-Augmented Generation" },
        { name: "System Design" },
        { name: "Tableau" },
        { name: "Time Series Analysis" }
      ],
    },
    {
      icon: "💻",
      category: "What I Code In",
      tools: [
        { name: "Python", slug: "python" },
      ],
    },
    {
      icon: "🗃️",
      category: "Data & Storage",
      tools: [
        { name: "MongoDB", slug: "mongodb" },
        { name: "MySQL", slug: "mysql" },
        { name: "Redis", slug: "redis" },
      ],
    },
    {
      icon: "🛠️",
      category: "Infrastructure & Tooling",
      tools: [
        { name: "Kubernetes", slug: "kubernetes" },
        { name: "Docker", slug: "docker" },
        { name: "Grafana", slug: "grafana" },
        { name: "Git", slug: "git" },
        { name: "Kafka", slug: "apachekafka" },
      ],
    },
    {
      icon: "☁️",
      category: "Cloud Platforms",
      tools: [
        { name: "AWS" },
        { name: "AWS SageMaker" },
        { name: "AWS Lambda" },
        { name: "AWS OpenSearch" },
        { name: "AWS S3" },
        { name: "Azure" },
        { name: "Azure OpenAI" },
        { name: "Azure Cognitive Services" },
        { name: "Azure Machine Learning" },
        { name: "Azure DevOps" },
        { name: "GCP" },
        { name: "GCP Vertex AI" },
        { name: "GCP BigQuery" },
        { name: "GCP Cloud Functions" },
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
