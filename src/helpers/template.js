export const wrapWithHtmlTemplate = (content) => 
`<html>
	<head></head>
	<body>
		<div id="root">${ content }</div>
		<script src="bundle.js"></script>
	</body>
</html>`