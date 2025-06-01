import React, { useEffect } from 'react';
import ContactForm from '../components/ContactForm';

function Contact() {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen pt-16 bg-white">
      {/* Page Header */}
      <div className="bg-primary py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center">Contactez-nous</h1>
          <p className="text-xl text-white text-center mt-4 max-w-3xl mx-auto">
            Nous aimerions avoir de vos nouvelles ! Contactez-nous pour toute question, demande de prière ou pour en savoir plus sur notre église.
          </p>
        </div>
      </div>

      {/* Contact Information Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {/* Contact Form */}
            <div>
              <ContactForm />
            </div>
            
            {/* Contact Information */}
            <div className="bg-gray-50 p-8 rounded-lg shadow-md">
              <h2 className="text-3xl font-bold mb-6">Entrez en Contact</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-2">Adresse</h3>
                  <address className="not-italic text-gray-600">
                    <p className="flex items-start">
                      <svg className="w-5 h-5 text-gray-500 mr-3 mt-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                      <span>
                        123 Faith Street<br />
                        Cityville, ST 12345<br />
                        United States
                      </span>
                    </p>
                  </address>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-2">Service Times</h3>
                  <div className="space-y-2 text-gray-600">
                    <p className="flex items-start">
                      <svg className="w-5 h-5 text-gray-500 mr-3 mt-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                      </svg>
                      <span>
                        <strong>Sunday Mornings:</strong> 9:00 AM - 10:30 AM
                      </span>
                    </p>
                    <p className="flex items-start">
                      <svg className="w-5 h-5 text-gray-500 mr-3 mt-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                      </svg>
                      <span>
                        <strong>Sunday Evenings:</strong> 6:00 PM - 7:30 PM
                      </span>
                    </p>
                    <p className="flex items-start">
                      <svg className="w-5 h-5 text-gray-500 mr-3 mt-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                      </svg>
                      <span>
                        <strong>Wednesday Nights:</strong> 7:00 PM - 8:30 PM
                      </span>
                    </p>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-2">Informations de Contact</h3>
                  <div className="space-y-2 text-gray-600">
                    <p className="flex items-center">
                      <svg className="w-5 h-5 text-gray-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                      </svg>
                      <span>(123) 456-7890</span>
                    </p>
                    <p className="flex items-center">
                      <svg className="w-5 h-5 text-gray-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                      <span>info@gracecommunitychurch.org</span>
                    </p>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-2">Heures d'Ouverture</h3>
                  <div className="space-y-2 text-gray-600">
                    <p className="flex items-start">
                      <svg className="w-5 h-5 text-gray-500 mr-3 mt-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                      </svg>
                      <span>
                        <strong>Lundi - Vendredi :</strong> 9h00 - 17h00<br />
                        <strong>Samedi - Dimanche :</strong> Fermé (sauf pour les services)
                      </span>
                    </p>
                  </div>
                </div>
                
                <div className="pt-4">
                  <h3 className="text-xl font-semibold text-primary mb-3">Connectez-vous avec Nous</h3>
                  <div className="flex space-x-4">
                    <a href="https://facebook.com" className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition-colors">
                      <span className="sr-only">Facebook</span>
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                      </svg>
                    </a>
                    <a href="https://twitter.com" className="bg-blue-400 text-white p-2 rounded-full hover:bg-blue-500 transition-colors">
                      <span className="sr-only">Twitter</span>
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                      </svg>
                    </a>
                    <a href="https://instagram.com" className="bg-pink-600 text-white p-2 rounded-full hover:bg-pink-700 transition-colors">
                      <span className="sr-only">Instagram</span>
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                      </svg>
                    </a>
                    <a href="https://youtube.com" className="bg-red-600 text-white p-2 rounded-full hover:bg-red-700 transition-colors">
                      <span className="sr-only">YouTube</span>
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z" clipRule="evenodd" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="bg-gray-100 p-4 rounded-lg shadow">
            <h2 className="text-3xl font-bold mb-6 text-center">Trouvez-nous</h2>
            <div className="h-96 bg-gray-300 rounded-lg overflow-hidden">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m12!1m8!1m3!1d15101.008348662837!2d47.50153541447755!3d-18.875894635292624!3m2!1i1024!2i768!4f13.1!2m1!1sfvkfm%20madagascar!5e0!3m2!1sen!2smg!4v1748803798543!5m2!1sen!2smg" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy"
                title="Church Location"
              ></iframe>
            </div>
            <div className="mt-4 text-center">
              <a 
                href="https://goo.gl/maps/your-church-location" 
                target="_blank" 
                rel="noreferrer"
                className="text-primary hover:text-secondary font-medium inline-flex items-center"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M12 1.586l-4 4v12.828l4-4V1.586zM3.707 3.293A1 1 0 002 4v10a1 1 0 00.293.707L6 18.414V5.586L3.707 3.293zM17.707 5.293L14 1.586v12.828l2.293 2.293A1 1 0 0018 16V6a1 1 0 00-.293-.707z" clipRule="evenodd" />
                </svg>
                Obtenir l'Itinéraire
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold text-center mb-12">Questions Fréquemment Posées</h2>
          
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-primary mb-2">À quoi s'attendre lors d'une visite ?</h3>
              <p className="text-gray-700">
                Vous pouvez vous attendre à un accueil chaleureux, une musique édifiante et un message pertinent de la Bible. 
                Nos services durent généralement environ 90 minutes, et une tenue décontractée est tout à fait appropriée.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-primary mb-2">Y a-t-il une garderie disponible ?</h3>
              <p className="text-gray-700">
                Oui ! Nous avons des programmes adaptés à l'âge pour les enfants de la naissance jusqu'à la 5ème année pendant 
                tous nos services. Nos bénévoles d'accueil vous aideront à enregistrer vos enfants.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-primary mb-2">Comment puis-je m'impliquer ?</h3>
              <p className="text-gray-700">
                Nous avons de nombreuses opportunités de servir et de se connecter, de rejoindre un petit groupe à faire du bénévolat 
                dans divers ministères. Contactez-nous ou parlez à un membre de l'équipe d'accueil le dimanche pour en savoir plus.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-primary mb-2">Comment devenir membre ?</h3>
              <p className="text-gray-700">
                Nous proposons des cours de formation à l'adhésion plusieurs fois par an. Ces cours fournissent des informations 
                sur les croyances, les valeurs et la vision de notre église, et sur la façon dont vous pouvez rejoindre notre famille d'église.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;