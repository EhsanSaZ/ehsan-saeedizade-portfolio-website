import { Education, SkillGroup, WorkExperience, TeachingExperience, Publication, Certificate, CertificateCategory, Award, Service } from './types';
import logo from './images/E.png';

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
  photo: logo,
};

export const education: Education[] = [
  {
    degree: "Ph.D. in Computer Science",
    institution: "University of Nevada-Reno",
    location: "USA",
    period: "2021-up to now"
  },
  {
    degree: "M.Sc in Computer Science",
    institution: "Iran University of Science and Technology",
    location: "Tehran",
    period: "2018-2021"
  },
  {
    degree: "B.Sc in Computer Science",
    institution: "Iran University of Science and Technology",
    location: "Tehran",
    period: "2014-2018"
  }
];

export const researchInterests = "Generally my research interests lies in Software Systems, Cloud Computing, IoT, Machine Learning, Distributed Systems, and High Performance Computing. Previously, I worked on parallel filesystem and high performance data transfer in research and education institutions for large-scale science applications. Currently, I am doing my research on Federated Learning, privacy preserving distributed learning and IoT environment. My masters thesis was about workflow scheduling in Workflow as a Service environment and I am also interested in topics such as stream processing and function scheduling in server-less computing environment as well.";

export const skills: SkillGroup[] = [
  {
    title: "Languages",
    icon: "code",
    skills: "Expert in Python, JAVA, C++, MATLAB. Familiar with HTML, CSS, Javascript, VHDL, Verilog, Assembly, Erlang, QT Quick, QML."
  },
  {
    title: "Frameworks",
    icon: "layers",
    skills: "Flask, NumPy, Pandas, OpenCV, Keras, TensorFlow, JQuery, bootstrap, angular1, SASS, React.js."
  },
  {
    title: "DevOps & Tools",
    icon: "settings",
    skills: "OpenStack, Ceph storage cluster, Lustre File system, Git, Docker, Prometheus, ELK Stack."
  },
  {
    title: "Database",
    icon: "database",
    skills: "PostgreSQL, SQL Alchemy, MongoDB, Mongoengine, Pymongo, MySQL, SQLite."
  },
  {
    title: "Simulation Softwares",
    icon: "monitor",
    skills: "CloudSim, CPN tools, PIPE (petri net modeling), Packet Tracer, Xilinx, Circuit maker2000."
  },
  {
    title: "Operating Systems",
    icon: "server",
    skills: "Windows, Linux (Ubuntu, CentOS)"
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
    course: "Cyber AI",
    period: "Fall-2023",
    role: "Graduate Teaching Assistant",
    institution: "University Of Nevada-Reno",
    responsibilities: "Grading, Mentorship, Practice sessions"
  },
  {
    course: "Design Patterns",
    period: "Fall-2023, Fall-2021",
    role: "Graduate Teaching Assistant",
    institution: "University Of Nevada-Reno",
    responsibilities: "Grading, Mentorship, Practice sessions"
  },
  {
    course: "Testing and DevOps",
    period: "Fall-2023",
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
    authors: "E. Saeedizade, M. Ashtiani",
    title: "Scientific workflow scheduling algorithms in cloud environments: a comprehensive taxonomy, survey, and future directions",
    journal: "Journal of Scheduling",
    year: "2024",
    doi: "10.1007/s10951-024-00820-1",
    doiUrl: "https://doi.org/10.1007/s10951-024-00820-1",
    type: "Journal Article",
    description: "This paper presents a comprehensive taxonomy and survey of scientific workflow scheduling algorithms in cloud environments, highlighting future research directions.",
    tags: ["Cloud Computing", "Workflow Scheduling", "Survey"]
  },
  {
    authors: "E. Saeedizade, B. Zhang, E. Arslan",
    title: "Demystifying the Performance of Data Transfers in High-Performance Research Networks",
    journal: "IEEE eScience 2023",
    year: "2023",
    doi: "10.1109/e-Science58273.2023.10254940",
    doiUrl: "https://doi.org/10.1109/e-Science58273.2023.10254940",
    type: "Conference Paper",
    description: "An in-depth analysis of data transfer performance across high-performance research networks, identifying bottlenecks and optimization strategies.",
    tags: ["High-Performance Computing", "Data Transfer", "Networking"]
  },
  {
    authors: "E. Saeedizade, R. Taheri, E. Arslan",
    title: "I/O Burst Prediction for HPC Clusters using Darshan Logs",
    journal: "IEEE eScience 2023",
    year: "2023",
    doi: "10.1109/e-Science58273.2023.10254871",
    doiUrl: "https://doi.org/10.1109/e-Science58273.2023.10254871",
    type: "Conference Paper",
    description: "A novel approach to predicting I/O bursts in HPC clusters by analyzing Darshan logs, aiming to improve storage system efficiency.",
    tags: ["HPC", "I/O Prediction", "Machine Learning"]
  },
  {
    authors: "F. A. Chetabi, M. Ashtiani, E. Saeedizade",
    title: "A Package-Aware Approach for Function Scheduling in Serverless Computing Environments",
    journal: "Journal of Grid Computing",
    year: "2023",
    doi: "10.1007/s10723-023-09657-y",
    doiUrl: "https://doi.org/10.1007/s10723-023-09657-y",
    type: "Journal Article",
    description: "Proposes a package-aware scheduling approach for serverless functions to minimize cold starts and optimize resource utilization.",
    tags: ["Serverless", "Function Scheduling", "Cloud Computing"]
  },
  {
    authors: "M. A. Haghpanah, E. Saeedizade, M. Tale Masouleh, A. Kalhor",
    title: "Real-Time Facial Expression Recognition using Facial Landmarks and Neural Networks",
    journal: "Proc. of the 2nd International Conference on Machine Vision and Image Processing (MVIP)",
    year: "2022",
    doi: "10.1109/MVIP53647.2022.9738754",
    doiUrl: "https://doi.org/10.1109/MVIP53647.2022.9738754",
    type: "Conference Paper",
    description: "A real-time system for facial expression recognition leveraging facial landmarks and neural network architectures.",
    tags: ["Computer Vision", "Neural Networks", "Facial Recognition"]
  },
  {
    authors: "E. Saeedizade and M. Ashtiani",
    title: "DDBWS: a dynamic deadline and budget-aware workflow scheduling algorithm in workflow-as-a-service environment",
    journal: "Journal of Super Computing",
    year: "2021",
    doi: "10.1007/s11227-021-03858-6",
    doiUrl: "https://doi.org/10.1007/s11227-021-03858-6",
    type: "Journal Article",
    description: "Introduces DDBWS, an algorithm designed to schedule workflows dynamically while considering both deadline and budget constraints in WaaS environments.",
    tags: ["Workflow Scheduling", "WaaS", "Resource Allocation"]
  },
  {
    authors: "E. Saeedizade and M. Ashtiani",
    title: "Multi-constraint dynamic scheduling of scientific workflows in cloud with multi-resource packing",
    journal: "International Conference on Web Research",
    year: "2021",
    type: "Conference Paper",
    description: "Explores dynamic scheduling of scientific workflows in cloud environments using multi-resource packing techniques under multiple constraints.",
    tags: ["Cloud Computing", "Dynamic Scheduling", "Resource Packing"]
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
