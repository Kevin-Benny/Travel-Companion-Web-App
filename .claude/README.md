# Travel Companion Web App - Claude Code Documentation

## Project Overview

This is a static website project built for organizing USA travel itineraries. The application is designed to be deployed on GitHub Pages and requires no backend server.

## Architecture

### Core Files
- `index.html` - Main HTML structure with semantic markup
- `styles.css` - Responsive CSS with travel-themed design
- `script.js` - Vanilla JavaScript for interactivity and local storage management

### Key Components

#### 1. Destination Cards
- Split-view layout (CSS Grid)
- Left: Location information (name, highlights, attractions, nearby cities)
- Right: Hotel details + Journal section
- Fully editable with modal forms

#### 2. Hotel Details Section
Required fields:
- Hotel name
- Address
- Phone number
- Confirmation number
- Check-in time
- Check-out time
- Amenities list

#### 3. Journal Section
Per destination:
- To-Do list (dynamic add/remove)
- Personal notes (textarea)
- Useful links (add/remove with validation)

#### 4. Footer Components

**Expense Tracker:**
- Add/edit/delete expenses
- Category-based tracking
- Real-time total calculation
- Date and description fields

**Item Map (Luggage Organizer):**
- 4 bags total:
  - 2 Check-in bags
  - 2 Cabin bags
- Each bag maintains its own item list
- Add/remove items per bag

## Technical Requirements

### Browser APIs Used
- **LocalStorage API** - All data persistence
- **DOM Manipulation** - Dynamic content rendering
- **Event Delegation** - Efficient event handling

### CSS Features
- CSS Grid for card layouts
- Flexbox for component alignment
- Media queries for responsive breakpoints
- CSS custom properties for theming

### JavaScript Patterns
- Module pattern for organization
- Event delegation for dynamic elements
- LocalStorage serialization/deserialization
- Modal-based forms for data entry

## Data Structure

```javascript
// Example LocalStorage schema
{
  destinations: [
    {
      id: "unique-id",
      name: "City Name",
      highlights: "Description",
      attractions: ["Attraction 1", "Attraction 2"],
      nearbyCities: ["City 1", "City 2"],
      pointsOfInterest: ["POI 1", "POI 2"],
      hotel: {
        name: "",
        address: "",
        phone: "",
        confirmation: "",
        checkIn: "",
        checkOut: "",
        amenities: []
      },
      journal: {
        todos: [{text: "", completed: false}],
        notes: "",
        links: [{title: "", url: ""}]
      }
    }
  ],
  expenses: [
    {
      id: "unique-id",
      date: "",
      category: "",
      description: "",
      amount: 0
    }
  ],
  bags: {
    "checkin-1": ["item1", "item2"],
    "checkin-2": ["item1", "item2"],
    "cabin-1": ["item1", "item2"],
    "cabin-2": ["item1", "item2"]
  }
}
```

## Deployment Instructions

### GitHub Pages Setup

1. **Initialize repository:**
```bash
git init
git add .
git commit -m "Initial commit"
```

2. **Create GitHub repo and push:**
```bash
git remote add origin https://github.com/USERNAME/Travel-Companion-Web-App.git
git branch -M main
git push -u origin main
```

3. **Enable GitHub Pages:**
   - Repository Settings → Pages
   - Source: main branch
   - Save

4. **Access URL:**
   - `https://USERNAME.github.io/Travel-Companion-Web-App/`

## Development Guidelines

### When Making Changes

1. **HTML Changes:**
   - Maintain semantic structure
   - Keep accessibility in mind (ARIA labels)
   - Preserve existing IDs used by JavaScript

2. **CSS Changes:**
   - Use mobile-first approach
   - Test across breakpoints
   - Maintain consistent spacing (use CSS variables)

3. **JavaScript Changes:**
   - Always update LocalStorage after modifications
   - Handle edge cases (empty states, validation)
   - Use unique IDs for new items (timestamp-based)

### Testing Checklist

- [ ] Test on mobile viewport (375px)
- [ ] Test on tablet viewport (768px)
- [ ] Test on desktop viewport (1200px+)
- [ ] Verify LocalStorage persistence (refresh page)
- [ ] Test all CRUD operations
- [ ] Validate form inputs
- [ ] Check console for errors
- [ ] Test in different browsers

## Common Tasks

### Adding a New Field to Destinations
1. Update HTML template in `script.js`
2. Update data structure in save/load functions
3. Add form field in modal
4. Update CSS if needed

### Modifying Expense Categories
1. Update category dropdown in modal generation
2. No data structure change needed

### Changing Color Scheme
- Modify CSS custom properties in `:root`
- Update gradient values
- Test contrast ratios for accessibility

## Future Enhancement Ideas

- Export to PDF/JSON
- Import data from file
- Map integration
- Image uploads for destinations
- Offline PWA functionality
- Print-optimized stylesheet

## Notes for Claude

- All user data is client-side only (LocalStorage)
- No backend/server required
- Static deployment compatible
- Pure vanilla JavaScript (no frameworks)
- Mobile-first responsive design
- GitHub Pages is the target deployment platform
