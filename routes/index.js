var  JSX = require('node-jsx').install();
var express = require('express');
var router = express.Router();
var React = require('react');
var ReactDom = require('react-dom/server');
var Hello = React.createFactory(require("../components/Hello.jsx"));

/* GET home page. */
router.get('/', function(req, res, next) {
	var reactHtml = ReactDom.renderToString(Hello());
	res.render('index', { html:reactHtml });
});

module.exports = router;