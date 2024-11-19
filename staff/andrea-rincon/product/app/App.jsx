const Component = React.Component

class App extends Component {
    constructor(props) {
        console.log('App -> constructor')

        super(props)

        this.state = { view: 'landing' }
    }

    render() {
        console.log('App -> render')
    }
}