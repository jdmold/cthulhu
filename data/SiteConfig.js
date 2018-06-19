module.exports = {
  // blogPostDir: "", // The name of directory that contains your posts.
  siteTitle: "Cthulhu House Rules", // Site title.
  siteTitleAlt: "Cthulhu House Rules", // Alternative site title for SEO.
  siteLogo: "/logos/logo-1024.png", // Logo used for SEO and manifest.
  siteUrl: "https://jdmold.github.io", // Domain of your website without pathPrefix.
  pathPrefix: "/cthulhu", // Prefixes all links. For cases when deployed to example.github.io/gatsby-material-starter/.
  fixedFooter: false, // Whether the footer component is fixed, i.e. always visible
  siteDescription: "House rules for our gaming.", // Website description used for RSS feeds/meta description tag.
  siteRss: "/rss.xml", // Path to the RSS file.
  // siteFBAppID: "", // FB Application ID for using app insights
  // siteGATrackingID: "", // Tracking code ID for google analytics.
  // disqusShortname: "", // Disqus shortname.
  postDefaultCategoryID: "RPG", // Default category for posts.
  userName: "Joshua Moldenhauer", // Username to display in the author segment.
  // userTwitter: "", // Optionally renders "Follow Me" in the UserInfo segment.
  userLocation: "Minnesota", // User location to display in the author segment.
  userAvatar: "/images/the-sir-1024.png", // User avatar to display in the author segment.
  userDescription:
    "Usually referred to as 'that guy.'", // User description to display in the author segment.
  // Links to social profiles/projects you want to display in the author segment/navigation bar.
  userLinks: [
    {
      label: "GitHub",
      url: "https://github.com/jdmold/cthulhu",
      iconClassName: "fa fa-github"
    },
    // {
    //   label: "Twitter",
    //   url: "",
    //   iconClassName: "fa fa-twitter"
    // },
    {
      label: "Email",
      url: "mailto:jdmold@gmail.com",
      iconClassName: "fa fa-envelope"
    }
  ],
  copyright: "Copyright © 2018. Joshua Moldenhauer." // Copyright string for the footer of the website and RSS feed.
};
