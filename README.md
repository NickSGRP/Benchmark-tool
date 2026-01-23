# Dream Firm Benchmark Analysis Tool

A professional benchmarking tool for accounting firms to assess their performance across 20 key metrics in four domains: People, Process, Data, and Technology.

## Quick Start - GitHub Pages Deployment

### Step 1: Create a New Repository
1. Go to https://github.com/new
2. Name your repository (e.g., `benchmark-tool`)
3. Set it to **Public**
4. Click "Create repository"

### Step 2: Upload Files
1. Click "uploading an existing file" link on the quick setup page
2. Drag and drop these two files:
   - `index.html`
   - `BenchmarkTool.jsx`

3. Click "Commit changes"

### Step 3: Enable GitHub Pages
1. Go to your repository Settings
2. Click "Pages" in the left sidebar
3. Under "Source", select "Deploy from a branch"
4. Under "Branch", select `main` and `/ (root)`
5. Click "Save"

### Step 4: Access Your Site
After 1-2 minutes, your site will be live at:
```
https://YOUR-USERNAME.github.io/benchmark-tool/
```

Replace `YOUR-USERNAME` with your actual GitHub username.

## Features
- ✅ 20 industry benchmarks across 4 domains
- ✅ Interactive data entry with progress tracking
- ✅ Visual analytics and comparison dashboards
- ✅ CSV export functionality
- ✅ Local browser storage (no backend required)
- ✅ Fully responsive design
- ✅ No user accounts needed

## Data Storage
- Data is saved in the user's browser using localStorage
- Each user's data is private to their browser
- Data persists between sessions
- Clearing browser data will reset the tool

## Browser Compatibility
- Chrome/Edge (recommended)
- Firefox
- Safari
- Any modern browser with JavaScript enabled

## Customization
To customize benchmarks or branding, edit the `BenchmarkTool.jsx` file:
- Line 15-34: Metric definitions
- Line 36-40: Domain groupings
- Line 42-47: Domain descriptions
- Line 130-138: Logo and branding

## Support
For issues or questions, open an issue in this repository.

## License
© Strategic Group 2026
