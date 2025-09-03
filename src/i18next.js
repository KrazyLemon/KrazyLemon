import i18next from "i18next";
import { initReactI18next } from "react-i18next";

i18next.use(initReactI18next).init({

    debug: true,
    lng: "en",
    fallbackLng: "en",
    interpolation: {
        escapeValue: false, // react already safes from xss
    },
    resources: {
        en: {
            translation: {
                work: "Work",
                about: "About Me",
                contact: "Contact",
                full_stack: "Full Stack Developer",
                resume: "Resume",
                slogan: "Innovating with Full Stack Solutions",
                work_subtitle: "Crafting Digital Experiences with Code and Creativity",
                view: "View project",
                tech_stack: "Tech Stack",
                p1_title: "School Schedule Management System",
                p1_desc: "This project is a school schedule management system developed with React, Node.js, and MongoDB." +
                    " It allows administrators to efficiently create and manage schedules for students and teachers.",
                p2_title: "IoT Irrigation System connected to a Mobile App",
                p2_desc: "This school project is an automated irrigation system that uses moisture sensors and a mobile app" +
                    " to efficiently control plant watering.",
                p3_title: "Website for a Trading Company of Industrial Products",   
                p3_desc: "This was the first website I developed, it is a static website for a trading company of different types" +
                    " of products for the industry. It was developed with HTML, CSS, and JavaScript. This website is no longer in use.",
                p4_title: "User and Task REST API",
                p4_desc: "This project is a REST API developed with Spring Boot and Spring Security that allows managing users and their associated tasks." +
                    " It implements authentication and authorization with JWT. Orchestrated with Docker. This API currently does not have a user interface as it is under development.",
                about_subtitle:"A Passionate Developer Crafting Digital Experiences",
                about_desc:"Hello! I'm Angel Velazquez, a dedicated Fullstack Developer with a passion for creating innovative digital solutions. With a strong foundation in both "+ 
                "frontend and backend technologies, I specialize in building responsive and user-friendly web applications. My expertise includes working with frameworks like React " +
                "and Spring Boot, as well as databases such as MongoDB and MySQL. I thrive in collaborative environments and enjoy tackling complex challenges to deliver high-quality " +
                "software. When I'm not coding, I love exploring new technologies and staying updated with industry trends. Let's connect and create something amazing together!",
                education: "Education",
                experience: "Experience",
                skills: "Skills",
                certifications: "Certifications",
                languages: "Languages",
                contact_me: "Contact Me",
                    degree_1: "Bachelor in Computer Systems Engineering (2020 - 2025)",
                    school_1: "Technological Institute of Higher Studies of Cuautitlan Izcalli",
                    degree_3: "Bachelor in Computer Engineering",
                    school_2: "National Polytechnic Institute | 2018 - 2020 (Incomplete)",
                    degree_5: "Technician in Informatics",
                    school_3: "CBT Gabriel V Alcocer | 2015 - 2018",
                    course_1: "Course on Application Containerization using Docker on Linux | Complutense University of Madrid",
                    course_2: "Course on Container Security: Docker and Kubernetes",
            }
        },
        es: {
            translation: {
                work: "Proyectos",
                about: "Sobre Mí",
                contact: "Contacto",
                full_stack: "Desarrollador Full Stack",
                resume: "Currículum",
                slogan: "Innovando con Soluciones Full Stack",
                work_subtitle: "Creando Experiencias Digitales con Código y Creatividad",
                view: "Ver proyecto",
                tech_stack: "Tecnologías",
                p1_title: "Sistema de Gestion de Horarios Escolares",
                p1_desc: "Este proyecto es un sistema de gestion de horarios escolares desarrollado con React,Node.js y "
                    + "MongoDB. Permite a los administradores crear y gestionar horarios para estudiantes y profesores de manera eficiente.",
                p2_title: "Sistema de Riego(IoT) conectado a una Aplicacion Movil",
                p2_desc: "Este proyecto escolar es un sistema de riego automatizado que utiliza sensores de humedad y una aplicación móvil" +
                    "para controlar el riego de plantas de manera eficiente.",
                p3_title: "Pagina web para una Comercializadora de productos para la industria",
                p3_desc: "Esta fue la primer pagina que desarrolle, es una pagina web estatica para una comercializadora de diferentes tipos" +
                    "de productos para la industria. Fue desarrollada con HTML, CSS y JavaScript. Actualmente esta pagina ya no esta en uso",
                p4_title: "API Rest de usuarios y tareas",
                p4_desc: "Este proyecto es una API Rest desarrollada con Spring boot y Spring Security que permite gestionar usuarios y sus tareas " +
                    "asociadas. implementa autenticacion y autorizacion con JWT. Orquestrado con Docker. Actualmente esta API no cuenta con una interfaz " +
                    "de usuario ya que se encuentra en desarrollo.",
                about_subtitle:"Un Desarrollador Apasionado Creando Experiencias Digitales",
                about_desc: " ¡Hola! Soy Angel Velazquez, un desarrollador Fullstack dedicado con pasión por crear soluciones digitales innovadoras. Con una sólida base en tecnologías "+ 
                "tanto de frontend como de backend, me especializo en construir aplicaciones web responsivas y fáciles de usar. Mi experiencia incluye trabajar con frameworks como React" + 
                " y Spring Boot, así como bases de datos como MongoDB y MySQL. Me desenvuelvo bien en entornos colaborativos y disfruto enfrentando desafíos complejos para entregar software"+
                " de alta calidad. Cuando no estoy programando, me encanta explorar nuevas tecnologías y mantenerme actualizado con las tendencias de la industria. ¡Conectemos y creemos algo"+
                "increíble juntos!",
                education: "Educación",
                experience: "Experiencia",
                skills: "Habilidades",
                certifications: "Certificaciones",
                languages: "Idiomas",
                contact_me: "Contáctame",
                    degree_1: "Ingeniería en Sistemas Computacionales (2020 - 2025)",
                    school_1: "Tecnológico de Estudios Superiores de Cuautitlán Izcalli",
                    degree_3: "Ingeniería en Computación",
                    school_2: "Instituto Politécnico Nacional | 2018 - 2020 (Trunco)",
                    degree_5: "Técnico en Informática",
                    school_3: "CBT Gabriel V Alcocer | 2015 - 2018",
                    course_1: "Curso de contenerización de aplicaciones usando Docker en Linux | Universidad Complutense de Madrid",
                    course_2: "Curso de Seguridad en Contenedores: Docker y Kubernetes",

            }
        }
    }
});