import {React, Component} from 'react'
import md5 from 'js-md5'

const PUBLIC_KEY = '98faf60df577270c811b551415000df1'
const PRIVATE_KEY = '9ac3f68d0c69e93e28285bbb4fc1d7a7e125d110'

export default class HomeQuiz extends Component {
    static navigationOptions = {
        title: 'Heroes'
    }
    
    state = {
        data: []
    }
    
    async componentDidMount() {
        const timestamp = Number(new Date())
        const hash = md5.create()
        hash.update(timestamp + PRIVATE_KEY + PUBLIC_KEY)

        const response = await fetch(`https://gateway.marvel.com/v1/public/characters?ts=${timestamp}&orderBy=name&limit=10&apikey=${PUBLIC_KEY}&hash=${hash.hex()}`)
        const responseJson = await response.json()
        this.setState({data: responseJson.data.results});
        console.log(responseJson.data.results);
    }

    _renderItem = ({item}) => {
        return  (
            <div style={{flexDirection:'row', padding: 10, alignItems:'center'}}>
                <img style={{height: 50, width: 50, borderRadius: 25}} src={`${item.thumbnail.path}.${item.thumbnail.extension}`} />
                <p style={{marginLeft: 10}}>{item.name}</p>
            </div>
        )
    }

    render() {
        return (
            null
        )
    }
}