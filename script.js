// ===================================
// Travel Companion App - Main JavaScript
// ===================================

// Storage Keys
const STORAGE_KEYS = {
    DESTINATIONS: 'travelCompanion_destinations',
    EXPENSES: 'travelCompanion_expenses',
    BAGS: 'travelCompanion_bags'
};

// Initial Data - Pre-populated with actual itinerary
const INITIAL_DATA = {
    destinations: [
        {
            id: 'dest-1',
            name: 'Great Smoky Mountains & Gatlinburg, TN',
            highlights: 'Mountain exploration, hiking trails, waterfalls, and scenic drives through America\'s most visited national park',
            attractions: ['Clingmans Dome (highest point)', 'Cades Cove Loop', 'Laurel Falls Trail', 'Roaring Fork Motor Nature Trail'],
            nearbyCities: ['Gatlinburg', 'Pigeon Forge', 'Sevierville'],
            pointsOfInterest: ['Gatlinburg SkyBridge', 'Ober Gatlinburg Ski Resort', 'Great Smoky Arts & Crafts Community'],
            hotel: {
                name: 'Bear Creek Inn',
                address: '125 Spruce Lane, Gatlinburg, TN 37738',
                phone: '+18659997575',
                confirmation: '536515372',
                checkIn: 'Oct 23, 3:00 PM',
                checkOut: 'Oct 24, 11:00 AM',
                amenities: ['Free WiFi', 'Free Parking', 'Non-Smoking Rooms', 'Accessible Rooms']
            },
            journal: {
                todos: [
                    { text: 'Drive to Clingmans Dome early morning', completed: false },
                    { text: 'Complete Cades Cove loop drive', completed: false },
                    { text: 'Visit at least 2 waterfalls', completed: false },
                    { text: 'Evening stroll in Gatlinburg downtown', completed: false }
                ],
                notes: 'Oct 23: Full day exploring Great Smoky Mountains. Start early to avoid crowds. Clingmans Dome offers panoramic views. Cades Cove is 11-mile scenic loop with wildlife viewing opportunities.',
                links: [
                    { title: 'Great Smoky Mountains NPS', url: 'https://www.nps.gov/grsm' },
                    { title: 'Gatlinburg Visitor Info', url: 'https://www.gatlinburg.com' }
                ]
            }
        },
        {
            id: 'dest-2',
            name: 'New York City, NY',
            highlights: 'The city that never sleeps - iconic landmarks, world-class museums, diverse neighborhoods, and unforgettable skyline views',
            attractions: ['Statue of Liberty & Ellis Island', 'Central Park', '9/11 Memorial & Museum', 'Brooklyn Bridge', 'The Met Museum', 'Times Square'],
            nearbyCities: ['Secaucus (NJ - hotel base)', 'Jersey City', 'Hoboken'],
            pointsOfInterest: ['Top of the Rock', 'Rockefeller Center', 'High Line Park', 'Chelsea Market', 'Dumbo Brooklyn', 'MoMA'],
            hotel: {
                name: 'Harmony Suites Secaucus Meadowlands',
                address: '455 Plaza Drive, Secaucus, NJ 07094',
                phone: '(201) 381-3000',
                confirmation: '833795665 (First Stay:26th-30th) / 833797205 (Second Stay:30th-31th)',
                checkIn: 'Oct 26, 4:00 PM',
                checkOut: 'Oct 31, 11:00 AM',
                amenities: ['Free WiFi', 'Free Breakfast', 'Free Parking', 'Pet Friendly']
            },
            journal: {
                todos: [
                    { text: 'Oct 27: Statue of Liberty 9AM ferry (Pedestal Access)', completed: false },
                    { text: 'Oct 27: 9/11 Memorial & Museum afternoon', completed: false },
                    { text: 'Oct 28: Central Park morning walk & Met Museum', completed: false },
                    { text: 'Oct 28: Evening Top of the Rock or Rockefeller', completed: false },
                    { text: 'Oct 29: Brooklyn Bridge walk from Brooklyn to Manhattan', completed: false },
                    { text: 'Oct 29: Chinatown & Little Italy food tour', completed: false },
                    { text: 'Oct 30: High Line & Chelsea Market', completed: false },
                    { text: 'Optional: Broadway show (book 2-3 weeks ahead)', completed: false }
                ],
                notes: 'Oct 26-30: 4 full days in NYC. Base in Secaucus, NJ. Oct 27 is Statue of Liberty day (9AM ferry recommended). Oct 28 focuses on Central Park and museums. Oct 29 Brooklyn Bridge and downtown Manhattan. Oct 30 is flex day for High Line or additional museums.',
                links: [
                    { title: 'Statue of Liberty Tickets', url: 'https://www.statueofliberty.org' },
                    { title: '9/11 Memorial Museum', url: 'https://www.911memorial.org' },
                    { title: 'The Met Museum', url: 'https://www.metmuseum.org' },
                    { title: 'NYC Official Guide', url: 'https://www.nycgo.com' }
                ]
            }
        },
        {
            id: 'dest-3',
            name: 'Niagara Falls, NY',
            highlights: 'One of the world\'s most famous waterfalls - witness the power of nature with breathtaking views from multiple vantage points',
            attractions: ['Niagara Falls State Park', 'Cave of the Winds', 'Observation Tower', 'Maid of the Mist (seasonal)'],
            nearbyCities: ['Buffalo', 'Niagara Falls (Ontario)', 'Lewiston'],
            pointsOfInterest: ['Goat Island', 'Three Sisters Islands', 'Whirlpool State Park', 'Niagara Gorge Trail'],
            hotel: {
                name: 'M HOTEL BUFFALO',
                address: '2040 Walden Avenue, Cheektowaga, NY 14225',
                phone: '716-681-2400',
                confirmation: '6446835554',
                checkIn: 'Oct 31, 4:00 PM',
                checkOut: 'Nov 1, 11:00 AM',
                amenities: ['Free WiFi', 'Free Breakfast', 'Free Parking', 'Pet Friendly']
            },
            journal: {
                todos: [
                    { text: 'Evening walk to Falls after check-in (Oct 31)', completed: false },
                    { text: 'Morning visit - Observation Tower', completed: false },
                    { text: 'Cave of the Winds experience', completed: false },
                    { text: 'Maid of the Mist if available', completed: false },
                    { text: 'Explore Goat Island trails', completed: false }
                ],
                notes: 'Oct 31: Drive from NYC to Niagara Falls (6-7 hours). Evening arrival and falls walk. Nov 1: Morning full exploration before driving toward D.C. Book Cave of the Winds tickets online to save time.',
                links: [
                    { title: 'Niagara Falls State Park', url: 'https://www.niagarafallsstatepark.com' },
                    { title: 'Cave of the Winds', url: 'https://www.niagarafallsstatepark.com/attractions-and-tours/cave-of-the-winds' }
                ]
            }
        },
        {
            id: 'dest-4',
            name: 'Washington D.C.',
            highlights: 'The nation\'s capital - monuments, memorials, world-renowned museums, and American history at every corner',
            attractions: ['National Mall', 'Lincoln Memorial', 'Smithsonian Museums', 'U.S. Capitol', 'White House', 'Washington Monument'],
            nearbyCities: ['Arlington (VA - hotel base)', 'Alexandria', 'Georgetown'],
            pointsOfInterest: ['Air & Space Museum', 'Natural History Museum', 'The Wharf', 'Georgetown Historic District', 'Library of Congress', 'Arlington Cemetery'],
            hotel: {
                name: 'Hotel Pentagon',
                address: '2480 South Glebe Road, Arlington, VA 22206',
                phone: '703-979-4400',
                confirmation: '5501019098',
                checkIn: 'Nov 1, 3:00 PM',
                checkOut: 'Nov 4, 11:00 AM',
                amenities: ['Free WiFi', 'Free Breakfast', 'Free Parking', 'Non-Smoking Rooms']
            },
            journal: {
                todos: [
                    { text: 'Nov 2: Evening stroll at The Wharf or Georgetown', completed: false },
                    { text: 'Nov 3: National Mall - Lincoln Memorial morning', completed: false },
                    { text: 'Nov 3: Choose museum - Air & Space or Natural History', completed: false },
                    { text: 'Nov 4: Capitol and White House exterior views', completed: false },
                    { text: 'Nov 4: Optional second museum visit', completed: false },
                    { text: 'Nov 4: Pack for return journey', completed: false }
                ],
                notes: 'Nov 1-4: 3 days in D.C. area. Nov 1 is arrival day (from Niagara via overnight stop). Nov 2-3 are full exploration days. Nov 4 is final day before returning to Richmond. Most Smithsonian museums are free but may require timed entry passes - check online.',
                links: [
                    { title: 'Smithsonian Museums', url: 'https://www.si.edu' },
                    { title: 'National Mall & Memorial Parks', url: 'https://www.nps.gov/nama' },
                    { title: 'U.S. Capitol Tours', url: 'https://www.capitol.gov' },
                    { title: 'Washington D.C. Tourism', url: 'https://washington.org' }
                ]
            }
        }
    ],
    expenses: [],
    bags: {
        'checkin-1': [],
        'checkin-2': [],
        'cabin-1': [],
        'cabin-2': []
    }
};

// ===================================
// State Management
// ===================================
let state = {
    destinations: [],
    expenses: [],
    bags: {}
};

// ===================================
// Utility Functions
// ===================================
function generateId() {
    return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}

function saveToLocalStorage() {
    localStorage.setItem(STORAGE_KEYS.DESTINATIONS, JSON.stringify(state.destinations));
    localStorage.setItem(STORAGE_KEYS.EXPENSES, JSON.stringify(state.expenses));
    localStorage.setItem(STORAGE_KEYS.BAGS, JSON.stringify(state.bags));
}

function loadFromLocalStorage() {
    const destinations = localStorage.getItem(STORAGE_KEYS.DESTINATIONS);
    const expenses = localStorage.getItem(STORAGE_KEYS.EXPENSES);
    const bags = localStorage.getItem(STORAGE_KEYS.BAGS);

    if (destinations) {
        state.destinations = JSON.parse(destinations);
    } else {
        // First time load - use initial data
        state.destinations = INITIAL_DATA.destinations;
    }

    if (expenses) {
        state.expenses = JSON.parse(expenses);
    } else {
        state.expenses = INITIAL_DATA.expenses;
    }

    if (bags) {
        state.bags = JSON.parse(bags);
    } else {
        state.bags = INITIAL_DATA.bags;
    }

    saveToLocalStorage(); // Save initial data to localStorage
}

// ===================================
// Modal Functions
// ===================================
function createModal(title, content, onClose = null) {
    const modalContainer = document.getElementById('modalContainer');

    const modalOverlay = document.createElement('div');
    modalOverlay.className = 'modal-overlay';

    const modal = document.createElement('div');
    modal.className = 'modal';

    const modalHeader = document.createElement('div');
    modalHeader.className = 'modal-header';
    modalHeader.innerHTML = `
        <h2>${title}</h2>
        <button class="modal-close" aria-label="Close modal">&times;</button>
    `;

    const modalBody = document.createElement('div');
    modalBody.className = 'modal-body';
    if (typeof content === 'string') {
        modalBody.innerHTML = content;
    } else {
        modalBody.appendChild(content);
    }

    modal.appendChild(modalHeader);
    modal.appendChild(modalBody);
    modalOverlay.appendChild(modal);
    modalContainer.appendChild(modalOverlay);

    // Close handlers
    const closeModal = () => {
        modalContainer.removeChild(modalOverlay);
        if (onClose) onClose();
    };

    modalHeader.querySelector('.modal-close').addEventListener('click', closeModal);
    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) closeModal();
    });

    return { modal, closeModal };
}

// ===================================
// Destination Functions
// ===================================
function renderDestinations() {
    const section = document.getElementById('destinationsSection');

    if (state.destinations.length === 0) {
        section.innerHTML = `
            <div class="empty-state">
                <div class="empty-state-icon">🗺️</div>
                <h3>No destinations yet</h3>
                <p>Add your first destination to start planning your journey!</p>
            </div>
        `;
        return;
    }

    section.innerHTML = state.destinations.map(dest => `
        <div class="destination-card" data-id="${dest.id}">
            <!-- Left Section: Location Details -->
            <div class="location-section">
                <h2>📍 ${dest.name}</h2>

                <div class="location-highlights">
                    <h3>Highlights</h3>
                    <p>${dest.highlights}</p>
                </div>

                <div class="attractions-list">
                    <h4>🎯 Attractions</h4>
                    <ul>
                        ${dest.attractions.map(attr => `<li>${attr}</li>`).join('')}
                    </ul>
                </div>

                <div class="nearby-cities-list">
                    <h4>📍 Nearby Cities</h4>
                    <ul>
                        ${dest.nearbyCities.map(city => `<li>${city}</li>`).join('')}
                    </ul>
                </div>

                <div class="poi-list">
                    <h4>⭐ Points of Interest</h4>
                    <ul>
                        ${dest.pointsOfInterest.map(poi => `<li>${poi}</li>`).join('')}
                    </ul>
                </div>
            </div>

            <!-- Right Section: Hotel & Journal -->
            <div class="hotel-journal-section">
                <!-- Hotel Details -->
                <div class="hotel-details">
                    <h3>🏨 Hotel Details</h3>
                    <div class="hotel-info-grid">
                        <div class="hotel-info-item">
                            <label>Hotel Name</label>
                            <span>${dest.hotel.name}</span>
                        </div>
                        <div class="hotel-info-item">
                            <label>Address</label>
                            <span>${dest.hotel.address}</span>
                        </div>
                        <div class="hotel-info-item">
                            <label>Phone</label>
                            <span>${dest.hotel.phone}</span>
                        </div>
                        <div class="hotel-info-item">
                            <label>Confirmation Number</label>
                            <span>${dest.hotel.confirmation}</span>
                        </div>
                        <div class="hotel-info-item">
                            <label>Check-in</label>
                            <span>${dest.hotel.checkIn}</span>
                        </div>
                        <div class="hotel-info-item">
                            <label>Check-out</label>
                            <span>${dest.hotel.checkOut}</span>
                        </div>
                        <div class="hotel-info-item">
                            <label>Amenities</label>
                            <div class="amenities-tags">
                                ${dest.hotel.amenities.map(amenity => `<span class="amenity-tag">${amenity}</span>`).join('')}
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Journal Section -->
                <div class="journal-section">
                    <h3>📔 Journal</h3>

                    <!-- To-Do List -->
                    <div class="todo-list">
                        <h4>✓ To-Do List</h4>
                        <ul class="todo-items">
                            ${dest.journal.todos.map((todo, idx) => `
                                <li class="todo-item ${todo.completed ? 'completed' : ''}" data-todo-idx="${idx}">
                                    <input type="checkbox" ${todo.completed ? 'checked' : ''}
                                           onchange="toggleTodo('${dest.id}', ${idx})">
                                    <span>${todo.text}</span>
                                    <button class="delete-todo-btn" onclick="deleteTodo('${dest.id}', ${idx})" title="Delete to-do">×</button>
                                </li>
                            `).join('')}
                        </ul>
                        <button class="btn btn-small" onclick="addTodoItem('${dest.id}')">+ Add To-Do</button>
                    </div>

                    <!-- Notes -->
                    <div class="notes-section">
                        <h4>📝 Notes</h4>
                        <div class="notes-content">${dest.journal.notes || 'No notes yet...'}</div>
                        <button class="btn btn-small" onclick="editNotes('${dest.id}')">Edit Notes</button>
                    </div>

                    <!-- Useful Links -->
                    <div class="links-section">
                        <h4>🔗 Useful Links</h4>
                        <ul class="links-list">
                            ${dest.journal.links.map((link, idx) => `
                                <li class="link-item">
                                    <a href="${link.url}" target="_blank" rel="noopener">${link.title}</a>
                                    <button class="delete-link-btn" onclick="deleteLink('${dest.id}', ${idx})" title="Delete link">×</button>
                                </li>
                            `).join('')}
                        </ul>
                        <button class="btn btn-small" onclick="addLink('${dest.id}')">+ Add Link</button>
                    </div>
                </div>

                <!-- Card Actions -->
                <div class="card-actions">
                    <button class="btn btn-edit" onclick="editDestination('${dest.id}')">Edit Destination</button>
                    <button class="btn btn-danger" onclick="deleteDestination('${dest.id}')">Delete</button>
                </div>
            </div>
        </div>
    `).join('');
}

function toggleTodo(destId, todoIdx) {
    const dest = state.destinations.find(d => d.id === destId);
    if (dest) {
        dest.journal.todos[todoIdx].completed = !dest.journal.todos[todoIdx].completed;
        saveToLocalStorage();
        renderDestinations();
    }
}

function deleteTodo(destId, todoIdx) {
    const dest = state.destinations.find(d => d.id === destId);
    if (dest && confirm('Delete this to-do item?')) {
        dest.journal.todos.splice(todoIdx, 1);
        saveToLocalStorage();
        renderDestinations();
    }
}

function addTodoItem(destId) {
    const dest = state.destinations.find(d => d.id === destId);
    if (!dest) return;

    const form = document.createElement('form');
    form.className = 'modal-form';
    form.innerHTML = `
        <div class="form-group">
            <label for="todoText">To-Do Item</label>
            <input type="text" id="todoText" required>
        </div>
        <div class="form-actions">
            <button type="submit" class="btn btn-primary">Add</button>
            <button type="button" class="btn btn-secondary" onclick="this.closest('.modal-overlay').remove()">Cancel</button>
        </div>
    `;

    const { closeModal } = createModal('Add To-Do Item', form);

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const text = document.getElementById('todoText').value;
        dest.journal.todos.push({ text, completed: false });
        saveToLocalStorage();
        renderDestinations();
        closeModal();
    });
}

function editNotes(destId) {
    const dest = state.destinations.find(d => d.id === destId);
    if (!dest) return;

    const form = document.createElement('form');
    form.className = 'modal-form';
    form.innerHTML = `
        <div class="form-group">
            <label for="notes">Notes</label>
            <textarea id="notes" rows="8">${dest.journal.notes}</textarea>
        </div>
        <div class="form-actions">
            <button type="submit" class="btn btn-primary">Save</button>
            <button type="button" class="btn btn-secondary" onclick="this.closest('.modal-overlay').remove()">Cancel</button>
        </div>
    `;

    const { closeModal } = createModal('Edit Notes', form);

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        dest.journal.notes = document.getElementById('notes').value;
        saveToLocalStorage();
        renderDestinations();
        closeModal();
    });
}

function addLink(destId) {
    const dest = state.destinations.find(d => d.id === destId);
    if (!dest) return;

    const form = document.createElement('form');
    form.className = 'modal-form';
    form.innerHTML = `
        <div class="form-group">
            <label for="linkTitle">Link Title</label>
            <input type="text" id="linkTitle" required>
        </div>
        <div class="form-group">
            <label for="linkUrl">URL</label>
            <input type="url" id="linkUrl" required>
        </div>
        <div class="form-actions">
            <button type="submit" class="btn btn-primary">Add</button>
            <button type="button" class="btn btn-secondary" onclick="this.closest('.modal-overlay').remove()">Cancel</button>
        </div>
    `;

    const { closeModal } = createModal('Add Useful Link', form);

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const title = document.getElementById('linkTitle').value;
        const url = document.getElementById('linkUrl').value;
        dest.journal.links.push({ title, url });
        saveToLocalStorage();
        renderDestinations();
        closeModal();
    });
}

function deleteLink(destId, linkIdx) {
    const dest = state.destinations.find(d => d.id === destId);
    if (dest && confirm('Delete this link?')) {
        dest.journal.links.splice(linkIdx, 1);
        saveToLocalStorage();
        renderDestinations();
    }
}

function showAddDestinationModal() {
    const form = document.createElement('form');
    form.className = 'modal-form';
    form.innerHTML = `
        <div class="form-group">
            <label for="destName">Destination Name</label>
            <input type="text" id="destName" required>
        </div>
        <div class="form-group">
            <label for="destHighlights">Highlights</label>
            <textarea id="destHighlights" rows="3" required></textarea>
        </div>
        <div class="form-group">
            <label for="destAttractions">Attractions (comma-separated)</label>
            <textarea id="destAttractions" rows="2"></textarea>
        </div>
        <div class="form-group">
            <label for="destCities">Nearby Cities (comma-separated)</label>
            <input type="text" id="destCities">
        </div>
        <div class="form-group">
            <label for="destPOI">Points of Interest (comma-separated)</label>
            <textarea id="destPOI" rows="2"></textarea>
        </div>
        <div class="form-group">
            <label for="hotelName">Hotel Name</label>
            <input type="text" id="hotelName" required>
        </div>
        <div class="form-group">
            <label for="hotelAddress">Hotel Address</label>
            <input type="text" id="hotelAddress" required>
        </div>
        <div class="form-group">
            <label for="hotelPhone">Hotel Phone</label>
            <input type="tel" id="hotelPhone" required>
        </div>
        <div class="form-group">
            <label for="hotelConfirmation">Confirmation Number</label>
            <input type="text" id="hotelConfirmation" required>
        </div>
        <div class="form-group">
            <label for="hotelCheckIn">Check-in Date/Time</label>
            <input type="text" id="hotelCheckIn" required>
        </div>
        <div class="form-group">
            <label for="hotelCheckOut">Check-out Date/Time</label>
            <input type="text" id="hotelCheckOut" required>
        </div>
        <div class="form-group">
            <label for="hotelAmenities">Amenities (comma-separated)</label>
            <input type="text" id="hotelAmenities" placeholder="Free WiFi, Free Parking">
        </div>
        <div class="form-actions">
            <button type="submit" class="btn btn-primary">Add Destination</button>
            <button type="button" class="btn btn-secondary" onclick="this.closest('.modal-overlay').remove()">Cancel</button>
        </div>
    `;

    const { closeModal } = createModal('Add New Destination', form);

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const newDestination = {
            id: generateId(),
            name: document.getElementById('destName').value,
            highlights: document.getElementById('destHighlights').value,
            attractions: document.getElementById('destAttractions').value.split(',').map(s => s.trim()).filter(s => s),
            nearbyCities: document.getElementById('destCities').value.split(',').map(s => s.trim()).filter(s => s),
            pointsOfInterest: document.getElementById('destPOI').value.split(',').map(s => s.trim()).filter(s => s),
            hotel: {
                name: document.getElementById('hotelName').value,
                address: document.getElementById('hotelAddress').value,
                phone: document.getElementById('hotelPhone').value,
                confirmation: document.getElementById('hotelConfirmation').value,
                checkIn: document.getElementById('hotelCheckIn').value,
                checkOut: document.getElementById('hotelCheckOut').value,
                amenities: document.getElementById('hotelAmenities').value.split(',').map(s => s.trim()).filter(s => s)
            },
            journal: {
                todos: [],
                notes: '',
                links: []
            }
        };

        state.destinations.push(newDestination);
        saveToLocalStorage();
        renderDestinations();
        closeModal();
    });
}

function editDestination(destId) {
    const dest = state.destinations.find(d => d.id === destId);
    if (!dest) return;

    const form = document.createElement('form');
    form.className = 'modal-form';
    form.innerHTML = `
        <div class="form-group">
            <label for="destName">Destination Name</label>
            <input type="text" id="destName" value="${dest.name}" required>
        </div>
        <div class="form-group">
            <label for="destHighlights">Highlights</label>
            <textarea id="destHighlights" rows="3" required>${dest.highlights}</textarea>
        </div>
        <div class="form-group">
            <label for="destAttractions">Attractions (comma-separated)</label>
            <textarea id="destAttractions" rows="2">${dest.attractions.join(', ')}</textarea>
        </div>
        <div class="form-group">
            <label for="destCities">Nearby Cities (comma-separated)</label>
            <input type="text" id="destCities" value="${dest.nearbyCities.join(', ')}">
        </div>
        <div class="form-group">
            <label for="destPOI">Points of Interest (comma-separated)</label>
            <textarea id="destPOI" rows="2">${dest.pointsOfInterest.join(', ')}</textarea>
        </div>
        <div class="form-group">
            <label for="hotelName">Hotel Name</label>
            <input type="text" id="hotelName" value="${dest.hotel.name}" required>
        </div>
        <div class="form-group">
            <label for="hotelAddress">Hotel Address</label>
            <input type="text" id="hotelAddress" value="${dest.hotel.address}" required>
        </div>
        <div class="form-group">
            <label for="hotelPhone">Hotel Phone</label>
            <input type="tel" id="hotelPhone" value="${dest.hotel.phone}" required>
        </div>
        <div class="form-group">
            <label for="hotelConfirmation">Confirmation Number</label>
            <input type="text" id="hotelConfirmation" value="${dest.hotel.confirmation}" required>
        </div>
        <div class="form-group">
            <label for="hotelCheckIn">Check-in Date/Time</label>
            <input type="text" id="hotelCheckIn" value="${dest.hotel.checkIn}" required>
        </div>
        <div class="form-group">
            <label for="hotelCheckOut">Check-out Date/Time</label>
            <input type="text" id="hotelCheckOut" value="${dest.hotel.checkOut}" required>
        </div>
        <div class="form-group">
            <label for="hotelAmenities">Amenities (comma-separated)</label>
            <input type="text" id="hotelAmenities" value="${dest.hotel.amenities.join(', ')}">
        </div>
        <div class="form-actions">
            <button type="submit" class="btn btn-primary">Save Changes</button>
            <button type="button" class="btn btn-secondary" onclick="this.closest('.modal-overlay').remove()">Cancel</button>
        </div>
    `;

    const { closeModal } = createModal('Edit Destination', form);

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        dest.name = document.getElementById('destName').value;
        dest.highlights = document.getElementById('destHighlights').value;
        dest.attractions = document.getElementById('destAttractions').value.split(',').map(s => s.trim()).filter(s => s);
        dest.nearbyCities = document.getElementById('destCities').value.split(',').map(s => s.trim()).filter(s => s);
        dest.pointsOfInterest = document.getElementById('destPOI').value.split(',').map(s => s.trim()).filter(s => s);
        dest.hotel.name = document.getElementById('hotelName').value;
        dest.hotel.address = document.getElementById('hotelAddress').value;
        dest.hotel.phone = document.getElementById('hotelPhone').value;
        dest.hotel.confirmation = document.getElementById('hotelConfirmation').value;
        dest.hotel.checkIn = document.getElementById('hotelCheckIn').value;
        dest.hotel.checkOut = document.getElementById('hotelCheckOut').value;
        dest.hotel.amenities = document.getElementById('hotelAmenities').value.split(',').map(s => s.trim()).filter(s => s);

        saveToLocalStorage();
        renderDestinations();
        closeModal();
    });
}

function deleteDestination(destId) {
    if (confirm('Are you sure you want to delete this destination? This action cannot be undone.')) {
        state.destinations = state.destinations.filter(d => d.id !== destId);
        saveToLocalStorage();
        renderDestinations();
    }
}

// ===================================
// Expense Functions
// ===================================
function renderExpenses() {
    const expenseList = document.getElementById('expenseList');
    const totalExpense = document.getElementById('totalExpense');

    if (state.expenses.length === 0) {
        expenseList.innerHTML = `
            <div class="empty-state">
                <div class="empty-state-icon">💰</div>
                <p>No expenses recorded yet</p>
            </div>
        `;
        totalExpense.textContent = '$0.00';
        return;
    }

    const total = state.expenses.reduce((sum, exp) => sum + parseFloat(exp.amount), 0);
    totalExpense.textContent = `$${total.toFixed(2)}`;

    expenseList.innerHTML = state.expenses.map(exp => `
        <div class="expense-item" data-id="${exp.id}">
            <div class="expense-date">${exp.date}</div>
            <div class="expense-description">${exp.description}</div>
            <div class="expense-category">${exp.category}</div>
            <div class="expense-amount">$${parseFloat(exp.amount).toFixed(2)}</div>
            <button class="btn btn-danger btn-small" onclick="deleteExpense('${exp.id}')">Delete</button>
        </div>
    `).join('');
}

function showAddExpenseModal() {
    const form = document.createElement('form');
    form.className = 'modal-form';
    form.innerHTML = `
        <div class="form-group">
            <label for="expenseDate">Date</label>
            <input type="date" id="expenseDate" required>
        </div>
        <div class="form-group">
            <label for="expenseCategory">Category</label>
            <select id="expenseCategory" required>
                <option value="">Select category...</option>
                <option value="Accommodation">Accommodation</option>
                <option value="Food">Food & Dining</option>
                <option value="Transportation">Transportation</option>
                <option value="Attractions">Attractions & Activities</option>
                <option value="Shopping">Shopping</option>
                <option value="Other">Other</option>
            </select>
        </div>
        <div class="form-group">
            <label for="expenseDescription">Description</label>
            <input type="text" id="expenseDescription" required>
        </div>
        <div class="form-group">
            <label for="expenseAmount">Amount ($)</label>
            <input type="number" id="expenseAmount" step="0.01" min="0" required>
        </div>
        <div class="form-actions">
            <button type="submit" class="btn btn-primary">Add Expense</button>
            <button type="button" class="btn btn-secondary" onclick="this.closest('.modal-overlay').remove()">Cancel</button>
        </div>
    `;

    const { closeModal } = createModal('Add Expense', form);

    // Set today's date as default
    document.getElementById('expenseDate').valueAsDate = new Date();

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const newExpense = {
            id: generateId(),
            date: document.getElementById('expenseDate').value,
            category: document.getElementById('expenseCategory').value,
            description: document.getElementById('expenseDescription').value,
            amount: document.getElementById('expenseAmount').value
        };

        state.expenses.push(newExpense);
        saveToLocalStorage();
        renderExpenses();
        closeModal();
    });
}

function deleteExpense(expenseId) {
    if (confirm('Delete this expense?')) {
        state.expenses = state.expenses.filter(e => e.id !== expenseId);
        saveToLocalStorage();
        renderExpenses();
    }
}

// ===================================
// Bag/Luggage Functions
// ===================================
function renderBags() {
    const bags = ['checkin-1', 'checkin-2', 'cabin-1', 'cabin-2'];

    bags.forEach(bagId => {
        const itemList = document.getElementById(`${bagId}-items`);
        const items = state.bags[bagId] || [];

        if (items.length === 0) {
            itemList.innerHTML = '<li style="color: var(--text-light); text-align: center;">Empty bag</li>';
            return;
        }

        itemList.innerHTML = items.map((item, idx) => `
            <li>
                <span>${item}</span>
                <button class="delete-item-btn" onclick="removeItemFromBag('${bagId}', ${idx})">×</button>
            </li>
        `).join('');
    });
}

function addItemToBag(bagId) {
    const itemName = prompt('Enter item name:');
    if (itemName && itemName.trim()) {
        if (!state.bags[bagId]) {
            state.bags[bagId] = [];
        }
        state.bags[bagId].push(itemName.trim());
        saveToLocalStorage();
        renderBags();
    }
}

function removeItemFromBag(bagId, itemIdx) {
    state.bags[bagId].splice(itemIdx, 1);
    saveToLocalStorage();
    renderBags();
}

// ===================================
// Export/Import Functions
// ===================================
function exportData() {
    const dataToExport = {
        destinations: state.destinations,
        expenses: state.expenses,
        bags: state.bags,
        exportDate: new Date().toISOString()
    };

    const dataStr = JSON.stringify(dataToExport, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });

    const link = document.createElement('a');
    link.href = URL.createObjectURL(dataBlob);
    link.download = `travel-companion-backup-${new Date().toISOString().split('T')[0]}.json`;
    link.click();

    URL.revokeObjectURL(link.href);
}

function importData() {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'application/json';

    input.onchange = (e) => {
        const file = e.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = (event) => {
            try {
                const importedData = JSON.parse(event.target.result);

                // Validate the data structure
                if (!importedData.destinations || !importedData.expenses || !importedData.bags) {
                    alert('Invalid data file. Please select a valid Travel Companion backup file.');
                    return;
                }

                // Confirm before overwriting
                if (confirm('This will replace all your current data. Are you sure you want to continue?')) {
                    state.destinations = importedData.destinations;
                    state.expenses = importedData.expenses;
                    state.bags = importedData.bags;

                    saveToLocalStorage();

                    // Re-render all sections
                    renderDestinations();
                    renderExpenses();
                    renderBags();

                    alert('Data imported successfully!');
                }
            } catch (error) {
                alert('Error reading file. Please make sure it\'s a valid JSON file.');
                console.error('Import error:', error);
            }
        };

        reader.readAsText(file);
    };

    input.click();
}

// ===================================
// Event Listeners
// ===================================
document.addEventListener('DOMContentLoaded', () => {
    // Load data
    loadFromLocalStorage();

    // Render all sections
    renderDestinations();
    renderExpenses();
    renderBags();

    // Add Destination button
    document.getElementById('addDestinationBtn').addEventListener('click', showAddDestinationModal);

    // Add Expense button
    document.getElementById('addExpenseBtn').addEventListener('click', showAddExpenseModal);

    // Add Item to Bag buttons
    document.querySelectorAll('.add-item-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const bagId = e.target.getAttribute('data-bag');
            addItemToBag(bagId);
        });
    });

    // Export/Import buttons
    document.getElementById('exportDataBtn').addEventListener('click', exportData);
    document.getElementById('importDataBtn').addEventListener('click', importData);
});

// Make functions globally accessible
window.toggleTodo = toggleTodo;
window.deleteTodo = deleteTodo;
window.addTodoItem = addTodoItem;
window.editNotes = editNotes;
window.addLink = addLink;
window.deleteLink = deleteLink;
window.editDestination = editDestination;
window.deleteDestination = deleteDestination;
window.deleteExpense = deleteExpense;
window.removeItemFromBag = removeItemFromBag;
