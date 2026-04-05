import { Publication } from '../types';

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
