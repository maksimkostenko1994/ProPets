export default function Button({ height, width, text, color, borderColor, hoverColor }) {
	function colorSelection(color) {
		switch (color) {
			case 'white': return '#FFFFFF'
			case 'green': return '#06B2BB'
			case 'black': return '#393939'
		}
	}
	function hoverSelection(type) {
		switch (type) {
			case 'yellow': return 'button-yellow-hover'
		}
	}
	function autoBgSelection(color) {
		switch (color) {
			case 'white': return '#06B2BB'
			case 'green': return '#FFFFFF'
			case 'black': return '#FA5456'
		}
	}
	function autoBorderSelection(color, borderColor) {
		if (borderColor == 'none') {
			return 'none'
		} else if (borderColor == 'white'){
			return '1px solid #FFFFFF'
		} else {
			switch (color) {
				case 'green': return '1px solid #1CB1BA'
				case 'white': return '1px solid #13B1BA'
				case 'black': return '1px solid #FF2C2F'
			}
		}
	}
	return (
		<>
			<button className={hoverSelection(hoverColor)}
				style={{
					height: `${height}px`,
					width: `${width}px`,
					borderRadius: `${height / 2}px`,
					color: colorSelection(color),
					backgroundColor: autoBgSelection(color),
					border: autoBorderSelection(color, borderColor)
				}}>{text}
			</button>
		</>
	)
}