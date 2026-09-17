# Jagdamba Optical — Frontend (PRD MVP)

Premium optical-store frontend per `prd.md` (see `/sdcard/jagdambaopticals/prd.md`).

## Pages / sections in `index.html`
- Header: Logo, Home, Eyeglasses, Sunglasses, Lenses, About Us, Contact, Search, Wishlist, Cart
- Hero: “See Better. Look Better. Premium Eyewear for Every Style.” + Shop Eyeglasses / Explore Sunglasses
- Categories: Eyeglasses, Sunglasses, Lenses, Kids Eyewear
- Featured Products: image, brand, price, ⭐ rating, View Details, WhatsApp
- Shop: filters (Gender, Shape, Price, Material, Brand, Color) + sort (Low→High, High→Low, New, Popular)
- Product modal: large image + thumbs, colors, frame specs, Wishlist / Cart / WhatsApp
- Lens Solutions: Single Vision, Blue Cut, Anti-Glare, Photochromic, Progressive, Computer + Enquire
- Store: address, phone, WhatsApp, hours, maps embed, email, Get Directions
- About, Contact enquiry form, mobile bottom nav (Home/Shop/Wishlist/Cart/Menu)

## Config (top of `script.js`)
```js
API_BASE: 'http://localhost:10000/api' // set to Render URL in prod
WHATSAPP_NUMBER: '919999999999' // TODO: store number
STORE_ADDRESS, STORE_PHONE
```

WhatsApp format:
`Hello Jagdamba Optical,\nI am interested in <name>.\nPrice: ₹<price>\nProduct ID: <code>`

## Run
Open `index.html` directly, or:
`python3 -m http.server 8000` → http://localhost:8000/

Backend integration is optional — falls back to 12 demo products covering all filter dimensions. Cart/wishlist persist in `localStorage` (`jo_cart`, `jo_wishlist`).
