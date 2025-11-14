// Supabase Configuration
const SUPABASE_URL = 'https://qlohspxfsxomitrdufln.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFsb2hzcHhmc3hvbWl0cmR1ZmxuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjMwMTM1NzYsImV4cCI6MjA3ODU4OTU3Nn0.SHKPZw_9O_9RAhfXY1uOVXVrqrDAoWVq23vP88_fI7Q';

const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Mobile Menu Toggle
function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobile-menu');
    const menuIcon = document.getElementById('menu-icon');
    const closeIcon = document.getElementById('close-icon');

    mobileMenu.classList.toggle('hidden');
    menuIcon.classList.toggle('hidden');
    closeIcon.classList.toggle('hidden');
}

// Smooth Scroll to Section
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }

    // Close mobile menu if open
    const mobileMenu = document.getElementById('mobile-menu');
    const menuIcon = document.getElementById('menu-icon');
    const closeIcon = document.getElementById('close-icon');

    if (!mobileMenu.classList.contains('hidden')) {
        mobileMenu.classList.add('hidden');
        menuIcon.classList.remove('hidden');
        closeIcon.classList.add('hidden');
    }
}

// Services Data
const services = [
    {
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="12" cy="12" r="3"></circle>
            <path d="M12 1v6m0 6v6m5.66-13.66l-4.24 4.24m0 6l-4.24 4.24M23 12h-6m-6 0H1m19.66 5.66l-4.24-4.24m0-6l-4.24-4.24"></path>
        </svg>`,
        title: 'Complete Kitchen Remodeling',
        description: 'Transform your entire kitchen with our comprehensive remodeling services. From layout redesign to final touches, we handle every aspect of your renovation.',
        features: ['Custom cabinet installation', 'Countertop selection & installation', 'Flooring & backsplash', 'Lighting design']
    },
    {
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
            <circle cx="12" cy="10" r="3"></circle>
            <path d="M3 3h18l-4 4H7z"></path>
        </svg>`,
        title: 'New Kitchen Construction',
        description: 'Building a new home or adding a kitchen? We design and build stunning kitchens from the ground up, tailored to your lifestyle and preferences.',
        features: ['Custom design consultation', 'Complete construction', 'Plumbing & electrical', 'Modern appliance integration']
    },
    {
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"></path>
        </svg>`,
        title: 'Kitchen Repairs & Updates',
        description: 'Quick and reliable repair services to fix issues and update your existing kitchen without a full remodel.',
        features: ['Cabinet repair & refinishing', 'Countertop repair', 'Fixture replacement', 'Hardware upgrades']
    },
    {
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
        </svg>`,
        title: 'Cabinet Refinishing',
        description: 'Give your kitchen a fresh new look with professional cabinet refinishing. Cost-effective way to modernize your space.',
        features: ['Professional painting', 'Staining & sealing', 'Hardware replacement', 'Door & drawer repair']
    },
    {
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path>
            <circle cx="9" cy="7" r="4"></circle>
            <path d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75"></path>
            <line x1="4" y1="4" x2="20" y2="20"></line>
        </svg>`,
        title: 'Custom Cabinetry',
        description: 'Maximize your kitchen storage with custom-built cabinets designed to fit your exact specifications and style preferences.',
        features: ['3D design rendering', 'Premium materials', 'Custom dimensions', 'Soft-close hardware']
    },
    {
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="12" cy="12" r="5"></circle>
            <line x1="12" y1="1" x2="12" y2="3"></line>
            <line x1="12" y1="21" x2="12" y2="23"></line>
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
            <line x1="1" y1="12" x2="3" y2="12"></line>
            <line x1="21" y1="12" x2="23" y2="12"></line>
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
        </svg>`,
        title: 'Design Consultation',
        description: 'Not sure where to start? Our design experts will help you create the perfect kitchen layout and choose materials that match your vision.',
        features: ['Free initial consultation', '3D visualization', 'Material selection', 'Budget planning']
    }
];

// Portfolio Data
const projects = [
    {
        title: 'Modern Minimalist Kitchen',
        location: 'Austin, TX',
        image: 'https://images.pexels.com/photos/1599791/pexels-photo-1599791.jpeg?auto=compress&cs=tinysrgb&w=800',
        description: 'Complete renovation with custom white cabinetry and quartz countertops'
    },
    {
        title: 'Rustic Farmhouse Kitchen',
        location: 'Nashville, TN',
        image: 'https://images.pexels.com/photos/2062426/pexels-photo-2062426.jpeg?auto=compress&cs=tinysrgb&w=800',
        description: 'Warm wood tones with modern appliances and farmhouse sink'
    },
    {
        title: 'Contemporary Chef\'s Kitchen',
        location: 'Seattle, WA',
        image: 'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=800',
        description: 'Professional-grade appliances with sleek custom cabinetry'
    },
    {
        title: 'Classic Traditional Kitchen',
        location: 'Boston, MA',
        image: 'https://images.pexels.com/photos/2724748/pexels-photo-2724748.jpeg?auto=compress&cs=tinysrgb&w=800',
        description: 'Elegant design with crown molding and granite countertops'
    },
    {
        title: 'Industrial Modern Kitchen',
        location: 'Portland, OR',
        image: 'https://images.pexels.com/photos/2089698/pexels-photo-2089698.jpeg?auto=compress&cs=tinysrgb&w=800',
        description: 'Exposed brick with stainless steel appliances and concrete countertops'
    },
    {
        title: 'Coastal Style Kitchen',
        location: 'San Diego, CA',
        image: 'https://images.pexels.com/photos/2343465/pexels-photo-2343465.jpeg?auto=compress&cs=tinysrgb&w=800',
        description: 'Light blue cabinetry with white subway tile and natural wood accents'
    }
];

// Testimonials Data
const testimonials = [
    {
        name: 'Sarah Johnson',
        location: 'Denver, CO',
        rating: 5,
        text: 'They transformed our outdated kitchen into a modern masterpiece! The team was professional, on-time, and the quality of work exceeded our expectations. We absolutely love cooking in our new space.',
        project: 'Complete Kitchen Remodel'
    },
    {
        name: 'Michael Chen',
        location: 'Portland, OR',
        rating: 5,
        text: 'From design to installation, everything was flawless. They listened to our needs and delivered exactly what we envisioned. The attention to detail and craftsmanship is outstanding.',
        project: 'Custom Cabinetry Installation'
    },
    {
        name: 'Jennifer Martinez',
        location: 'Atlanta, GA',
        rating: 5,
        text: 'We needed several repairs and updates to our kitchen. The team diagnosed all issues quickly and provided fair pricing. Work was completed on schedule and our kitchen looks brand new!',
        project: 'Kitchen Repair & Updates'
    },
    {
        name: 'David Thompson',
        location: 'Phoenix, AZ',
        rating: 5,
        text: 'Building our dream kitchen from scratch was a big undertaking, but this team made it stress-free. Their expertise and guidance throughout the process was invaluable. Highly recommended!',
        project: 'New Kitchen Construction'
    },
    {
        name: 'Lisa Anderson',
        location: 'Charlotte, NC',
        rating: 5,
        text: 'The cabinet refinishing service saved us thousands compared to replacement. Our kitchen looks completely different and the quality is exceptional. Thank you for the amazing transformation!',
        project: 'Cabinet Refinishing'
    },
    {
        name: 'Robert Williams',
        location: 'San Diego, CA',
        rating: 5,
        text: 'Professional, reliable, and incredibly talented. They helped us design the perfect layout for our family and executed it perfectly. Best decision we made for our home renovation.',
        project: 'Kitchen Remodeling'
    }
];

// Privacy Policy Data
const privacySections = [
    {
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"></path>
            <polyline points="14 2 14 8 20 8"></polyline>
            <line x1="16" y1="13" x2="8" y2="13"></line>
            <line x1="16" y1="17" x2="8" y2="17"></line>
            <polyline points="10 9 9 9 8 9"></polyline>
        </svg>`,
        title: 'Information We Collect',
        content: `
            <p><strong>Personal Information:</strong> When you submit a contact form or request a consultation, we collect personal information including your name, email address, phone number, location, and project details.</p>
            <p><strong>Automatically Collected Information:</strong> We may collect information about your device, including IP address, browser type, and access times when you visit our website.</p>
            <p><strong>Cookies:</strong> We use cookies and similar tracking technologies to improve your browsing experience and analyze website traffic.</p>
        `
    },
    {
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
            <circle cx="12" cy="12" r="3"></circle>
        </svg>`,
        title: 'How We Use Your Information',
        content: `
            <p>We use the information we collect to:</p>
            <ul>
                <li>Respond to your inquiries and provide customer service</li>
                <li>Schedule consultations and provide project estimates</li>
                <li>Send you information about our services and promotions</li>
                <li>Improve our website and services</li>
                <li>Comply with legal obligations</li>
                <li>Prevent fraud and ensure security</li>
            </ul>
        `
    },
    {
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
            <path d="M7 11V7a5 5 0 0110 0v4"></path>
        </svg>`,
        title: 'Information Sharing and Disclosure',
        content: `
            <p>We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:</p>
            <ul>
                <li><strong>Service Providers:</strong> With trusted third-party service providers who assist us in operating our website and conducting our business</li>
                <li><strong>Legal Requirements:</strong> When required by law or to protect our rights and safety</li>
                <li><strong>Business Transfers:</strong> In connection with any merger, sale of company assets, or acquisition</li>
            </ul>
        `
    }
];

// Render Services
function renderServices() {
    const servicesGrid = document.getElementById('services-grid');

    services.forEach(service => {
        const serviceCard = document.createElement('div');
        serviceCard.className = 'service-card';

        serviceCard.innerHTML = `
            <div class="service-icon">${service.icon}</div>
            <h3 class="service-title">${service.title}</h3>
            <p class="service-description">${service.description}</p>
            <ul class="service-features">
                ${service.features.map(feature => `
                    <li class="service-feature">
                        <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                        ${feature}
                    </li>
                `).join('')}
            </ul>
        `;

        servicesGrid.appendChild(serviceCard);
    });
}

// Render Portfolio
function renderPortfolio() {
    const portfolioGrid = document.getElementById('portfolio-grid');

    projects.forEach(project => {
        const portfolioCard = document.createElement('div');
        portfolioCard.className = 'portfolio-card';

        portfolioCard.innerHTML = `
            <div class="portfolio-image-wrapper">
                <img src="${project.image}" alt="${project.title}" class="portfolio-image">
                <div class="portfolio-image-overlay"></div>
            </div>
            <div class="portfolio-content">
                <h3 class="portfolio-title">${project.title}</h3>
                <div class="portfolio-location">
                    <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                    ${project.location}
                </div>
                <p class="portfolio-description">${project.description}</p>
            </div>
        `;

        portfolioGrid.appendChild(portfolioCard);
    });
}

// Render Testimonials
function renderTestimonials() {
    const testimonialsGrid = document.getElementById('testimonials-grid');

    testimonials.forEach(testimonial => {
        const testimonialCard = document.createElement('div');
        testimonialCard.className = 'testimonial-card';

        const stars = Array(testimonial.rating).fill(0).map(() => `
            <svg class="testimonial-star" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
            </svg>
        `).join('');

        testimonialCard.innerHTML = `
            <svg class="testimonial-quote-icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
            </svg>
            <div class="testimonial-stars">${stars}</div>
            <p class="testimonial-text">"${testimonial.text}"</p>
            <div class="testimonial-author">
                <div class="testimonial-name">${testimonial.name}</div>
                <div class="testimonial-location">${testimonial.location}</div>
                <div class="testimonial-project">${testimonial.project}</div>
            </div>
        `;

        testimonialsGrid.appendChild(testimonialCard);
    });
}

// Render Privacy Sections
function renderPrivacySections() {
    const privacySectionsContainer = document.getElementById('privacy-sections');

    privacySections.forEach(section => {
        const sectionDiv = document.createElement('div');
        sectionDiv.className = 'privacy-section';

        sectionDiv.innerHTML = `
            <div class="privacy-section-header">
                <div class="privacy-section-icon">${section.icon}</div>
                <h3 class="privacy-section-title">${section.title}</h3>
            </div>
            <div class="privacy-section-content">
                ${section.content}
            </div>
        `;

        privacySectionsContainer.appendChild(sectionDiv);
    });

    // Add remaining sections
    const additionalSections = `
        <div class="privacy-section">
            <h3 class="privacy-section-title">Data Security</h3>
            <p class="privacy-section-content" style="padding-left: 0;">
                We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
            </p>
        </div>

        <div class="privacy-section">
            <h3 class="privacy-section-title">Your Rights and Choices</h3>
            <div class="privacy-section-content" style="padding-left: 0;">
                <p>You have the right to:</p>
                <ul>
                    <li>Access and receive a copy of your personal information</li>
                    <li>Request correction of inaccurate or incomplete information</li>
                    <li>Request deletion of your personal information</li>
                    <li>Opt-out of marketing communications</li>
                    <li>Object to processing of your personal information</li>
                </ul>
                <p>To exercise these rights, please contact us using the information provided below.</p>
            </div>
        </div>

        <div class="privacy-section">
            <h3 class="privacy-section-title">Google Ads and Marketing</h3>
            <p class="privacy-section-content" style="padding-left: 0;">
                We may use Google Ads and other advertising platforms to promote our services. These platforms may use cookies and similar technologies to serve ads based on your browsing behavior. You can opt-out of personalized advertising by visiting the Google Ads Settings or the Network Advertising Initiative opt-out page.
            </p>
        </div>

        <div class="privacy-section">
            <h3 class="privacy-section-title">Children's Privacy</h3>
            <p class="privacy-section-content" style="padding-left: 0;">
                Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately.
            </p>
        </div>

        <div class="privacy-section">
            <h3 class="privacy-section-title">Changes to This Privacy Policy</h3>
            <p class="privacy-section-content" style="padding-left: 0;">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date. We encourage you to review this Privacy Policy periodically.
            </p>
        </div>

        <div class="privacy-contact-box">
            <h3>Contact Us</h3>
            <p>If you have questions or concerns about this Privacy Policy or our data practices, please contact us:</p>
            <div class="privacy-contact-details">
                <p><strong>Phone:</strong> 1-800-KITCHEN (1-800-548-2436)</p>
                <p><strong>Email:</strong> privacy@kitchenpros.com</p>
                <p><strong>Address:</strong> 123 Kitchen Lane, Suite 100, Your City, ST 12345</p>
            </div>
        </div>

        <div class="privacy-footer">
            <p>By using our website and services, you acknowledge that you have read and understood this Privacy Policy.</p>
        </div>
    `;

    privacySectionsContainer.innerHTML += additionalSections;
}

// Contact Form Handler
async function handleFormSubmit(event) {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);
    const submitButton = document.getElementById('submit-button');
    const errorMessage = document.getElementById('error-message');
    const errorText = document.getElementById('error-text');
    const successMessage = document.getElementById('success-message');
    const contactForm = document.getElementById('contact-form-element');

    // Check consent
    if (!formData.get('consent_given')) {
        errorMessage.classList.remove('hidden');
        errorText.textContent = 'Please agree to be contacted before submitting.';
        return;
    }

    // Disable button and show loading
    submitButton.disabled = true;
    submitButton.textContent = 'Submitting...';
    errorMessage.classList.add('hidden');

    try {
        const leadData = {
            name: formData.get('name'),
            email: formData.get('email'),
            phone: formData.get('phone'),
            location: formData.get('location') || null,
            project_type: formData.get('project_type'),
            budget_range: formData.get('budget_range') || null,
            timeline: formData.get('timeline') || null,
            project_details: formData.get('project_details') || null,
            consent_given: true,
            source: 'website_form'
        };

        const { data, error } = await supabaseClient
            .from('leads')
            .insert([leadData]);

        if (error) throw error;

        // Show success message
        contactForm.classList.add('hidden');
        successMessage.classList.remove('hidden');

        // Reset form
        form.reset();

        // Hide success message after 5 seconds and show form again
        setTimeout(() => {
            successMessage.classList.add('hidden');
            contactForm.classList.remove('hidden');
        }, 5000);

    } catch (error) {
        console.error('Error submitting lead:', error);
        errorMessage.classList.remove('hidden');
        errorText.textContent = 'Something went wrong. Please try again or call us directly.';
    } finally {
        submitButton.disabled = false;
        submitButton.textContent = 'Get Free Consultation';
    }
}

// Set Current Date
function setCurrentDate() {
    const dateElement = document.getElementById('current-date');
    const currentDate = new Date().toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric'
    });
    dateElement.textContent = currentDate;
}

// Set Footer Year
function setFooterYear() {
    const yearElement = document.getElementById('footer-year');
    yearElement.textContent = new Date().getFullYear();
}

// Initialize Page
document.addEventListener('DOMContentLoaded', function() {
    renderServices();
    renderPortfolio();
    renderTestimonials();
    renderPrivacySections();
    setCurrentDate();
    setFooterYear();

    // Add form submit handler
    const contactForm = document.getElementById('contact-form-element');
    contactForm.addEventListener('submit', handleFormSubmit);
});
