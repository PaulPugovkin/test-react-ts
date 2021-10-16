import { useHistory } from 'react-router-dom'

const AboutPage: React.FC = () => {
    const history = useHistory()

    const handleClick = () => {
        history.push('/')
    }

    return (
        <div>
            <h1>Страница информации</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. A aut minima, eligendi nemo consequatur laboriosam tempore officia dolorem sit commodi!</p>
            <button className="btn" onClick={handleClick}>Обратно к списку дел</button>
        </div>
    )
}

export default AboutPage
