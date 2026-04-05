import { WorkExperience } from '../types';

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
