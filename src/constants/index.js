import { mobile, backend, creator, web, dmi, elililly, thrivedx, awsSolutionsArchitectProfessional, awsSecuritySpecialty, awsSysOpsAdministratorAssociate, awsDeveloperAssociate, microsoftFundamentals, scaledAgile, VueJs, markMiller, maxwellMorrow, tylerTompkins } from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full Stack Engineer",
    icon: web,
  },
  {
    title: "AWS Cloud Expert",
    icon: mobile,
  },
  {
    title: "DevOps Engineer",
    icon: backend,
  },
  {
    title: "Microsoft 365 Developer",
    icon: creator,
  },
];

const experiences = [
  {
    title: "Frontend Developer (VueJs)",
    company_name: "Eli Lilly (DMI Client)",
    icon: elililly,
    iconBg: "#E6DEDD",
    date: "April 2024 - Current",
    points: [
      "Manage 7 brand savings card enrollment sites for pharmaceutical client Eli Lilly with VueJs, and AWS.",
      "Deploy containerized sites using GitHub, CloudFormation, CodePipeline, Elastic Container Repository, Elastic Container Service, and Fargate.",
      "Utilize Contentful for content management and delivery.",
      "Operate within an agile methodology, using Jira for task management and participating in sprint ceremonies, standups, and backlog refinement.",
      "Train 2 software engineers on project setup, maintenance, and ongoing growth to ensure knowledge transfer and team efficiency.",
    ],
  },
  {
    title: "DevOps Engineer",
    company_name: "Eli Lilly (DMI Client)",
    icon: elililly,
    iconBg: "#E6DEDD",
    date: "October 2023 - March 2024",
    points: [
      "Successfully migrated Eli Lilly's on-premises learning plaform repository to AWS S3 with bi-directonal cross-region replicaton and backed up to multiple regions with AWS Backup.",
      "Set up CI/CD pipeline through GitHub Actons, CloudFormaton templates, SAM templates, and shell scriptng.",
      "Confgured CloudFormation templates in YAML for Certicate Manager, CloudFront, WAFv2, Lambda@Edge, S3 Multi-Region Access Point, S3 Standard Buckets, CloudWatch, KMS, and SNS.",
      "Tested system by setting up logs for CloudFront, Lambda and WAF to CloudWatch for the rest of the development team; performed system testing to validate solution.",
      "Worked in an agile environment using a JIRA board to drive tasks; actively participated in sprint ceremonies, daily standups, and backlog refinement.",
      "Configured CloudWatch dashboards and alarms to identify 4xx and 5xx errors for rapid team error identification and to monitor the CloudFront distribution performance (origin cache hit, latency, etc.).",
      "Updated the architecture diagram and built the GitHub ReadMe documentation including the diagram, key concepts/acronyms, troubleshooting guidance, disaster recovery procedures, and further reading references.",
      "Actively engaged with the client throughout the project life cycle and performed knowledge transfer to 2 client developers.",
    ],
  },
  {
    title: "Microsoft 365 Developer",
    company_name: "DMI",
    icon: dmi,
    iconBg: "#E6DEDD",
    date: "June 2021 - Spetember 2023",
    points: ["Built custom solutions in SharePoint for a project management dashboard to streamline review processes", "Created user-input forms with Power Apps and automated flows with Power Automate to improve the site", "Diagnosed bugs, edited web page code, improved user experience, and ensured consistent displays"],
  },
  {
    title: "Full Stack Software Instructor",
    company_name: "ThriveDX",
    icon: thrivedx,
    iconBg: "#E6DEDD",
    date: "Aug 2019 - Sept 2021",
    points: ["Delivered comprehensive instruction covering CSS, JavaScript, ReactJS, and MongoDB to 60 students.", "Edited curriculum code using HTML, CSS, JavaScript, Git, and GitHub to improve student learning experiences.", "Conducted training focused on empathy, boundaries, and communication to support skill development of 10 tutors."],
  },
];

const certifications = [
  {
    title: "AWS Solutions Architect Professional",
    icon: awsSolutionsArchitectProfessional,
  },
  {
    title: "AWS Security Specialty",
    icon: awsSecuritySpecialty,
  },
  {
    title: "AWS SysOps Administrator Associate",
    icon: awsSysOpsAdministratorAssociate,
  },
  {
    title: "AWS Developer Associate",
    icon: awsDeveloperAssociate,
  },
  {
    title: "Microsoft Security, Compliance, and Identity Fundamentals (SC-900)",
    icon: microsoftFundamentals,
  },
  {
    title: "Azure Data Fundamentals (DP-900)",
    icon: microsoftFundamentals,
  },
  {
    title: "Azure Fundamentals (AZ-900)",
    icon: microsoftFundamentals,
  },
  {
    title: "Certified SAFe® 5 Practitioner",
    icon: scaledAgile,
  },
];

const projects = [
  {
    name: "Social Chat",
    description: "This social media app features user authentication, database create/read/update/delete capabilities, and Route 53 CNAME record configuration. Built with Vue 3, Vite, Tailwind CSS, and AWS Amplify, the app integrates Amplify UI components, and FontAwesome icons.",
    tags: [
      {
        name: "VueJs",
        color: "blue-text-gradient",
      },
      {
        name: "AWS Amplify",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: VueJs,
    link: "https://socialchat.erichoover.org/",
    source_code_link: "https://github.com/ehoover3/SocialMedia",
  },
];

const testimonials = [
  {
    testimonial: "I've known Eric for over 10 years. I'm proud to give him my highest recommendation. He is deep thinking, compassionate, reflective, very diligent, and always improving. He is quick to listen and shares insights that make me rethink and find better ways to go about things. If you're looking for someone who is a great team member and excellent team leader, Eric is your guy.",
    name: "Mark Miller",
    designation: "VP of DevOps and Platform Security",
    company: "K2 Insurance Services",
    image: markMiller,
  },
  {
    testimonial:
      "Eric is a great leader and an inspiration. He constantly evaluates his environment and, of his own initiative, determines how he can better contribute. He is great instructor who has inspired me to be a better person and programmer. There is no doubt in my mind that he is both passionate about what he does and posses the skills to do anything he sets his mind to. Any team would be lucky to have him.",
    name: "Tyler Tompkins",
    designation: "Software Engineer",
    company: "Hewlett Packard Enterprise",
    image: tylerTompkins,
  },
  {
    testimonial: "I give Eric a lot of credit for being a great influence on me. His work ethic is inspiring. Beyond that, he called me out in areas I needed to grow in and ever since then, I have held a massive amount of respect for him. I really can’t say enough. I will always be a huge fan of Eric.",
    name: "Maxwell Morrow",
    designation: "Senior Software Engineer",
    company: "DMI",
    image: maxwellMorrow,
  },
];

export { services, experiences, certifications, testimonials, projects };
