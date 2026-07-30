# How to use template.html

## Quick Start: Writing a new blog/article

1. **Copy `template.html` to a new file**, e.g. `my-article.html`
2. **Set the layout class** on the `<div>` at line 15:
   ```
   class="main-talk"     ← Use this for articles (auto rows, safest)
   ```
3. **Replace `[PLACEHOLDER]` values** with your content:
   - `[PAGE_TITLE]` — browser tab title
   - `[ARTICLE_TITLE]` — big centered heading at top
   - `[IMAGE_PATH]` — path to header image (e.g. `static/images/foo.png`)
   - `[INTRO_TEXT]` — opening paragraph
   - `[SECTION_HEADING]`, `[SECTION_PARAGRAPH]` — your sections
4. **Delete sections you don't need** (quick links, code block, bullet list, etc.)
5. **Link it** from `index.html` (under the relevant skill's tree)

> The template already includes the viewport meta tag and links to `style.css` — mobile responsiveness works out of the box.

---

## Layout Classes — which one to pick

| Class | Used by | When to use |
|---|---|---|
| `.main` | `index.html` | Homepage / resume page with profile image + skills tree |
| `.main-talk` | `meet_docker.html`, `migration_app_engine_cloud_run.html` | **Articles and blog posts** — rows auto-size to fit content |
| `.main-talk2` | `bts-docker.html` | Dense articles where you want a fixed header-to-content ratio (1:7) |

**For any new blog/article, always pick `.main-talk`.**

To change it, edit line 15 of template.html:
```html
<div class="main-talk">   <!-- change this -->
```

---

## Common Building Blocks

### Headings
```html
<!-- Large heading (index page intro style) -->
<div class="content-head-meet-sinjini">[TEXT]</div>

<!-- Standard section heading -->
<div class="content-head">[TEXT]</div>

<!-- Centered heading for article title -->
<p class="content-head-docker">[TEXT]</p>
```

### Body text
```html
<div class="content-sub">[PARAGRAPH]</div>
```

### Highlighting
```html
<!-- Blue bold text -->
<span class="highlight-purple">[TEXT]</span>

<!-- Bold with blue bottom border -->
<span class="highlight">[TEXT]</span>

<!-- Section with blue bottom border (full width) -->
<div class="content-sub highlight">[TEXT]</div>

<!-- Full-width blue bold heading with border -->
<div class="content-sub highlight-purple highlight"><b>[TEXT]</b></div>
```

### Lists
```html
<!-- Bullet list -->
<ul>
  <li><b><span class="highlight-purple">[TITLE]:</span></b> [DESCRIPTION]</li>
</ul>

<!-- Tree list (for skills with nested details) -->
<ul class="tree">
  <li>
    <details>
      <summary>[SKILL_NAME]</summary>
      <ul>
        <li><a href="[PAGE_URL]">[LINK_TEXT]</a></li>
      </ul>
    </details>
  </li>
</ul>
```

### Code blocks
```html
<pre class="highlight-purple content-sub code">
docker build -t my-image .
</pre>
```

### Links
```html
<!-- Normal link -->
<a href="[URL]">[TEXT]</a>

<!-- Quick links (table of contents) -->
<div class="content-head">
  <span class="highlight-purple">Quick links</span>
  <ul class="content-sub">
    <li><a href="#section-1">Section 1</a></li>
  </ul>
</div>
```

### Author section (put at the bottom of articles)
```html
<div class="author-section author-section-border">
  <div class="footer-img-section">
    <img class="footer-img" src="static/images/profile2.png" alt="Author">
  </div>
  <div class="author-intro">
    <b>About Author:</b><br><b>[NAME]</b><br><b>[TITLE]</b>
  </div>
  <div class="next prev">
    <br>
    <a href="[PREV_OR_NEXT_PAGE]"><b>prev: [TITLE]</b></a>
  </div>
</div>
```

### Click-to-zoom (full-screen overlay)
Wrap an image with a checkbox + labels to let readers tap/click for a full-screen view:

```html
<input type="checkbox" class="zoom-checkbox" id="zoom-solution">
<label class="zoom-thumb" for="zoom-solution">
  <img class="img-solution" src="static/images/your-image.png" alt="...">
</label>
<label class="zoom-overlay" for="zoom-solution">
  <img src="static/images/your-image.png" alt="...">
</label>
```

- Give each zoom group a **unique** `id` (replace `zoom-solution`).
- The `for` attribute on both labels must match the checkbox `id`.
- The overlay image is the same `src` — it appears full-screen when toggled.
- Click anywhere on the overlay to close.

### Image sizes
| Class | Size | Use for |
|---|---|---|
| `.img-profile` | 150x150, rounded with border | Profile picture |
| `.img-docker` | 150x350 | Article header (landscape) |
| `.img-docker-2` | 264x430 | Article header (tall) |
| `.img-migration` | 300x300, padded left | Centered square graphic |
| `.webhook` | 300x300, responsive | Square graphic (scales down on mobile) |
| `.img-solution` | 500px, responsive | Larger graphic inside article content |

**Need a custom image size?** Add a new class in `style.css`, e.g.:
```css
.my-image {
  max-width: 100%;
  height: auto;
  width: 300px;
  display: block;
  margin: 0 auto;
}
```
- Images in `.section1` are auto-centered on all screen sizes.
- Images inside `.content-sub` get `max-width: 100%` and centering on mobile automatically.

---

## Creating an index / Homepage

Copy `index.html` directly and modify:

- Profile image: `<img class="img-profile" src="...">`
- Intro: `<div class="content-head-meet-sinjini">` + `<div class="content-sub">`
- Skills: use `<ul class="tree">` with nested `<details>` elements
- Each skill entry links to its articles via `<a href="[page].html">`

---

## Responsive behavior

- **Grid collapses** to single column on screens narrower than 1200px.
- **Images** scale fluidly with `max-width: 100%; height: auto;` and are auto-centered.
- **Code blocks** wrap or get a horizontal scrollbar on narrow screens.
- **Font sizes** scale with `clamp()` — no extra work needed.
