#!/usr/bin/env python3
"""
Portfolio Generator Script
This script can be used to generate or update portfolio content dynamically.
"""

import json
import os
from datetime import datetime
from typing import Dict, List, Any

class PortfolioGenerator:
    def __init__(self):
        self.config_file = "portfolio_config.json"
        self.output_dir = "."
        
    def load_config(self) -> Dict[str, Any]:
        """Load portfolio configuration from JSON file."""
        if os.path.exists(self.config_file):
            with open(self.config_file, 'r', encoding='utf-8') as f:
                return json.load(f)
        else:
            return self.create_default_config()
    
    def create_default_config(self) -> Dict[str, Any]:
        """Create a default portfolio configuration."""
        config = {
            "personal_info": {
                "name": "Your Name",
                "title": "Full Stack Developer & Problem Solver",
                "description": "I create beautiful, functional, and user-friendly web applications",
                "email": "muntasirmkhan@hotmail.com",
                "phone": "+1 (555) 123-4567",
                "location": "Toronto, Canada",
                "social_links": {
                    "github": "https://github.com/muntasiir",
                    "linkedin": "https://www.linkedin.com/in/muntasir-khan-535457251/",
                    "instagram": "https://instagram.com/yourusername"
                }
            },
            "about": {
                "description": [
                    "I'm a passionate developer with experience in creating web applications using modern technologies. I love solving complex problems and turning ideas into reality through code.",
                    "When I'm not coding, you can find me exploring new technologies, contributing to open source projects, or enjoying outdoor activities."
                ],
                "stats": {
                    "projects": "50+",
                    "experience": "3+",
                    "clients": "100+"
                }
            },
            "skills": {
                "Frontend": ["HTML5", "CSS3", "JavaScript", "React", "Vue.js"],
                "Backend": ["Python", "Node.js", "Django", "Flask", "Express.js"],
                "Database": ["PostgreSQL", "MongoDB", "MySQL", "Redis"],
                "Tools & Others": ["Git", "Docker", "AWS", "Linux"]
            },
            "projects": [
                {
                    "title": "E-Commerce Platform",
                    "description": "A full-stack e-commerce solution built with React and Django, featuring user authentication, payment processing, and admin dashboard.",
                    "technologies": ["React", "Django", "PostgreSQL"],
                    "github_url": "#",
                    "demo_url": "#",
                    "image": "fas fa-laptop-code"
                },
                {
                    "title": "Task Management App",
                    "description": "A responsive task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
                    "technologies": ["Vue.js", "Node.js", "Socket.io"],
                    "github_url": "#",
                    "demo_url": "#",
                    "image": "fas fa-mobile-alt"
                },
                {
                    "title": "Data Visualization Dashboard",
                    "description": "An interactive dashboard for data analysis and visualization, featuring real-time charts, filters, and export functionality.",
                    "technologies": ["Python", "Flask", "D3.js"],
                    "github_url": "#",
                    "demo_url": "#",
                    "image": "fas fa-chart-bar"
                }
            ]
        }
        
        # Save the default config
        self.save_config(config)
        return config
    
    def save_config(self, config: Dict[str, Any]) -> None:
        """Save portfolio configuration to JSON file."""
        with open(self.config_file, 'w', encoding='utf-8') as f:
            json.dump(config, f, indent=2, ensure_ascii=False)
    
    def generate_html(self, config: Dict[str, Any]) -> str:
        """Generate HTML content based on configuration."""
        # This is a simplified version - in a real scenario, you might use templates
        print("HTML generation would happen here based on config")
        print(f"Loaded config for: {config['personal_info']['name']}")
        return "HTML content generated successfully"
    
    def update_project(self, project_data: Dict[str, Any]) -> None:
        """Add or update a project in the portfolio."""
        config = self.load_config()
        
        # Check if project already exists (by title)
        existing_project = None
        for i, project in enumerate(config['projects']):
            if project['title'] == project_data['title']:
                existing_project = i
                break
        
        if existing_project is not None:
            config['projects'][existing_project] = project_data
            print(f"Updated project: {project_data['title']}")
        else:
            config['projects'].append(project_data)
            print(f"Added new project: {project_data['title']}")
        
        self.save_config(config)
    
    def generate_readme(self, config: Dict[str, Any]) -> None:
        """Generate README.md for GitHub repository."""
        readme_content = f"""# {config['personal_info']['name']} - Portfolio Website

A modern, responsive portfolio website built with HTML, CSS, and JavaScript.

## 🚀 Features

- **Responsive Design**: Works perfectly on all devices
- **Modern UI/UX**: Clean and professional design
- **Interactive Elements**: Smooth animations and transitions
- **Contact Form**: Functional contact form with validation
- **GitHub Pages Ready**: Optimized for GitHub Pages deployment

## 🛠️ Technologies Used

- HTML5
- CSS3 (Grid, Flexbox, Animations)
- JavaScript (ES6+)
- Font Awesome Icons
- Python (for content generation)

## 📱 Sections

- **Hero**: Introduction and call-to-action
- **About**: Personal information and statistics
- **Skills**: Technical skills organized by category
- **Projects**: Featured projects with live demos
- **Contact**: Contact form and social links

## 🚀 Quick Start

1. Clone this repository
2. Open `index.html` in your browser
3. Customize the content in `portfolio_config.json`
4. Run `python generate_portfolio.py` to update content

## 📦 GitHub Pages Deployment

1. Fork this repository
2. Go to Settings > Pages
3. Select "Deploy from a branch"
4. Choose "main" branch and "/ (root)" folder
5. Your site will be available at `https://yourusername.github.io/repository-name`

## 🔧 Customization

Edit `portfolio_config.json` to customize:
- Personal information
- Skills and technologies
- Projects and portfolio items
- Contact information
- Social media links

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

- Email: {config['personal_info']['email']}
- GitHub: {config['personal_info']['social_links']['github']}
- LinkedIn: {config['personal_info']['social_links']['linkedin']}
"""
        
        with open('README.md', 'w', encoding='utf-8') as f:
            f.write(readme_content)
        print("README.md generated successfully!")

def main():
    """Main function to demonstrate portfolio generator usage."""
    generator = PortfolioGenerator()
    
    # Load or create configuration
    config = generator.load_config()
    print(f"Portfolio configuration loaded for: {config['personal_info']['name']}")
    
    # Generate README
    generator.generate_readme(config)
    
    # Example: Add a new project
    new_project = {
        "title": "Weather App",
        "description": "A responsive weather application with location-based forecasts and interactive maps.",
        "technologies": ["JavaScript", "API Integration", "CSS3"],
        "github_url": "https://github.com/yourusername/weather-app",
        "demo_url": "https://yourusername.github.io/weather-app",
        "image": "fas fa-cloud-sun"
    }
    
    # Uncomment to add the project
    # generator.update_project(new_project)
    
    print("Portfolio generator completed successfully!")

if __name__ == "__main__":
    main()
