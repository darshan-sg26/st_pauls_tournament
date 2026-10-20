# Under 19 ST PAULS CUP - Short Pitch Cricket Tournament Website

A lightweight, modern, responsive static website for the **Under 19 ST PAULS CUP – Short Pitch Cricket Tournament**, organized by the **Sports Club of ST PAULS COLLEGE**.

---

## 📁 File Structure

```text
STP poster/
├── index.html     # Main HTML document with all sections, content & placeholders
├── style.css      # Custom CSS styling (Modern light, colorful & minimal sporty theme)
├── script.js      # Vanilla JavaScript for mobile menu, smooth scrolling & active links
└── README.md      # Instructions for maintaining and editing the website
```

---

## 🚀 How to Run the Website Locally

Since this is a 100% static website, there is **no need for any database, backend, or build step**:

### Option 1: Direct File Open (Easiest)
- Simply double-click `index.html` or right-click `index.html` and choose **Open with > Chrome / Edge / Firefox**.

### Option 2: Using a Local Development Server (Recommended)
If you have Node.js or Python installed:
- **Using Python:**
  ```bash
  python -m http.server 8000
  ```
  Then open `http://localhost:8000` in your browser.

- **Using Node.js (npx):**
  ```bash
  npx serve .
  ```

---

## 🖼️ How to Replace Placeholders

### 1. Adding Your College Logo
In `index.html`, locate the comment:
`<!-- COLLEGE LOGO PLACEHOLDER -->` (around lines 40–55)

Replace:
```html
<div class="logo-placeholder">
  ...
</div>
```

With your actual image file:
```html
<img src="college-logo.png" alt="ST PAULS COLLEGE Logo" class="college-logo-img">
```
*(Make sure to put your `college-logo.png` file in the same folder as `index.html`)*.

---

### 2. Adding Your Real Payment QR Code
In `index.html`, locate the comment:
`<!-- PAYMENT QR CODE PLACEHOLDER -->` (around lines 230–260)

Replace:
```html
<div class="qr-placeholder-inner">
  ...
</div>
```

With your actual QR image:
```html
<img src="payment-qr.png" alt="Payment QR Code for ₹500" class="qr-code-img">
```
*(Make sure to put your `payment-qr.png` file in the same folder as `index.html`)*.

The CSS is already programmed so that your image will automatically remain a crisp, responsive square with high contrast.

---

## 📋 Information Included on the Website

- **College Name:** ST PAULS COLLEGE
- **College Credentials:** Affiliated to Bangalore University &bull; NAAC Accredited
- **Organizer:** Sports Club of ST PAULS COLLEGE
- **Tournament Name:** Under 19 ST PAULS CUP
- **Competition Type:** A PU Cricket Competition (Knockout)
- **Tournament Dates:** November 11, 12 & 13
- **Venue:** ST PAULS COLLEGE CRICKET GROUND
- **Registration Fee:** ₹500 per team
- **Registration Deadline:** November 10th
- **Complete Rules & Regulations:**
  1. Team Composition (8 players)
  2. Match Format (5 overs per team, knockout)
  3. Batting Powerplay (1 over per innings, double runs)
  4. Standing Throw Rule
  5. Umpire's Decision (Final & binding)
  6. Registration (Deadline Nov 10th, no on-the-spot)
  7. General Rules & Sportsmanship
- **Coordinator Contacts (with clickable `tel:` links):**
  - **Physical Education Director:** Lt. Manjunath sir — `9036506059`
  - **Faculty Coordinator:** Yashas Girish Sir — `8971001861`
