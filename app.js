const cars = [
  {
    id: 1,
    name: '488 GTB',
    brand: 'Ferrari',
    category: 'sport',
    price: 245000,
    image: 'https://images.pexels.com/photos/30687977/pexels-photo-30687977.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    year: 2024,
    power: '670 ch',
    speed: '330 km/h',
    acceleration: '3.0 s',
    mileage: '0 km',
    fuel: 'Essence',
    tag: 'Nouveau',
    description: "La Ferrari 488 GTB incarne l'excellence italienne dans l'art du sport automobile. Son moteur V8 biturbo délivre une puissance spectaculaire tandis que son aérodynamique affinée offre une tenue de route exceptionnelle. Un chef-d'œuvre de performance et de style."
  },
  {
    id: 2,
    name: 'Huracán EVO',
    brand: 'Lamborghini',
    category: 'sport',
    price: 280000,
    image: 'https://images.pexels.com/photos/17632049/pexels-photo-17632049.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    year: 2024,
    power: '640 ch',
    speed: '325 km/h',
    acceleration: '2.9 s',
    mileage: '0 km',
    fuel: 'Essence',
    tag: 'Nouveau',
    description: "La Lamborghini Huracán EVO combine un design audacieux et une technologie de pointe. Son V10 atmosphérique rugit avec une intensité incomparable, offrant une expérience de conduite pure et envoûtante sur route comme sur circuit."
  },
  {
    id: 3,
    name: 'Ghost',
    brand: 'Rolls-Royce',
    category: 'berline',
    price: 350000,
    image: 'https://images.pexels.com/photos/3764986/pexels-photo-3764986.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    year: 2024,
    power: '571 ch',
    speed: '250 km/h',
    acceleration: '4.8 s',
    mileage: '0 km',
    fuel: 'Essence',
    tag: 'Élégance',
    description: "Le Rolls-Royce Ghost redéfinit le luxe automobile avec une élégance discrète et un confort inégalé. Son intérieur somptueux, artisanat d'exception et silence absolu en font la référence absolue des berlines de prestige."
  },
  {
    id: 4,
    name: '911 Carrera S',
    brand: 'Porsche',
    category: 'sport',
    price: 165000,
    image: 'https://images.pexels.com/photos/17476943/pexels-photo-17476943.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    year: 2024,
    power: '450 ch',
    speed: '308 km/h',
    acceleration: '3.5 s',
    mileage: '0 km',
    fuel: 'Essence',
    tag: 'Icône',
    description: "La Porsche 911 Carrera S est l'icône sportive par excellence. Son flat-six légendaire, son équilibre parfait et sa précision chirurgicale en font une référence intemporelle du sport automobile allemand."
  },
  {
    id: 5,
    name: 'Aventador SVJ',
    brand: 'Lamborghini',
    category: 'sport',
    price: 520000,
    image: 'https://images.pexels.com/photos/4756890/pexels-photo-4756890.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    year: 2023,
    power: '770 ch',
    speed: '350 km/h',
    acceleration: '2.8 s',
    mileage: '1 200 km',
    fuel: 'Essence',
    tag: 'Occasion',
    description: "La Lamborghini Aventador SVJ repousse les limites de la performance. Son V12 atmosphérique développe une puissance phénoménale, tandis que son aérodynamique active ALA 2.0 offre une adhérence de circuit sur route ouverte."
  },
  {
    id: 6,
    name: 'Phantom',
    brand: 'Rolls-Royce',
    category: 'berline',
    price: 480000,
    image: 'https://images.pexels.com/photos/14217531/pexels-photo-14217531.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    year: 2024,
    power: '571 ch',
    speed: '250 km/h',
    acceleration: '5.3 s',
    mileage: '0 km',
    fuel: 'Essence',
    tag: 'Nouveau',
    description: "Le Rolls-Royce Phantom est l'expression ultime du luxe automobile. Chaque détail est pensé pour offrir une expérience sans équivalent, du ciel étoilé intégré au plafond aux portes coach à fermeture électrique."
  },
  {
    id: 7,
    name: 'Continental GT',
    brand: 'Bentley',
    category: 'berline',
    price: 220000,
    image: 'https://images.pexels.com/photos/35113538/pexels-photo-35113538.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    year: 2024,
    power: '635 ch',
    speed: '333 km/h',
    acceleration: '3.6 s',
    mileage: '0 km',
    fuel: 'Essence',
    tag: 'Nouveau',
    description: "La Bentley Continental GT marie performance grand tourisme et raffinement britannique. Son W12 biturbo offre une puissance effrayante dans un confort royal, faisant de chaque trajet un moment d'exception."
  },
  {
    id: 8,
    name: 'AMG GT R',
    brand: 'Mercedes-AMG',
    category: 'sport',
    price: 195000,
    image: 'https://images.pexels.com/photos/4756885/pexels-photo-4756885.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    year: 2023,
    power: '585 ch',
    speed: '318 km/h',
    acceleration: '3.2 s',
    mileage: '3 500 km',
    fuel: 'Essence',
    tag: 'Occasion',
    description: "La Mercedes-AMG GT R est la weapon de course homologuée pour la route. Son V8 biturbo affûté, son châssis à réglage neuf voies et son aérodynamique active en font une redoutable machine de circuit."
  },
  {
    id: 9,
    name: 'Range Rover Autobiography',
    brand: 'Land Rover',
    category: 'suv',
    price: 180000,
    image: 'https://images.pexels.com/photos/40162107/pexels-photo-40162107.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    year: 2024,
    power: '530 ch',
    speed: '262 km/h',
    acceleration: '4.5 s',
    mileage: '0 km',
    fuel: 'Hybride',
    tag: 'Nouveau',
    description: "Le Range Rover Autobiography conjugue tout-terrain légendaire et luxe de très haut niveau. Son habitacle en cuir semi-aniline, ses sièges massant à l'arrière et sa suspension pneumatique offrent un confort de Rolls-Royce avec la polyvalence d'un vrai 4x4."
  }
]

const services = [
  {
    icon: '📊',
    title: 'Financement sur mesure',
    desc: "Solutions de financement adaptées à votre situation. Loyer, crédit classique ou achat comptant, nos experts vous accompagnent pour trouver la formule idéale."
  },
  {
    icon: '🔒',
    title: 'Garantie & Assurance',
    desc: "Tous nos véhicules sont couverts par une garantie minimale de 24 mois. Profitez également de nos partenariats assurance pour une protection premium à tarif préférentiel."
  },
  {
    icon: '🔧',
    title: 'Entretien Premium',
    desc: "Notre atelier certifié assure l'entretien et la réparation de votre véhicule avec des pièces d'origine. Diagnostic de pointe et main-d'œuvre experte garanties."
  },
  {
    icon: '🚚',
    title: 'Livraison nationale',
    desc: "Livraison à domicile partout en France métropolitaine et Corse. Mise en main personnalisée et présentation détaillée du véhicule à réception."
  },
  {
    icon: '🔄',
    title: 'Reprise & Échange',
    desc: "Estimation gratuite et au meilleur prix de votre véhicule actuel. Reprise immédiate possible avec reprise administrative complète prise en charge."
  },
  {
    icon: '🏆',
    title: 'Conciergerie VIP',
    desc: "Service de conciergerie dédié 7j/7 pour nos clients. Réservation, transport, collection à l'aéroport, nous orchestrons votre mobilité premium."
  }
]

const testimonials = [
  {
    name: 'Antoine Dubois',
    role: 'Entrepreneur, Paris',
    rating: 5,
    text: "Service impeccable du début à la fin. L'équipe m'a guidé avec professionnalisme dans le choix de ma Porsche 911. Livraison parfaite, je recommande vivement Prestige Auto."
  },
  {
    name: 'Sophie Marchand',
    role: 'Avocate, Lyon',
    rating: 5,
    text: "J'ai acquis ma Bentley Continental GT chez Prestige Auto. Un niveau de service rare en France. L'attention au détail et le suivi après-vente sont remarquables."
  },
  {
    name: 'Karim Benali',
    role: 'Médecin, Marseille',
    rating: 5,
    text: "Achat de ma Ferrari 488 GTB en toute sérénité. Transparence totale sur le véhicule, financement adapté et livraison à domicile. Une expérience d'exception."
  }
]

const filters = [
  { key: 'all', label: 'Tous les véhicules' },
  { key: 'sport', label: 'Sportives' },
  { key: 'berline', label: 'Berlines de luxe' },
  { key: 'suv', label: 'SUV Premium' }
]

function formatPrice(price) {
  return new Intl.NumberFormat('fr-FR').format(price) + ' €'
}

function renderNavbar() {
  return `
    <nav class="navbar" id="navbar">
      <a href="#hero" class="navbar-logo">PRESTIGE<span>AUTO</span></a>
      <ul class="navbar-links" id="navbar-links">
        <li><a href="#vehicules">Véhicules</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#about">À propos</a></li>
        <li><a href="#testimonials">Avis clients</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <button class="navbar-cta" onclick="document.getElementById('contact').scrollIntoView({behavior:'smooth'})">Prendre RDV</button>
      <button class="navbar-toggle" id="navbar-toggle" aria-label="Menu">
        <span></span><span></span><span></span>
      </button>
    </nav>
  `
}

function renderHero() {
  return `
    <section class="hero" id="hero">
      <div class="hero-bg">
        <img src="https://images.pexels.com/photos/17632052/pexels-photo-17632052.jpeg?auto=compress&cs=tinysrgb&h=1200&w=1920" alt="Showroom de voitures de luxe" />
      </div>
      <div class="hero-overlay"></div>
      <div class="hero-content">
        <span class="hero-badge">Concessionnaire officiel · France</span>
        <h1 class="hero-title">L'excellence automobile <span>française</span></h1>
        <p class="hero-subtitle">Découvrez notre collection exclusive de voitures de luxe. Ferrari, Lamborghini, Rolls-Royce, Bentley — les plus grandes marques réunies pour vous dans nos showrooms en France.</p>
        <div class="hero-actions">
          <button class="btn-primary" onclick="document.getElementById('vehicules').scrollIntoView({behavior:'smooth'})">Voir nos véhicules</button>
          <button class="btn-secondary" onclick="document.getElementById('contact').scrollIntoView({behavior:'smooth'})">Nous contacter</button>
        </div>
      </div>
      <div class="hero-scroll">
        <span>Découvrir</span>
        <div class="hero-scroll-line"></div>
      </div>
    </section>
  `
}

function renderStats() {
  return `
    <div class="stats">
      <div class="stat-item">
        <div class="stat-number">15+</div>
        <div class="stat-label">Années d'expérience</div>
      </div>
      <div class="stat-item">
        <div class="stat-number">850+</div>
        <div class="stat-label">Véhicules vendus</div>
      </div>
      <div class="stat-item">
        <div class="stat-number">12</div>
        <div class="stat-label">Showrooms en France</div>
      </div>
      <div class="stat-item">
        <div class="stat-number">98%</div>
        <div class="stat-label">Clients satisfaits</div>
      </div>
    </div>
  `
}

function renderCarCard(car) {
  return `
    <div class="car-card reveal" data-car-id="${car.id}">
      <div class="car-card-image">
        <img src="${car.image}" alt="${car.brand} ${car.name}" loading="lazy" />
        <span class="car-card-tag">${car.tag}</span>
      </div>
      <div class="car-card-body">
        <h3 class="car-card-name">${car.name}</h3>
        <p class="car-card-brand">${car.brand} · ${car.year}</p>
        <div class="car-card-specs">
          <div class="car-spec">
            <span class="car-spec-value">${car.power}</span>
            <span class="car-spec-label">Puissance</span>
          </div>
          <div class="car-spec">
            <span class="car-spec-value">${car.speed}</span>
            <span class="car-spec-label">V-max</span>
          </div>
          <div class="car-spec">
            <span class="car-spec-value">${car.acceleration}</span>
            <span class="car-spec-label">0-100</span>
          </div>
        </div>
        <div class="car-card-footer">
          <span class="car-card-price">${formatPrice(car.price)}</span>
          <button class="car-card-btn" data-car-id="${car.id}">Découvrir</button>
        </div>
      </div>
    </div>
  `
}

function renderVehicles() {
  return `
    <section class="section" id="vehicules">
      <div class="section-header reveal">
        <span class="section-label">Notre collection</span>
        <h2 class="section-title">Véhicules d'exception</h2>
        <p class="section-subtitle">Chaque automobile de notre collection est sélectionnée pour son excellence, sa rareté et son caractère. Trouvez la voiture qui correspond à votre passion.</p>
      </div>
      <div class="filters reveal" id="filters">
        ${filters.map(f => `<button class="filter-btn ${f.key === 'all' ? 'active' : ''}" data-filter="${f.key}">${f.label}</button>`).join('')}
      </div>
      <div class="car-grid" id="car-grid">
        ${cars.map(renderCarCard).join('')}
      </div>
    </section>
  `
}

function renderServices() {
  return `
    <section class="section services-section" id="services" style="max-width:1400px;margin:0 auto;padding-left:3rem;padding-right:3rem;">
      <div class="section-header reveal">
        <span class="section-label">Nos services</span>
        <h2 class="section-title">Un accompagnement complet</h2>
        <p class="section-subtitle">De la sélection à la livraison, nous orchestrons chaque étape de votre acquisition avec la plus grande exigence.</p>
      </div>
      <div class="services-grid">
        ${services.map(s => `
          <div class="service-card reveal">
            <div class="service-icon">${s.icon}</div>
            <h3 class="service-title">${s.title}</h3>
            <p class="service-desc">${s.desc}</p>
          </div>
        `).join('')}
      </div>
    </section>
  `
}

function renderAbout() {
  return `
    <section class="section" id="about">
      <div class="about-container">
        <div class="about-images reveal">
          <img class="about-img-main" src="https://images.pexels.com/photos/18108314/pexels-photo-18108314.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="Showroom Prestige Auto" />
          <img class="about-img-secondary" src="https://images.pexels.com/photos/29851073/pexels-photo-29851073.jpeg?auto=compress&cs=tinysrgb&h=400&w=400" alt="Détail intérieur luxury car" />
        </div>
        <div class="about-text reveal">
          <span class="section-label">À propos de nous</span>
          <h2>Le luxe automobile à la française depuis 2009</h2>
          <p>Prestige Auto est le concessionnaire de référence pour les voitures de luxe en France. Depuis plus de 15 ans, nous accompagnons les passionnés et les exigeants dans l'acquisition de leur véhicule d'exception.</p>
          <p>Notre réseau de 12 showrooms répartis sur le territoire français vous garantit une proximité et une expertise inégalées. Nous sélectionnons rigoureusement chaque véhicule pour vous offrir le meilleur du luxe automobile.</p>
          <div class="about-features">
            <div class="about-feature">
              <div class="about-feature-icon">✓</div>
              <div class="about-feature-text">Véhicules certifiés & garantis</div>
            </div>
            <div class="about-feature">
              <div class="about-feature-icon">✓</div>
              <div class="about-feature-text">Expertise indépendante</div>
            </div>
            <div class="about-feature">
              <div class="about-feature-icon">✓</div>
              <div class="about-feature-text">Showrooms premium</div>
            </div>
            <div class="about-feature">
              <div class="about-feature-icon">✓</div>
              <div class="about-feature-text">Livraison toute la France</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
}

function renderTestimonials() {
  return `
    <section class="section testimonials-section" id="testimonials" style="max-width:1400px;margin:0 auto;padding-left:3rem;padding-right:3rem;">
      <div class="section-header reveal">
        <span class="section-label">Témoignages</span>
        <h2 class="section-title">Ils nous ont fait confiance</h2>
        <p class="section-subtitle">La satisfaction de nos clients est notre plus belle récompense. Découvrez leurs expériences avec Prestige Auto.</p>
      </div>
      <div class="testimonials-grid">
        ${testimonials.map(t => `
          <div class="testimonial-card reveal">
            <div class="testimonial-stars">
              ${'<span class="testimonial-star">★</span>'.repeat(t.rating)}
            </div>
            <p class="testimonial-text">"${t.text}"</p>
            <div class="testimonial-author">
              <div class="testimonial-avatar">${t.name.charAt(0)}</div>
              <div>
                <div class="testimonial-name">${t.name}</div>
                <div class="testimonial-role">${t.role}</div>
              </div>
            </div>
          </div>
        `).join('')}
      </div>
    </section>
  `
}

function renderCTABanner() {
  return `
    <div class="cta-banner">
      <div class="cta-banner-bg">
        <img src="https://images.pexels.com/photos/164634/pexels-photo-164634.jpeg?auto=compress&cs=tinysrgb&h=650&w=1920" alt="Voitures de luxe alignées" />
      </div>
      <div class="cta-banner-overlay"></div>
      <div class="cta-banner-content">
        <h2>Prêt à posséder l'exception ?</h2>
        <p>Prenez rendez-vous dans l'un de nos showrooms pour une expérience d'essai sur mesure.</p>
        <button class="btn-primary" onclick="document.getElementById('contact').scrollIntoView({behavior:'smooth'})">Réserver un essai</button>
      </div>
    </div>
  `
}

function renderContact() {
  return `
    <section class="section" id="contact">
      <div class="contact-container">
        <div class="contact-info reveal">
          <span class="section-label">Contact</span>
          <h2>Parlons de votre projet</h2>
          <p>Que vous cherchiez un véhicule précis, souhaitiez un essai ou ayez besoin d'informations sur nos services, notre équipe est à votre écoute.</p>
          <div class="contact-item">
            <div class="contact-item-icon">📍</div>
            <div>
              <div class="contact-item-label">Showroom principal</div>
              <div class="contact-item-value">128 Avenue des Champs-Élysées, 75008 Paris</div>
            </div>
          </div>
          <div class="contact-item">
            <div class="contact-item-icon">📞</div>
            <div>
              <div class="contact-item-label">Téléphone</div>
              <div class="contact-item-value">+33 1 42 86 90 00</div>
            </div>
          </div>
          <div class="contact-item">
            <div class="contact-item-icon">✉️</div>
            <div>
              <div class="contact-item-label">Email</div>
              <div class="contact-item-value">contact@prestige-auto.fr</div>
            </div>
          </div>
          <div class="contact-item">
            <div class="contact-item-icon">🕐</div>
            <div>
              <div class="contact-item-label">Horaires</div>
              <div class="contact-item-value">Lun – Sam : 9h00 – 19h00 · Dim : sur RDV</div>
            </div>
          </div>
        </div>
        <form class="contact-form reveal" id="contact-form">
          <div class="form-success" id="form-success">
            ✓ Votre message a été envoyé avec succès. Notre équipe vous recontactera sous 24h.
          </div>
          <div class="form-row">
            <div class="form-group">
              <label class="form-label" for="firstname">Prénom</label>
              <input class="form-input" type="text" id="firstname" name="firstname" required placeholder="Jean" />
            </div>
            <div class="form-group">
              <label class="form-label" for="lastname">Nom</label>
              <input class="form-input" type="text" id="lastname" name="lastname" required placeholder="Dupont" />
            </div>
          </div>
          <div class="form-row">
            <div class="form-group">
              <label class="form-label" for="email">Email</label>
              <input class="form-input" type="email" id="email" name="email" required placeholder="jean.dupont@email.fr" />
            </div>
            <div class="form-group">
              <label class="form-label" for="phone">Téléphone</label>
              <input class="form-input" type="tel" id="phone" name="phone" placeholder="+33 6 12 34 56 78" />
            </div>
          </div>
          <div class="form-group">
            <label class="form-label" for="subject">Sujet</label>
            <select class="form-select" id="subject" name="subject" required>
              <option value="">Sélectionnez un sujet</option>
              <option value="essai">Demande d'essai</option>
              <option value="achat">Demande d'achat</option>
              <option value="financement">Financement</option>
              <option value="reprise">Reprise de véhicule</option>
              <option value="service">Service après-vente</option>
              <option value="autre">Autre</option>
            </select>
          </div>
          <div class="form-group">
            <label class="form-label" for="message">Message</label>
            <textarea class="form-textarea" id="message" name="message" required placeholder="Décrivez votre projet ou votre demande..."></textarea>
          </div>
          <button type="submit" class="form-submit">Envoyer le message</button>
        </form>
      </div>
    </section>
  `
}

function renderFooter() {
  return `
    <footer class="footer">
      <div class="footer-container">
        <div class="footer-top">
          <div class="footer-brand-col">
            <div class="footer-brand">PRESTIGE<span>AUTO</span></div>
            <p class="footer-desc">Le concessionnaire de référence pour les voitures de luxe en France. Ferrari, Lamborghini, Rolls-Royce, Bentley, Porsche et plus encore.</p>
            <div class="footer-social">
              <a href="#" aria-label="Instagram">IG</a>
              <a href="#" aria-label="Facebook">FB</a>
              <a href="#" aria-label="LinkedIn">in</a>
              <a href="#" aria-label="YouTube">YT</a>
            </div>
          </div>
          <div class="footer-col">
            <h4 class="footer-col-title">Véhicules</h4>
            <ul>
              <li><a href="#vehicules">Sportives</a></li>
              <li><a href="#vehicules">Berlines de luxe</a></li>
              <li><a href="#vehicules">SUV Premium</a></li>
              <li><a href="#vehicules">Occasions</a></li>
            </ul>
          </div>
          <div class="footer-col">
            <h4 class="footer-col-title">Entreprise</h4>
            <ul>
              <li><a href="#about">À propos</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#testimonials">Avis clients</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          <div class="footer-col">
            <h4 class="footer-col-title">Showrooms</h4>
            <ul>
              <li><a href="#contact">Paris</a></li>
              <li><a href="#contact">Lyon</a></li>
              <li><a href="#contact">Marseille</a></li>
              <li><a href="#contact">Bordeaux</a></li>
            </ul>
          </div>
        </div>
        <div class="footer-bottom">
          <div class="footer-copyright">© 2024 Prestige Auto. Tous droits réservés.</div>
          <div class="footer-legal">
            <a href="#">Mentions légales</a>
            <a href="#">Confidentialité</a>
            <a href="#">CGV</a>
          </div>
        </div>
      </div>
    </footer>
  `
}

function renderModal(car) {
  return `
    <div class="modal-overlay" id="modal-overlay">
      <div class="modal">
        <button class="modal-close" id="modal-close">✕</button>
        <img class="modal-image" src="${car.image}" alt="${car.brand} ${car.name}" />
        <div class="modal-body">
          <span class="modal-tag">${car.tag}</span>
          <h2 class="modal-title">${car.brand} ${car.name}</h2>
          <p class="modal-brand">${car.year} · ${car.fuel} · ${car.mileage}</p>
          <div class="modal-price">${formatPrice(car.price)}</div>
          <div class="modal-specs">
            <div class="modal-spec-item">
              <div class="modal-spec-value">${car.power}</div>
              <div class="modal-spec-label">Puissance</div>
            </div>
            <div class="modal-spec-item">
              <div class="modal-spec-value">${car.speed}</div>
              <div class="modal-spec-label">Vitesse max</div>
            </div>
            <div class="modal-spec-item">
              <div class="modal-spec-value">${car.acceleration}</div>
              <div class="modal-spec-label">0-100 km/h</div>
            </div>
            <div class="modal-spec-item">
              <div class="modal-spec-value">${car.fuel}</div>
              <div class="modal-spec-label">Carburant</div>
            </div>
          </div>
          <p class="modal-description">${car.description}</p>
          <div class="modal-actions">
            <button class="btn-primary" id="modal-appointment">Prendre rendez-vous</button>
            <button class="btn-secondary" id="modal-close-btn">Fermer</button>
          </div>
        </div>
      </div>
    </div>
  `
}

export function renderApp() {
  const app = document.querySelector('#app')
  app.innerHTML = `
    ${renderNavbar()}
    ${renderHero()}
    ${renderStats()}
    ${renderVehicles()}
    ${renderServices()}
    ${renderAbout()}
    ${renderTestimonials()}
    ${renderCTABanner()}
    ${renderContact()}
    ${renderFooter()}
  `

  initNavbar()
  initFilters()
  initCarCards()
  initContactForm()
  initScrollReveal()
}

function initNavbar() {
  const navbar = document.getElementById('navbar')
  const toggle = document.getElementById('navbar-toggle')
  const links = document.getElementById('navbar-links')

  window.addEventListener('scroll', () => {
    if (window.scrollY > 80) {
      navbar.classList.add('scrolled')
    } else {
      navbar.classList.remove('scrolled')
    }
  })

  toggle.addEventListener('click', () => {
    toggle.classList.toggle('active')
    links.classList.toggle('open')
  })

  links.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      toggle.classList.remove('active')
      links.classList.remove('open')
    })
  })
}

function initFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn')
  const carGrid = document.getElementById('car-grid')

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'))
      btn.classList.add('active')

      const filter = btn.dataset.filter
      const filtered = filter === 'all' ? cars : cars.filter(c => c.category === filter)
      carGrid.innerHTML = filtered.map(renderCarCard).join('')
      initCarCards()
      initScrollReveal()
    })
  })
}

function initCarCards() {
  document.querySelectorAll('[data-car-id]').forEach(el => {
    el.addEventListener('click', (e) => {
      e.stopPropagation()
      const id = parseInt(el.dataset.carId)
      const car = cars.find(c => c.id === id)
      if (car) openModal(car)
    })
  })
}

function openModal(car) {
  const existing = document.getElementById('modal-overlay')
  if (existing) existing.remove()

  const app = document.querySelector('#app')
  const modalDiv = document.createElement('div')
  modalDiv.innerHTML = renderModal(car)
  const modal = modalDiv.firstElementChild
  app.appendChild(modal)
  modal.classList.add('active')
  document.body.style.overflow = 'hidden'

  const closeModal = () => {
    modal.remove()
    document.body.style.overflow = ''
  }

  document.getElementById('modal-close').addEventListener('click', closeModal)
  document.getElementById('modal-close-btn').addEventListener('click', closeModal)
  document.getElementById('modal-appointment').addEventListener('click', () => {
    closeModal()
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })
  })
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal()
  })
}

function initContactForm() {
  const form = document.getElementById('contact-form')
  const success = document.getElementById('form-success')

  form.addEventListener('submit', (e) => {
    e.preventDefault()
    success.classList.add('show')
    form.reset()
    setTimeout(() => success.classList.remove('show'), 5000)
  })
}

function initScrollReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible')
        observer.unobserve(entry.target)
      }
    })
  }, { threshold: 0.15 })

  document.querySelectorAll('.reveal:not(.visible)').forEach(el => {
    observer.observe(el)
  })
}
