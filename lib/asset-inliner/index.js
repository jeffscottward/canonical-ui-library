"use strict";

// Backgrounds
var bgpattern = require("./inlined/backgrounds/bg-pattern.svg.js");
var bgwaves = require("./inlined/backgrounds/bg-waves.svg.js");

// Glyphs
var glypharrow = require("./inlined/glyphs/glyph-arrow.svg.js");
var glypharrows = require("./inlined/glyphs/glyph-arrows.svg.js");
var glyphbars = require("./inlined/glyphs/glyph-bars.svg.js");
var glyphcalendar = require("./inlined/glyphs/glyph-calendar.svg.js");
var glyphcarouselarrow = require("./inlined/glyphs/glyph-carousel-arrow.svg.js");
var glyphcheckcircle = require("./inlined/glyphs/glyph-check-circle.svg.js");
var glyphcheck = require("./inlined/glyphs/glyph-check.svg.js");
var glyphclosex = require("./inlined/glyphs/glyph-close-x.svg.js");
var glyphclose = require("./inlined/glyphs/glyph-close.svg.js");
var glyphdoublearrowcolormalibu = require("./inlined/glyphs/glyph-double-arrow-color-malibu.svg.js");
var glyphdoublearrow = require("./inlined/glyphs/glyph-double-arrow.svg.js");
var glyphdownload = require("./inlined/glyphs/glyph-download.svg.js");
var glyphfacebook = require("./inlined/glyphs/glyph-facebook.svg.js");
var glyphgithub = require("./inlined/glyphs/glyph-github.svg.js");
var glyphgraph = require("./inlined/glyphs/glyph-graph.svg.js");
var glyphhere = require("./inlined/glyphs/glyph-here.svg.js");
var glyphleft = require("./inlined/glyphs/glyph-left.svg.js");
var glyphlinkedin = require("./inlined/glyphs/glyph-linkedin.svg.js");
var glyphmedium = require("./inlined/glyphs/glyph-medium.svg.js");
var glyphmyreports = require("./inlined/glyphs/glyph-myreports.svg.js");
var glyphquantstamp = require("./inlined/glyphs/glyph-quantstamp.svg.js");
var glyphquestions = require("./inlined/glyphs/glyph-questions.svg.js");
var glyphreport = require("./inlined/glyphs/glyph-report.svg.js");
var glyphsearch = require("./inlined/glyphs/glyph-search.svg.js");
var glyphsmartcontract = require("./inlined/glyphs/glyph-smart-contract.svg.js");
var glyphstack = require("./inlined/glyphs/glyph-stack.svg.js");
var glyphteam = require("./inlined/glyphs/glyph-team.svg.js");
var glyphtelegram = require("./inlined/glyphs/glyph-telegram.svg.js");
var glyphtwitter = require("./inlined/glyphs/glyph-twitter.svg.js");
var glyphuser = require("./inlined/glyphs/glyph-user.svg.js");
var glyphyoutube = require("./inlined/glyphs/glyph-youtube.svg.js");
var glyphsleft = require("./inlined/glyphs/glyphs-left.svg.js");

// Icons
var iconalert = require("./inlined/icons/icon-alert.svg.js");
var iconblockchain = require("./inlined/icons/icon-blockchain.svg.js");
var iconcontract = require("./inlined/icons/icon-contract.svg.js");
var iconerror = require("./inlined/icons/icon-error.svg.js");
var icongenericcoin = require("./inlined/icons/icon-generic-coin.svg.js");
var icongenericsmartcontract = require("./inlined/icons/icon-generic-smartcontract.svg.js");
var iconinvestors = require("./inlined/icons/icon-investors.svg.js");
var iconleadership = require("./inlined/icons/icon-leadership.svg.js");
var iconmedia = require("./inlined/icons/icon-media.svg.js");
var iconpassstamp = require("./inlined/icons/icon-pass-stamp.svg.js");
var iconpastaudits = require("./inlined/icons/icon-past-audits.svg.js");
var iconreportwait = require("./inlined/icons/icon-report-wait.svg.js");
var iconreportscomplete = require("./inlined/icons/icon-reports-complete.svg.js");
var iconreseaerch = require("./inlined/icons/icon-reseaerch.svg.js");
var iconsales = require("./inlined/icons/icon-sales.svg.js");
var iconsmartcontractaudit = require("./inlined/icons/icon-smart-contract-audit.svg.js");
var iconstory = require("./inlined/icons/icon-story.svg.js");
var iconsuccess = require("./inlined/icons/icon-success.svg.js");
var iconsupport = require("./inlined/icons/icon-support.svg.js");
var icontarget = require("./inlined/icons/icon-target.svg.js");
var iconverify = require("./inlined/icons/icon-verify.svg.js");
var iconwait = require("./inlined/icons/icon-wait.svg.js");
var iconwarningstamp = require("./inlined/icons/icon-warning-stamp.svg.js");
var iconwarning = require("./inlined/icons/icon-warning.svg.js");
var iconwebteam = require("./inlined/icons/icon-web-team.svg.js");

// Logos
var quantstamplogo = require("./inlined/logos/quantstamp-logo.svg.js");
var quantstamplogodark = require("./inlined/logos/quantstamp-logo-dark.svg.js");
var quantstamplogovertical = require("./inlined/logos/quantstamp-logo-vertical.svg.js");
var quantstamplogoverticaldark = require("./inlined/logos/quantstamp-logo-vertical-dark.svg.js");
var quantstamplogoproduct = require("./inlined/logos/quantstamp-logo-product.svg.js");
var quantstamplogoproductdark = require("./inlined/logos/quantstamp-logo-product-dark.svg.js");

// Seals
var sealblueinverted = require("./inlined/seals/seal-blue-inverted.svg.js");
var sealblue = require("./inlined/seals/seal-blue.svg.js");
var sealgrey = require("./inlined/seals/seal-grey.svg.js");
var sealwhite = require("./inlined/seals/seal-white.svg.js");

module.exports = {
  bgpattern: bgpattern,
  bgwaves: bgwaves,
  glypharrow: glypharrow,
  glypharrows: glypharrows,
  glyphbars: glyphbars,
  glyphcalendar: glyphcalendar,
  glyphcarouselarrow: glyphcarouselarrow,
  glyphcheckcircle: glyphcheckcircle,
  glyphcheck: glyphcheck,
  glyphclosex: glyphclosex,
  glyphclose: glyphclose,
  glyphdoublearrowcolormalibu: glyphdoublearrowcolormalibu,
  glyphdoublearrow: glyphdoublearrow,
  glyphdownload: glyphdownload,
  glyphfacebook: glyphfacebook,
  glyphgithub: glyphgithub,
  glyphgraph: glyphgraph,
  glyphhere: glyphhere,
  glyphleft: glyphleft,
  glyphlinkedin: glyphlinkedin,
  glyphmedium: glyphmedium,
  glyphmyreports: glyphmyreports,
  glyphquantstamp: glyphquantstamp,
  glyphquestions: glyphquestions,
  glyphreport: glyphreport,
  glyphsearch: glyphsearch,
  glyphsmartcontract: glyphsmartcontract,
  glyphstack: glyphstack,
  glyphteam: glyphteam,
  glyphtelegram: glyphtelegram,
  glyphtwitter: glyphtwitter,
  glyphuser: glyphuser,
  glyphyoutube: glyphyoutube,
  glyphsleft: glyphsleft,
  iconalert: iconalert,
  iconblockchain: iconblockchain,
  iconcontract: iconcontract,
  iconerror: iconerror,
  icongenericcoin: icongenericcoin,
  icongenericsmartcontract: icongenericsmartcontract,
  iconinvestors: iconinvestors,
  iconleadership: iconleadership,
  iconmedia: iconmedia,
  iconpassstamp: iconpassstamp,
  iconpastaudits: iconpastaudits,
  iconreportwait: iconreportwait,
  iconreportscomplete: iconreportscomplete,
  iconreseaerch: iconreseaerch,
  iconsales: iconsales,
  iconsmartcontractaudit: iconsmartcontractaudit,
  iconstory: iconstory,
  iconsuccess: iconsuccess,
  iconsupport: iconsupport,
  icontarget: icontarget,
  iconverify: iconverify,
  iconwait: iconwait,
  iconwarningstamp: iconwarningstamp,
  iconwarning: iconwarning,
  iconwebteam: iconwebteam,
  quantstamplogo: quantstamplogo,
  quantstamplogodark: quantstamplogodark,
  quantstamplogoproduct: quantstamplogoproduct,
  quantstamplogoproductdark: quantstamplogoproductdark,
  quantstamplogovertical: quantstamplogovertical,
  quantstamplogoverticaldark: quantstamplogoverticaldark,
  sealblueinverted: sealblueinverted,
  sealblue: sealblue,
  sealgrey: sealgrey,
  sealwhite: sealwhite
};