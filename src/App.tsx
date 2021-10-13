import Card, { CardVariant } from "./components/Card"

const App = () => {
  return (
    <div>
      <h1>СТАРТ</h1>
      <Card width={'150px'} height={'150px'} variant={CardVariant.primary}>
        <button>ЖМИ</button>
      </Card>
    </div>
  )
}

export default App
