import { Education, SkillGroup, WorkExperience, TeachingExperience, Publication, Certificate, CertificateCategory, Award, Service } from './types';
import photo from './images/photo_main.jpg';

export const personalInfo = {
  name: "Ehsan Saeedizade",
  title: "Ph.D. Student in Computer Science and Engineering",
  institution: "University of Nevada, Reno",
  bio: "I am studying Ph.D. in Computer Science and Engineering at the University of Nevada. I am interested in Software Systems, IoT Systems, Machine Learning, Cloud Computing, High Performance Computing, and DevOps and so I am both software and cloud engineer.",
  email: "e24saeedi@gmail.com",
  linkedin: "https://www.linkedin.com/in/ehsansaeedizade/",
  scholar: "https://scholar.google.com/citations?user=RKRvkz8AAAAJ&hl=en",
  researchgate: "https://www.researchgate.net/profile/Ehsan-Saeedizade",
  github: "https://github.com/EhsanSaZ",
  photo: photo,
};

export const education: Education[] = [
  {
    degree: "Ph.D. in Computer Science and Engineering",
    institution: "University of Nevada, Reno",
    location: "USA",
    period: "2021-up to now",
    description: "Researching in federated learning, anomaly detection, and distributed systems, focusing on privacy-preserving AI/ML in edge/cloud environments and scalable monitoring of large-scale infrastructure."
  },
  {
    degree: "M.Sc in Computer Science and Engineering",
    institution: "University of Nevada, Reno",
    location: "USA",
    period: "2021-2024",
    description: "Researched applied machine learning and systems, including anomaly detection, I/O performance prediction in HPC systems, and distributed monitoring frameworks."
  },
  {
    degree: "M.Sc in Computer Science and Engineering",
    institution: "Iran University of Science and Technology",
    location: "Tehran",
    period: "2018-2021",
    description: "Researched cloud computing and resource scheduling, developing optimization and reinforcement learning-based algorithms for distributed workflow management."
  },
  {
    degree: "B.Sc in Computer Science and Engineering",
    institution: "Iran University of Science and Technology",
    location: "Tehran",
    period: "2014-2018",
    description: "Researched software engineering, algorithms, and machine learning through projects in AI, computer vision, and web-based systems."
  }
];

// export const researchInterests = "Generally my research interests lies in Software Systems, Cloud Computing, IoT, Machine Learning, Distributed Systems, and High Performance Computing. Previously, I worked on parallel filesystem and high performance data transfer in research and education institutions for large-scale science applications. Currently, I am doing my research on Federated Learning, privacy preserving distributed learning and IoT environment. My masters thesis was about workflow scheduling in Workflow as a Service environment and I am also interested in topics such as stream processing and function scheduling in server-less computing environment as well.";

export const skills: SkillGroup[] = [
  {
    "title": "Programming Languages",
    "icon": "code",
    "skills": "Python, Java, C++, Bash, MATLAB; Familiar with JavaScript, HTML/CSS, VHDL, Verilog, Assembly."
  },
  {
    "title": "Databases",
    "icon": "database",
    "skills": "PostgreSQL, MySQL, SQLite, MongoDB, MongoEngine, SQLAlchemy."
  },
  {
    "title": "AI/ML & Data Systems",
    "icon": "layers",
    "skills": "Machine Learning, Deep Learning, Federated Learning, Distributed ML, Privacy-Preserving ML, Anomaly Detection, Transformers, Large Language Models (LLMs), Retrieval-Augmented Generation (RAG), AI Agents, Multi-Agent Systems, Feature Engineering, Model Evaluation, PyTorch, TensorFlow, Keras, Scikit-learn, NumPy, Pandas, OpenCV, PySpark, ETL & Data Pipelines."
  },
  {
    "title": "Cloud, DevOps & MLOps",
    "icon": "settings",
    "skills": "Docker, Kubernetes, Helm, Pulumi, Kaniko, Git, GitHub Actions, GitLab CI/CD, Prometheus, Grafana, ELK Stack, RabbitMQ, OpenStack, Ceph, Lustre, AWS, Google Cloud Platform (GCP), MLOps, System Design."
  },
  {
    "title": "Software & Web Frameworks",
    "icon": "layout",
    "skills": "Flask, React.js, Angular, Bootstrap, jQuery, SASS."
  },
  {
    "title": "Simulation & Modeling",
    "icon": "monitor",
    "skills": "CloudSim, Petri Nets (CPN Tools, PIPE), Packet Tracer, Xilinx."
  },
  {
    "title": "Operating Systems",
    "icon": "server",
    "skills": "Linux (Ubuntu, CentOS), Unix, Windows."
  }
];

export const workExperience: WorkExperience[] = [
  {
    date: "Aug 2021 - Present",
    title: "Software Systems Engineer and Data Science Researcher",
    institution: "University of Nevada, Reno",
    location: "Reno, USA",
    responsibilities: [
      "Designed a federated learning-based anomaly detection approach, improving accuracy by 17.39%.",
      "Built a scalable monitoring framework and real-time data pipeline for distributed systems using Python, ELK Stack, and RabbitMQ.",
      "Predicted performance anomalies (98% accuracy) and I/O bursts (>90% accuracy), enhancing system observability.",
      "Developed a privacy-preserving federated learning framework for heterogeneous edge and IoT environments using PyTorch, reducing training time by 12.22% and improving accuracy by 25.4%."
    ]
  },
  {
    date: "May 2024 - Aug 2024",
    title: "DevOps and Cloud Engineer (Internship)",
    institution: "Brokee",
    location: "Remote",
    responsibilities: [
      "Implemented GitLab CI/CD pipelines and deployed containerized applications on Google Kubernetes Engine using Docker and Kaniko, reducing deployment time and network usage cost by up to 40%.",
      "Enhanced system observability by deploying Prometheus, Pyroscope, and Grafana for real-time performance monitoring.",
      "Automated infrastructure provisioning using Pulumi and Helm, improving scalability and rollout reliability."
    ]
  },
  {
    date: "Sep 2018 - Feb 2021",
    title: "Java Developer and Software Engineering Researcher",
    institution: "Iran University of Science and Technology",
    location: "Tehran, Iran",
    responsibilities: [
      "Developed a workflow scheduling algorithm using multi-resource packing, improving scheduling accuracy to 96% and reducing execution cost by up to 32.08%.",
      "Designed a SARSA-based reinforcement learning algorithm for dependency-aware function scheduling in serverless (FaaS) platforms, improving resource utilization by 69.5% and reducing execution time by 58%.",
      "Mentored and supervised a master’s student on predictive scheduling algorithms for large-scale simulations.",
      "Developed an object-oriented serverless cloud simulator based on CloudSim to support large-scale workflow simulations."
    ]
  },
  {
    date: "Nov 2018 - Apr 2021",
    title: "Cloud Engineer (Volunteer)",
    institution: "Cloud Computing Center, Iran University of Science and Technology",
    location: "Tehran, Iran",
    responsibilities: [
      "Deployed and maintained multi-node OpenStack and Ceph clusters to provide highly available IaaS services.",
      "Supported cloud infrastructure for research workloads, improving system reliability and scalability.",
      "Mentored 5+ interns on system administration, cloud architecture, and OpenStack internals, enhancing team productivity."
    ]
  }, 
  {
    date: "Feb 2018 - Sep 2018",
    title: "Python Developer",
    institution: "Fars",
    location: "Tehran, Iran",
    responsibilities: [
      "Developed and maintained a Python SDK for a messaging platform using asyncio, reducing chatbot development time.",
      "Improved system efficiency by enabling asynchronous processing for real-time messaging services.",
      "Led technical guidance sessions for interns, enhancing knowledge sharing and team productivity."
    ]
  },
  {
    date: "Sep 2017 - Sep 2018",
    title: "Python Developer and ML Researcher",
    institution: "Iran University of Science and Technology",
    location: "Tehran, Iran",
    responsibilities: [
      "Developed a lightweight facial expression recognition (FER) model using Keras, achieving 96% accuracy on the test dataset.",
      "Optimized image preprocessing and feature extraction using OpenCV, reducing inference time to 50ms for real-time applications.",
      "Designed and implemented end-to-end ML pipeline for feature extraction and classification in computer vision systems."
    ]
  },
  {
    date: "Jan 2016 - Sep 2018",
    title: "Frontend Developer (Volunteer)",
    institution: "IUST ACM Judge, Gametic",
    location: "Tehran, Iran",
    responsibilities: [
      "Developed a game analytics dashboard (Gametic) using AngularJS and MVC architecture for data visualization and analysis.",
      "Built a frontend system for an ACM Judge platform using AngularJS and Model-View-Controller architecture.",
      "Designed interactive user interfaces and improved usability for web-based analytical and competitive programming systems."
    ]
  },  
  {
    date: "Jun 2017 - Sep 2017",
    title: "Java Developer Intern",
    institution: "TOSAN (Internship)",
    location: "Tehran, Iran",
    responsibilities: [
      "Integrated Elasticsearch into a log parser to enable inverted indexing, reducing debugging time by 97% (from minutes to seconds).",
      "Developed a lightweight Java-based log parser for parsing, indexing, and querying large-scale log files.",
      "Enabled real-time log analysis and debugging for large systems through efficient search and filtering mechanisms."
    ]
  }
];

export const teachingExperience: TeachingExperience[] = [
  {
    course: "Database Management Systems",
    period: "Spring-2026",
    role: "Graduate Teaching Assistant",
    institution: "University Of Nevada-Reno",
    responsibilities: "Grading, Mentorship, Practice sessions"
  },
  {
    course: "Cyber AI",
    period: "Fall-2024, Fall-2023",
    role: "Graduate Teaching Assistant",
    institution: "University Of Nevada-Reno",
    responsibilities: "Grading, Mentorship, Practice sessions"
  },
  {
    course: "Design Patterns",
    period: "Fall-2025, Fall-2024, Fall-2023, Fall-2021",
    role: "Graduate Teaching Assistant",
    institution: "University Of Nevada-Reno",
    responsibilities: "Grading, Mentorship, Practice sessions"
  },
  {
    course: "Testing and DevOps",
    period: "Spring-2025, Spring-2024, Fall-2023",
    role: "Graduate Teaching Assistant",
    institution: "University Of Nevada-Reno",
    responsibilities: "Grading, Mentorship, Practice sessions"
  },
  {
    course: "Formal Methods in SE",
    period: "Fall-2018",
    role: "Graduate Teaching Assistant",
    institution: "Iran University Science and Technology",
    responsibilities: "Grading, Practice sessions"
  },
  {
    course: "Internet Engineering",
    period: "Fall-2018",
    role: "Graduate Teaching Assistant",
    institution: "Iran University Science and Technology",
    responsibilities: "Grading, Practice sessions"
  },
  {
    course: "Computer Architecture",
    period: "Fall-2016, Spring-2017",
    role: "Graduate Teaching Assistant",
    institution: "Iran University Science and Technology",
    responsibilities: "Grading, Practice sessions"
  }
];

export const publications: Publication[] = [
  {
    authors: "Saeedizade, E., Lyon, J., and Sengupta, S.",
    title: "Benchmarking Machine Learning Models for IoT Malware Detection under Data Scarcity and Drift",
    journal: "2026 IEEE 23rd Consumer Communications & Networking Conference (CCNC)",
    year: "2026",
    doi: "10.1109/CCNC65079.2026.11366512",
    doiUrl: "https://doi.org/10.1109/CCNC65079.2026.11366512",
    type: "Conference Paper",
    description: "This paper evaluates lightweight supervised machine learning models for IoT malware detection and classification, analyzing performance, data efficiency, and temporal robustness in dynamic threat environments.",
    tags: ["IoT Security", "Malware Detection", "AI/ML", "Random Forest", "LightGBM", "Logistic Regression", "MLP", "Scikit-learn"]
  },
  {
    authors: "Taheri, R., Saeedizade, E., and Sengupta, S.",
    title: "Lightweight IoT Device Fingerprinting Approach using Locality-Sensitive Hashing",
    journal: "2026 IEEE 23rd Consumer Communications & Networking Conference (CCNC)",
    year: "2026",
    doi: "10.1109/CCNC65079.2026.11366543",
    doiUrl: "https://doi.org/10.1109/CCNC65079.2026.11366543",
    type: "Conference Paper",
    description: "This paper proposes a lightweight IoT device fingerprinting approach using locality-sensitive hashing (LSH) to enable efficient and scalable device identification in resource-constrained environments.",
    tags: ["IoT Security", "Device Fingerprinting", "Locality-Sensitive Hashing (LSH)", "Lightweight Systems", "Network Security", "Scalable Systems"]
  },
  {
    authors: "Saeedizade, E., Sengupta, S., and Thom, J.",
    title: "Federated Learning-Based Anomaly Detection Approach for High-Performance Research Networks",
    journal: "MILCOM 2025 - IEEE Military Communications Conference",
    year: "2025",
    doi: "10.1109/MILCOM64451.2025.11310198",
    doiUrl: "https://doi.org/10.1109/MILCOM64451.2025.11310198",
    type: "Conference Paper",
    description: "This paper proposes a federated learning-based anomaly detection framework for high-performance research networks, leveraging feature-based transfer learning to improve generalization, scalability, and privacy in heterogeneous and data-sparse environments.",
    tags: ["Federated Learning", "Anomaly Detection", "AI/ML", "High-Performance Research Networks (HPRNs)", "Distributed Machine Learning", "Transfer Learning", "Privacy-Preserving ML", "PyTorch", "Scikit-learn", "Flower", "ELK Stack", "Monitoring Systems", "TensorBoard"]
  },
  {
    authors: "Saeedizade, E., and Ashtiani, M.",
    title: "Scientific Workflow Scheduling Algorithms in Cloud Environments: A Comprehensive Taxonomy, Survey, and Future Directions",
    journal: "Journal of Scheduling",
    year: "2025",
    doi: "doi.org/10.1007/s10951-024-00820-1",
    doiUrl: "https://doi.org/10.1007/s10951-024-00820-1",
    type: "Journal Article",
    description: "This paper presents a comprehensive taxonomy and survey of scientific workflow scheduling algorithms in cloud environments, analyzing models, objectives, evaluation methods, and emerging paradigms such as serverless computing and workflow-as-a-service.",
    tags: ["Cloud Computing", "Workflow Scheduling", "Distributed Systems", "Scientific Workflows", "Serverless Computing", "Survey", "Taxonomy"]
  },
  {
    authors: "Saeedizade, E., Taheri, R., and Arslan, E.",
    title: "I/O Burst Prediction for HPC Clusters Using Darshan Logs",
    journal: "2023 IEEE 19th International Conference on e-Science (e-Science)",
    year: "2023",
    doi: "10.1109/e-Science58273.2023.10254871",
    doiUrl: "https://doi.org/10.1109/e-Science58273.2023.10254871",
    type: "Conference Paper",
    description: "This paper proposes machine learning models to predict system-level I/O bursts in HPC clusters using Darshan logs, enabling proactive scheduling and achieving over 90% accuracy for short-term predictions.",
    tags: ["High-Performance Computing (HPC)", "I/O Burst Prediction", "Machine Learning", "Time-Series Prediction", "Darshan", "System Monitoring", "Job Scheduling", "Scikit-learn", "Deep Learning", "Data Analysis", "Feature Engineering", "Model Evaluation"]
  },
  {
    authors: "Saeedizade, E., Zhang, B., and Arslan, E.",
    title: "Demystifying the Performance of Data Transfers in High-Performance Research Networks",
    journal: "2023 IEEE 19th International Conference on e-Science (e-Science)",
    year: "2023",
    doi: "10.1109/e-Science58273.2023.10254940",
    doiUrl: "https://doi.org/10.1109/e-Science58273.2023.10254940",
    type: "Conference Paper",
    description: "This paper presents a scalable end-to-end monitoring framework for analyzing data transfer performance in high-performance research networks, enabling automated root cause analysis of performance anomalies using heuristic methods.",
    tags: ["High-Performance Research Networks (HPRNs)", "Distributed Systems", "Parallel File Systems", "Lustre", "Performance Analysis", "Anomaly Detection", "Data Analysis", "ELK Stack", "Scalable Systems", "Monitoring Systems", "RabbitMQ", "Transfer Learning", "TCP/IP"]
  },
  {
    authors: "Chetabi, F. A., Ashtiani, M., and Saeedizade, E.",
    title: "A Package-Aware Approach for Function Scheduling in Serverless Computing Environments",
    journal: "Journal of Grid Computing",
    year: "2023",
    doi: "10.1007/s10723-023-09657-y",
    doiUrl: "https://doi.org/10.1007/s10723-023-09657-y",
    type: "Journal Article",
    description: "This paper proposes a SARSA-based function scheduling algorithm for serverless computing that optimizes turnaround time and resource utilization by considering data dependencies and package-aware execution.",
    tags: ["Serverless Computing", "Reinforcement Learning", "SARSA", "Cloud Computing", "Resource Management", "Distributed Systems"]
  },
  {
    authors: "Haghpanah, M. A., Saeedizade, E., Tale Masouleh, M., and Kalhor, A.",
    title: "Real-Time Facial Expression Recognition Using Facial Landmarks and Neural Networks",
    journal: "2022 International Conference on Machine Vision and Image Processing (MVIP)",
    year: "2022",
    doi: "10.1109/MVIP53647.2022.9738754",
    doiUrl: "https://doi.org/10.1109/MVIP53647.2022.9738754",
    type: "Conference Paper",
    description: "This paper presents a lightweight real-time facial expression recognition approach using facial landmarks and a multi-layer perceptron (MLP), achieving high accuracy through geometric and texture-based feature extraction.",
    tags: ["Computer Vision", "Facial Expression Recognition", "Neural Networks", "MLP", "OpenCV", "Feature Extraction", "Real-Time Systems"]
  },
  {
    authors: "Saeedizade, E., and Ashtiani, M.",
    title: "DDBWS: A Dynamic Deadline and Budget-Aware Workflow Scheduling Algorithm in Workflow-as-a-Service Environments",
    journal: "The Journal of Supercomputing",
    year: "2021",
    doi: "10.1007/s11227-021-03858-6",
    doiUrl: "https://doi.org/10.1007/s11227-021-03858-6",
    type: "Journal Article",
    description: "This paper proposes a dynamic deadline- and budget-aware workflow scheduling algorithm for cloud-based WaaS environments, optimizing cost and resource utilization through multi-resource packing and concurrent task execution.",
    tags: ["Cloud Computing", "Workflow Scheduling", "Workflow-as-a-Service (WaaS)", "Resource Management", "Distributed Systems", "Containerization", "Virtual Machines", "Container"]
  },
  {
    authors: "Saeedizade, E., and Ashtiani, M.",
    title: "Multi-Constraint Dynamic Scheduling of Scientific Workflows in Cloud with Multi-Resource Packing",
    journal: "International Conference on Web Research",
    year: "2021",
    type: "Conference Paper",
    description: "This paper proposes a dynamic scheduling approach for scientific workflows in cloud environments using multi-resource packing to optimize execution under multiple constraints.",
    tags: ["Cloud Computing", "Workflow Scheduling", "Dynamic Scheduling", "Scientific Workflows", "Resource Packing", "Distributed Systems"]
  }
];

export const certificates: CertificateCategory[] = [
  {
    category: "AI/ML & Data Science",
    items: [
      {
      title: "Transformers & Large Language Models (CME 295)",
      institution: "Stanford University — Course on LLM architectures, training, and agentic AI systems",
      date: "2025",
      url: "https://cme295.stanford.edu/"
      },
      {
      title: "5-Day AI Agents Intensive Course",
      institution: "Google (Kaggle) hands-on course on building autonomous AI agent systems",
      date: "2025",
      url: "https://www.kaggle.com/learn-guide/5-day-agents",
      },
      {
      title: "Generative AI: Elevate Your Data Engineering Career",
      institution: "Coursera (IBM)",
      date: "Mar 2026",
      url: "https://www.coursera.org/account/accomplishments/certificate/WDU8UT9A7JB5"
      },
      {
        title: "Python for Data Science, AI & Development",
        institution: "Coursera (IBM)",
        date: "Jul 2025",
        url: "https://www.coursera.org/account/accomplishments/certificate/9BEYI44XD236"
      },
      {
      title: "Take the Next Step: Elevate Your SOC with AI",
      institution: "Government Technology — Webinar on AI-driven security operations and SOC modernization",
      date: "2025",
      url: "https://webinars.govtech.com/Take-the-Next-Step%3A-Elevate-Your-SOC-with-AI-144466"
      },    
      {
      title: "Build Smarter SOCs with AI and Automation",
      institution: "Government Technology — Webinar on AI-driven SOC automation and scalable security operations",
      date: "2025",
      url: "https://webinars.govtech.com/Build-Smarter-SOCs-with-AI-and-Automation-144231"
      },
      {
      title: "From Data-Driven Insights to AI-Powered Predictions",
      institution: "IBM SkillsBuild workshop on end-to-end ML pipelines and AI systems.",
      date: "Mar 2025",
      url: "",
      },
    ]
  },  
  {
    category: "Data Engineering & Databases",
    items: [
    {
      title: "ETL and Data Pipelines with Shell, Airflow and Kafka",
      institution: "Coursera (IBM)",
      date: "Jan 2026",
      url: "https://www.coursera.org/account/accomplishments/certificate/0G625P63FQ6B"
    },
    {
      title: "Relational Database Administration (DBA)",
      institution: "Coursera (IBM)",
      date: "Nov 2025",
      url: "https://www.coursera.org/account/accomplishments/certificate/JEH1G99AFKP"
    },
    {
      title: "Introduction to Relational Databases (RDBMS)",
      institution: "Coursera (IBM)",
      date: "Aug 2025",
      url: "https://www.coursera.org/account/accomplishments/certificate/U41N7X7IV6VP"
    },    
    {
      title: "Databases and SQL for Data Science with Python",
      institution: "Coursera (IBM)",
      date: "Aug 2025",
      url: "https://www.coursera.org/account/accomplishments/certificate/0Y10MQCDC65I"
    },
    {
      title: "Introduction to Big Data with Spark and Hadoop",
      institution: "Coursera (IBM)",
      date: "Jul 2025",
      url: "https://www.coursera.org/account/accomplishments/certificate/FW2SE3XPLPZD"
    },     {
      title: "Python Project for Data Engineering",
      institution: "Coursera (IBM)",
      date: "Jun 2025",
      url: "https://www.coursera.org/account/accomplishments/certificate/S2XHSUG0CSQO"
    },
    {
      title: "Introduction to Data Engineering",
      institution: "Coursera (IBM)",
      date: "Jun 2025",
      url: "https://www.coursera.org/account/accomplishments/certificate/5XJN7GTE9J6A"
    }
    ]
  },
  {
    category: "Cloud, DevOps, Systems & Infrastructure",
    items: [
      {
      title: "Hands-on Introduction to Linux Commands and Shell Scripting",
      institution: "Coursera (IBM)",
      date: "Jul 2025",
      url: "https://www.coursera.org/account/accomplishments/certificate/ODKP0X5K3YOR"
      }, 
      {
      title: "Terraform: From Beginner to Master with Examples in AWS",
      institution: "Educative",
      date: "Jun 2025",
      url: "https://www.educative.io/verify-certificate/VmBEWXTk1Bp1MOO97sEr5PL3KEDYUr"
      },
      {
      title: "Grokking the Modern System Design Interview",
      institution: "Educative",
      date: "Jan 2025",
      url: "https://www.educative.io/verify-certificate/nZp3lEC3RDoj0YAJEh0vM867V0WxIQ"
      },
      {
      title: "System Design Interview Prep Crash Course",
      institution: "Educative",
      date: "Nov 2024",
      url: ""
      },
      {
      title: "DevOps, DataOps, MLOps",
      institution: "Coursera (Duke University)",
      date: "Jul 2024",
      url: "https://www.coursera.org/account/accomplishments/certificate/8WCBR9ZLKH8C"
      },
      {
        title: "Preparing for Google Cloud Certification: Cloud DevOps Engineer Specialization",
        institution: "Coursera",
        date: "June 2022",
        url: "https://www.coursera.org/account/accomplishments/specialization/certificate/C3V4EN8KN6LD"
      },
      {
        title: "Preparing for Google Cloud Certification: Cloud Engineer Specialization",
        institution: "Coursera",
        date: "June 2022",
        url: "https://www.coursera.org/account/accomplishments/specialization/certificate/4NYGWE95JFBK"
      },
      {
        title: "Architecting with Google Kubernetes Engine Specialization",
        institution: "Coursera",
        date: "July 2020",
        url: "https://www.coursera.org/account/accomplishments/specialization/certificate/C3HVJ28GRQ3H"
      },
      {
        title: "Architecting with Google Compute Engine Specialization",
        institution: "Coursera",
        date: "July 2020",
        url: "https://www.coursera.org/account/accomplishments/specialization/certificate/WM8USZHU7D8Y"
      }
    ]
  },
  {
    category: "Agile & Project Management",
    items: [
      {
        title: "Scrum Fundamentals Certified (SFC)",
        institution: "SCRUMstudy",
        date: "Feb 2023",
        url: "https://c46e136a583f7e334124-ac22991740ab4ff17e21daf2ed577041.ssl.cf1.rackcdn.com/Certificate/ScrumFundamentalsCertified-EhsanSaeedizade-965125.pdf"
      }
    ]
  },
  {
    category: "Networking & Infrastructure",
    items: [
      {
        title: "Network+",
        institution: "Iran University of Science and Technology",
        date: "Summer 2015"
      }
    ]
  }
];

export const awards: Award[] = [

  { description: "Won People's Choice Award at Makerthon 2025, University of Nevada, Reno." },
  { description: "Awarded GSA Outstanding Graduate Student Scholarship, University of Nevada, Reno (2025)." },
  { description: "Awarded 3rd Place for poster presentation at the UNR 4th Annual Cybersecurity Conference (2023)." },
  { description: "Offered a direct Master's position in Computer Engineering at Iran University of Science and Technology (Fall 2018)." },
  { description: "Achieved 2nd place in National Game Analytic Dashboard Design Tournament, Iran (2017)." },
  { description: "Ranked 3rd among B.Sc. Computer Engineering students at Iran University of Science and Technology (2015)." }
];

export const services: Service[] = [
  { title: "Reviewer", description: "Nevada Undergraduate Research Award (NURA), 2024-2026." },
  { title: "Technical Judge", description: "Nevada SkillsUSA (NVSkills) Computer Programming Competition, 2026." },{ title: "Conference Reviewer", description: "ICECET 2025, CCNC 2024, CCGRID 2023, IEEE CLOUD 2023." },
  { title: "Journal Reviewer", description: "ACM Computing Surveys, IEEE Transactions on Parallel and Distributed Systems, IEEE Access, Journal of Supercomputing, Journal of Computing, Journal of Grid Computing, Cluster Computing, Internet of Things and Cloud Computing, Discover Computing, Imaging Science Journal." },
  { title: "Technical Program Committee (TPC) Member", description: "CSAE 2025, ICACTE 2025." },
  { title: "Executive Member", description: "25th International Computer Conference (CSICC 2020)." },
  { title: "Executive Member", description: "IUST Cloud Computing Center (2018-2021)." },
  { title: "Tester", description: "Natural Language Processing Laboratory (2017)." },
  { title: "Executive Member", description: "PyCon, Iran University of Science and Technology (2016)." },
  { title: "Executive Member", description: "ACM Contest, Iran University of Science and Technology (2015)." }
];
