import { WorkExperience } from '../types';

export const workExperience: WorkExperience[] = [
  {
    date: "May 2024 - Aug 2024",
    title: "DevOps and Cloud Engineer (Internship)",
    institution: "Brokee",
    location: "Remote",
    responsibilities: [
      "Optimized Docker image builds and deployments to Google Kubernetes Engine using GitLab CI/CD and Kaniko, reducing deployment time by up to 40%.",
      "Automated cloud infrastructure provisioning and Kubernetes deployments using Pulumi and Helm, improving deployment reliability.",
      "Implemented service monitoring and continuous profiling using Prometheus, Pyroscope, and Grafana to improve system observability."
    ]
  },
  {
    date: "Aug 2021 - Present",
    title: "Software Systems Engineer and Data Science Researcher",
    institution: "University of Nevada, Reno",
    location: "Reno, USA",
    responsibilities: [
      "Led research and development of scalable monitoring and anomaly detection frameworks to improve security and performance across edge-to-cloud infrastructure.",
      "Designed a multi-stage federated intrusion detection framework using Python, Flower, autoencoders, and DNNs, reducing cloud-facing training traffic by 83.3%.",
      "Developed a federated MLP framework using PyTorch, Flower, and transfer learning, achieving 96.56% accuracy and reducing convergence rounds by 50%.",
      "Built a distributed monitoring and data ingestion pipeline using Python, RabbitMQ, and ELK Stack on AWS, processing 40K messages/second and achieving 98% anomaly detection accuracy.",
      "Analyzed 5 million Darshan I/O logs and trained ML models for I/O burst prediction, achieving over 90% accuracy and reducing application execution time by up to 5x.",
      "Benchmarked ML models on 25 million network flows to evaluate data scarcity and temporal drift using Scikit-learn, Keras/TensorFlow, and feature engineering.",
      "Designed a privacy-preserving federated learning framework using PyTorch and differential privacy, improving model accuracy by 25.49% and reducing training time by 12.22%."
    ]
  },
  {
    date: "Jun 2017 - Sep 2017",
    title: "Java Developer Intern",
    institution: "TOSAN (Internship)",
    location: "Tehran, Iran",
    responsibilities: [
      "Developed a Java-based log analysis tool using Elasticsearch and inverted indexing, reducing log search time by approximately 97%, from 10 minutes to 15–20 seconds."
    ]
  },
  {
    date: "Sep 2018 - Feb 2021",
    title: "Java Developer and Software Engineering Researcher",
    institution: "Iran University of Science and Technology",
    location: "Tehran, Iran",
    responsibilities: [
      "Designed a cloud workflow scheduling algorithm (DDBWS) to optimize execution under deadline and budget constraints, achieving a 96% success rate and reducing costs by 32.08%.",
      "Developed a reinforcement learning-based serverless scheduling algorithm using SARSA, improving resource utilization by 69.5% and reducing execution time by 58%.",
      "Built an object-oriented Java workflow execution simulator using CloudSim to support large-scale cloud scheduling experiments.",
      "Supervised and mentored a master's student in developing predictive serverless scheduling algorithms for resource optimization."
    ]
  },
  {
    date: "Nov 2018 - Apr 2021",
    title: "Cloud Engineer (Volunteer)",
    institution: "Cloud Computing Center, Iran University of Science and Technology",
    location: "Tehran, Iran",
    responsibilities: [
      "Deployed and maintained multi-node OpenStack and Ceph clusters to deliver highly available Infrastructure as a Service (IaaS) for research teams.",
      "Mentored 5+ interns in Linux, cloud architecture, and OpenStack to support cloud infrastructure operations."
    ]
  },
  {
    date: "Feb 2018 - Sep 2018",
    title: "Python Developer",
    institution: "Fars",
    location: "Tehran, Iran",
    responsibilities: [
      "Developed and maintained an asynchronous Python SDK using asyncio to streamline chatbot development for a messaging platform.",
      "Led technical training and SDK development sessions for interns, improving knowledge sharing and development efficiency."
    ]
  },
  {
    date: "Sep 2017 - Sep 2018",
    title: "Python Developer and ML Researcher",
    institution: "Iran University of Science and Technology",
    location: "Tehran, Iran",
    responsibilities: [
      "Developed a lightweight real-time facial expression recognition system using Keras, OpenCV, and MLP, achieving 96% test accuracy with 50 ms end-to-end processing time."
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
  }
];
