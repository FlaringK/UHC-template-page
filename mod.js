const toPageString = pageNumber => pageNumber < 10000 ? `00${pageNumber}` : `0${pageNumber}`

const hsPage = pageText => `
<div class="epilogues"> <div class="pageBody customStyles theme-Denizenthemes-0"> <nav class="navBanner customNavBanner pixelated"> <div class="navList"> <a href="/">HOMESTUCK COLLECTION</a> <div class="candyCorn"></div><a href="/help">HELP</a> <div class="candyCorn"></div><a href="/map">MAP</a> <div class="sep">|</div><a href="/log">LOG</a> <div class="sep">|</div><a href="/search">SEARCH</a> <div class="candyCorn"></div><a href="/news">NEWS</a> <div class="sep">|</div><a href="/music">MUSIC</a> <div class="candyCorn"></div><a href="/evenmore">MORE</a> <div class="sep">|</div><a href="/settings">SETTINGS</a> <div class="sep">|</div><a href="/credits">CREDITS</a> </div></nav> <div class="pageFrame"> <div class="pageContent"> <div class="story-text"> ${pageText}</div> </div></div><div class="footer " style="width: 950px;"><img src="assets://images/mspalogo_mspa.png" alt="" draggable="false" class="bannerImage left"><img src="assets://images/mspalogo_mspa.png" alt="" draggable="false" class="bannerImage right"></div></div></div>
`
const arrow = link => `<div class="arrow"> <div> <span>&gt;</span> <a href="${link}">==&gt; </a><br></div></div>`
const bottomLinks = link => `<div class="bottomLinks"> <a href="/EPILOGUES">Start Over</a> | <a href="${link}">Go Back</a> </div>`

let api
let customPages = []

module.exports = {
  title: "New page template",
  summary: "A template for adding pages to the UHC",
  author: "FlaringK (<a href='https://flaringk.github.io/'>Here's my uber cool site</a>)",
  version: 0.1,

  styles: [ { source: "./customPage.css" } ],

  computed(api_) {
    api = api_

    // Add new browser page
    customPages[`TEMPLATE-PAGE`] = {
      component: {
        title: () => "Template Page", // Title on tab
        next: () => `/TEMPLATE-PAGE`, // URL (Doesn't really matter)
        template: hsPage(`<h1>This is a template page</h1>`) // 
      },
      scss: ""
    }

    return {

      // Add new page to Home Menu
      edit(archive) {
        archive.tweaks.modHomeRowItems.push({
          href: "/template-page",
          thumbsrc: "assets://images/newreaders_sig.gif",
          title: "Template page",
          date: "Apr 2023",
          description: "This is a page from New page template, a template mode for adding pages to the UHC"
        });
      },

      browserPages: customPages,

    }
  },

}