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
    date: "2021 - Up To Now",
    title: "Graduate Research Assistant",
    institution: "UNR",
    location: "Reno, USA",
    responsibilities: [
      "Researching on data privacy in incentive heterogeneous Federated Learning environment.",
      "Researching on parallel filesystem high performance data transfer project."
    ]
  },
  {
    date: "2018-2021",
    title: "Cloud Engineer at IUST-CCC",
    institution: "Cloud Computing Center at Iran University of Science and Technology",
    location: "Tehran, Iran",
    responsibilities: [
      "Deploy and maintain OpenStack on multi-node.",
      "Deploy and maintain Ceph integrated with Cinder.",
      "Mentor interns for learning OpenStack basics and joining the team."
    ]
  },
  {
    date: "2018",
    title: "Python Developer",
    institution: "FARS IT Co.",
    location: "Tehran, Iran",
    responsibilities: [
      "Develop and maintain python SDK.",
      "Mentor interns for joining the team."
    ]
  },
  {
    date: "2016-2018",
    title: "Gametic - Frontend Web Developer",
    institution: "Gametic",
    location: "Tehran, Iran",
    responsibilities: [
      "Develop a game analytic dashboard project with Angular 1."
    ]
  },
  {
    date: "2017",
    title: "Java Developer",
    institution: "TOSAN Co.",
    location: "Tehran, Iran",
    responsibilities: [
      "Develop a log parser software.",
      "Work as an Intern."
    ]
  },
  {
    date: "2017",
    title: "IUST ACM Judge - Frontend Web Developer",
    institution: "Iran University of Science and Technology",
    location: "Tehran, Iran",
    responsibilities: [
      "Develop a log parser software.",
      "Work as an Intern."
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
    category: "Cloud & DevOps",
    items: [
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
  { description: "Was awarded Third Place for poster presentation at the UNR 4th annual Cybersecurity Conference - October 2023." },
  { description: "Was Offered a position for direct master’s degree in Computer Engineering at Iran University Science and Technology - Fall 2018." },
  { description: "National Game Analytic Dashboard Design Tournament, Second place, Iran - Fall 2017." },
  { description: "Ranked Third among B.Sc. students of Computer Engineering major, Iran University Science and Technology - Fall 2015." }
];

export const services: Service[] = [
  { title: "Conference Reviewer", description: "CCNC 2024, CCGRID 2023, IEEE CLOUD 2023." },
  { title: "Journal Reviewer", description: "The Journal of Supercomputing, Journal of Grid Computing, Cluster Computing, Internet of Things and Cloud Computing, Imaging Science Journal." },
  { title: "25th International Computer Conference (CSICC-2020)", description: "Executive member (Volunteer) - 2020." },
  { title: "IUST Cloud Computing Center (CCC)", description: "Executive member (Volunteer) - 2018-2020." },
  { title: "Natural Language Processing Laboratory", description: "Tester - 2017." },
  { title: "PyCon, Iran University Science and Technology", description: "Executive member - 2016." },
  { title: "ACM Contest, Iran University Science and Technology", description: "Executive member - 2015." }
];
