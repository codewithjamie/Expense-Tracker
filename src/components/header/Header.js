const Header = (props) => {
  return (
    <header>
      <h2> {props.title}</h2>
    </header>
  )
}

Header.defaultProps = {
    title: 'Expense Tracker',
}

export default Header
