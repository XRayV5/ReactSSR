import serialize from 'serialize-javascript'
import { Helmet } from 'react-helmet'

const helmet = Helmet.renderStatic()

export const wrapWithHtmlTemplate = (content, store) =>
  `<html>
	<head>
    ${helmet.title.toString()}
    ${helmet.meta.toString()}
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
