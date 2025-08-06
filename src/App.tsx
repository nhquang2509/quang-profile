import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, Globe, Mail, MapPin, Github, ExternalLink, ChevronDown } from 'lucide-react';

interface Language {
  code: string;
  name: string;
}

interface Translations {
  [key: string]: {
    nav: {
      about: string;
      projects: string;
      contact: string;
    };
    hero: {
      name: string;
      title: string;
      university: string;
    };
    about: {
      title: string;
      description: string;
      journey: {
        title: string;
        content: string;
      };
    };
    skills: {
      title: string;
      programming: string;
      technologies: string;
      databases: string;
      other: string;
    };
    projects: {
      title: string;
    };
    contact: {
      title: string;
      email: string;
      location: string;
      github: string;
    };
  };
}

const translations: Translations = {
  vi: {
    nav: {
      about: 'Giới thiệu ',
      projects: 'Dự án',
      contact: 'Liên hệ'
    },
    hero: {
      name: 'Nguyên Hữu Quang',
      title: 'Sinh viên CNTT - Kỹ thuật Phần mềm',
      university: 'Trường Đại học Đà Lạt'
    },
    about: {
      title: 'Giới thiệu',
      description: 'Tôi là một sinh viên Công nghệ Thông tin tận tâm tại Trường Đại học Đà Lạt, chuyên ngành Kỹ thuật Phần mềm. Đam mê của tôi là phát triển các giải pháp phần mềm sáng tạo và luôn cập nhật với các công nghệ mới nổi.',
      journey: {
        title: 'Hành Trình Của Tôi',
        content: 'Tôi là Nguyễn Hữu Quang, sinh viên năm cuối ngành Công nghệ Thông tin, chuyên ngành Kỹ thuật phần mềm. Từ khi còn học phổ thông, tôi đã có đam mê với lập trình và công nghệ.\n\nTrong quá trình học đại học, tôi đã tham gia nhiều dự án như hệ thống quản lý khách sạn, phần mềm bán hàng, sử dụng các công nghệ như Java, SQL Server, ReactJS và Node.js. Tôi cũng từng thực tập tại một công ty startup, nơi tôi được tiếp cận quy trình phát triển phần mềm thực tế theo mô hình Agile.\n\nTôi luôn nỗ lực học hỏi, yêu thích làm việc nhóm và mong muốn phát triển sự nghiệp trong vai trò lập trình viên full-stack trong thời gian tới.'
      }
    },
    skills: {
      title: 'Kỹ năng',
      programming: 'Ngôn ngữ lập trình',
      technologies: 'Công nghệ & Framework',
      databases: 'Cơ sở dữ liệu',
      other: 'Khác'
    },
    projects: {
      title: 'Dự án'
    },
    contact: {
      title: 'Liên hệ',
      email: 'Email',
      location: 'Vị trí',
      github: 'GitHub'
    }
  },
  en: {
    nav: {
      about: 'About',
      projects: 'Projects',
      contact: 'Contact'
    },
    hero: {
      name: 'Nguyen Huu Quang',
      title: 'IT Student - Software Engineering',
      university: 'Dalat University'
    },
    about: {
      title: 'About Me',
      description: 'I am a dedicated Information Technology student at Dalat University, specializing in Software Engineering. My passion lies in developing innovative software solutions and staying updated with emerging technologies.',
      journey: {
        title: 'My Journey',
        content: 'I am Nguyen Huu Quang, a final-year Information Technology student specializing in Software Engineering. Since high school, I have been passionate about programming and technology.\n\nDuring my university studies, I have participated in various projects such as hotel management systems and sales software, using technologies like Java, SQL Server, ReactJS, and Node.js. I also interned at a startup company where I was exposed to real-world software development processes following the Agile methodology.\n\nI am always eager to learn, enjoy teamwork, and aspire to develop my career as a full-stack developer in the near future.'
      }
    },
    skills: {
      title: 'Skills',
      programming: 'Programming Languages',
      technologies: 'Technologies & Frameworks',
      databases: 'Databases',
      other: 'Others'
    },
    projects: {
      title: 'Projects'
    },
    contact: {
      title: 'Contact',
      email: 'Email',
      location: 'Location',
      github: 'GitHub'
    }
  }
};

const languages: Language[] = [
  { code: 'vi', name: 'Tiếng Việt' },
  { code: 'en', name: 'English' }
];

const skillCategories = {
  programming: ['Java', 'C/C++', 'Python', 'JavaScript', 'SQL'],
  technologies: ['React', 'Node.js', 'Spring Boot', '.NET', 'Android'],
  databases: ['MySQL', 'MongoDB', 'SQL Server'],
  other: ['Git', 'Docker', 'Figma', 'Agile/Scrum']
};

const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    titleVi: 'Nền tảng Thương mại Điện tử',
    description: 'A full-stack e-commerce platform built with React, Node.js, and MongoDB. Features include user authentication, product catalog, shopping cart, and payment integration.',
    descriptionVi: 'Nền tảng thương mại điện tử full-stack được xây dựng bằng React, Node.js và MongoDB. Các tính năng bao gồm xác thực người dùng, danh mục sản phẩm, giỏ hàng và tích hợp thanh toán.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
    image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg',
    github: '#',
    demo: '#'
  },
  {
    id: 2,
    title: 'Task Management App',
    titleVi: 'Ứng dụng Quản lý Công việc',
    description: 'A collaborative task management application with real-time updates, built using React, Spring Boot, and WebSocket technology.',
    descriptionVi: 'Ứng dụng quản lý công việc cộng tác với cập nhật thời gian thực, được xây dựng bằng React, Spring Boot và công nghệ WebSocket.',
    technologies: ['React', 'Spring Boot', 'WebSocket', 'MySQL'],
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg',
    github: '#',
    demo: '#'
  },
  {
    id: 3,
    title: 'Weather Forecast App',
    titleVi: 'Ứng dụng Dự báo Thời tiết',
    description: 'A mobile weather application for Android with location-based forecasts, built using Java and integrating weather APIs.',
    descriptionVi: 'Ứng dụng thời tiết di động cho Android với dự báo dựa trên vị trí, được xây dựng bằng Java và tích hợp API thời tiết.',
    technologies: ['Java', 'Android', 'REST API', 'SQLite'],
    image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg',
    github: '#',
    demo: '#'
  },
  {
    id: 4,
    title: 'Student Portal System',
    titleVi: 'Hệ thống Cổng thông tin Sinh viên',
    description: 'A comprehensive student management system with course registration, grade tracking, and communication features using .NET and SQL Server.',
    descriptionVi: 'Hệ thống quản lý sinh viên toàn diện với đăng ký khóa học, theo dõi điểm số và các tính năng giao tiếp sử dụng .NET và SQL Server.',
    technologies: ['.NET', 'C#', 'SQL Server', 'Bootstrap'],
    image: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg',
    github: '#',
    demo: '#'
  }
];

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [currentLang, setCurrentLang] = useState('vi');
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const t = translations[currentLang];

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const height = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const toggleLanguage = (langCode: string) => {
    setCurrentLang(langCode);
    setIsLangDropdownOpen(false);
  };

  return (
    <div className={`min-h-screen transition-all duration-300 ${isDarkMode ? 'dark bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isDarkMode ? 'bg-gray-900/95 backdrop-blur-sm border-gray-700' : 'bg-white/95 backdrop-blur-sm border-gray-200'} border-b`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="font-bold text-xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              QH
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => scrollToSection('about')}
                className={`hover:text-blue-600 transition-colors duration-200 ${activeSection === 'about' ? 'text-blue-600' : ''}`}
              >
                {t.nav.about}
              </button>
              <button
                onClick={() => scrollToSection('projects')}
                className={`hover:text-blue-600 transition-colors duration-200 ${activeSection === 'projects' ? 'text-blue-600' : ''}`}
              >
                {t.nav.projects}
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className={`hover:text-blue-600 transition-colors duration-200 ${activeSection === 'contact' ? 'text-blue-600' : ''}`}
              >
                {t.nav.contact}
              </button>

              {/* Language Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
                  className="flex items-center space-x-1 hover:text-blue-600 transition-colors duration-200"
                >
                  <Globe className="w-4 h-4" />
                  <span className="text-sm">{currentLang.toUpperCase()}</span>
                  <ChevronDown className="w-3 h-3" />
                </button>
                {isLangDropdownOpen && (
                  <div className={`absolute right-0 mt-2 w-32 rounded-lg shadow-lg border ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => toggleLanguage(lang.code)}
                        className={`block w-full px-4 py-2 text-sm text-left hover:bg-gray-100 dark:hover:bg-gray-700 first:rounded-t-lg last:rounded-b-lg ${currentLang === lang.code ? 'text-blue-600' : ''}`}
                      >
                        {lang.name}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
              >
                {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center space-x-2">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
              >
                {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          {isMenuOpen && (
            <div className={`md:hidden border-t ${isDarkMode ? 'border-gray-700 bg-gray-900' : 'border-gray-200 bg-white'}`}>
              <div className="px-2 pt-2 pb-3 space-y-1">
                <button
                  onClick={() => scrollToSection('about')}
                  className="block px-3 py-2 text-base font-medium hover:text-blue-600 transition-colors duration-200"
                >
                  {t.nav.about}
                </button>
                <button
                  onClick={() => scrollToSection('projects')}
                  className="block px-3 py-2 text-base font-medium hover:text-blue-600 transition-colors duration-200"
                >
                  {t.nav.projects}
                </button>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="block px-3 py-2 text-base font-medium hover:text-blue-600 transition-colors duration-200"
                >
                  {t.nav.contact}
                </button>
                <div className="px-3 py-2">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => toggleLanguage(lang.code)}
                      className={`block w-full text-left py-1 text-sm ${currentLang === lang.code ? 'text-blue-600' : 'hover:text-blue-600'} transition-colors duration-200`}
                    >
                      {lang.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="pt-16 min-h-screen flex items-center justify-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <div className="mb-8">
              <img
                src="/profile-new.jpg"
                alt="Profile"
                className="w-32 h-32 rounded-full mx-auto mb-6 ring-4 ring-blue-500/20 shadow-lg"
              />
              <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                {t.hero.name}
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-2">
                {t.hero.title}
              </p>
              <p className="text-lg text-gray-500 dark:text-gray-400">
                {t.hero.university}
              </p>
            </div>
            <button
              onClick={() => scrollToSection('about')}
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              {t.nav.about}
              <ChevronDown className="ml-2 w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className={`py-20 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">{t.about.title}</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              {t.about.description}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Journey Section */}
            <div className={`p-8 rounded-xl shadow-lg ${isDarkMode ? 'bg-gray-900' : 'bg-white'} hover:shadow-xl transition-shadow duration-300`}>
              <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {t.about.journey.title}
              </h3>
              <div className="space-y-4">
                {t.about.journey.content.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            {/* Skills Section - 4 phần trong 1 card */}
            <div className="space-y-6">
              <div className={`p-6 rounded-xl shadow-lg ${isDarkMode ? 'bg-gray-900' : 'bg-white'} hover:shadow-xl transition-shadow duration-300`}>
                <h3 className="text-2xl font-bold text-center mb-6 bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                  {t.skills.title}
                </h3>
                {/* Programming */}
                <h4 className="text-lg font-semibold mb-2 text-blue-600">{t.skills.programming}</h4>
                <div className="flex flex-wrap gap-2 mb-4">
                  {skillCategories.programming.map((skill) => (
                    <span
                      key={skill}
                      className={`px-3 py-1 text-sm rounded-full ${isDarkMode ? 'bg-gray-800 text-gray-300' : 'bg-gray-100 text-gray-700'} hover:bg-blue-100 hover:text-blue-800 transition-colors duration-200`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                {/* Technologies */}
                <h4 className="text-lg font-semibold mb-2 text-purple-600">{t.skills.technologies}</h4>
                <div className="flex flex-wrap gap-2 mb-4">
                  {skillCategories.technologies.map((skill) => (
                    <span
                      key={skill}
                      className={`px-3 py-1 text-sm rounded-full ${isDarkMode ? 'bg-gray-800 text-gray-300' : 'bg-gray-100 text-gray-700'} hover:bg-purple-100 hover:text-purple-800 transition-colors duration-200`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                {/* Databases */}
                <h4 className="text-lg font-semibold mb-2 text-indigo-600">{t.skills.databases}</h4>
                <div className="flex flex-wrap gap-2 mb-4">
                  {skillCategories.databases.map((skill) => (
                    <span
                      key={skill}
                      className={`px-3 py-1 text-sm rounded-full ${isDarkMode ? 'bg-gray-800 text-gray-300' : 'bg-gray-100 text-gray-700'} hover:bg-indigo-100 hover:text-indigo-800 transition-colors duration-200`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                {/* Other */}
                <h4 className="text-lg font-semibold mb-2 text-green-600">{t.skills.other}</h4>
                <div className="flex flex-wrap gap-2">
                  {skillCategories.other.map((skill) => (
                    <span
                      key={skill}
                      className={`px-3 py-1 text-sm rounded-full ${isDarkMode ? 'bg-gray-800 text-gray-300' : 'bg-gray-100 text-gray-700'} hover:bg-green-100 hover:text-green-800 transition-colors duration-200`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">{t.projects.title}</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className={`rounded-xl shadow-lg overflow-hidden ${isDarkMode ? 'bg-gray-800' : 'bg-white'} hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2`}
              >
                <img
                  src={project.image}
                  alt={currentLang === 'vi' ? project.titleVi : project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3">
                    {currentLang === 'vi' ? project.titleVi : project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {currentLang === 'vi' ? project.descriptionVi : project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className={`px-2 py-1 text-xs rounded-full ${isDarkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-600'}`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    <a
                      href={project.github}
                      className="flex items-center space-x-1 text-gray-600 dark:text-gray-300 hover:text-blue-600 transition-colors duration-200"
                    >
                      <Github className="w-4 h-4" />
                      <span className="text-sm">GitHub</span>
                    </a>
                    <a
                      href={project.demo}
                      className="flex items-center space-x-1 text-gray-600 dark:text-gray-300 hover:text-blue-600 transition-colors duration-200"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span className="text-sm">Demo</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={`py-20 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">{t.contact.title}</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className={`text-center p-8 rounded-xl shadow-lg ${isDarkMode ? 'bg-gray-800' : 'bg-white'} hover:shadow-xl transition-shadow duration-300`}>
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{t.contact.email}</h3>
              <p className="text-gray-600 dark:text-gray-300">quang.nguyen@dalat.edu.vn</p>
            </div>

            <div className={`text-center p-8 rounded-xl shadow-lg ${isDarkMode ? 'bg-gray-800' : 'bg-white'} hover:shadow-xl transition-shadow duration-300`}>
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{t.contact.location}</h3>
              <p className="text-gray-600 dark:text-gray-300">Đà Lạt, Lâm Đồng</p>
            </div>

            <div className={`text-center p-8 rounded-xl shadow-lg ${isDarkMode ? 'bg-gray-800' : 'bg-white'} hover:shadow-xl transition-shadow duration-300`}>
              <div className="w-16 h-16 bg-gradient-to-r from-indigo-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Github className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{t.contact.github}</h3>
              <p className="text-gray-600 dark:text-gray-300">github.com/nguyenhuuquang</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-8 border-t ${isDarkMode ? 'border-gray-700 bg-gray-900' : 'border-gray-200 bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-gray-600 dark:text-gray-300">
              © 2025 Nguyên Hữu Quang. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;