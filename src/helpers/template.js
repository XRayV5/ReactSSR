import serialize from 'serialize-javascript'

export const wrapWithHtmlTemplate = (content, store) =>
  `<html>
	<head>
		<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.100.2/css/materialize.min.css">
	</head>
	<body>
		<div id="root">${content}</div>
		<script>
			window.INITIAL_STATE = ${serialize(store.getState())}
		</script>
		<script src="bundle.js"></script>
	</body>
</html>`
