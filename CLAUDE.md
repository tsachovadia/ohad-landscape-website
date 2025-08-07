# אוהד חיים - מוביל פרויקטים של נוף | Landscape Architecture

## 🔥 QUICK START FOR NEW AGENTS

**Current Status:** Homepage v1.0 complete and ready for production  
**Live Site:** https://ohadhaim.co.il (after user pushes)  
**Reference Design:** https://robertmyers-associates.co.uk/  

### What You Need to Know RIGHT NOW:
1. **Check STATUS.md first** - see exactly where project stands
2. **User sees live site, you don't** - always ask for visual feedback
3. **Goal: Copy reference design exactly** - no creativity, precise matching
4. **Mobile-first approach** - start 320px, scale up
5. **Always ask user to push changes** - you can't deploy directly

### Critical Workflow:
1. Read STATUS.md → see current task
2. Make changes based on user feedback
3. Commit with clear message
4. **Ask user to push: `git push origin master`**
5. Ask user to check live site and give feedback

---

## 🎯 הנחיות עבודה לסוכנים

### תמיד קרא זה קודם!
1. **Git:** כל commit צריך push מהמשתמש לפרודקשן (Vercel CI/CD)
2. **Mobile-First:** תמיד להתחיל מ-320px ולהוסיף breakpoints
3. **No Dependencies:** אסור jQuery/Bootstrap/frameworks - רק vanilla
4. **Hebrew RTL:** dir="rtl" תמיד, תמיכה מלאה בעברית
5. **Design Copy:** העתק את הרפרנס במדויק - אל תהיה יצירתי!

## 🏗️ Tech Stack
- **Frontend:** HTML5 + CSS Grid/Flexbox + Vanilla JavaScript
- **Responsive:** Mobile-first (320px → 768px → 1024px → 1440px+)
- **Language:** Hebrew RTL support
- **Deployment:** Vercel auto-deploy from master branch
- **Domain:** ohadhaim.co.il

## 📁 מבנה קבצים
```
/
├── index.html          # דף בית
├── about.html          # אודות
├── contact.html        # צור קשר  
├── projects/           # עמודי פרויקטים
│   ├── index.html      # רשימת פרויקטים
│   ├── givatayim.html
│   ├── karl-netter.html
│   ├── raanana-balcony.html
│   ├── ramat-hasharon.html
│   ├── weizmann-telaviv.html
│   └── bitzaron.html
├── css/
│   ├── main.css        # CSS ראשי mobile-first
│   └── components.css  # רכיבים נפרדים
├── js/
│   └── main.js         # Vanilla JS בלבד
├── images/            # תמונות אופטימיזציה WebP
├── videos/            # סרטונים
├── CLAUDE.md          # המדריך הזה
└── STATUS.md          # מעקב התקדמות
```

## 📋 רשימת פרויקטים
1. **גינה בגבעתיים** (givatayim.html)
2. **קרל נטר, תל אביב** (karl-netter.html)
3. **מרפסת יוקרתית ברעננה** (raanana-balcony.html)
4. **גינה פרטית ברמת השרון** (ramat-hasharon.html)
5. **עיצוב גינה בוייצמן, תל אביב** (weizmann-telaviv.html)
6. **מרפסת בביצרון** (bitzaron.html)

## 🎨 עיצוב Reference
**URL:** https://robertmyers-associates.co.uk/
**סגנון:** מינימליסטי, נקי, אלגנטי
**צבעים:** גווני אפור, לבן, אקסנט כהה
**טיפוגרפיה:** Sans-serif נקי, היררכיה ברורה
**Layout:** Grid אסימטרי, הרבה white space

## 🔧 כללי פיתוח

### CSS Guidelines
- **Variables:** השתמש ב-CSS custom properties
- **Naming:** BEM methodology (block__element--modifier)
- **Responsive:** Mobile-first breakpoints
- **Performance:** Critical CSS inline, lazy loading

### JavaScript Guidelines  
- **ES6+:** Modern syntax בלבד
- **Vanilla:** אין external libraries
- **Progressive Enhancement:** האתר עובד בלי JS
- **Event Delegation:** efficient event handling

### HTML Guidelines
- **Semantic:** HTML5 semantic elements
- **RTL:** dir="rtl" ו-lang="he"
- **Accessibility:** ARIA labels, focus management
- **SEO:** Meta tags, structured data

## 📱 Breakpoints
```css
/* Mobile First */
.component { /* 320px+ */ }

@media (min-width: 768px) { /* Tablet */ }
@media (min-width: 1024px) { /* Desktop */ }
@media (min-width: 1440px) { /* Large Desktop */ }
```

## 🚀 Workflow

### התחלת משימה
1. קרא STATUS.md - מה המצב הנוכחי
2. צור branch חדש (אופציונלי לפיתוח מקומי)
3. בדוק mobile-first תמיד
4. commit עם הודעה ברורה
5. **בקש מהמשתמש לעשות push לפרודקשן!**

### 🔥 DEPLOYMENT PROCESS (חובה!)
1. Test locally first
2. Commit all changes with clear message
3. **CRITICAL: Ask user to push to production:**
   ```bash
   git push origin master
   ```
4. Ask user to verify live site at https://ohadhaim.co.il
5. Request visual feedback on live site
6. **Never assume deployment happened - always confirm with user!**

### לפני Commit
1. בדוק responsive בכל breakpoints
2. בדוק RTL ועברית
3. בדוק accessibility basics
4. בדוק שאין JavaScript errors
5. **זכור: המשתמש רואה את האתר החי, אתה לא!**

### ⚠️ DESIGN PHILOSOPHY
- **DO NOT be creative** - copy reference designs exactly
- User sees the live site, you don't - always ask for feedback
- Focus on precise visual matching to reference
- Ask for screenshots/specific feedback frequently
- Goal is pixel-perfect copying, not interpretation

### Commit Messages
```
feat: add mobile navigation
fix: gallery responsive issue  
style: improve button hover state
docs: update project status
```

## ⚠️ אזהרות חשובות

### 🚫 אסור לעשות
- להשתמש ב-jQuery, Bootstrap, או frameworks
- לשבור mobile-first approach
- להוסיף dependencies ללא אישור
- לעבוד ישירות על master בלי בדיקות

### ✅ חובה לעשות  
- לבדוק mobile תמיד קודם
- לשמור על performance
- לכתוב קוד נקי וקריא
- לעדכן STATUS.md אחרי שינויים

## 🎯 דפים בסיסיים

### index.html - דף בית
- Hero section עם תמונה מרכזית
- Gallery פרויקטים (6 פרויקטים)
- Video section אוטומטי
- Contact form אלגנטי
- קישורי אינסטגרם/social

### about.html - אודות
- סיפור אוהד
- תמונת פרופיל  
- הגישה המקצועית
- הישגים בולטים

### contact.html - צור קשר
- טופס יצירת קשר
- פרטי התקשרות
- מפה (אופציונלי)
- קישורי רשתות חברתיות

## 🔄 מה לעשות כשנתקע
1. קרא הנחיות טכניות למעלה
2. בדוק reference: robertmyers-associates.co.uk
3. התמקד ב-mobile-first
4. שמור על פשטות ואלגנטיות
5. אל תהסס לשאול שאלות ספציפיות

---

**📝 עודכן לאחרונה:** [אוטומטי]  
**🎯 Status:** ראה STATUS.md  
**🚀 Production:** כל push ל-master = live site