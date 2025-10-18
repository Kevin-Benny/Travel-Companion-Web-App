# Travel Companion Web App

A static, deployable website designed to assist travelers during their journeys across the USA. This application organizes your itinerary efficiently, displaying travel flow, hotel details, and a personal journal section for each destination.

## Trip Overview

**Journey Dates:** October 19 - November 6, 2025
**Trip Duration:** 19 days
**Destinations:** Richmond (VA), Great Smoky Mountains (TN), New York City (NY), Niagara Falls (NY), Washington D.C. (VA)

### Key Destinations

1. **Richmond, VA** - Home base and starting point
2. **Shenandoah National Park** - Skyline Drive scenic route
3. **Great Smoky Mountains, TN** - Clingmans Dome, Cades Cove, waterfalls
4. **Gatlinburg, TN** - Mountain town experience
5. **New York City, NY** - Statue of Liberty, Central Park, Brooklyn Bridge, museums
6. **Niagara Falls, NY** - Falls observation, Cave of the Winds, Maid of the Mist
7. **Washington D.C.** - National Mall, Smithsonian museums, Capitol, memorials

### Hotel Bookings

#### 1. Harmony Suites Secaucus Meadowlands (NYC Area - First Stay)
- **Check-in:** Sunday, October 26 after 4:00 PM
- **Check-out:** Thursday, October 30 by 11:00 AM
- **Address:** 455 Plaza Drive, Secaucus, NJ 07094
- **Confirmation #:** 833795665
- **Phone:** (201) 381-3000
- **Amenities:** Free WiFi, Free Breakfast, Free Parking, Pet Friendly

#### 2. Harmony Suites Secaucus Meadowlands (NYC Area - Second Stay)
- **Check-in:** Thursday, October 30 after 4:00 PM
- **Check-out:** Friday, October 31 by 11:00 AM
- **Address:** 455 Plaza Drive, Secaucus, NJ 07094
- **Confirmation #:** 833797205
- **Phone:** (201) 381-3000
- **Amenities:** Free WiFi, Free Breakfast, Free Parking, Pet Friendly

#### 3. M HOTEL BUFFALO (Niagara Falls Area)
- **Check-in:** Friday, October 31 after 4:00 PM
- **Check-out:** Saturday, November 1 by 11:00 AM
- **Address:** 2040 Walden Avenue, Cheektowaga, NY 14225
- **Confirmation #:** 6446835554
- **Phone:** 716-681-2400
- **Amenities:** Free WiFi, Free Breakfast, Free Parking, Pet Friendly

#### 4. Hotel Pentagon (Washington D.C. Area)
- **Check-in:** Saturday, November 1 after 3:00 PM
- **Check-out:** Tuesday, November 4 by 11:00 AM
- **Address:** 2480 South Glebe Road, Arlington, VA 22206
- **Confirmation #:** 5501019098
- **Phone:** 703-979-4400
- **Amenities:** Free WiFi, Free Breakfast, Free Parking, Non-Smoking Rooms

#### 5. Bear Creek Inn (Gatlinburg, TN)
- **Check-in:** Thursday, October 23 after 3:00 PM
- **Check-out:** Friday, October 24 by 11:00 AM
- **Address:** 125 Spruce Lane, Gatlinburg, TN 37738
- **Confirmation #:** 536515372
- **Phone:** +18659997575
- **Amenities:** Free WiFi, Free Parking, Non-Smoking Rooms, Accessible Rooms

### Day-by-Day Itinerary

- **Oct 19 (Sun)** - Arrive IAD 15:20, drive to Richmond
- **Oct 20-21 (Mon-Tue)** - Richmond rest days, VCU visit, shopping
- **Oct 22 (Wed)** - Drive to Shenandoah NP → Gatlinburg
- **Oct 23 (Thu)** - Great Smoky Mountains exploration
- **Oct 24 (Fri)** - Drive back to Richmond
- **Oct 25 (Sat)** - Recovery day in Richmond
- **Oct 26 (Sun)** - Drive to Secaucus (NYC base)
- **Oct 27-30 (Mon-Thu)** - NYC exploration (4 days)
- **Oct 31 (Fri)** - Drive to Niagara Falls
- **Nov 1 (Sat)** - Niagara Falls → Drive to D.C.
- **Nov 2-4 (Sun-Tue)** - Washington D.C. (3 days)
- **Nov 5 (Wed)** - Return to Richmond
- **Nov 6 (Thu)** - Depart from IAD 20:05

## Features

### Destination Cards
Each destination card is divided into two halves:

**Left Section - Location Details:**
- Destination name and location highlights
- List of popular attractions
- Nearby cities
- Key points of interest

**Right Section - Hotel & Journal Details:**
- **Hotel Information:**
  - Hotel name
  - Address
  - Phone number
  - Confirmation number
  - Check-in/Check-out times
  - Amenities list

- **Journal Area:**
  - To-Do list for each destination
  - Personal notes section
  - Useful links collection

### Footer Sections

**Expense Tracker:**
- Track all travel expenses
- Categorize spending
- View total expenses at a glance

**Item Map:**
- Visual organization of luggage contents
- 2 Check-in bags
- 2 Cabin bags
- Add/remove items from each bag

## Technology Stack

- **HTML5** - Semantic structure
- **CSS3** - Responsive design with travel-themed aesthetics
- **JavaScript (Vanilla)** - Interactive functionality
- **LocalStorage API** - Data persistence across sessions

## Installation & Usage

### Quick Start

1. Clone this repository:
```bash
git clone https://github.com/Kevin-Benny/Travel-Companion-Web-App.git
cd Travel-Companion-Web-App
```

2. Open `index.html` in your web browser:
```bash
# Using Python
python3 -m http.server 8000

# Or simply open the file
open index.html  # macOS
xdg-open index.html  # Linux
start index.html  # Windows
```

3. Access the app at `http://localhost:8000` (if using a local server)

### Live Demo

**Repository:** https://github.com/Kevin-Benny/Travel-Companion-Web-App

To enable GitHub Pages for live deployment:
1. Go to repository Settings → Pages
2. Select `main` branch as source
3. Save and access at: `https://kevin-benny.github.io/Travel-Companion-Web-App/`

## Project Structure

```
Travel-Companion-Web-App/
├── .claude/
│   └── README.md       # Technical documentation
├── .gitignore          # Git ignore rules
├── index.html          # Main HTML structure
├── styles.css          # Responsive CSS styling
├── script.js           # JavaScript functionality with pre-populated data
└── README.md           # Project documentation
```

## Features in Detail

### Data Persistence
All data is stored locally in your browser using LocalStorage:
- Destination cards with all details
- Hotel information
- Journal entries, to-do lists, and links
- Expense records
- Luggage item mappings

### Responsive Design
- Mobile-first approach
- Tablet and desktop optimized
- Print-friendly layout
- Cross-browser compatible

### Interactive Elements
- Add/Edit/Delete destinations
- Dynamic hotel and journal management
- Expense tracking with calculations
- Item organization across 4 bags
- Modal-based forms for data entry

## Browser Compatibility

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Data Privacy

All data is stored locally in your browser. No data is sent to any server. Your travel information remains completely private.

## Future Enhancements

Potential features for future versions:
- Export to PDF functionality
- Map integration for destinations
- Photo gallery for each destination
- Packing list templates
- Weather information integration
- Currency converter

## Contributing

This is a personal project, but suggestions and improvements are welcome. Feel free to fork and customize for your own needs.

## License

This project is open source and available under the MIT License.

## Getting Started

The app comes pre-populated with your complete USA trip itinerary including:
- 4 major destinations (Great Smoky Mountains, NYC, Niagara Falls, Washington D.C.)
- All hotel booking details with confirmation numbers
- Suggested to-do lists for each location
- Detailed daily itinerary notes
- Useful resource links

Simply open the app and start using it - all data persists locally in your browser!

## Deployment Status

✅ Repository created and pushed to GitHub
✅ All files committed with complete travel data
⏳ GitHub Pages (optional) - Enable in repository Settings → Pages

## Author

Created for personal USA travel organization and planning (October 19 - November 6, 2025).

## Support

For issues or questions, please open an issue on the [GitHub repository](https://github.com/Kevin-Benny/Travel-Companion-Web-App/issues).

---

**Happy Travels!** 🗺️ ✈️ 🧳
